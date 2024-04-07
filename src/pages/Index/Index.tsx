import { Main } from "widgets"
import { useBemCN } from "shared"
import { Features } from "widgets"

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
    </div>
  )
}