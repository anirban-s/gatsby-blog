import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <table>
      <tr>
        <td>
          <h1>Submit your email. I will contact you.</h1>
          <input type='email'></input>
          <br></br>
          <br></br>
          <button type='submit'>Submit</button>
          <br></br>
          <br></br>
          <h4>Follow me on github <a href='https://github.com/anirban-s'>here</a></h4>
        </td>
      </tr>
    </table>
    
    <div style={{ textAlign: 'center', fontSize: 30}}>
      <a href='https://github.com/anirban-s'>
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
      <a href='https://twitter.com/AnirbanSarkar7'>
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </a>
      <a href='https://www.linkedin.com/in/anirban-sarkar-5b0a4a95/'>
        <FontAwesomeIcon icon={["fab", "linkedin"]} />
      </a>
      <a href='https://facebook.com/anirban434'>
        <FontAwesomeIcon icon={["fab", "facebook"]} />
      </a>
    </div>
  </Layout>
)

export default ContactPage
