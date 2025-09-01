import { useContext, createContext, useState, ReactNode } from "react";


type User = {
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