import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Button, 
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle, Tooltip, Slide } from '@material-ui/core'
import { deleteTask, updateDoneForTask } from '../../actions/cards'

import useStyles from './taskStyle'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const Task = ({ cardId, task, deleteTask, updateDoneForTask }) => {
  const classes = useStyles()
  const taskId = task._id

  // Delete task dialog
  const [openDialog, setOpenDialog] = useState(false)

  const handleModal = () => {
    setOpenDialog(!openDialog)
  }

  const handleModalDelete = () => {
    handleModal()
    deleteTask(cardId, taskId)
  }

  const deleteTaskDialog =  (
  <Dialog 
    open={openDialog}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleModal}
  >
    <div className={classes.dialogContainer}>
      <DialogTitle className={classes.dialogHeader} id='alert'>Deleting task</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to permanently remove this task?
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

  const deleteBtn = (
    <Tooltip title='Delete this task'>
      <Button className={classes.button} onClick={handleModal}>Delete</Button>
    </Tooltip>
  )

  return (
    <div className={classes.container} >
      <Tooltip title={(task.done === true) ? 'Cancel mark' : 'Mark as done'}>
        <p className={classnames(classes.task, {[classes.doneTask] : (task.done === true)})}
           onClick={() => updateDoneForTask(cardId, taskId)}
        >
          {task.task}
        </p>  
      </Tooltip>
      {
        (task.done === true) 
        ? deleteBtn
        : null
      }
      {deleteTaskDialog}
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateDoneForTask: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  deleteTask: (cardId, taskId) => dispatch(deleteTask(cardId, taskId)),
  updateDoneForTask: (cardId, taskId) => dispatch(updateDoneForTask(cardId, taskId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Task)
