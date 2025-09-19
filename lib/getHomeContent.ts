// lib/getHomeContent.ts
import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "./dynamo";

let cachedHomeContent: any = null;

export async function getHomeContent() {
  if (cachedHomeContent) return cachedHomeContent;

  const tableName = process.env.NEXT_PUBLIC_DDB_HOME_CONTENT_TABLE;
  console.log("ENV NEXT_PUBLIC_DDB_HOME_CONTENT_TABLE:", tableName);
  console.log("ENV Region:", process.env.NEXT_PUBLIC_REGION);
  if (!tableName) {
    throw new Error("NEXT_PUBLIC_DDB_HOME_CONTENT_TABLE is not defined in environment variables");
  }


  const command = new GetCommand({
    TableName: tableName,
    Key: { id: "home" },
  });

  const result = await docClient.send(command);
  cachedHomeContent = result.Item;
  return cachedHomeContent;
}
