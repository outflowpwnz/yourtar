import { Container, EBlockId, useBemCN } from "shared"
import { BenefitList, TProps as TBenefitListProps } from "./components"
import './style.scss'

export const Benefits = () => {
  const benefitsBlock = useBemCN('benefits')
  const benefitLists: Array<Omit<TBenefitListProps, 'index'>> = [
    {
      title: 'Для предпринимателей ',
      benefits: [
        {
          text: 'Снижение стоимости до 60%'
        },
        {
          text: 'Снижение сроков разработки до 60%'
        },
        {
          text: 'Гарантированное высокое качество, не уступающее разработке продукта с нуля'
        },
        {
          text: 'Максимальная гибкость, масштабируемость, отказоустойчивость Ваших продуктов '
        }
      ]
    },
    {
      title: 'Для разработчиков ',
      benefits: [
        {
          text: 'Нет необходимости писать рутинный код, искать и устранять ошибки'
        },
        {
          text: 'Нет необходимости копировать код для «стандартных функций» с других проектов и адаптировать его'
        },
        {
          text: 'Только творческие задачи по разработке уникального функционала. Остальное на нас'
        }
      ]
    }
  ]
  return (
    <section
      id={EBlockId.FEATURES}
      className={benefitsBlock()}
    >
      <Container>
        <h2
          className={benefitsBlock('title')}
        >
          В чем ваша выгода?
        </h2>

        <div
          className={benefitsBlock('lists')}
        >
          {benefitLists.map((benefitList, index) => (
            <BenefitList {...benefitList} index={index} key={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}