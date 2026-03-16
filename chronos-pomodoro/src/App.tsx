import './styles/theme.css'
import './styles/global.css'
import { Heading } from "../components/Heading.tsx";
import TomatoIcon from './assets/tomato.svg?react'

export function App() {
  return (
    <>
      <Heading>
        Hello World
        <button>
          <TomatoIcon/>
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit
      </p>
    </>
  )
}
