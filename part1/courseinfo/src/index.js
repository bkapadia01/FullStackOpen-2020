import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <>
      <h1> {props.course.name} </h1>
    </>
  )
}

const Part = (props) => {
  return(
    <>
      <p> {props.part.name} {props.part.exercises}</p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <>
      <Part part = {props.parts.parts[0]} />
      <Part part = {props.parts.parts[1]} />
      <Part part = {props.parts.parts[2]} />
    </>
  )
}

const Total = (props) => {
  return(
    <>
        <p> Number of exercises {props.totals.parts[0].exercises + props.totals.parts[1].exercises + props.totals.parts[2].exercises } </p>
    </>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={course}/>
      <Total totals={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))