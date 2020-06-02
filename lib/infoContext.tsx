import { Info } from "../types";
import React from "react";
import { useContentful } from "./contentful";

const initState = {
  name: "Andreja Kogovsek",
};

export const InfoContext = React.createContext<Partial<Info>>(initState);

export const InfoProvider = (props: any) => {
  const info: Info[] = useContentful("info", { limit: 1 });
  return (
    <InfoContext.Provider value={info[0] || initState}>
      {props.children}
    </InfoContext.Provider>
  );
};
