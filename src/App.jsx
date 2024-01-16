import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Dashboard from "./components/Dashboard/Dashboard"
import Collections from "./components/Collections/Collections"
import Offers from "./components/Offers/Offers"

function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <Collections />
      <Offers />
    </div>
  )
}

export default App
