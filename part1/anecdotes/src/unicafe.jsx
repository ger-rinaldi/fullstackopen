import { useState } from 'react';

const Header = ({ content }) => <h1>{content}</h1>;

const Button = ({ text, clickHandler }) => (
  <button onClick={clickHandler}>{text}</button>
);

const StatisticLine = ({ text, total }) => (
  <tr>
    <td>{text}</td>
    <td>{total}</td>
  </tr>
);

const Statistics = ({ reviewTypesArray, positiveTotal }) => {
  if (!reviewTypesArray.total) {
    return <p>No feedback given</p>;
  }

  const positivePercentage = reviewTypesArray.total
    ? (positiveTotal / reviewTypesArray.total) * 100
    : 0;

  return (
    <table>
      <tbody>
        {reviewTypesArray.map((reviewType, index) => {
          return (
            <StatisticLine
              key={index}
              text={reviewType.name}
              total={reviewType.total}
            />
          );
        })}
        <StatisticLine text='all' total={reviewTypesArray.total} />
        <StatisticLine text='average' total={reviewTypesArray.average} />
        <StatisticLine text='positive' total={positivePercentage + ' %'} />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const reviewTypes = [
    { name: 'good', handler: () => setGood(good + 1), total: good },
    { name: 'neutral', handler: () => setNeutral(neutral + 1), total: neutral },
    { name: 'bad', handler: () => setBad(bad + 1), total: bad },
  ];

  reviewTypes.total = neutral + bad + good;
  reviewTypes.average = reviewTypes.total
    ? (good - bad) / reviewTypes.total
    : 0;

  return (
    <div>
      <Header content='give feedback' />
      {reviewTypes.map((reviewType, index) => {
        return (
          <Button
            key={index}
            text={reviewType.name}
            clickHandler={reviewType.handler}
          />
        );
      })}
      <Header content='statistics' />
      <Statistics reviewTypesArray={reviewTypes} positiveTotal={good} />
    </div>
  );
};

export default App;
