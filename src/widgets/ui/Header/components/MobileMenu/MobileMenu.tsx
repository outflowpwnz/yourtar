import { TMenuItem } from "widgets"
import { useBemCN, IconButton, Container } from "shared"
import { ReactComponent as CrossIcon } from "shared/assets/icons/cross.svg"
import { MobileMenuItem } from "../MobileMenuItem/MobileMenuItem"
import './style.scss'
import { createPortal } from "react-dom"

type TProps = {
  menuItems: TMenuItem[]
  isOpen: boolean;
  toggleMenu: () => void;
}

export const MobileMenu = (props: TProps) => {
  const mobileMenuBlock = useBemCN('mobile-menu')

  return (
    createPortal(
      <div className={mobileMenuBlock({ open: props.isOpen })}>
        <Container>
          <div className={mobileMenuBlock('header')}>
            <h2 className={mobileMenuBlock('header-title')}>Меню</h2>
            <IconButton onClick={props.toggleMenu}>
              <CrossIcon />
            </IconButton>
          </div>
          <nav className={mobileMenuBlock('nav')}>
            <ul className={mobileMenuBlock('nav-list')}>
              {props.menuItems.map((menuItem, index) =>
                <li
                  key={index}
                  className={mobileMenuBlock('nav-list-item')}
                >
                  <MobileMenuItem menuItem={menuItem} closeMenu={props.toggleMenu} />
                </li>
              )}
            </ul>
          </nav>
        </Container>
      </div>,
      document.body
    )
  )
}