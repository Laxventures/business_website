// lib/getHomeContent.ts
import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "./dynamo";

let cachedHomeContent: any = null;

export async function getHomeContent() {
  if (cachedHomeContent) return cachedHomeContent;

  const command = new GetCommand({
    TableName: "home_page_content",
    Key: { id: "home" },
  });

  const result = await docClient.send(command);
  cachedHomeContent = result.Item;
  return cachedHomeContent;
}
