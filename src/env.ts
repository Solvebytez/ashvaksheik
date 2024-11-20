import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
 
export const env = createEnv({
  server: {
   
  },
  client: {
    NEXT_PUBLIC_STRAPI_URL: z.string().url(),
    NEXT_PUBLIC_STRAPI_BASE_URL: z.string().url()
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
 
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {
    NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
    NEXT_PUBLIC_STRAPI_BASE_URL: process.env.NEXT_PUBLIC_STRAPI_BASE_URL
  }
});

export const BASE_URL=env.NEXT_PUBLIC_STRAPI_BASE_URL