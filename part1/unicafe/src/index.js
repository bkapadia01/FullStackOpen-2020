import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// const Display = ({good, neutral, bad}) => (

// )

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}> {text} </button>
)

const Statistic = ({text, value}) => {
  if (text === "Positive"){
    return (
      <div>
        <table>
          <tr>
            <td>{text}</td>
            <td> {value} %</td>
          </tr>
        </table>
      </div> )
  }
  return (
    <div>
      <table>
        <tr>
          <td>{text}</td>
          <td> {value}</td>
        </tr>
      </table>
    </div>
  )
}

const Statistics = ({good, bad, all, neutral})=> {
  if (all === 0 ){
    return (
      <div> No feedback give</div>
    )
  }

  return (
    <div>
      <Statistic text = "Good" value ={good} />
      <Statistic text = "Neutral" value ={neutral} />
      <Statistic text = "Bad" value ={bad} />
      <Statistic text = "All" value ={all} />
      <Statistic text = "Average" value ={((good*1) + (bad*(-1)))/all}/>
      <Statistic text = "Positive" value = {(good/all)*100}/>
    </div>
  )
}

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

      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />

      <h1>Statistics</h1>
      <Statistics all={all} good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
