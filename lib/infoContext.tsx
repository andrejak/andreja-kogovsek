import { Info, LoadingValue } from "../types";
import React from "react";
import { useContentfulEntries } from "./contentful";

const initState = {
  name: "Andreja Kogovsek",
};

export const InfoContext = React.createContext<Partial<Info>>(initState);

export const InfoProvider = ({ children }: { children: any }): any => {
  const info: LoadingValue<Info[]> = useContentfulEntries("info", { limit: 1 });
  return (
    <InfoContext.Provider value={info.data ? info.data[0] : initState}>
      {children}
    </InfoContext.Provider>
  );
};
