import { Dispatch } from 'react';
import { TRadioButton, RadioButton } from './components';
import { useBemCN } from 'shared';
export type { TRadioButton } from './components';

type TProps = {
  radioButtons: TRadioButton[];
  name: string;
  selectedValue: string;
  onChange: Dispatch<React.SetStateAction<string>>
}

export const RadioGroup = (props: TProps) => {
  const radioGroupBlock = useBemCN('radio-group');

  return (
    <div
      className={radioGroupBlock()}
    >
      {props.radioButtons.map((radioButton) =>
        <RadioButton
          key={radioButton.id}
          {...radioButton}
          selectedValue={props.selectedValue}
          onChange={props.onChange}
          name={props.name}
        />)
      }
    </div>
  )
}