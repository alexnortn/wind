import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"


// export default function About() {
//   return (
//     <div style={{ color: `teal` }}>
//         <Link to="/">Home</Link>
//         <Header headerText="About Moon"/>
//         <p>The moon is a mollusk.</p>
//     </div>
//   )
// }

export default function About() {
	return (
		<div>
			<Layout>
				<h1>About me</h1>
				<p>
					I’m good enough, I’m smart enough, and gosh darn it, people like me!
				</p>
			</Layout>
		</div>
	)
}