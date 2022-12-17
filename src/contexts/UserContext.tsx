import { createContext, useState } from "react";

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUser{
    id: string;
    name: string;
    email:string;
}

interface iUserData {
    accessToken: string;
    user: iUser;
}

interface iUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userData: iUserData|null;
  setUserData: React.Dispatch<React.SetStateAction<iUserData | null>>;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<iUserData|null>(null);
  return <UserContext.Provider value={{ loading, setLoading, userData, setUserData }}>{children}</UserContext.Provider>;
};
