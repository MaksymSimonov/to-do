import { makeStyles } from '@material-ui/core/styles'
import styleConstants from '../../utils/constants/styleConstants'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 47,
    padding: '0 10px',
    borderBottom: '1px solid rgb(188,188,189)'
  },
  task: {
    width: '100%'
  },
  doneTask: {
    color: 'rgb(0,128,128)',
    textDecoration: 'line-through'
  },
  button: {
    position: 'relative',
    display: 'inline-block',
    color: styleConstants.BTN_PRIMARY_TEXT_COLOR,
    textShadow: '0 -1px 2px rgba(0,0,0,.2)',
    padding: 3,
    marginLeft: 10,
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
  },
  buttonDel: {
    color: styleConstants.BTN_DEL_TEXT_COLOR
  },
  dialogContainer: {
    maxWidth: 400,
    color: styleConstants.CARD_TEXT_COLOR,
    background: styleConstants.CARD_BG_COLOR
  },
  dialogHeader: {
    color: styleConstants.CARD_HEADER_TEXT_COLOR,
    background: styleConstants.CARD_HEADER_BG_COLOR,
    padding: '8px 15px'
  }
}))

export default useStyles
