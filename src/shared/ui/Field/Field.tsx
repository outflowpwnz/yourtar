import { Dispatch, FormEvent } from 'react';
import { useBemCN } from 'shared';
import { ReactComponent as FieldErrorIcon } from 'shared/assets/icons/field-error.svg'
import './style.scss';
import { FadeInOut } from '../FadeInOut/FadeInOut';

export enum EFieldType {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email'
}

type TProps = {
  label: string;
  type?: EFieldType;
  id: string;
  value: string;
  onInput: Dispatch<React.SetStateAction<string>>
  isError?: boolean;
  errorMessage?: string;
}

export const Field = (props: TProps) => {
  const fieldBlock = useBemCN('field')
  const onInput = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement
    props.onInput(value)
  }
  return (
    <div
      className={fieldBlock()}
    >
      <input
        placeholder=' '
        id={props.id}
        value={props.value}
        onInput={onInput}
        className={fieldBlock('input')}
        type={props.type || EFieldType.TEXT}
      />
      <label
        htmlFor={props.id}
        className={fieldBlock('label')}
      >
        {props.label}
      </label>
      <FadeInOut isOpen={Boolean(props.isError)}>
        <div className={fieldBlock('error-icon')}>
          <FieldErrorIcon />
        </div>
      </FadeInOut>
      <FadeInOut isOpen={Boolean(props.isError)}>
        <span className={fieldBlock('error-message')}>
          {props.errorMessage}
        </span>
      </FadeInOut>
    </div>
  )
}