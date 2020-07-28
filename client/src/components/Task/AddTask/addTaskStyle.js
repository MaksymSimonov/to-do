import { makeStyles } from '@material-ui/core/styles'
import styleConstants from '../../../utils/constants/styleConstants'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px 3px 10px',
    borderBottom: '1px solid rgb(188,188,189)'
  },
  button: {
    position: 'relative',
    display: 'inline-block',
    color: styleConstants.BTN_PRIMARY_TEXT_COLOR,
    textShadow: '0 -1px 2px rgba(0,0,0,.2)',
    padding: 7,
    marginTop: 3,
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
  textField: {
    marginRight: 10,
    background: 'rgb(245, 245, 245)'
  }
}))

export default useStyles
