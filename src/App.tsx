// import { Counter } from './Counter'
import './style.css'
import IMAGE from './react.png'
import LOGO from './react-2.svg'
import { Counter } from './Counter'
export const App = () => {
  const name = 'jemisha'
  const lname="hello"gfffgf
  return (
    <>
      <h1>
        hello React TypeScript Webpack Starter Template-{process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img src={IMAGE} alt="REACT LOGO"></img>
      <img src={LOGO} alt="REACT LOGO" height="200px" width="100px"></img>
      <Counter />
    </>
  )
}
