import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Button, Tooltip } from '@material-ui/core'

import useStyles from './taskStyle'

const Task = ({ task }) => {
  const classes = useStyles()

  const deleteBtn = (
    <Button className={classes.button}>Delete</Button>
  )

  return (
    <div className={classes.container} >
      <Tooltip title={(task.done === true) ? "Cancel mark" : "Mark as done"}>
        <p className={classnames(classes.task, {[classes.doneTask] : (task.done === true)})}>
          {task.task}
        </p>  
      </Tooltip>
      {
        (task.done === true) 
        ? deleteBtn
        : null
      }
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Task)
