import { useBemCN } from "shared"
import { TMenuItem } from "widgets"
import { MenuItem } from "../MenuItem/MenuItem"
import './style.scss'

type TProps = {
  menuItems: TMenuItem[]
}

export const Menu = (props: TProps) => {
  const menuBlock = useBemCN('menu')
  return (
    <nav className={menuBlock()}>
      <ul className={menuBlock('list')}>
        {props.menuItems.map((menuItem) =>
          <li className={menuBlock('item')}>
            <MenuItem menuItem={menuItem} />
          </li>
        )}
      </ul>
    </nav>
  )
}