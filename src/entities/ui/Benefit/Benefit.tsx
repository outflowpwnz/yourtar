import { TBenefit, EBenefitTheme } from "entities"
import { useBemCN } from "shared"
import './style.scss';

type TProps = {
  benefit: TBenefit
  theme?: EBenefitTheme
}

export const Benefit = (props: TProps) => {
  const benefitBlock = useBemCN('benefit')
  return (
    <div
      className={benefitBlock({ theme: props.theme })}
    >
      <p
        className={benefitBlock('text')}
      >
        {props.benefit.text}
      </p>
    </div>
  )
}