const oi = () => {
  return <h1>oi</h1>
}

/* import React, { createContext, useContext, ReactNode, useState } from "react";

interface nameToSearchProps {
  value: string | null,
  children: ReactNode
}

const NameContext = React.createContext(null);
const UpdateNameContext = React.createContext(null);

const useName = () => {
  return useContext(nameContext)
} 

const setName = () => {
  return useContext(updateNameContext)
}

export const nameToSearch: React.FC<nameToSearchProps> = ({ value, children }) => {

  const [name, setName] = useState(value);

  return (
    <NameContext.Provider value={name}>
      <UpdateNameContext value={setName}>
        {children}
      </UpdateNameContext>
    </NameContext.Provider>
  )
} */