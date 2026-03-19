import { useState } from 'react'

const Header = () => {
  return <h2>Give feedback</h2>
}

const Content = () => {
  return <h2>Statistics</h2>
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {

  if (props.good + props.neutral + props.bad === 0){
    <div>
  <p>No feedback given</p>
 </div>

  }

 
  return (
    <table>
      
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.good + props.neutral + props.bad} />
        <StatisticLine text="average" value={(props.good - props.bad) / props.good + props.neutral + props.bad} />
        <StatisticLine text="positive" value={(props.good * 100) / props.good + props.neutral + props.bad + " %"} />
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodclick = () => {
    setGood(good + 1)
  }

  const neutralclick = () => {
    setNeutral(neutral + 1)
  }

  const badclick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header />

      <Button handleClick={goodclick} text="good" />
      <Button handleClick={neutralclick} text="neutral" />
      <Button handleClick={badclick} text="bad" />

      <Content />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App