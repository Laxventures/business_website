import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb"

const client = new DynamoDBClient({
  region: process.env.NEXT_PUBLIC_REGION || "us-east-1",
  maxAttempts: 3,
  requestHandler: undefined,
})

const docClient = DynamoDBDocumentClient.from(client)

const ddb = DynamoDBDocumentClient.from(client, {
  marshallOptions: { removeUndefinedValues: true }
});

export { docClient, ddb }
