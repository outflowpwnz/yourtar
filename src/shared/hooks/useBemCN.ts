import { setup } from 'bem-cn';

export const useBemCN = (className: string) => {
  const b = setup({
    mod: '--',
    modValue: '-'
  });

  const block = b(className)

  return block
}