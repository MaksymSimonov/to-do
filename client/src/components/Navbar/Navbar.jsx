import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { AppBar, Badge, Button, Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle, Toolbar, TextField, Tooltip, Slide, Typography } from '@material-ui/core'
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
      let title = e.target.value
      createCard(title)
      handleModal()
      setTitle('')
    }
  }

  const [openDialog, setOpenDialog] = useState(false)

  const handleModal = () => {
    setOpenDialog(!openDialog)
  }

  const handleModalAddCard = () => {
    handleModal()
    createCard(title)
    setTitle('')
  }

  const cardCreationDialog =  (
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
            margin="dense"
            value={title}
            onChange={handleTextFieldChange}
            onKeyPress={handleKeyPress}
            id="adding-title" 
            label="Card title" 
            type="title" 
            variant="outlined"  
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
            onClick={handleModalAddCard}>
              Create
          </Button>
        </DialogActions>
      </div>
    </Dialog>
    )
  
  return (
    <div className={classes.container} >
      <Typography variant='h6'>
        To-Do list
      </Typography>
      <Search />
      <Tooltip title='Add a new card'>
        <Button
          className={classes.button}
          onClick={handleModal}
          color='inherit'>
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

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  createCard: (title) => dispatch(createCard(title)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
