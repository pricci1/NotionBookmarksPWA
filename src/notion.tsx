import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  baseUrl: `${process.env.BASE_URL || ""}https://api.notion.com`,
});
const databaseId = process.env.DATABASE_ID;

export async function addItem(description, url) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: {
          title: [
            {
              text: {
                content: description,
              },
            },
          ],
        },
        URL: {
          type: "rich_text",
          rich_text: [{ text: { content: url } }],
        },
      },
    });
    console.log(response);
    console.log("Success! Entry added.");
  } catch (error) {
    console.error(error.body);
  }
}

export async function getItems() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    console.log(response);
    console.log("Success! Entry added.");
    return response;
  } catch (error) {
    console.error(error.body);
  }
}
