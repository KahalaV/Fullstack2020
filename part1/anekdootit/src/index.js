import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)

  const newSelection = () => {
    const newNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(newNumber)
  } 

  const newVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    //check for new max
    if ( newVotes[selected] > newVotes[mostVoted]) {
      setMostVoted(selected)
    }
    setVotes(newVotes)
  }

  return (
    <div>
      <Title text="Anecdote of the day" />
      {props.anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes
      <br></br>
      <Button text='vote' handleClick={newVote} />
      <Button text='next anecdote' handleClick={newSelection} />
      <Title text="Anecdote with the most votes" />
      {props.anecdotes[mostVoted]}
      <br></br>
      has {votes[mostVoted]} votes
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)