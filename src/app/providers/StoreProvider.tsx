import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "@/store";

type Props = {
  children: ReactNode;
};

export const StoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
