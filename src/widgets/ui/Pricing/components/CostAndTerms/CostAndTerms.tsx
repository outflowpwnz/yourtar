import { EFieldTheme, Field, useBemCN } from "shared"
import './style.scss'
import { useState } from "react"

export const CostAndTerms = () => {
  const costAndTermsBlock = useBemCN('cost-and-terms')
  const [cost, setCost] = useState<string>('100 000 ₽')
  const [terms, setTerms] = useState<string>('8 мес')
  const costFieldId = 'cost'
  const termsFieldId = 'terms'
  return (
    <div
      className={costAndTermsBlock()}
    >
      <h3
        className={costAndTermsBlock('title')}
      >
        Укажите примерную сроки и стоимость вашего проекта
      </h3>
      <div
        className={costAndTermsBlock('input')}
      >
        <Field
          theme={EFieldTheme.SECONDARY}
          id={costFieldId}
          value={cost}
          onChange={setCost}
          label='Стоимость'
        />
      </div>
      <div
        className={costAndTermsBlock('input')}
      >
        <Field
          theme={EFieldTheme.SECONDARY}
          id={termsFieldId}
          value={terms}
          onChange={setTerms}
          label='Сроки'
        />
      </div>
    </div>
  )
}