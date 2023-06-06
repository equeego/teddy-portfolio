'use client';

import React, { createContext, useContext, useMemo, useState } from "react";
import { langs } from "../utils/constants";

interface AppContextType {
  lang: string;
  setLang: (v: string) => void ;
}

const AppContext = createContext({} as AppContextType);

type IAppContextProvider = {
  children: JSX.Element;
};

export const AppContextProvider = ({ children }: IAppContextProvider) => {
  const [lang, setLang] = useState<string>(langs[0].value);

  useMemo(() => {
    if (typeof window !== 'undefined') localStorage.setItem('lang', lang);
  }, [lang])

  return (
    <AppContext.Provider value={{ lang, setLang }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);