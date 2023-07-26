import { useMicVAD } from "@k4ung/vad-react"
import React, { useEffect } from "react"

function Test() {
  const vad = useMicVAD({})

  useEffect(() => {
    // return () => {
    //   vad.destroy()
    // }
  }, [])
  return (
    <div>
      <h6>Listening</h6>
      {!vad.listening && "Not"} listening
      <h6>Loading</h6>
      {!vad.loading && "Not"} loading
      <h6>Errored</h6>
      {!vad.errored && "Not"} errored
      <h6>User Speaking</h6>
      {!vad.userSpeaking && "Not"} speaking
      <h6>Start/Pause</h6>
      <button onClick={vad.pause}>Pause</button>
      <button onClick={vad.start}>Start</button>
      <button onClick={vad.destroy}>Destroy</button>
    </div>
  )
}

export default Test
