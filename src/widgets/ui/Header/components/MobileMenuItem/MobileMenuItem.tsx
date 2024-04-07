import { Link } from "react-router-dom"
import { useBemCN } from "shared"
import { TMenuItem } from "widgets"
import './style.scss'

type TProps = {
  menuItem: TMenuItem
}

export const MobileMenuItem = (props: TProps) => {
  const mobileMenuItemBlock = useBemCN('mobile-menu-item')
  return (
    <div className={mobileMenuItemBlock()}>
      <Link
        className={mobileMenuItemBlock('link')}
        to={props.menuItem.to}
      >
        {props.menuItem.label}
      </Link>
    </div>
  )
}