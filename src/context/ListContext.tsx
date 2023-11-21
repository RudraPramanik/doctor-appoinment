import { createContext, useContext, useState, ReactNode } from 'react';
import { View } from 'react-native';

export interface ListContextType {
  selectedOptions: Record<string, string>;
  setSelectedOption: (listKey: string, option: string) => void;
}

const ListContext = createContext<ListContextType | undefined>(undefined);

export function ListProvider({ children }: { children: ReactNode }) {
  const [selectedOptions, setSelectedOption] = useState<Record<string, string>>(
    {}
  );
  const setSelectedOption = (listKey: string, option: string) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [listKey]: option,
    }));
  };
  return (
    <ListContext.Provider value={{ selectedOptions, setSelectedOption }}>
      {children}
    </ListContext.Provider>
  );
}

export function useListContext() {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error('use list context must be within provider');
  }
  return context;
}
