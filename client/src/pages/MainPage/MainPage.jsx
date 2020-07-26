import React, { Fragment, useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Preloader from '../../components/Preloader/Preloader'

import { getCards } from '../../actions/cards'

import useStyles from './mainPageStyle'

const MainPage = ({ loadingCards, loadAllCards }) => {
  const classes = useStyles()

  useEffect(() => {
    loadAllCards()
  }, [ loadAllCards ])

  return loadingCards ? <Preloader fullScreen /> : (
    <>
      MainPage
    </>
  )
}

MainPage.propTypes = {
  loadAllCards: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  loadingCards: state.cards.loading,
  cards: state.cards.cards
})

const mapDispatchToProps = dispatch => ({
  loadAllCards: () => dispatch(getCards())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
