import { Container, useBemCN } from "shared"
import { ReactComponent as LogoIcon } from "shared/assets/icons/logo.svg"
import { Contacts, Address, Copyright, Navigation, Sponsors } from "./components"
import './style.scss'

export const Footer = () => {
  const footerBlock = useBemCN('footer')
  return (
    <footer
      className={footerBlock()}
    >
      <Container>
        <div className={footerBlock('content')}>
          <div className={footerBlock('logo')}>
            <LogoIcon />
          </div>
          <div
            className={footerBlock('navigation')}
          >
            <Navigation />
          </div>
          <div
            className={footerBlock('sponsors')}
          >
            <Sponsors />
          </div>
          <div
            className={footerBlock('contacts')}
          >
            <Contacts />
          </div>
          <div
            className={footerBlock('address')}
          >
            <Address />
          </div>
          <div
            className={footerBlock('copyright')}
          >
            <Copyright />
          </div>
        </div>
      </Container>
    </footer>
  )
}