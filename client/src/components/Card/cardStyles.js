import { makeStyles } from '@material-ui/core/styles'
import styleConstants from '../../utils/constants/styleConstants'

const useStyles = makeStyles(() => ({
  container: {
    color: styleConstants.CARD_TEXT_COLOR,
    background: styleConstants.CARD_BG_COLOR,
    borderRadius: 4,
    boxShadow: '0 1px rgba(255,255,255,.2) inset,  0 3px 5px rgba(0,1,6,.5),  0 0 1px 1px rgba(0,1,6,.2)',
    width: 300,
    wordBreak: 'break-word',
    height: '100%',
    boxSizing: 'border-box',
    margin: 20
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: styleConstants.CARD_HEADER_TEXT_COLOR,
    background: styleConstants.CARD_HEADER_BG_COLOR,
    padding: '8px 10px 8px 15px',
    wordBreak: 'break-word',
    fontWeight: 700,
    borderBottom: '1px solid #dddfe2',
    borderRadius: '4px 4px 0 0'
  },
  tasksContainer: {
    borderRadius: 4
  },
  notification: {
    margin: 0,
    padding: 10,
    textAlign: 'center',
    fontWeight: 900,
    borderBottom: '1px solid rgb(188,188,189)'
  },
  cardDate: {
    margin: '4px 8px',
    textAlign: 'right',
    fontSize: 14
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
