import { Container, useBemCN, Spoiler, EBlockId } from "shared"
import './style.scss'

export const FAQ = () => {
  const FAQBlock = useBemCN('faq')

  const FAQList = [
    {
      label: 'Какой-то длинный вопрос',
      value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error earum natus velit illo distinctio, molestias minima animi laborum eius officia! Impedit ut fugiat quaerat sit deserunt accusamus, autem molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error earum natus velit illo distinctio, molestias minima animi laborum eius officia! Impedit ut fugiat quaerat sit deserunt accusamus, autem molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error earum natus velit illo distinctio, molestias minima animi laborum eius officia! Impedit ut fugiat quaerat sit deserunt accusamus, autem molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error earum natus velit illo distinctio, molestias minima animi laborum eius officia! Impedit ut fugiat quaerat sit deserunt accusamus, autem molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error earum natus velit illo distinctio, molestias minima animi laborum eius officia! Impedit ut fugiat quaerat sit deserunt accusamus, autem molestiae.'
    },
    {
      label: 'Какой-то длинный вопрос',
      value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error earum natus velit illo distinctio, molestias minima animi laborum eius officia! Impedit ut fugiat quaerat sit deserunt accusamus, autem molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error earum natus velit illo distinctio, molestias minima animi laborum eius officia! Impedit ut fugiat quaerat sit deserunt accusamus, autem molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error earum natus velit illo distinctio, molestias minima animi laborum eius officia! Impedit ut fugiat quaerat sit deserunt accusamus, autem molestiae.'
    },
    {
      label: 'Какой-то длинный вопрос',
      value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error earum natus velit illo distinctio, molestias minima animi laborum eius officia! Impedit ut fugiat quaerat sit deserunt accusamus, autem molestiae.'
    },
    {
      label: 'Какой-то длинный вопрос',
      value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error earum natus velit illo distinctio, molestias minima animi laborum eius officia! Impedit ut fugiat quaerat sit deserunt accusamus, autem molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error earum natus velit illo distinctio, molestias minima animi laborum eius officia! Impedit ut fugiat quaerat sit deserunt accusamus, autem molestiae.'
    },
    {
      label: 'Какой-то длинный вопрос',
      value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error earum natus velit illo distinctio, molestias minima animi laborum eius officia! Impedit ut fugiat quaerat sit deserunt accusamus, autem molestiae.'
    },
    {
      label: 'Какой-то длинный вопрос',
      value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error earum natus velit illo distinctio, molestias minima animi laborum eius officia! Impedit ut fugiat quaerat sit deserunt accusamus, autem molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error earum natus velit illo distinctio, molestias minima animi laborum eius officia! Impedit ut fugiat quaerat sit deserunt accusamus, autem molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error earum natus velit illo distinctio, molestias minima animi laborum eius officia! Impedit ut fugiat quaerat sit deserunt accusamus, autem molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error earum natus velit illo distinctio, molestias minima animi laborum eius officia! Impedit ut fugiat quaerat sit deserunt accusamus, autem molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error earum natus velit illo distinctio, molestias minima animi laborum eius officia! Impedit ut fugiat quaerat sit deserunt accusamus, autem molestiae.'
    }
  ]

  return (
    <section
      id={EBlockId.FAQ}
      className={FAQBlock()}
    >
      <Container>
        <div className={FAQBlock('content')}>
          <h2
            className={FAQBlock('title')}
          >
            Часто задаваемые вопросы
          </h2>
          <ul
            className={FAQBlock('list')}
          >
            {FAQList.map((FAQItem, index) => <li key={index}><Spoiler {...FAQItem} /></li>)}
          </ul>
        </div>
      </Container>
    </section>
  )
}