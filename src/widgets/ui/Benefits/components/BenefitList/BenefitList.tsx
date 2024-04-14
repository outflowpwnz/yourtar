import { type TBenefit } from "entities"
import { Benefit } from "entities/ui/Benefit/Benefit"
import { EBenefitTheme } from "entities/types/benefitTypes"
import { useBemCN, useBreakpoints } from "shared";
import './style.scss'

export type TProps = {
  benefits: TBenefit[]
  title: string;
  index: number
}

export const BenefitList = (props: TProps) => {
  const benefitListBlock = useBemCN('benefit-list')
  const { isMobile, isDesktop, isTablet } = useBreakpoints()

  const getBenefitTheme = (itemIndex: number) => {
    if (isMobile) {
      return itemIndex % 3 === 0 ? EBenefitTheme.PRIMARY : EBenefitTheme.SECONDARY
    }

    if (isTablet || isDesktop) {
      const isEvenList = props.index % 2 === 0
      if (isEvenList) {
        return itemIndex % 2 === 0 ? EBenefitTheme.PRIMARY : EBenefitTheme.SECONDARY
      }

      return itemIndex % 2 !== 0 ? EBenefitTheme.PRIMARY : EBenefitTheme.SECONDARY
    }

    return EBenefitTheme.PRIMARY
  }
  return (
    <div className={benefitListBlock()}>
      <h3
        className={benefitListBlock('title')}
      >
        {props.title}
      </h3>
      <ul className={benefitListBlock('list')}>
        {props.benefits.map((benefit, itemIndex) => (
          <li
            key={itemIndex}
            className={benefitListBlock('item')}
          >
            <Benefit
              benefit={benefit}
              theme={getBenefitTheme(itemIndex)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}