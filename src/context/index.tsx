import React, { createContext, useContext, ReactNode, useState } from "react";

interface NameContextProps {
  name: null | string,
}

interface UpdateNameContextProps {
  setName: (name: string | null) => void,
}

interface NameToSearchProps {
  value: string | null,
  children: ReactNode,
}

const NameContext = createContext<NameContextProps>({ name: null });
const UpdateNameContext = createContext<UpdateNameContextProps>({ setName: () => {} });

export const useName = () => {
  return useContext(NameContext).name;
};

export const useSetName = () => {
  return useContext(UpdateNameContext).setName;
};

export const NameToSearch: React.FC<NameToSearchProps> = ({ value, children }) => {

  const [name, setName] = useState<string | null>(value);

  return (
    <NameContext.Provider value={{ name }}>
      <UpdateNameContext.Provider value={{ setName }}>
        {children}
      </UpdateNameContext.Provider>
    </NameContext.Provider>
  )
};