import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iLoginFormValues } from "../components/LoginForm";
import { iRegisterFormValues } from "../components/RegisterForm";
import { api } from "../services/api";

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUser{
    id: number;
    name: string;
    email:string;
}

interface iUserData {
    accessToken: string;
    user: iUser;
}

 export interface iProduct {
    id: string,
    name:string,
    category:string,
    price:number,
    img:string,
}

interface iUserContext {
  globalLoading: boolean;
  stateLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userData: iUserData|null;
  setUserData: React.Dispatch<React.SetStateAction<iUserData | null>>;
  userLogin: (userData:iLoginFormValues) => void;
  userRegister: (userData: iRegisterFormValues) => void;
  products:iProduct[] | null;
  setProducts: React.Dispatch<React.SetStateAction<iProduct[] | null>>;
  userLogout: () => void;
  getProductsData: () => void;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [stateLoading, setStateLoading] = useState(true);
  const [products, setProducts] = useState<iProduct[] | null>(null)
  const [userData, setUserData] = useState<iUserData|null>(null);

  const getProductsData = async () => {
    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      setStateLoading(false);
      return;
    }

    try {
      const data = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await api.get<iProduct[]>("/products", data);
      setProducts(response.data);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
      navigate("/login");
      window.localStorage.clear();
    } finally {
      setStateLoading(false);
    }
  };

  useEffect(() => {
    getProductsData();
  }, [userData]);

  const navigate = useNavigate()

  const userLogin = async (userLoginData:iLoginFormValues) => {
    try {
      setGlobalLoading(true)
      const response = await api.post<iUserData>('/login', userLoginData);
      setUserData(response.data)
      localStorage.setItem('@TOKEN', response.data.accessToken)
      localStorage.setItem('@USER', JSON.stringify(response.data.user))
      navigate('/')
    } catch (error) {
      toast.error('Usuário ou senha incorretos!')
      console.error(error)
    }  finally {
      setGlobalLoading(false)

    }
  }

  const userRegister = async (userRegisterData:iRegisterFormValues) => {
    try {
      setGlobalLoading(true)
      delete userRegisterData.confirmPassword;
      await api.post('/register', userRegisterData);
      toast.success('Conta criada com sucesso!')
      navigate('/login')
    } catch (error) {
      toast.error('Ops, deu algo errado')
    } finally {
      setGlobalLoading(false)
    }
  }

  const userLogout = () => {
    window.localStorage.clear();
    navigate('/login');
  }

  return <UserContext.Provider value={{ globalLoading, setGlobalLoading, userData, setUserData, userLogin, userRegister, stateLoading, products, setProducts , userLogout, getProductsData }}>{children}</UserContext.Provider>;
};
