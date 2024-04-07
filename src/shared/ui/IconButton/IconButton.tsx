import './style.scss'
import { useBemCN } from 'shared'
import { ReactNode } from 'react'

type TProps = {
  onClick?: () => void
  href?: string
  children: ReactNode
}

export const IconButton = (props: TProps) => {
  const IconButtonBlock = useBemCN('icon-button')
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={IconButtonBlock()}
    >
      {props.children}
    </button>
  )
}