"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const PageTransitionLoader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000); // Adjust timing as needed
  }, [pathname]);
  // if(process.env.NODE_ENV == "development") return <>{children}</>;
  return <Loader loading={loading} >{children}</Loader>
};

export default PageTransitionLoader;
