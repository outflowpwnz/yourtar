import { useBemCN, scrollToAnchor } from "shared"
import { TMenuItem } from "widgets"
import './style.scss'
import { HashLink } from "react-router-hash-link"

type TProps = {
  menuItem: TMenuItem
}

export const MenuItem = (props: TProps) => {
  const menuItemBlock = useBemCN('menu-item')
  return (
    <div className={menuItemBlock()}>
      <HashLink
        className={menuItemBlock('link')}
        to={props.menuItem.to}
        smooth
        scroll={scrollToAnchor}
      >
        {props.menuItem.label}
      </HashLink>
    </div>
  )
}