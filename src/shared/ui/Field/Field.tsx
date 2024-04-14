import { FormEvent, forwardRef } from 'react';
import { EFieldType, TField, useBemCN } from 'shared';
import { ReactComponent as FieldErrorIcon } from 'shared/assets/icons/field-error.svg'
import './style.scss';
import { FadeInOut } from '../FadeInOut/FadeInOut';

type TProps = TField

export const Field = forwardRef<HTMLInputElement, TProps>((props: TProps, forwardedRef) => {
  const fieldBlock = useBemCN('field')
  const onChange = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement
    props.onChange?.(value)
  }
  return (
    <div
      className={fieldBlock({ theme: props.theme })}
    >
      <input
        ref={forwardedRef}
        inputMode={props.inputMode}
        placeholder=' '
        id={props.id}
        value={props.value}
        onChange={onChange}
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
})