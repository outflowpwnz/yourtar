export enum EInteractionAlgorithmItemTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export type TInteractionAlgorithmItem = {
  title: string;
  text: string;
  theme?: EInteractionAlgorithmItemTheme;
}