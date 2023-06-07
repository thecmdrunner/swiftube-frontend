import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(["development", "test", "production"]),
    CLERK_SECRET_KEY: z.string().min(5),
    UPSTASH_REDIS_URL: z.string().startsWith("redis"),
    UPSTASH_REDIS_REST_URL: z.string().startsWith("https://"),
    UPSTASH_REDIS_REST_TOKEN: z.string().min(10),
    FIREBASE_API_KEY: z.string(),
    FIREBASE_AUTH_DOMAIN: z.string(),
    FIREBASE_PROJECT_ID: z.string(),
    FIREBASE_STORAGE_BUCKET: z.string(),
    FIREBASE_MESSAGING_SENDER_ID: z.string(),
    FIREBASE_APP_ID: z.string(),
    PAID_FIREBASE_API_KEY: z.string(),
    PAID_FIREBASE_AUTH_DOMAIN: z.string(),
    PAID_FIREBASE_PROJECT_ID: z.string(),
    PAID_FIREBASE_STORAGE_BUCKET: z.string(),
    PAID_FIREBASE_MESSAGING_SENDER_ID: z.string(),
    PAID_FIREBASE_APP_ID: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_ENCRYPTION_SECRET: z.string().min(5),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(5),
    NEXT_PUBLIC_DEMO_MODE: z.enum(["TEST", "PROD"]),

    NEXT_PUBLIC_SERVER_BACKEND_URL: z.string().url(),
    NEXT_PUBLIC_RENDER_BACKEND_URL: z.string().url(),
    NEXT_PUBLIC_RAILWAY_BACKEND_URL: z.string().url(),
    NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID: z.string(),
    // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),

    NEXT_PUBLIC_APPWRITE_ENDPOINT: z.string(),
    NEXT_PUBLIC_APPWRITE_PROJECT_ID: z.string(),

  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    UPSTASH_REDIS_URL: process.env.UPSTASH_REDIS_URL,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
    NEXT_PUBLIC_DEMO_MODE: process.env.NEXT_PUBLIC_DEMO_MODE,

    NEXT_PUBLIC_ENCRYPTION_SECRET: process.env.NEXT_PUBLIC_ENCRYPTION_SECRET,

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,

    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,

    NEXT_PUBLIC_APPWRITE_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
    NEXT_PUBLIC_APPWRITE_PROJECT_ID: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,

    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    PAID_FIREBASE_API_KEY: process.env.PAID_FIREBASE_API_KEY,
    PAID_FIREBASE_AUTH_DOMAIN: process.env.PAID_FIREBASE_AUTH_DOMAIN,
    PAID_FIREBASE_PROJECT_ID: process.env.PAID_FIREBASE_PROJECT_ID,
    PAID_FIREBASE_STORAGE_BUCKET: process.env.PAID_FIREBASE_STORAGE_BUCKET,
    PAID_FIREBASE_MESSAGING_SENDER_ID:
      process.env.PAID_FIREBASE_MESSAGING_SENDER_ID,
    PAID_FIREBASE_APP_ID: process.env.PAID_FIREBASE_APP_ID,

    NEXT_PUBLIC_RAILWAY_BACKEND_URL:
      process.env.NEXT_PUBLIC_RAILWAY_BACKEND_URL,
    NEXT_PUBLIC_RENDER_BACKEND_URL: process.env.NEXT_PUBLIC_RENDER_BACKEND_URL,
    NEXT_PUBLIC_SERVER_BACKEND_URL: process.env.NEXT_PUBLIC_SERVER_BACKEND_URL,
    NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID: process.env.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
});
