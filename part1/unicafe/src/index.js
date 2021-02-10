import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (<div> <h1>{props.headerText}</h1> </div>)

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticsLine = (props) => {
  if (props.text=="positive") {
    return <div>{props.text} {props.value} %</div>
  } else {
    return <div>{props.text} {props.value}</div>
  }
}

const Statistics = (props) => {
    if ( props.counters.total > 0 ) {
      return (
        <div>
          <StatisticsLine text="good" value={props.counters.good} />
          <StatisticsLine text="neutral" value={props.counters.neutral} />
          <StatisticsLine text="bad" value={props.counters.bad} />
          <StatisticsLine text="total" value={props.counters.total} />
          <StatisticsLine text="average" value={props.counters.average.toFixed(4)} />
          <StatisticsLine text="positive" value={(100 * props.counters.positive).toFixed(2)} />
        </div> 
      )
    } else {
      return <div>No feedback given</div>
    }
}

const App = () => {
  const [counters, setCounters] = useState(
    { good: 0, neutral: 0, bad: 0, total: 0, sum: 0, average: 0, positive: 0}
  )

  const goodClick = () => {
    const increaseGood = { 
      ...counters,
      good: counters.good + 1,
      total: counters.total + 1,
      sum: counters.sum + 1,
      average: (counters.sum + 1) / (counters.total + 1),
      positive: (counters.good + 1) / (counters.total + 1)
    }
    setCounters(increaseGood)
  }

  const neutralClick = () => {
    const increaseNeutral = { 
      ...counters,
      neutral: counters.neutral + 1,
      total: counters.total + 1,
      average: counters.sum / (counters.total + 1),
      positive: counters.good / (counters.total + 1)
    }
    setCounters(increaseNeutral)
  }

  const badClick = () => {
    const increaseBad = { 
      ...counters,
      bad: counters.bad + 1,
      total: counters.total + 1,
      sum: counters.sum - 1,
      average: (counters.sum - 1) / (counters.total + 1),
      positive: counters.good / (counters.total + 1)
    }
    setCounters(increaseBad)
  }


  return (
  <div>
    <Header headerText="give feedback" />

    <Button
      handleClick={goodClick}
      text='good'
    />
    <Button
      handleClick={neutralClick}
      text='neutral'
    />
    <Button
      handleClick={badClick}
      text='bad'
    />
    
    <Header headerText="statistics" />

    <Statistics counters={counters}/>

  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

