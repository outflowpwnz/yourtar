import { Button, Container, EButtonTheme, useBemCN } from "shared"
import './style.scss'

export const Main = () => {
  const mainBlock = useBemCN('main')
  return (
    <section className={mainBlock()}>
      <Container>
        <div className={mainBlock('content')}>
          <h1 className={mainBlock('title')}>
            Разработка сайтов и мобильных приложений{' '}
            <span className={mainBlock('title-accent')}>в 2 раза быстрее
            </span>
          </h1>
          <p
            className={mainBlock('text')}
          >
            Не тратьте время на разработку стандартного функционала ­– подключите наши решения и сосредоточьтесь на уникальных задачах вашего проекта!
          </p>
          <ul className={mainBlock('actions')}>
            <li className={mainBlock('actions-item')}>
              <Button label="Обсудить проект" />
            </li>
            <li className={mainBlock('actions-item')}>
              <Button label="Рассчитать стоимость" theme={EButtonTheme.SECONDARY} />
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}