import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"

//() evita chamar return
const AboutPage = () => (

  // Fragment => não gera divs desnecessarias = <> </>
  <Layout>
    <SEO title="About" />
    <h1>Aboute Page</h1>
  </Layout>
)

export default AboutPage