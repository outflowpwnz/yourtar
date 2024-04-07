import { useBemCN } from "shared"
import logoIcon from 'shared/assets/icons/logo.svg'
import './style.scss'

export const Logo = () => {
  const logoBlock = useBemCN('logo')
  return (
    <div className={logoBlock()}>
      <img
        src={logoIcon}
        className={logoBlock('image')}
        alt="YourTar"
      />
    </div>
  )
}