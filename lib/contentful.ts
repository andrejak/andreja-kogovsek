import { createClient, Asset } from "contentful";
import React from "react";
import { LoadingValue } from "../types";

const client =
  process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID &&
  process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
    ? createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
      })
    : null;

const defaultLoadingValue: LoadingValue<any> = {
  loading: true,
  data: null,
  error: null,
};

export const useContentfulEntries = (
  contentType: string,
  params?: { [key: string]: any },
): LoadingValue<any[]> => {
  const fetchEntries = async (): Promise<LoadingValue<any[]>> => {
    if (!client) {
      return defaultLoadingValue;
    }
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
          } as LoadingValue<any[]>),
      )
      .catch((e) => ({ loading: false, error: e, data: null }));
    return entries;
  };

  const [entries, setEntries] = React.useState<LoadingValue<any>>(
    defaultLoadingValue,
  );

  React.useEffect(() => {
    async function getEntries() {
      setEntries(defaultLoadingValue);
      const allEntries = await fetchEntries();
      setEntries(allEntries);
    }
    getEntries();
  }, []);

  return entries;
};

export const useContentfulAsset = (title: string): LoadingValue<Asset> => {
  const fetchAsset = async (): Promise<LoadingValue<Asset>> => {
    if (!client) {
      return defaultLoadingValue;
    }
    const asset = client
      .getAssets()
      .then(
        (res) =>
          ({
            loading: false,
            data: res.items.filter((item) => item.fields.title === title)[0],
            error: null,
          } as LoadingValue<any>),
      )
      .catch((e) => ({ loading: false, error: e, data: null }));
    return asset;
  };

  const [asset, setAsset] = React.useState<LoadingValue<any>>(
    defaultLoadingValue,
  );

  React.useEffect(() => {
    async function getAsset() {
      setAsset(defaultLoadingValue);
      const newAsset = await fetchAsset();
      setAsset(newAsset);
    }
    getAsset();
  }, []);

  return asset;
};
