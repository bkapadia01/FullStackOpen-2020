import React, { useState, cloneElement } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}> {props.text} </button>
)

const Display = (props) => (
  <div> Has {props.votes} votes. </div>
)

const Favorite = ({voted, fav}) => {
  if (voted === 0){
    return (
    <div>
      <p>No favorite votes. Please vote on a quote.</p>
    </div>
    )
  }
  console.log(voted)
  return (
    <div> 
      <div> {fav} </div>
      <div> Has {voted} votes. </div>
    </div>
  )
}

const App = (props) => {
  const arr = new Array(anecdotes.length).fill(0);
  const [selected, setSelected] = useState(0)
  const [allVotes, setVotes] = useState(arr)
  const maxVote = allVotes.indexOf(Math.max(...allVotes))
  
  const selectQuote = () => {
    const number = Math.floor(Math.random()*(anecdotes.length))
    setSelected(number)
  }

  const handleVote = () => {
    const copy = [...allVotes]
    copy[selected] += 1
    setVotes(copy)
  }


  return (
    <div>
      <h1> Anecdote Of The Day</h1>
      <div>
        {props.anecdotes[selected]}
        <Display  votes = {allVotes[selected] }/>
      </div>
      <div>
        <Button handleClick = {selectQuote} text="Next Anecdote"/>
        <Button handleClick = {handleVote} text="vote"/>
      </div>
      <h1>Anecdote with most votes: </h1>
      <div>
        <Favorite  fav= {props.anecdotes[maxVote]} voted = {allVotes[maxVote]} />
      </div>
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