import { useState } from "react"
import React = require("react")

function IndexOptions() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        padding: 16
      }}>
      <h1>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <footer>Crafted by @PlasmoHQ</footer>{" "}
    </div>
  )
}

export default IndexOptions
