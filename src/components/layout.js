import React from "react"
import { Link } from "gatsby"

import "./layout.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
			<header style={{ marginBottom: `1.5rem` }}>
				<Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        	<h3>ThisIsUS</h3>
				</Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
					<ListLink to="/">Home</ListLink>
					<ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
				</ul>
			</header>

			{children}
			
			<footer style={{ display: `flex`, position: `absolute`, bottom: 0 }}>
				<p>2021 Alex Norton</p>
        <ul style={{ listStyle: `none`, float: `right` }}>
					<ListLink to="/">Link 1</ListLink>
					<ListLink to="/about/">Link 2</ListLink>
          <ListLink to="/contact/">Link 3</ListLink>
				</ul>
			</footer>
    </div>
  )
}