import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <>
      <h1> {props.course} </h1>
    </>
  )
}

const Part = (props) => {
  return(
    <>
      <p> {props.part} {props.exercise}</p>
    </>
  )
}

const Content = (props) => {
  return(
    <>
      <Part part={props.names[0].part} exercise={props.names[0].exercises} />
      <Part part={props.names[1].part} exercise={props.names[1].exercises} />
      <Part part={props.names[2].part} exercise={props.names[2].exercises} />
    </>
  )
}

const Total = (props) => {
  return(
    <>
        <p> Number of exercises {props.totals[0].exercises + props.totals[1].exercises + props.totals[2].exercises} </p>
    </>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        part: 'Fundamentals of React',
        exercises: 10
      },
      {
        part: 'Using props to pass data',
        exercises: 7
      },
      {
        part: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name}/>
      <Content names={course.parts} />
      <Total totals={course.parts}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))