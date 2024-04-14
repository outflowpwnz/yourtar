import { FunctionComponent, HTMLAttributeAnchorTarget, SVGProps } from "react";

export enum ECustomLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export type TCustomLink = {
  label: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  theme?: ECustomLinkTheme;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
}