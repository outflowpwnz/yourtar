import { HashLink } from "react-router-hash-link"
import { EBlockId, scrollToAnchor, useBemCN } from "shared"
import { TFooterMenuItem } from "widgets/types"
import './style.scss';

export const Navigation = () => {
  const navigationBlock = useBemCN('navigation')

  const menuItems: TFooterMenuItem[] = [
    {
      to: `#${EBlockId.ABOUT_PROJECT}`,
      label: 'О проекте'
    },
    {
      to: `#${EBlockId.FEATURES}`,
      label: 'Преимущества'
    },
    {
      to: `#${EBlockId.INTERCATION_ALGORITHM}`,
      label: 'Этапы работы'
    },
    {
      to: `#${EBlockId.PRICING}`,
      label: 'Расчет стоимости'
    },
    {
      to: `#${EBlockId.FAQ}`,
      label: 'Часто задаваемые вопросы'
    }
  ]

  return (
    <nav className={navigationBlock('nav')}>
      <ul className={navigationBlock('nav-list')}>
        {menuItems.map((menuItem, index) =>
          <li
            key={index}
            className={navigationBlock('nav-list-item')}
          >
            <HashLink
              className={navigationBlock('link')}
              to={menuItem.to}
              smooth
              scroll={scrollToAnchor}
            >
              {menuItem.label}
            </HashLink>
          </li>
        )}
      </ul>
    </nav>
  )
}