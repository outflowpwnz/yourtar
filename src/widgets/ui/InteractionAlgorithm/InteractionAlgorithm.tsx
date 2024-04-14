import { Container, EBlockId, useBemCN } from "shared"
import './style.scss'
import { InteractionAlgorithmList } from "./components"
import { TInteractionAlgorithmItem } from "entities/types/interactionAlgorithmItemTypes"

export const InteractionAlgorithm = () => {
  const interactionAlgorithmBlock = useBemCN('interaction-algorithm')
  const items: Array<TInteractionAlgorithmItem> = [
    {
      text: 'Подключаетесь к нам',
      title: '01'
    },
    {
      text: 'Выбираете необходимые готовые решения для бизнес-задач',
      title: '02'
    },
    {
      text: 'Интегрируете их в ваш проект с уникальным функционалом – это происходит очень быстро',
      title: '03'
    },
    {
      text: 'Запускаете ваш продукт быстро и без потерь в качестве',
      title: '04'
    }
  ]
  return (
    <section
      id={EBlockId.INTERCATION_ALGORITHM}
      className={interactionAlgorithmBlock()}
    >
      <Container>
        <div className={interactionAlgorithmBlock('content')}>
          <h2
            className={interactionAlgorithmBlock('title')}
          >
            Алгоритм взаимодействия
          </h2>
          <div
            className={interactionAlgorithmBlock('list')}
          >
            <InteractionAlgorithmList items={items} />
          </div>
        </div>
      </Container>
    </section>
  )
}