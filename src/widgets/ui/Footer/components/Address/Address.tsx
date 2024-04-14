import { useBemCN } from "shared"
import './style.scss';

export const Address = () => {
  const addressBlock = useBemCN('address');

  return (
    <div className={addressBlock()}>
      <h3 className={addressBlock('title')}>
        Адрес
      </h3>
      <p
        className={addressBlock('text')}
      >
        г. Томск, Ленина 147
      </p>
    </div>
  )
}