import { Container, useBemCN, Field, Checkbox, CustomLink, Button, EBlockId, PhoneField } from 'shared'
import { useState } from 'react'
import './style.scss'

export const DiscussProject = () => {
  const discussProjectBlock = useBemCN('discuss-project')

  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [isAgreementChecked, setIsAgreementChecked] = useState<boolean>(false)

  const onFormSubmit = () => {
    alert('form submit')
  }

  const formId = 'discuss-project'
  const nameFieldId = 'discuss-project-name'
  const phoneFieldId = 'discuss-project-phone'
  const agreementFieldId = 'discuss-project-agreement'

  return (
    <section
      id={EBlockId.DISCUSS}
      className={discussProjectBlock()}
    >
      <Container>
        <div className={discussProjectBlock('content')}>
          <h2
            className={discussProjectBlock('title')}
          >
            Готовы обсудить проект?
          </h2>
          <p
            className={discussProjectBlock('subtitle')}
          >
            Оставьте заявку, мы свяжемся с вами и ответим на интересующие вопросы
          </p>
          <form
            id={formId}
            className={discussProjectBlock('form')}
            onSubmit={onFormSubmit}
          >
            <Field
              id={nameFieldId}
              value={name}
              onChange={setName}
              label='Введите имя'
            />
            <PhoneField
              id={phoneFieldId}
              value={phone}
              onChange={setPhone}
              label='Телефон'
            />
            <Checkbox
              id={agreementFieldId}
              isChecked={isAgreementChecked}
              onChecked={setIsAgreementChecked}
            >
              <>
                Даю согласие{' '}
                <CustomLink
                  href='https://google.com'
                  label='на обработку персональных данных'
                />
              </>
            </Checkbox>
            <Button
              type='submit'
              disabled={!isAgreementChecked}
              label='Оставить заявку'
            />
          </form>
        </div>
      </Container>
    </section>
  )
}