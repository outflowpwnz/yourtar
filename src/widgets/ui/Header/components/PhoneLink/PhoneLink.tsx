import { Link } from "react-router-dom";
import { IconButton, useBemCN } from "shared";
import { ReactComponent as PhoneIcon } from 'shared/assets/icons/phone.svg'
import './style.scss'

type TProps = {
  to: string;
  label: string
}

export const PhoneLink = (props: TProps) => {
  const phoneLinkBlock = useBemCN('phone-link')
  return (
    <div className={phoneLinkBlock()}>
      <Link
        to={props.to}
        className={phoneLinkBlock('link')}
      >
        <IconButton>
          <PhoneIcon />
        </IconButton>
        <span className={phoneLinkBlock('label')}>
          {props.label}
        </span>
      </Link>
    </div>
  )
}