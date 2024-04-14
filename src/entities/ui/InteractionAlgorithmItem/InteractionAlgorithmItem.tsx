import { useBemCN } from "shared"
import { TInteractionAlgorithmItem } from "entities/types/interactionAlgorithmItemTypes"
import './style.scss'

type TProps = TInteractionAlgorithmItem

export const InteractionAlgorithmItem = (props: TProps) => {
  const interactionAlgorithmItemBlock = useBemCN('interaction-algorithm-item')
  return (
    <div
      className={interactionAlgorithmItemBlock({ theme: props.theme })}
    >
      <h3
        className={interactionAlgorithmItemBlock('title')}
      >
        {props.title}
      </h3>
      <p
        className={interactionAlgorithmItemBlock('text')}
      >
        {props.text}
      </p>
    </div>
  )
}