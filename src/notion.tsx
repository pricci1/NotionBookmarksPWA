import { Client } from "@notionhq/client";
import React, { useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

export interface NotionList {
  object: "list";
  results: NotionPage[];
  next_cursor?: any;
  has_more: boolean;
  type: "page";
  page: any;
}

interface NotionPage {
  id: string;
  properties: {
    URL: any;
    Read: { checkbox: boolean };
    Description: any;
  };
}

interface NotionContextType {
  addItem: (description, url) => Promise<any>;
  getItems: () => Promise<any>;
  setNotionToken: React.Dispatch<React.SetStateAction<string>> | undefined;
  setDatabaseId: React.Dispatch<React.SetStateAction<string>>;
}

const NotionContext = React.createContext<NotionContextType>({} as any);

export const NotionProvider = ({ children }) => {
  const [notionClient, setNotionClient] = useState(undefined);
  const [notionToken, setNotionToken] = useLocalStorage<string>(
    "notionKey",
    () => process.env.NOTION_TOKEN || ""
  );
  const [databaseId, setDatabaseId] = useLocalStorage<string>(
    "databaseIdKey",
    () => process.env.DATABASE_ID || ""
  );

  useEffect(() => {
    setNotionClient(
      new Client({
        auth: notionToken,
        baseUrl: `${process.env.BASE_URL || ""}https://api.notion.com`,
      })
    );
  }, [notionToken]);

  let providedValue = {
    addItem: (description, url) =>
      addItem(notionClient, databaseId, description, url),
    getItems: () => getItems(notionClient, databaseId),
    setNotionToken,
    setDatabaseId,
  };

  return (
    <NotionContext.Provider value={providedValue}>
      {children}
    </NotionContext.Provider>
  );
};

async function addItem(
  notion: Client,
  databaseId: string,
  description: string,
  url: string
) {
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

async function getItems(notion: Client, databaseId: string) {
  try {
    const response = await notion?.databases.query({
      database_id: databaseId,
    });
    console.log(response);
    console.log("Success getting entities!.");
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default NotionContext;
