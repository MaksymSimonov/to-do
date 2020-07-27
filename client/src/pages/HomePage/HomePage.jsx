import React, { Fragment, useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Box, Grid, Typography } from '@material-ui/core'

import Preloader from '../../components/Preloader/Preloader'
import Card from '../../components/Card/Card'
import { get, isEmpty } from 'lodash'
import { getCards } from '../../actions/cards'

import useStyles from './homePageStyle'

const MainPage = ({ cards, loadingCards, loadAllCards }) => {
  const classes = useStyles()

  useEffect(() => {
    loadAllCards()
  }, [ loadAllCards ])

  const content = components => {
    if (isEmpty(cards)) {
      return <p className={classes.notification}>No cards</p>
    } else {
      return components.map(card => <Card card={card} key={get(card, 'title')} />)
    }   
  }

  return loadingCards ? <Preloader fullScreen /> : (
    <Grid container justify='center' className={classes.container}>
      {content(cards)}
    </Grid>
  )
}

MainPage.propTypes = {
  loadAllCards: PropTypes.func.isRequired,
  cards: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  loadingCards: state.cards.loading,
  cards: state.cards.cards
})

const mapDispatchToProps = dispatch => ({
  loadAllCards: () => dispatch(getCards())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
