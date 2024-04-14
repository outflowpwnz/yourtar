import { Dispatch, HTMLAttributes } from "react";

export enum EFieldType {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email'
}

export enum EFieldTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export type TField = {
  label: string;
  type?: EFieldType;
  id: string;
  value: string;
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode'];
  onChange?: Dispatch<React.SetStateAction<string>>
  isError?: boolean;
  errorMessage?: string;
  theme?: EFieldTheme
}