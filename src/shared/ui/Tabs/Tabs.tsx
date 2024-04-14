import { useBemCN } from "shared/hooks"
import { TTab } from "shared/types"
import { useState } from "react";
import './style.scss'

type TProps = {
  tabs: TTab[];
  activeTabId: number;
}

export const Tabs = (props: TProps) => {
  const tabsBlock = useBemCN('tabs')
  const [activeTabId, setActiveTabId] = useState<number>(props.activeTabId)
  const onClick = (tabId: number) => {
    if (activeTabId !== tabId) {
      setActiveTabId(tabId)
    }
  }
  return (
    <ul className={tabsBlock()}>
      {props.tabs.map((tab) =>
        <li
          className={tabsBlock('item')}
        >
          <button
            type="button"
            onClick={() => onClick(tab.id)}
            className={tabsBlock('tab', { active: tab.id === activeTabId })}
          >
            {tab.icon && (
              <div
                className={tabsBlock('tab-icon')}
              >
                {<tab.icon />}
              </div>
            )}
            <p
              className={tabsBlock('tab-label')}
            >
              {tab.label}
            </p>
          </button>
        </li>
      )}
    </ul>
  )
}