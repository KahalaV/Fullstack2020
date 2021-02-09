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

const App = () => {
  const [counters, setCounters] = useState(
    { good: 0, neutral: 0, bad: 0 }
  )

  const goodClick = () => {
    const increaseGood = { 
      ...counters,
      good: counters.good + 1
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
      bad: counters.bad + 1
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

    <div>good {counters.good}</div>
    <div>neutral {counters.neutral}</div>
    <div>bad {counters.bad}</div>

  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

