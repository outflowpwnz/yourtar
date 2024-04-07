import { ReactNode } from "react"
import { useBemCN } from "shared/hooks"
import './style.scss'

type TProps = {
  children?: ReactNode
}

export const Container = (props: TProps) => {
  const containerBlock = useBemCN('container')
  return (
    <div className={containerBlock()}>
      {props.children}
    </div>
  )
}