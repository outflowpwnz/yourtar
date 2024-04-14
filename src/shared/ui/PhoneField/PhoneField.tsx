import { InputMask } from '@react-input/mask';
import { TField } from 'shared/types'
import { Field } from '../Field/Field'

type TProps = TField

export const PhoneField = (props: TProps) => {
  return (
    <InputMask
      replacement={{ _: /\d/ }}
      mask='+7-___-___-__-__'
      component={Field}
      {...props}
      inputMode='tel'
    />
  )
}