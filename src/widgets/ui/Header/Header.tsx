import { useState } from "react";
import { Container, IconButton, useBemCN } from "shared"
import { ReactComponent as MenuIcon } from "shared/assets/icons/menu.svg"
import { Logo, Menu, MobileMenu } from './components';
import { TMenuItem } from "widgets";
import './style.scss';
import { PhoneLink } from "./components/PhoneLink/PhoneLink";

export const Header = () => {
  const headerBlock = useBemCN('header')

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems: TMenuItem[] = [
    {
      to: '#id',
      label: 'О проекте'
    },
    {
      to: '#id',
      label: 'Преимущества'
    },
    {
      to: '#id',
      label: 'Этапы работы'
    },
    {
      to: '#id',
      label: 'Расчет стоимости'
    },
    {
      to: '#id',
      label: 'Связь с нами'
    }
  ]

  return (
    <header className={headerBlock()}>
      <Container>
        <div className={headerBlock('container')}>
          <div className={headerBlock('logo')}>
            <Logo />
          </div>
          <div className={headerBlock('menu')}>
            <Menu menuItems={menuItems} />
          </div>
          <div className={headerBlock('additionals')}>
            <PhoneLink label="+7 (999) 999-99-99" to="tel:+79999999999" />
            <div className={headerBlock('menu-button')}>
              <IconButton onClick={toggleMenu}>
                <MenuIcon />
              </IconButton>
            </div>
          </div>
          <div className={headerBlock('mobile-menu')}>
            <MobileMenu menuItems={menuItems} isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </Container>
    </header>
  )
}