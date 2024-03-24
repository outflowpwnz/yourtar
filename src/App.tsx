import React, { useState } from 'react';
import './App.scss';
import { Button, Checkbox, EButtonSize, EButtonTheme, Field, RadioGroup, Spoiler, TRadioButton } from 'shared';
function App() {
  const [value2, setValue2] = useState<string>('Валерия');
  const [value, setValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const radioButtons: Array<TRadioButton> = [
    {
      id: '1',
      value: '1',
    },
    {
      id: '2',
      value: '2',
    },
    {
      id: '3',
      value: '3',
      label: '',
    },
    {
      id: '4',
      value: '4',
      isDisabled: true,
    },
  ];

  const [radioValue, setRadioValue] = useState<string>('');
  const radioGroupName = 'radio-group1';
  const [isChecked, setIsChecked] = useState<boolean>(!false);
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Button label='Купить' theme={EButtonTheme.PRIMARY} onClick={() => setIsOpen(!isOpen)} />
          <Button label='Купить' theme={EButtonTheme.PRIMARY} onClick={() => setIsOpen(!isOpen)} disabled />

          <Button label='Расчитать стоимость' theme={EButtonTheme.SECONDARY} onClick={() => setIsOpen(!isOpen)} />
          <Button label='Расчитать стоимость' theme={EButtonTheme.SECONDARY} onClick={() => setIsOpen(!isOpen)} disabled />

          <Button label='Купить' theme={EButtonTheme.PRIMARY} size={EButtonSize.SMALL} onClick={() => setIsOpen(!isOpen)} />
          <Button label='Купить' theme={EButtonTheme.PRIMARY} size={EButtonSize.SMALL} onClick={() => setIsOpen(!isOpen)} disabled />

          <Button label='Расчитать стоимость' theme={EButtonTheme.SECONDARY} size={EButtonSize.SMALL} onClick={() => setIsOpen(!isOpen)} />
          <Button label='Расчитать стоимость' theme={EButtonTheme.SECONDARY} size={EButtonSize.SMALL} onClick={() => setIsOpen(!isOpen)} disabled />

          <Button label='Купить' theme={EButtonTheme.TERTIARY} onClick={() => setIsOpen(!isOpen)} />
          <Button label='Купить' theme={EButtonTheme.TERTIARY} onClick={() => setIsOpen(!isOpen)} disabled />

          <Button label='Кнопка' theme={EButtonTheme.QUATERNARY} onClick={() => setIsOpen(!isOpen)} />
          <Button label='Кнопка' theme={EButtonTheme.QUATERNARY} onClick={() => setIsOpen(!isOpen)} disabled />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          <Field isError={true} errorMessage="Некорректные символы" label='Введите имя' onInput={setValue} id='name' value={value} />
          <Field isError={isOpen} errorMessage="Некорректные символы" label='Введите имя' onInput={setValue2} id='name2' value={value2} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Checkbox isChecked={isChecked} onChecked={setIsChecked} id='somecheckbox1' />
          <Checkbox isChecked={!isChecked} onChecked={setIsChecked} id='somecheckbox2' />
          <Checkbox isChecked={isChecked} onChecked={setIsChecked} id='somecheckbox3' isDisabled />
        </div>
        <div>
          <RadioGroup
            radioButtons={radioButtons}
            selectedValue={radioValue}
            onChange={setRadioValue}
            name={radioGroupName}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Spoiler
            label='Какой-то длинный вопрос'
            value='Ответ'
          />
          <Spoiler
            label='Какой-то длинный вопрос'
            value='Какой-то длинный Ответ Какой-то длинный Ответ Какой-то длинный Ответ Какой-то длинный Ответ Какой-то длинный Ответ Какой-то длинный Ответ Какой-то длинный Ответ Какой-то длинный Ответ'
          />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </header>
    </div >
  );
}

export default App;
