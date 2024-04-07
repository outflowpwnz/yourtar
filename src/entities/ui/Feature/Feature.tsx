import { TFeature } from "entities"
import { useBemCN } from "shared"
import './style.scss'

type TProps = {
  feature: TFeature
}

export const Feature = (props: TProps) => {
  const featureBlock = useBemCN('feature')
  return (
    <div
      className={featureBlock()}
    >
      <div
        className={featureBlock('image-wrapper')}
      >
        <img src={props.feature.image.src} alt={props.feature.image.alt} />
      </div>
      <p
        className={featureBlock('text')}
      >
        {props.feature.text}
      </p>
    </div>
  )
}