import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/"> Contact</Link>
      <Header headerText="Welcome to Brady Corps Photography" />
      <p>What a World</p>

      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
