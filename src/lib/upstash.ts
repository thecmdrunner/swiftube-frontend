import { Redis } from "@upstash/redis";
import { env } from "~/env.mjs";

export const redis = new Redis({
  url: env.UPSTASH_REDIS_REST_URL,
  token: env.UPSTASH_REDIS_REST_TOKEN,
});

const generalMetadataKey = "generalMetadata";

export const getGeneralMetadata = async (): Promise<GeneralMetadata> => {
  try {
    const generalMetadata = await redis.hgetall<{
      creditsForNewUsers: string;
      totalCreditsAllotted: string;
    }>(generalMetadataKey);

    if (!!generalMetadata?.creditsForNewUsers)
      return {
        creditsForNewUsers: Number(generalMetadata.creditsForNewUsers),
        totalCreditsAllotted: Number(generalMetadata.totalCreditsAllotted),
      };
    else throw "Unable to get General Metadata...";
  } catch (error) {
    console.error(error);
    throw `Upstash ERRRRR: ${error as string}`;
  }
};

export const reduceNewTotalCreditsAllottedBy = async (
  value: number
): Promise<GeneralMetadata> => {
  try {
    const generalMetadata = await getGeneralMetadata();

    await redis.hset(generalMetadataKey, {
      ...generalMetadata,
      // Redis values are not type aware, so keep everything string, just for safety.
      totalCreditsAllotted: `${generalMetadata.totalCreditsAllotted - value}`,
    });

    if (!!generalMetadata?.creditsForNewUsers)
      return {
        creditsForNewUsers: Number(generalMetadata.creditsForNewUsers),
        totalCreditsAllotted: Number(generalMetadata.totalCreditsAllotted),
      };
    else throw "Unable to get General Metadata...";
  } catch (error) {
    console.error(error);
    throw `Upstash Error while setting NewTotalCreditsAllotted: ${
      error as string
    }`;
  }
};

export type GeneralMetadata = {
  creditsForNewUsers: number;
  totalCreditsAllotted: number;
};
