import React from "react"
import PropTypes from "prop-types"
import Profile from "../Profile"

import styled from 'styled-components'


const Layout = ({ children }) => {
  return (
    <>
      <aside>
        <Profile></Profile>
      </aside>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
