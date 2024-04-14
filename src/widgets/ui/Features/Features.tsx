import { type TFeature } from "entities"
import { Feature } from 'entities/ui/Feature/Feature';
import { Container, useBemCN } from "shared"
import './style.scss'
import feature1Image from 'shared/assets/icons/feature-1.svg'
import feature2Image from 'shared/assets/icons/feature-2.svg'
import feature3Image from 'shared/assets/icons/feature-3.svg'

export const Features = () => {
  const featuresBlock = useBemCN('features')
  const features: TFeature[] = [
    {
      image: {
        src: feature1Image,
        alt: 'Разработаем веб-сайт'
      },
      text: 'Разработаем веб-сайт'
    },
    {
      image: {
        src: feature2Image,
        alt: 'Подключим необходимые модули для разработки'
      },
      text: 'Подключим необходимые модули для разработки'
    },
    {
      image: {
        src: feature3Image,
        alt: 'Сделаем мобильное приложение'
      },
      text: 'Сделаем мобильное приложение'
    }
  ]
  return (
    <section
      className={featuresBlock()}
    >
      <Container>
        <ul
          className={featuresBlock('list')}
        >
          {features.map((feature, index) => <li key={index}><Feature feature={feature} /></li>)}
        </ul>
      </Container>
    </section>
  )
}