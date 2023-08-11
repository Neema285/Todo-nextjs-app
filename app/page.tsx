import React from "react"
import ClientComponent from "./components/check/Client"
import Sidebar from "./components/component/Sidebar"

function HomePage() {
  return (
    <div>
      <header><title> Todo app </title></header>
      <h1>It&apos;s Great to have you here!</h1>
      <p> welcome to your todo app</p>
      {/* Using the client component */}
      (<ClientComponent />)
      <Sidebar/>
     
      </div>
      )
}

export default HomePage;











