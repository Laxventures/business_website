import { GetCommand, ScanCommand } from "@aws-sdk/lib-dynamodb"
import { docClient } from "./dynamo"

const TABLE_NAME = process.env.NEXT_PUBLIC_DDB_CITY_COORDINATES_TABLE

// ✅ Fetch a single city by its slug (partition key)
export async function getCityCoordinates(city: string) {
  if (!TABLE_NAME) {
    throw new Error("CityCoordinates table name is not defined")
  }
  console.log("Fetching coordinates for city:", city)
  console.log("Fetching coordinates for table name:", TABLE_NAME)
  const command = new GetCommand({
    TableName: TABLE_NAME,
    Key: { city },
  })

  try {
    const response = await docClient.send(command)
    console.log("DynamoDB response:", response)
    return response.Item || null
  } catch (err) {
    console.error("Error fetching city coords:", err)
    return null
  }
}

// ✅ Fetch all cities (useful if you want a list/map)
export async function getAllCityCoordinates() {
  const command = new ScanCommand({
    TableName: TABLE_NAME,
    ProjectionExpression: "city, latitude, longitude",
  })

  const response = await docClient.send(command)
  return response.Items || []
}