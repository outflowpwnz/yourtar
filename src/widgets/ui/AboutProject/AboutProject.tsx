import { Container, useBemCN, Text, VideoPlayer, EBlockId } from "shared"
import './style.scss'

export const AboutProject = () => {
  const aboutProjectBlock = useBemCN('about-project')
  return (
    <section
      id={EBlockId.ABOUT_PROJECT}
      className={aboutProjectBlock()}
    >
      <Container>
        <div className={aboutProjectBlock('content')}>
          <div className={aboutProjectBlock('text-content')}>
            <h2
              className={aboutProjectBlock('title')}
            >
              О проекте
            </h2>
            <Text>
              <p>Наш проект представляет собой сборку заранее реализованных комплексных программных решений, специально разработанных для внедрения в разрабатываемые проекты. Наши решения подходят для реализации веб-приложений, мобильных приложений, CLI и др. Благодаря нашему сервису, разработчики могут избежать необходимости тратить время на создание стандартного функционала, который уже был реализован множество раз.</p>
              <p>Подключив наше API, разработчики могут сразу начать использовать возможности «из коробки», что существенно ускоряет процесс разработки и упрощает поддержку проекта. Вместо того чтобы писать один и тот же код снова и снова, разработчики могут сконцентрироваться на создании уникального функционала, специфичного для конкретного проекта.</p>
              <p>Проект помогает сэкономить время и ресурсы команды разработчиков, позволяя им более эффективно работать над уникальными задачами проекта.</p>
            </Text>
          </div>
          <div
            className={aboutProjectBlock('video')}
          >
            <p
              className={aboutProjectBlock('video-label')}
            >
              Вы можете узнать подробности о проекте, посмотрев видео
            </p>
            <div
              className={aboutProjectBlock('video-player')}
            >
              <VideoPlayer
                url="https://file-examples.com/storage/fe0e2ce82f660c1579f31b4/2017/04/file_example_MP4_1920_18MG.mp4"
                poster="https://i.pinimg.com/originals/fa/d0/3f/fad03f3c645a776a5f251057a40e5f34.png"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}