import { createClient } from "contentful";
import React from "react";
import { LoadingValue } from "../types";

const client =
  process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN
    ? createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      })
    : null;

export const useContentful = (contentType: string, params?: any) => {
  const fetchEntries = async (): Promise<LoadingValue<any[]>> => {
    const entries = client
      .getEntries({
        content_type: contentType,
        ...params,
      })
      .then(
        (res) =>
          ({
            loading: false,
            data: res.items.map((item) => item.fields),
            error: null,
          } as LoadingValue<any[]>)
      )
      .catch((e) => ({ loading: false, error: e, data: null }));
    return entries;
  };

  const [entries, setEntries] = React.useState<LoadingValue<any>>({
    loading: true,
    data: null,
    error: null,
  });

  React.useEffect(() => {
    async function getPosts() {
      setEntries({ loading: true, data: null, error: null });
      const allEntries = await fetchEntries();
      setEntries(allEntries);
    }
    getPosts();
  }, []);

  return entries;
};
