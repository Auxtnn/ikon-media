"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import PageLoader with no SSR
const PageLoader = dynamic(() => import("./Loader"), {
  ssr: false,
  loading: () => null,
});

export const ClientLayoutWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div
          className="flex flex-col min-h-screen"
          style={{
            opacity: isLoading ? 0 : 1,
            transition: "opacity 500ms ease-in-out",
          }}
        >
          <div className="flex-grow">{children}</div>
        </div>
      )}
    </>
  );
};
