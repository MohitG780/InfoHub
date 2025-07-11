// app/api/uploadthing/route.ts

import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core"; // adjust path if needed

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  // You can optionally add config like callbackUrl, uploadthingSecret, etc.
});
