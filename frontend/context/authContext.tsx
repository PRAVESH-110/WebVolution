"use client"
import {useState, useContext, useEffect, createContext, ReactNode} from "react";
interface AuthContextType {
    isAuthenticated: boolean;
    token: string | null;
    login: (token:string) => void;
    logout: () => void;
}
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({children}: {children: ReactNode}){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const[token, setToken] = useState<string | null>(null);

    useEffect(()=>{
        const storedToken= localStorage.getItem("token");

        if(storedToken){
            setToken(storedToken);
            setIsAuthenticated(true);
        }
    },[])

    const login=(token: string)=>{
        localStorage.setItem("token",token);
        setToken(token);
        setIsAuthenticated(true);
    }

    const logout=()=>{
        localStorage.removeItem("token");
        setToken(null);
        setIsAuthenticated(false);
    }

    return(
        <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    const context =useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used inside AuthProvider");
    }
    return context;
}