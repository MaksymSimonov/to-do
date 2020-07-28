import { fade, makeStyles } from '@material-ui/core/styles'
import styleConstants from '../../utils/constants/styleConstants'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0 50px',
    minHeight: 63,
    minWidth: 20,
    background: styleConstants.NAVBAR_BG_COLOR,
    color: styleConstants.CARD_HEADER_TEXT_COLOR,
  },
  button: {
    position: 'relative',
    display: 'inline-block',
    color: styleConstants.BTN_PRIMARY_TEXT_COLOR,
    textShadow: '0 -1px 2px rgba(0,0,0,.2)',
    padding: 6,
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
  buttonCreate: {
    color: '#ADFF2F',
  },
  dialogContainer: {
    maxWidth: 400,
    color: styleConstants.CARD_TEXT_COLOR,
    background: styleConstants.CARD_BG_COLOR,
  },
  dialogHeader: {
    color: styleConstants.CARD_HEADER_TEXT_COLOR,
    background: styleConstants.CARD_HEADER_BG_COLOR,
    padding: '8px 15px'
  }

}))

export default useStyles
