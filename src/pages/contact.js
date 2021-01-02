import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"

// export default function Contact() {
//   return (
//     <div style={{ color: `teal` }}>
//         <Link to="/">Home</Link>
//         <Header headerText="Contact" />
//         <p>Send us a message!</p>
//     </div>
//   )
// }

export default function Contact() {
  return (
    <div>
			<Layout>
				<h1>I'd love to talk! Email me at the address below</h1>
				<p>
					<a href="mailto:me@example.com">me@example.com</a>
				</p>
			</Layout>
    </div>
  )
}