import { fetchUserPosts } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ThreadCard from "../cards/ThreadCard";

interface Props{
    currentUserId:string;
    accountId:string;
    accountType:string;
}



const ThreadsTab=async ({currentUserId,accountId,accountType}:Props)=>{
  let result=await fetchUserPosts(accountId);

  if (!result) redirect('/');
    return (<section>
       {result.threads.map((thread:any)=>(
        <ThreadCard
         key={thread._id}
          id={thread._id}
          currentUserId={currentUserId||" "}
          parentId={thread.parentId}
          content={thread.text}
          author={thread.author}
          community={thread.community}
          createdAt={thread.createdAt}
          comments={thread.children}/>
       ))}
    </section>
    )
}
export default ThreadsTab;