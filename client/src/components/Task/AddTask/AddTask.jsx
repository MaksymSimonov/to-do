import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, TextField, Tooltip } from '@material-ui/core'
import { addTask } from '../../../actions/cards'

import useStyles from './addTaskStyle'

const AddTask = ({ cardId, addTask }) => {
  const classes = useStyles()

  const [task, setTask] = useState('')

  const handleTextFieldChange = (e) => {
    setTask(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      let task = e.target.value
      if (task.length != 0) {
        addTask(cardId, task)
        setTask('')
      }
    }
  }

  const handleAddTask = () => {
    if (task.length !== 0) {
      addTask(cardId, task)
      setTask('')
    }
  }

  return (
    <div className={classes.container} >
       <TextField 
            className={classes.textField} 
            margin="dense"
            value={task}
            onChange={handleTextFieldChange}
            onKeyPress={handleKeyPress}
            id="adding-task" 
            label="Enter a new task" 
            type="title" 
            variant="outlined"  
            fullWidth
        />
        <Tooltip title='Add this task'>
          <Button className={classes.button} variant='contained' color='primary' onClick={handleAddTask}>
            Add
          </Button>
        </Tooltip>
    </div>
  )
}

AddTask.propTypes = {
  cardId: PropTypes.object.isRequired,
  addTask: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  addTask: (cardId, task) => dispatch(addTask(cardId, task)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)
