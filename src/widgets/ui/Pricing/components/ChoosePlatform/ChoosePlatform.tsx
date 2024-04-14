import { TTab, Tabs, useBemCN } from "shared"
import './style.scss'

export const ChoosePlatform = () => {
  const choosePlatformBlock = useBemCN('choose-platform')
  const tabs: TTab[] = [
    {
      id: 1,
      label: 'Мобильное приложение'
    },
    {
      id: 2,
      label: 'Веб-сайт'
    }
  ]

  return (
    <div
      className={choosePlatformBlock()}
    >
      <h3
        className={choosePlatformBlock('title')}
      >
        Выберите тип платформы
      </h3>
      <div
        className={choosePlatformBlock('tabs')}
      >
        <Tabs
          activeTabId={1}
          tabs={tabs}
        />
      </div>
    </div>
  )
}