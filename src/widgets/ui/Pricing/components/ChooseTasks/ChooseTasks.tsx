import { Button, CheckboxSelect, EButtonTheme, TCheckbox, useBemCN, useBreakpoints } from "shared"
import './style.scss'
import { useState } from "react"

export const ChooseTasks = () => {
  const chooseTasksBlock = useBemCN('choose-tasks')
  const [isRestShow, setIsRestShow] = useState<boolean>(false)
  const { isMobile } = useBreakpoints()

  const showRest = () => {
    setIsRestShow(true)
  }

  const [checkboxList1, setCheckboxList1] = useState<Omit<TCheckbox, 'onChecked'>[]>([
    {
      id: '11',
      isChecked: false,
      label: 'Подмодуль1',
    },
    {
      id: '12',
      isChecked: false,
      label: 'Подмодуль3',
    },
    {
      id: '13',
      isChecked: false,
      label: 'Подмодуль3',
    }
  ])
  const [checkboxList2, setCheckboxList2] = useState<Omit<TCheckbox, 'onChecked'>[]>([
    {
      id: '21',
      isChecked: false,
      label: 'Подмодуль1',
    },
    {
      id: '22',
      isChecked: false,
      label: 'Подмодуль3',
    },
    {
      id: '23',
      isChecked: false,
      label: 'Подмодуль3',
    }
  ])
  const [checkboxList3, setCheckboxList3] = useState<Omit<TCheckbox, 'onChecked'>[]>([
    {
      id: '31',
      isChecked: false,
      label: 'Подмодуль1',
    },
    {
      id: '32',
      isChecked: false,
      label: 'Подмодуль3',
    },
    {
      id: '33',
      isChecked: false,
      label: 'Подмодуль3',
    }
  ])
  const [checkboxList4, setCheckboxList4] = useState<Omit<TCheckbox, 'onChecked'>[]>([
    {
      id: '41',
      isChecked: false,
      label: 'Подмодуль1',
    },
    {
      id: '42',
      isChecked: false,
      label: 'Подмодуль3',
    },
    {
      id: '43',
      isChecked: false,
      label: 'Подмодуль3',
    }
  ])
  const [checkboxList5, setCheckboxList5] = useState<Omit<TCheckbox, 'onChecked'>[]>([
    {
      id: '51',
      isChecked: false,
      label: 'Подмодуль1',
    },
    {
      id: '52',
      isChecked: false,
      label: 'Подмодуль3',
    },
    {
      id: '53',
      isChecked: false,
      label: 'Подмодуль3',
    }
  ])
  const [checkboxList6, setCheckboxList6] = useState<Omit<TCheckbox, 'onChecked'>[]>([
    {
      id: '61',
      isChecked: false,
      label: 'Подмодуль1',
    },
    {
      id: '62',
      isChecked: false,
      label: 'Подмодуль3',
    },
    {
      id: '63',
      isChecked: false,
      label: 'Подмодуль3',
    }
  ])
  const [checkboxList7, setCheckboxList7] = useState<Omit<TCheckbox, 'onChecked'>[]>([
    {
      id: '71',
      isChecked: false,
      label: 'Подмодуль1',
    },
    {
      id: '72',
      isChecked: false,
      label: 'Подмодуль3',
    },
    {
      id: '73',
      isChecked: false,
      label: 'Подмодуль3',
    }
  ])
  const [checkboxList8, setCheckboxList8] = useState<Omit<TCheckbox, 'onChecked'>[]>([
    {
      id: '81',
      isChecked: false,
      label: 'Подмодуль1',
    },
    {
      id: '82',
      isChecked: false,
      label: 'Подмодуль3',
    },
    {
      id: '83',
      isChecked: false,
      label: 'Подмодуль3',
    }
  ])
  const [checkboxList9, setCheckboxList9] = useState<Omit<TCheckbox, 'onChecked'>[]>([
    {
      id: '91',
      isChecked: false,
      label: 'Подмодуль1',
    },
    {
      id: '92',
      isChecked: false,
      label: 'Подмодуль3',
    },
    {
      id: '93',
      isChecked: false,
      label: 'Подмодуль3',
    }
  ])
  const [checkboxList10, setCheckboxList10] = useState<Omit<TCheckbox, 'onChecked'>[]>([
    {
      id: '101',
      isChecked: false,
      label: 'Подмодуль1',
    },
    {
      id: '102',
      isChecked: false,
      label: 'Подмодуль3',
    },
    {
      id: '103',
      isChecked: false,
      label: 'Подмодуль3',
    }
  ])

  return (
    <div
      className={chooseTasksBlock()}
    >
      <h3
        className={chooseTasksBlock('title')}
      >
        Выберите бизнес-задачи для вашего проекта
      </h3>
      <ul
        className={chooseTasksBlock('selects')}
      >
        <li>
          <CheckboxSelect
            label="Модуль 1"
            checkboxes={checkboxList1}
            onChecked={setCheckboxList1}
          />
        </li>
        <li>
          <CheckboxSelect
            label="Модуль 2"
            checkboxes={checkboxList2}
            onChecked={setCheckboxList2}
          />
        </li>
        <li>
          <CheckboxSelect
            label="Модуль 3"
            checkboxes={checkboxList3}
            onChecked={setCheckboxList3}
          />
        </li>
        <li>
          <CheckboxSelect
            label="Модуль 4"
            checkboxes={checkboxList4}
            onChecked={setCheckboxList4}
          />
        </li>
        <li>
          <CheckboxSelect
            label="Модуль 5"
            checkboxes={checkboxList5}
            onChecked={setCheckboxList5}
          />
        </li>
        {(!isMobile || isRestShow) && (
          <>
            <li>
              <CheckboxSelect
                label="Модуль 6"
                checkboxes={checkboxList6}
                onChecked={setCheckboxList6}
              />
            </li>
            <li>
              <CheckboxSelect
                label="Модуль 7"
                checkboxes={checkboxList7}
                onChecked={setCheckboxList7}
              />
            </li>
            <li>
              <CheckboxSelect
                label="Модуль 8"
                checkboxes={checkboxList8}
                onChecked={setCheckboxList8}
              />
            </li>
            <li>
              <CheckboxSelect
                label="Модуль 9"
                checkboxes={checkboxList9}
                onChecked={setCheckboxList9}
              />
            </li>
            <li>
              <CheckboxSelect
                label="Модуль 10"
                checkboxes={checkboxList10}
                onChecked={setCheckboxList10}
              />
            </li>
          </>
        )}
      </ul>
      {
        isMobile && !isRestShow && (
          <div
            className={chooseTasksBlock('button')}
          >
            <Button
              theme={EButtonTheme.QUATERNARY}
              label="Показать все модули"
              onClick={showRest}
            ></Button>
          </div>
        )
      }
    </div>
  )
}