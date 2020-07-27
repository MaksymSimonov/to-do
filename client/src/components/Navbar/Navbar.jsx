import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { AppBar, Badge, Button, Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle, Toolbar, TextField, Tooltip, Slide, Typography } from '@material-ui/core'
import Search from '../Search/Search'

import useStyles from './navbarStyles'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const Navbar = ({ }) => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addCard = () => {
    handleClose()
    console.log()
  }

  const cardCreationDialog = (
    <Dialog open={open} onClose={handleClose} TransitionComponent={Transition} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Card creation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a title for the new card
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Card title"
            type="title"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addCard} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
  )
  
  return (
    <div className={classes.root} >
    <AppBar position='static' className={classes.container} >
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' className={classes.title}>
          To-Do list
        </Typography>
        <div className={classes.searchContainer}>
          <Search />
        </div>
   
          <div className={classes.sectionDesktop}>
            <Tooltip title='Add a new card'>
              <Button
                className={classes.navbarButton}
                onClick={handleClickOpen}
                color='inherit'>
                Add card
              </Button>
            </Tooltip>
            {cardCreationDialog}
          </div>
         
 
        
      </Toolbar>
    </AppBar>
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
