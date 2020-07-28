import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Tooltip,
  Slide,
  Typography
} from '@material-ui/core'
import classnames from 'classnames'

import Search from '../Search/Search'
import { createCard } from '../../actions/cards'
import useStyles from './navbarStyles'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const Navbar = ({ createCard }) => {
  const classes = useStyles()

  const [title, setTitle] = useState('')

  const handleTextFieldChange = (e) => {
    setTitle(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const title = e.target.value
      if (title.length !== 0) {
        createCard(title)
      }
      handleModal()
      setTitle('')
    }
  }

  // Add task dialog
  const [openDialog, setOpenDialog] = useState(false)

  const handleModal = () => {
    setOpenDialog(!openDialog)
  }

  const handleModalAddCard = () => {
    handleModal()
    if (title.length !== 0) {
      createCard(title)
    }
    setTitle('')
  }

  const cardCreationDialog = (
    <Dialog
      open={openDialog}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleModal}
    >
      <div className={classes.dialogContainer}>
        <DialogTitle className={classes.dialogHeader} id='alert'>Card creation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a title for the new card
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            value={title}
            onChange={handleTextFieldChange}
            onKeyPress={handleKeyPress}
            id='adding-title'
            label='Card title'
            type='title'
            variant='outlined'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button className={classes.button} variant='contained' color='primary' onClick={handleModal}>
            Cancel
          </Button>
          <Button
            className={classnames(classes.button, classes.buttonCreate)}
            variant='contained'
            color='secondary'
            onClick={handleModalAddCard}
          >
              Create
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  )

  return (
    <div className={classes.container}>
      <Typography variant='h6' className={classes.title}>
        To-Do list
      </Typography>
      <Search />
      <Tooltip title='Add a new card'>
        <Button
          className={classes.button}
          onClick={handleModal}
          color='inherit'
        >
            Add card
        </Button>
      </Tooltip>
      {cardCreationDialog}
    </div>
  )
}

Navbar.propTypes = {
  createCard: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  createCard: (title) => dispatch(createCard(title))
})

export default connect(null, mapDispatchToProps)(Navbar)
