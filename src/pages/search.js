import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from '../components/Search'

//() evita chamar return
const SearchPage = () => (

  // Fragment => não gera divs desnecessarias = <> </>
  <Layout>
    <SEO title="Search" />
    <Search />
  </Layout>
)

export default SearchPage