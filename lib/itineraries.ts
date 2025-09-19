import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { ddb } from "./dynamo";

export type Activity = { icon: string; title: string; time: string };
export type Day = { title: string; activities: Activity[]; tip: string; image: string };
export type Recommendations = {
  hotel: string; food: string; transport: string; shopping: string; avoid: string;
};

export type CityItinerary = {
  city: string;
  title: string;
  subtitle: string;
  hashtags: string[];
  dates: string;
  heroImage: string;
  days: Day[];
  recommendations: Recommendations;
  packingTips: string[];
  gallery: string[];
};

export async function getItinerary(city: string): Promise<CityItinerary | null> {
  const tableName = process.env.DDB_ITINERARIES_TABLE;
  console.log("ENV DDB_ITINERARIES_TABLE:", tableName);
  console.log("ENV Region:", process.env.NEXT_PUBLIC_REGION);
  if (!tableName) {
    throw new Error("DDB_ITINERARIES_TABLE is not defined in environment variables");
  }
  const { Item } = await ddb.send(
    new GetCommand({
      TableName: tableName,
      Key: { city }
    })
  );
  return (Item as CityItinerary) ?? null;
}
