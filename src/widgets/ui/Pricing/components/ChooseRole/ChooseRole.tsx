import { TTab, Tabs, useBemCN } from "shared"
import { ReactComponent as BriefcaseIcon } from "shared/assets/icons/briefcase.svg"
import { ReactComponent as LaptopIcon } from "shared/assets/icons/laptop.svg"
import './style.scss'

export const ChooseRole = () => {
  const chooseRoleBlock = useBemCN('choose-role')
  const tabs: TTab[] = [
    {
      id: 1,
      label: 'Разработчик',
      icon: LaptopIcon
    },
    {
      id: 2,
      label: 'Клиент',
      icon: BriefcaseIcon
    }
  ]
  return (
    <div
      className={chooseRoleBlock()}
    >
      <h3
        className={chooseRoleBlock('title')}
      >
        Выберите свою роль в данном проекте
      </h3>
      <div
        className={chooseRoleBlock('tabs')}
      >
        <Tabs
          activeTabId={1}
          tabs={tabs}
        />
      </div>
    </div>
  )
}