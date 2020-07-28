import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'

import Task from '../Task/Task'
import { get, isEmpty } from 'lodash'
import { getDate } from '../../utils/date/getDate'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
  Slide,
  Tooltip
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import AddTask from '../../components/Task/AddTask/AddTask'
import useStyles from './cardStyles'
import { deleteCard } from '../../actions/cards'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const Card = ({ card, deleteCard }) => {
  const classes = useStyles()
  const cardId = card._id
  const title = card.title
  const tasks = card.tasks
  const date = card.date

  // Delete card dialog
  const [openDialog, setOpenDialog] = useState(false)

  const handleModal = () => {
    setOpenDialog(!openDialog)
  }

  const handleModalDelete = () => {
    handleModal()
    deleteCard(cardId)
  }

  const deleteCardDialog =  (
    <Dialog 
      open={openDialog}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleModal}
    >
      <div className={classes.dialogContainer}>
        <DialogTitle className={classes.dialogHeader} id='alert'>Deleting card</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to permanently remove this card?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={classes.button} variant='contained' color='primary' onClick={handleModal}>
            Cancel
          </Button>
          <Button
            className={classnames(classes.button, classes.buttonDel)}
            variant='contained'
            color='secondary'
            onClick={handleModalDelete}>
              Delete
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  )

  const content = components => {
    if (isEmpty(tasks)) {
      return <p className={classes.notification}>No tasks</p>
    } else {
      return components.map(task => <Task task={task} cardId={cardId} key={get(task, 'task')} />)
    }   
  }
  
  return (
    <div className={classes.container}>
      <Typography className={classes.header} variant='subtitle' component='div'>
        {title}
        <Tooltip title='Delete this card'>
          <IconButton className={classes.button} onClick={handleModal} color='inherit'>
            <DeleteIcon/>
          </IconButton>
        </Tooltip>
      </Typography>
      <div className={classes.tasksContainer}> 
        {content(tasks)}
      </div>
      <AddTask cardId={cardId} />
      <p className={classes.cardDate}>Date: {getDate(date)}</p> 
      {deleteCardDialog}
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  deleteCard: PropTypes.func.isRequired
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  deleteCard: (cardId) => dispatch(deleteCard(cardId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)
