import { useContext, createContext, useState, ReactNode } from "react";


type User = {
  lastName: any;
  email: ReactNode;
  company: any;
  username: ReactNode;
  phone: ReactNode;
  age: ReactNode;
  gender: ReactNode;
  birthDate: ReactNode;
  bloodGroup: ReactNode;
  eyeColor: ReactNode;
  hair: any;
  address: any;
  bank: any;
  crypto: any;
  ip: ReactNode;
  macAddress: ReactNode;
  userAgent: ReactNode;
  firstName: any;
  id: string;
  image?: string;
};

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const UserLoginDetails = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserLoginDetails.Provider value={{ user, setUser }}>
      {children}
    </UserLoginDetails.Provider>
  );
}

export function useUser() {
  const context = useContext(UserLoginDetails);
  if (!context) {
    throw new Error("useUser must be used inside a UserProvider");
  }
  return context;
}