import React, { useEffect, useState } from "react"
import { createRoot } from "react-dom/client"
import Test from "./test"

console.log("demo of @k4ung/vad-react")

const container = document.getElementById("root")

console.log("found container", container)
// @ts-ignore
const root = createRoot(container)
root.render(<App />)

function App() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>toggle</button>
      {show && <Test />}
    </div>
  )
}
