import { createContext, ReactNode, useState } from "react";

type FirstTimePlayingContextType = {
  firstTime: boolean;
  setFirstTime: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FirstTimePlayingContext = createContext(
  {} as FirstTimePlayingContextType
);

export const FirstTimePlayingProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const [firstTime, setFirstTime] = useState(true);
  return (
    <FirstTimePlayingContext.Provider value={{ firstTime, setFirstTime }}>
      {children}
    </FirstTimePlayingContext.Provider>
  );
};
