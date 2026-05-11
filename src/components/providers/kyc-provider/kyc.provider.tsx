import { createContext, useContext, useState } from "react";

type KYCContextType = {
  data: Partial<UserData>;
  updateData: (values: Partial<UserData>) => void;
};

const KYCContext = createContext<KYCContextType | undefined>(undefined);

export const KYCProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<Partial<UserData>>({});

  const updateData = (values: Partial<UserData>) => {
    setData((prev) => ({ ...prev, ...values }));
  };

  return (
    <KYCContext.Provider value={{ data, updateData }}>
      {children}
    </KYCContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useKYC = () => {
  const context = useContext(KYCContext);
  if (!context) throw new Error("useKYC must be used inside KYCProvider");
  return context;
};
