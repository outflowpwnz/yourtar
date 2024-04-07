import { Link } from "react-router-dom"
import { useBemCN } from "shared"
import { TMenuItem } from "widgets"
import './style.scss'

type TProps = {
  menuItem: TMenuItem
}

export const MenuItem = (props: TProps) => {
  const menuItemBlock = useBemCN('menu-item')
  return (
    <div className={menuItemBlock()}>
      <Link
        className={menuItemBlock('link')}
        to={props.menuItem.to}
      >
        {props.menuItem.label}
      </Link>
    </div>
  )
}