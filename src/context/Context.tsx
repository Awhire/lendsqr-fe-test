import { ReactNode, createContext, useContext, useState } from "react";

type ContextValue = {
  value: number;
  updateValue: (newValue: number) => void;
};

const StateContext = createContext<ContextValue | undefined>(undefined);

type StateProviderProps = {
  children: ReactNode;
};

export function StateProvider({ children }: StateProviderProps) {
  const [value, setValue] = useState<number>(0);

  const updateValue = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <StateContext.Provider value={{ value, updateValue }}>
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