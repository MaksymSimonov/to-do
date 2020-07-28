import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'

import { searchCards } from '../../actions/cards'
import useStyles from './searchStyle'

const Search = ({ searchCards }) => {
  const classes = useStyles()

  const handleKeyUp = (e) => {
    const searchData = e.target.value
    searchCards(searchData)
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder='Search…'
        onKeyUp={handleKeyUp}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}

Search.propTypes = {
  searchCards: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  searchCards: (searchData) => dispatch(searchCards(searchData))
})

export default connect(null, mapDispatchToProps)(Search)
