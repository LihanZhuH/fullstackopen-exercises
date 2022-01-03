import { tab } from '@testing-library/user-event/dist/tab'
import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Display = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.count}</td>
    </tr>
  )
}

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const totalCount = good + neutral + bad

  if (totalCount == 0) {
    return (
      <div>
        <p>No feedback has been given.</p>
      </div>
    )
  }

  const average = (good - bad) / totalCount
  const positivePercentage = (good / parseFloat(totalCount) * 100).toFixed(2)

  return (
    <table>
      <tbody>
        <Display text="Good" count={good} />
        <Display text="Neutral" count={neutral} />
        <Display text="Bad" count={bad} />
        <Display text="Average" count={average} />
        <Display text="Positive" count={(totalCount == 0 ? 0 : positivePercentage)+ "%"} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
  
  

  return (
    <div>
      <Header text="Give feedback" />
      <Button onClick={increaseGood} text="Good" />
      <Button onClick={increaseNeutral} text="Neutral" />
      <Button onClick={increaseBad} text="Bad" />
      <Header text="Stats" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App