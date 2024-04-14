import { InteractionAlgorithmItem } from "entities/ui/InteractionAlgorithmItem/InteractionAlgorithmItem"
import { EInteractionAlgorithmItemTheme, TInteractionAlgorithmItem } from "entities/types/interactionAlgorithmItemTypes"
import { useBemCN, useBreakpoints } from "shared"
import './style.scss'

type TProps = {
  items: Array<TInteractionAlgorithmItem>
}

export const InteractionAlgorithmList = (props: TProps) => {
  const interactionAlgorithmListBlock = useBemCN('interaction-algorithm-list')
  const { isMobile } = useBreakpoints()
  const getTheme = (index: number): EInteractionAlgorithmItemTheme => {
    if (isMobile) {
      return index % 3 === 0 ? EInteractionAlgorithmItemTheme.PRIMARY : EInteractionAlgorithmItemTheme.SECONDARY
    }

    return index % 2 === 0 ? EInteractionAlgorithmItemTheme.PRIMARY : EInteractionAlgorithmItemTheme.SECONDARY
  }
  return (
    <ul
      className={interactionAlgorithmListBlock()}
    >
      {props.items.map((item, index) =>
        <li
          key={index}
          className={interactionAlgorithmListBlock('item')}
        >
          <InteractionAlgorithmItem {...item} theme={getTheme(index)} />
        </li>
      )}
    </ul>
  )
}