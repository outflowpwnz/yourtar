import { Link } from "react-router-dom"
import { useBemCN } from "shared"
import { TCustomLink } from "shared/types"
import './style.scss'

type TProps = TCustomLink

export const CustomLink = (props: TProps) => {
  const customLinkBlock = useBemCN('custom-link')

  return (
    <Link
      className={customLinkBlock({ theme: props.theme })}
      to={props.href}
      target={props.target || '_blank'}
    >
      {props.icon && (
        <div
          className={customLinkBlock('icon')}
        >
          <props.icon />
        </div>
      )}
      <p>
        {props.label}
      </p>
    </Link>
  )
}