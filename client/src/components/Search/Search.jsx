import React, { Fragment, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isEmpty, get } from 'lodash'
import { Link } from 'react-router-dom'
import { TextField, CircularProgress, Avatar } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import SearchIcon from '@material-ui/icons/Search'

// import { searchData } from '../../actions/search'


import useStyles from './searchStyle'


const Search = ({  }) => {
  const classes = useStyles()

  const [options, setOptions] = useState([])

  // useEffect(() => {
  //   if (!isEmpty(searchResults) && !loading) {
  //     setOptions(searchResults)
  //   }
  // }, [loading, searchResults])

  // useEffect(() => {
  //   if (!open) {
  //     setOptions([])
  //   }
  // }, [open])

  // const searchDataWithThrottle = useRef(throttlingWrapper(searchData, 500)).current

  const handleInputChange = (evt, inputValue) => {
    if (inputValue.length >= 2) {
      // searchDataWithThrottle(inputValue, FIRST_PAGE, SEARCH_PAGE_SIZE)
    } else {
      setOptions([])
    }
  }

  return (
    <div  className={classes.searchContainer}>
    <Autocomplete
      className={classes.searchInput}
      size='small'
      
      clearOnEscape

      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={() => ''}

      options={options}

      onInputChange={handleInputChange}
      noOptionsText='No results found'
      renderInput={params => (
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          
          <TextField
            {...params}
            placeholder='Search'
            fullWidth
            variant='outlined'
            InputProps={{
              ...params.InputProps,
              'aria-label': 'search',
              endAdornment: (
                <Fragment>
                 
                  {params.InputProps.endAdornment}
                </Fragment>
            ),
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline
              }
            }}
        />
        </div>
      )}
    />
    </div>
  )
}

Search.propTypes = {
  // loading: PropTypes.bool.isRequired,
  // searchData: PropTypes.func.isRequired,
  // searchResults: PropTypes.array
}

const mapStateToProps = state => ({
  // loading: state.search.searchResultLoading,
  // searchResults: state.search.searchResults
})
export default connect(mapStateToProps, null)(Search)
// export default connect(mapStateToProps, { searchData })(Search)
