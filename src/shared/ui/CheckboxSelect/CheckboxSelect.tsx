import { Dispatch, useMemo } from "react";
import { Checkbox, Select, TCheckbox, useBemCN } from "shared";
import './style.scss';

type TProps = {
  label: string;
  checkboxes: Omit<TCheckbox, 'onChecked'>[]
  onChecked: Dispatch<React.SetStateAction<Omit<TCheckbox, 'onChecked'>[]>>
}

export const CheckboxSelect = (props: TProps) => {
  const checkboxSelectBlock = useBemCN('checkbox-select')

  const selectedCheckboxes = useMemo(() => {
    return props.checkboxes.filter(({ isChecked }) => isChecked).map(({ label }) => label).join(', ')
  }, [props.checkboxes])

  const onCheckboxSelect = (id: string) => (nextIsChecked: boolean) => {
    props.onChecked((prevList) => prevList.map((item) => ({ ...item, isChecked: item.id === id ? nextIsChecked : item.isChecked })))
  }

  return (
    <Select
      label={props.label}
      value={selectedCheckboxes}
    >
      <ul
        className={checkboxSelectBlock()}
      >
        {props.checkboxes.map((item) =>
          <li className={checkboxSelectBlock('item')}>
            <Checkbox {...item} onChecked={(nextIsChecked: boolean) => onCheckboxSelect(item.id)(nextIsChecked)} />
          </li>)
        }
      </ul>
    </Select>
  )
}