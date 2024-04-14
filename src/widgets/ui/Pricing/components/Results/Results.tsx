import { useBemCN, useBreakpoints } from "shared"
import './style.scss'

export const Results = () => {
  const resultsBlock = useBemCN('results')
  const { isMobile } = useBreakpoints()
  return (
    <div
      className={resultsBlock()}
    >
      <h3
        className={resultsBlock('title')}
      >
        Вы сэкономите с нами:
      </h3>
      <p
        className={resultsBlock('money')}
      >
        124 000 ₽
      </p>
      <table
        className={resultsBlock('table')}
      >
        <thead>
          <tr>
            <th>Модули</th>
            <th>Сроки</th>
            <th>{isMobile ? 'Цена у нас' : 'Стоимость у нас'}</th>
            <th>{isMobile ? 'Цена у других' : 'Стоимость у конкурентов'}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Мобильное приложение</td>
            <td>1 день</td>
            <td>1 500 ₽</td>
            <td>10 500 ₽</td>
          </tr>
          <tr>
            <td>Подмодуль 1</td>
            <td>2 дня</td>
            <td>2 300 ₽</td>
            <td>24 300 ₽</td>
          </tr>
          <tr>
            <td>Подмодуль 2</td>
            <td>1 день</td>
            <td>1 700 ₽</td>
            <td>16 700 ₽</td>
          </tr>
          <tr>
            <td>Подмодуль 3</td>
            <td>3 дня</td>
            <td>3 900 ₽</td>
            <td>37 900 ₽</td>
          </tr>
          <tr>
            <td>Подмодуль 4</td>
            <td>2 дня</td>
            <td>4 500 ₽</td>
            <td>48 500 ₽</td>
          </tr>
          <tr>
            <td>Ваш проект</td>
            <td>8 мес</td>
            <td>100 000 ₽</td>
            <td>100 000 ₽</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td
              className={resultsBlock('table-result-text')}
            >
              ИТОГО
            </td>
            <td>8.5 мес</td>
            <td
              className={resultsBlock('table-result-price')}
            >113 900 ₽</td>
            <td>237 900 ₽</td>
          </tr>
        </tfoot>
      </table>
      <p
        className={resultsBlock('text')}
      >
        *Калькулятор предоставляет только ориентировочную стоимость разработки веб-сайта.
      </p>
    </div>
  )
}