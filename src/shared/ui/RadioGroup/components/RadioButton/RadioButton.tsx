import { Dispatch } from "react";
import { useBemCN } from "shared/hooks";
import './style.scss';

export type TRadioButton = {
  value: string;
  id: string;
  label?: string;
  isDisabled?: boolean;
}

type TProps = {
  name: string;
  selectedValue: string;
  onChange: Dispatch<React.SetStateAction<string>>
} & TRadioButton

export const RadioButton = (props: TProps) => {
  const radiobuttonBlock = useBemCN('radio-button');

  const onChange = () => {
    props.onChange(props.value)
  }

  return (
    <div
      className={radiobuttonBlock()}
    >
      <input
        className={radiobuttonBlock('input')}
        type="radio"
        name={props.name}
        id={props.id}
        onChange={onChange}
        disabled={props.isDisabled}
      />
      <label
        className={radiobuttonBlock('label')}
        htmlFor={props.id}

      >
        {props.label}
      </label>
    </div>
  )
}