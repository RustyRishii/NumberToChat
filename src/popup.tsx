import { useState } from "react"

import React = require("react")

function IndexPopup() {
  const [data, setData] = useState("")
  const [wordCount, setWordCount] = useState<number>(0)

  const handleChange = (e) => {
    const value = e.target.value
    if (/^\d{0,10}$/.test(value)) {
      setData(value)
      setWordCount(value.length)
    }
  }

  const openWhatsApp = () => {
    if (data.length === 10) {
      window.open(`https://web.whatsapp.com/send?phone=91${data}`, "_blank")
    } else {
      alert("Please enter a valid 10-digit phone number.")
    }
  }

  const openTelegram = () => {
    if (data.length === 10) {
      window.open(`https://t.me/+91${data}`, "_blank")
    } else {
      alert("Please enter a valid 10-digit phone number.")
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        padding: "16px",
        width: "400px",
        height: "250px",
        backgroundColor: "#141414",
        color: "white",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
      }}>
      <h1 style={{ marginBottom: "20px" }}>Enter phone number</h1>

      <input
        autoFocus={true}
        style={{
          borderRadius: 5,
          width: 200,
          fontSize: 20,
          textAlign: "center",
          padding: "10px",
          border: "1px solid #ccc",
          outline: "none",
          appearance: "textfield",
          WebkitAppearance: "none",
          MozAppearance: "textfield"
        }}
        value={data}
        pattern="\d{10}"
        onChange={handleChange}
        //onKeyDown={handleKeyDown}
      />
      <p
        style={{
          fontSize: 10,
          color: "white"
        }}>
        {wordCount}/10
      </p>
      <div
        style={{
          flexDirection: "row"
        }}>
        <button
          //onClick={handleClick}
          onClick={openWhatsApp}
          style={{
            backgroundColor: "#25D366",
            color: "white",
            border: "none",
            borderRadius: 5,
            padding: "10px ",
            margin: "1px",
            fontSize: 15,
            cursor: "pointer"
          }}>
          Open WhatsApp
        </button>
        <button
          onClick={openTelegram}
          style={{
            backgroundColor: "#24A1DE",
            color: "white",
            border: "none",
            borderRadius: 5,
            padding: "10px",
            fontSize: 15,
            margin: "5px",
            cursor: "pointer"
          }}>
          Open Telegram
        </button>
      </div>

      <p>Note:- you must be logged into WhatsApp & Telegram web</p>
      <footer style={{ marginTop: "auto", fontSize: "15px", color: "red" }}>
        Crafted by
        <a
          href="https://linktr.ee/rustyrishi"
          style={{
            textDecoration: "none",
            color: "tomato"
          }}
          target="_blank">
          @rustyrishi
        </a>
      </footer>
    </div>
  )
}

export default IndexPopup
