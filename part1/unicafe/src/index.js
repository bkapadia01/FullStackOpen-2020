import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({good, neutral, bad, all}) => (
  <div>
    <div> Good : {good}</div>
    <div> Neutral : {neutral}</div>
    <div> Bad : {bad} </div>
    <div> all : {all} </div>
    <div> average : {((good*1) + (bad*(-1)))/all} </div>
    <div> positive : {(good/all)*100}% </div>
  </div>
)

const Button = ({onClick, text}) => (
  <button onClick={onClick}> {text} </button>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
    setAll(all+1)
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setAll(all+1)
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setAll(all+1)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />

      <h1>Statistics</h1>
      <div>
        <div>Average: </div>
      </div>

      <Display good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
