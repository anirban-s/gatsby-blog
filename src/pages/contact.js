import React from "react"

import Layout from "../components/layout"

const ContactPage = () => (
  <Layout>
    <h1>Submit your email. I will contact you.</h1>
    <input type='email'></input>
    <br></br>
    <br></br>
    <button type='submit'>Submit</button>
    <br></br>
    <h4>Follow me on twitter <a href=''>here</a></h4>
  </Layout>
)

export default ContactPage
