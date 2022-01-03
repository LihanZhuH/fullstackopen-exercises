import React from 'react'

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = ({ parts }) => {
  return (
    parts.map(part => 
      <Part key={part.id} part={part} />
    )
  )
}

const Total = ({ total }) => {
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  )
}

const Course = ({ course }) => {
  console.log(course.parts)
  const total = course.parts.reduce((s, p) => s + p.exercises, 0)
  console.log(total)
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  )
}

export default Course