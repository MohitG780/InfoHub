"use server";
import { revalidatePath } from "next/cache";
import Thread from "../models/thread.model";
import User from "../models/user.models";
import { connectToDB } from "../mongoose";
interface Params{
    text:string,
    author:string,
    communityId:string|null,
    path:string,
}
    export async function createThread({
    text,author,communityId,path
     }:Params){
     try{
       await  connectToDB();
      const createThread=await Thread.create({
      text,author,community:null,
     });
     await User.findByIdAndUpdate(author,{
       $push:{threads:createThread._id}
     })
     revalidatePath(path);

    }catch(error:any){
     throw new Error(`Error creating thread:${error.message}`)
    }

}

export async function fetchPosts(pageNumber=1,pageSize=20){
  await connectToDB();

  const skipAmount=(pageNumber-1)*pageSize;
  const postsQuery=Thread.find({parentId:{$in:[null,undefined]}})
  .sort({createdAt:'desc'})
  .skip(skipAmount)
.limit(pageSize)
.populate({path:'author',model:User})
.populate({
  path:'children',
  populate:{
   path:'author',
   model:User,
   select:"_id name parentId image"
  }


})

const totalPostsCount=await Thread.countDocuments({parentId:{$in:[null,undefined]}})
const posts=await postsQuery.exec();
const isNext=totalPostsCount>skipAmount+posts.length;
return {posts,isNext}
}

export async function fetchThreadById(id:string){
 await connectToDB();

  //TODO populate community
  try{
  const thread =await Thread.findById(id)
  .populate({
    path:'author',
    model:User,
    select:"_id id name image"
  })
  .populate({
  path:'children',
  populate:[
    {
    path:'author',
    model:User,
     select:"_id id name parentId image"
    },{
     path:'children',
     model:Thread,
     populate:{
      path:'author',
      model:User,
         select:"_id id name parentId image"

     }
    }
  ]  
  }).exec()
  return thread;
  }catch(error:any){
    throw new Error(`Error fetching thread:${error.message}`)

  }
}
export async function addCommentToThread(
  threadId:string,
  commentText:string,
  userId:string,
  path:string
){
  await connectToDB();
   const originalThread=await Thread.findById(threadId);
  try{
      if(!originalThread){
    throw new Error("Thread not found")

  }
  const commentThread=new Thread({
    text:commentText,
    author:userId,
    parentId:threadId
  }) 
  const savedCommentthread=await commentThread.save();
  originalThread.children.push(savedCommentthread._id);
  await originalThread.save();
  revalidatePath(path);
  
}catch(error:any){
    throw new Error(`Error adding comment :${error.message} `)
  }
}