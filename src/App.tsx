import React, { useState } from 'react';
import logo from './logo.svg';
import { ReactComponent as MySvg } from './logo.svg';
import './App.scss';
import { Button, EButtonTheme, Field } from './shared';

function App() {
  const [value, setValue] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MySvg></MySvg>
        <Button label='Купить' theme={EButtonTheme.PRIMARY} onClick={() => setIsOpen(!isOpen)} />
        <Field isError={isOpen} errorMessage="Некорректные символы" label='Введите имя' onInput={setValue} id='name' value={value} />
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
