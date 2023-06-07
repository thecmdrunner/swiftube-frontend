import { Client } from "appwrite";
import { env } from "~/env.mjs";

const client = new Client();

client
  .setEndpoint(env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);
