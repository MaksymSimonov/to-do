import { makeStyles } from '@material-ui/core/styles'
import styleConstants from '../../utils/constants/styleConstants'

const useStyles = makeStyles( theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 47,
    borderBottom: '1px solid rgb(188,188,189)'
  },
  task: {
    paddingLeft: 15,
    width: '100%'
  },
  doneTask: {
    color: 'rgb(0,128,128)',
    textDecoration: 'line-through'
  },
  button: {
    margin: theme.spacing(1),
    position: 'relative',
    display: 'inline-block',
    color: styleConstants.BTN_PRIMARY_TEXT_COLOR,
    textShadow: '0 -1px 2px rgba(0,0,0,.2)',
    padding: 3,
    height: 'min-content',
    outline: 'none',
    background: styleConstants.BTN_BG_COLOR,
    boxShadow: styleConstants.BTN_SHADOW,
    transition: '.2s ease-in-out',
    '&:hover:not(:active)': {
      background: styleConstants.BTN_BG_HOVER
    },
    '&:active': {
      top: 1,
      background: styleConstants.BTN_BG_ACTIVE,
      boxShadow: styleConstants.BTN_SHADOW_ACTIVE
    }
  }
  
}))

export default useStyles
