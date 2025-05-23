import { createContext, ReactNode, useState } from "react";

type ControllerMapContextType = {
  openMap: boolean;
  setOpenMap: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ControllerMapContext = createContext(
  {} as ControllerMapContextType
);

export const ControllerMapProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const [openMap, setOpenMap] = useState(false);
  return (
    <ControllerMapContext.Provider value={{ openMap, setOpenMap }}>
      {children}
    </ControllerMapContext.Provider>
  );
};
