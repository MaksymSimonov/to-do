import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'

import useStyles from './navbarStyles'

const Navbar = ({ }) => {
  const classes = useStyles()
  
  return (
    <div>
      Navbar
    </div>
  )
}

Navbar.propTypes = {
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
