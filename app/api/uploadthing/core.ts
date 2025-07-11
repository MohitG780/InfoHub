import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

// Initialize the UploadThing factory
const f = createUploadthing();

// Temporary/fake auth function (replace with real auth later if needed)
const auth = (req: Request) => ({ id: "fakeId" });

// Define your file upload route(s)
export const ourFileRouter = {
  media: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      const user = await auth(req);
      if (!user) throw new UploadThingError("Unauthorized");
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("✅ Upload complete for userId:", metadata.userId);
      console.log("📦 File URL:", file.url); // use file.url instead of file.ufsUrl (latest UploadThing)
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

// Export the type for use in the frontend
export type OurFileRouter = typeof ourFileRouter;
