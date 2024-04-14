import { Dispatch, ReactNode } from "react";

export type TCheckbox = {
  isChecked: boolean,
  children?: ReactNode;
  label?: string;
  isDisabled?: boolean;
  id: string;
  onChecked: Dispatch<React.SetStateAction<boolean>> | ((nextIsChecked: boolean) => void)
}