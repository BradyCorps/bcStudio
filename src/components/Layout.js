import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        flexDirection: `column`,
        margin: `3rem`,
        textAlign: `center`,
      }}
    >
      <header style={{ marginBottom: `1.5rem` }}>
        <Link
          to="/"
          style={{ textShadow: `1px 1px 1px black`, backgroundImage: `none` }}
        >
          <h3 style={{ display: `inline` }}>brady corps studio</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">home</ListLink>
          <ListLink to="/portfolio/">portfolio</ListLink>
          <ListLink to="/contact/">contact</ListLink>
          <ListLink to="/about/">about</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}

export default Layout
