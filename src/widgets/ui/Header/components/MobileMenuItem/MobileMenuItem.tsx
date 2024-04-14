import { HashLink } from "react-router-hash-link"
import { scrollToAnchor, useBemCN } from "shared"
import { TMenuItem } from "widgets"
import './style.scss'

type TProps = {
  menuItem: TMenuItem
  closeMenu: () => void
}

export const MobileMenuItem = (props: TProps) => {
  const mobileMenuItemBlock = useBemCN('mobile-menu-item')

  return (
    <div className={mobileMenuItemBlock()}>
      <HashLink
        className={mobileMenuItemBlock('link')}
        to={props.menuItem.to}
        smooth
        scroll={scrollToAnchor}
        onClick={props.closeMenu}
      >
        {props.menuItem.label}
      </HashLink>
    </div>
  )
}