import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        width: "400px", // Adjust width as necessary
        height: "200px", // Adjust height as necessary
        overflow: "hidden" // Ensures content doesn't overflow the container
        //boxSizing: "border-box"
      }}>
      <h1>
        This is plasmo <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>
      <p>{data}</p>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="https://linktr.ee/rustyrishi">
        <footer>Crafted by @rustyrishii</footer>
      </a>
    </div>
  )
}

export default IndexPopup
