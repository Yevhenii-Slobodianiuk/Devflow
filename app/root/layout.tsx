import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h1>Hello!!!</h1>
      {children}
    </div>
  );
};

export default Layout;
