import { ReactNode } from "react"
import { useBemCN } from "shared/hooks"
import './style.scss';

type TProps = {
  children: ReactNode
}

export const Text = (props: TProps) => {
  const textBlock = useBemCN('text')
  return (
    <div
      className={textBlock()}
    >
      {props.children}
    </div>
  )
}