import { createContext, useState, ReactNode, useContext } from "react";

interface Breadcrumb {
  label: string;
  link: string;
}

interface BreadcrumbContextType {
  breadcrumbs: Breadcrumb[];
  handleChangeBreadcrumbs: (breadcrumbs: Breadcrumb[]) => void;
}

export const BreadcrumbContext = createContext<BreadcrumbContextType>({
  breadcrumbs: [],
  handleChangeBreadcrumbs: () => {},
});

interface BreadcrumbProviderProps {
  children: ReactNode;
}

export const BreadcrumbProvider = ({ children }: BreadcrumbProviderProps) => {
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

  const handleChangeBreadcrumbs = (breadcrumbs: Breadcrumb[]) => {
    setBreadcrumbs(breadcrumbs);
  };

  return (
    <BreadcrumbContext.Provider
      value={{ breadcrumbs, handleChangeBreadcrumbs }}
    >
      {children}
    </BreadcrumbContext.Provider>
  );
};

export const useBreadcrumbContext = () => {
  const context = useContext(BreadcrumbContext);
  if (!context)
    throw new Error(
      "useBreadcrumbContext must be used within a BreadcrumbProvider"
    );
  return context;
};
