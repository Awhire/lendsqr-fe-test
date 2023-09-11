import { ReactNode, createContext, useContext, useState } from "react";

type ContextValue = {
  tabNav: number;
  updateTabNav: (newValue: number) => void;
  mobileSideBarNav: boolean;
  updateMobileSideBarNav: (newValue: boolean) => void;
};

const StateContext = createContext<ContextValue | undefined>(undefined);

type StateProviderProps = {
  children: ReactNode;
};

export function StateProvider({ children }: StateProviderProps) {
  const [tabNav, setTabNav] = useState<number>(0);
  const [mobileSideBarNav, setMobileSideBarNav] = useState<boolean>(false);

  const updateTabNav = (newValue: number) => {
    setTabNav(newValue);
  };

  const updateMobileSideBarNav = (newValue: boolean) => {
    setMobileSideBarNav(newValue);
  };

  return (
    <StateContext.Provider value={{ tabNav, updateTabNav, mobileSideBarNav, updateMobileSideBarNav }}>
      {children}
    </StateContext.Provider>
  );
}


export const useStateValue = (): ContextValue => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateValue must be used within a StateProvider');
  }
  return context;
}