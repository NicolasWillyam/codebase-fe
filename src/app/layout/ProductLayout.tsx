import React, { ReactNode } from "react";

const ProductLayout = ({ children }: { children: ReactNode }) => {
  return <div className="pt-20">{children}</div>;
};

export default ProductLayout;
