import { AboutProject, Main, Features, Benefits, DiscussProject, FAQ, InteractionAlgorithm, Pricing } from "widgets"
import { useBemCN } from "shared"

import './style.scss'
export const Index = () => {
  const indexBlock = useBemCN('index')
  return (
    <div
      className={indexBlock()}
    >
      <div
        className={indexBlock('main')}
      >
        <Main />
      </div>
      <div
        className={indexBlock('features')}
      >
        <Features />
      </div>
      <div
        className={indexBlock('about-project')}
      >
        <AboutProject />
      </div>
      <div
        className={indexBlock('benefits')}
      >
        <Benefits />
      </div>
      <div
        className={indexBlock('pricing')}
      >
        <Pricing />
      </div>
      <div
        className={indexBlock('interaction-algorithm')}
      >
        <InteractionAlgorithm />
      </div>
      <div
        className={indexBlock('faq')}
      >
        <FAQ />
      </div>
      <div
        className={indexBlock('discuss-project')}
      >
        <DiscussProject />
      </div>
    </div>
  )
}