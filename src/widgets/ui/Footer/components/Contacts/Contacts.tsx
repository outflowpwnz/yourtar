import { CustomLink, ECustomLinkTheme, useBemCN } from "shared"
import { ReactComponent as PhoneMiniIcon } from "shared/assets/icons/phone-mini.svg"
import { ReactComponent as TelegramMiniIcon } from "shared/assets/icons/telegram-mini.svg"
import { ReactComponent as EmailMiniIcon } from "shared/assets/icons/email-mini.svg"
import './style.scss';

export const Contacts = () => {
  const contactsBlock = useBemCN('contacts')

  return (
    <div className={contactsBlock()}>
      <h3
        className={contactsBlock('title')}
      >
        Свяжитесь с нами
      </h3>
      <ul
        className={contactsBlock('list')}
      >
        <li
          className={contactsBlock('item')}
        >
          <CustomLink
            theme={ECustomLinkTheme.SECONDARY}
            icon={PhoneMiniIcon}
            href="tel:+7 (999) 999-99-99"
            label="+7 (999) 999-99-99"
          />
        </li>
        <li
          className={contactsBlock('item')}
        >
          <CustomLink
            theme={ECustomLinkTheme.SECONDARY}
            icon={TelegramMiniIcon}
            href="mailto:email@gmail.com"
            label="email@gmail.com"
          />
        </li>
        <li
          className={contactsBlock('item')}
        >
          <CustomLink
            theme={ECustomLinkTheme.SECONDARY}
            icon={EmailMiniIcon}
            href="#"
            label="Напишите нам в tg"
          />
        </li>
      </ul>
    </div>
  )
}