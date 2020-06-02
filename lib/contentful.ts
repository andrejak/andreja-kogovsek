import { createClient } from "contentful";
import React from "react";

const client =
  process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN
    ? createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      })
    : null;

export const useContentful = (contentType: string, params?: any) => {
  const fetchEntries = async () => {
    const entries =
      client &&
      (await client.getEntries({
        content_type: contentType,
        ...params,
      }));
    if (entries.items) return entries.items.map((item) => item.fields);
    console.error(`Error fetching entries from contentful.`);
    return [];
  };

  const [entries, setEntries] = React.useState([]);

  React.useEffect(() => {
    async function getPosts() {
      const allEntries = await fetchEntries();
      setEntries([...allEntries]);
    }
    getPosts();
  }, []);

  return entries;
};
