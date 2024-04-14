import { FadeInOut, TCheckbox, useBemCN } from 'shared';
import { ReactComponent as CheckIcon } from 'shared/assets/icons/check.svg';
import './style.scss';

type TProps = TCheckbox

export const Checkbox = (props: TProps) => {
  const checkboxBlock = useBemCN('checkbox');

  const onChange = () => {
    props.onChecked(!props.isChecked)
  }

  return (
    <div
      className={checkboxBlock()}
    >
      <input
        type="checkbox"
        id={props.id}
        onChange={onChange}
        checked={props.isChecked}
        className={checkboxBlock('input')}
        disabled={props.isDisabled}
      />
      <label
        htmlFor={props.id}
        className={checkboxBlock('label')}
      >
        <FadeInOut isOpen={props.isChecked}>
          <div
            className={checkboxBlock('icon-wrapper')}
          >
            <CheckIcon />
          </div>
        </FadeInOut>
        <p
          className={checkboxBlock('children')}
        >
          {props.label || props.children}
        </p>
      </label>
    </div>
  )
}