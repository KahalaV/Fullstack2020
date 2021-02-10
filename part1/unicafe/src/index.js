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
  if (props.text==="positive") {
    return <tr><td>{props.text}</td><td>{props.value}</td><td>%</td></tr>
  } else {
    return <tr><td>{props.text}</td><td>{props.value}</td></tr>
  }
}

const Statistics = (props) => {
  const {good, neutral, bad, sum} = props.counters
  const total = good + neutral + bad
  if ( total > 0 ) {
    return (
        <table>
          <tbody>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="total" value={total} />
            <StatisticsLine text="average" value={(sum/total).toFixed(4)} />
            <StatisticsLine text="positive" value={(100*(good/total)).toFixed(2)} />
          </tbody>
        </table>
      )
  } else {
    return <div>No feedback given</div>
  }
  
}

const App = () => {
  const [counters, setCounters] = useState(
    { good: 0, neutral: 0, bad: 0, sum: 0}
  )

  const goodClick = () => {
    const increaseGood = { 
      ...counters,
      good: counters.good + 1,
      sum: counters.sum + 1
    }
    setCounters(increaseGood)
  }

  const neutralClick = () => {
    const increaseNeutral = { 
      ...counters,
      neutral: counters.neutral + 1
    }
    setCounters(increaseNeutral)
  }

  const badClick = () => {
    const increaseBad = { 
      ...counters,
      bad: counters.bad + 1,
      sum: counters.sum - 1
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

