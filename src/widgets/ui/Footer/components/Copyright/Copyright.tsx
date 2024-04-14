import { CustomLink, useBemCN } from "shared"
import './style.scss'

export const Copyright = () => {
  const copyrightBlock = useBemCN('copyright')

  return (
    <div
      className={copyrightBlock()}
    >
      <p
        className={copyrightBlock('text')}
      >
        ООО «ЁРТАР» © Все права защищены / 2024
      </p>
      <ul
        className={copyrightBlock('links')}
      >
        <li
          className={copyrightBlock('links')}
        >
          <CustomLink href="#" label="Публичная оферта" />
        </li>
        <li
          className={copyrightBlock('links')}
        >
          <CustomLink href="#" label="Политика конфиденциальности" />
        </li>
      </ul>
    </div>
  )
}