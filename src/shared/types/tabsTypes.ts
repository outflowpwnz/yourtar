import { FunctionComponent, SVGProps } from "react";

export type TTab = {
  id: number;
  label: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
}