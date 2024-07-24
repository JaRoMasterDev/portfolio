import React from "react";

export default function PageWrapper({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={`max-w-5xl w-full p-12 mx-auto ${className}`}>
      {children}
    </div>
  );
}
