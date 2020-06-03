import { Info, LoadingValue } from "../types";
import React from "react";
import { useContentful } from "./contentful";

const initState = {
  name: "Andreja Kogovsek",
};

export const InfoContext = React.createContext<Partial<Info>>(initState);

export const InfoProvider = ({
  children,
}: {
  children: React.Component;
}): React.FC => {
  const info: LoadingValue<Info[]> = useContentful("info", { limit: 1 });
  return (
    <InfoContext.Provider value={info.data ? info.data[0] : initState}>
      {children}
    </InfoContext.Provider>
  );
};
