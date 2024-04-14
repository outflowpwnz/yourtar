import { Container, EBlockId, useBemCN } from "shared"
import { ChoosePlatform, ChooseRole, ChooseTasks, CostAndTerms, Results } from "./components"
import './style.scss';

export const Pricing = () => {
  const pricingBlock = useBemCN('pricing')

  return (
    <section
      id={EBlockId.PRICING}
      className={pricingBlock()}
    >
      <Container>
        <div
          className={pricingBlock('content')}
        >
          <h2
            className={pricingBlock('title')}
          >
            Рассчитайте стоимость вашего проекта
          </h2>
          <p
            className={pricingBlock('subtitle')}
          >
            С помощью данного калькулятора вы можете легко расчитать примерную стоимость разбработки программного обеспечения с нашим функционалом
          </p>
          <div
            className={pricingBlock('choose-platform')}
          >
            <ChoosePlatform />
          </div>
          <div
            className={pricingBlock('choose-tasks')}
          >
            <ChooseTasks />
          </div>
          <div
            className={pricingBlock('choose-role')}
          >
            <ChooseRole />
          </div>
          <div
            className={pricingBlock('cost-and-terms')}
          >
            <CostAndTerms />
          </div>
          <div
            className={pricingBlock('results')}
          >
            <Results />
          </div>
        </div>
      </Container>
    </section>
  )
}