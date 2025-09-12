// lib/getHomeContent.ts
import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "./dynamo";

export async function getHomeContent() {
  const command = new GetCommand({
    TableName: "home_page_content",
    Key: { id: "home" },
  });

  const result = await docClient.send(command);
  return result.Item;
}