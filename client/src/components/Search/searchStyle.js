import { fade, makeStyles } from '@material-ui/core/styles'
import styleConstants from '../../utils/constants/styleConstants'

const useStyles = makeStyles(theme => ({
 
  optionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  searchInput: {
    '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
      height: 38,
      '& .MuiAutocomplete-input': {
        color: 'white',
        padding: '5px 0 5px 40px'
      }
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(7),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${styleConstants.ICON_COLOR} !important`
    }
  },
  cssFocused: {},

  notchedOutline: {
    borderWidth: '1px',
    borderColor: `${styleConstants.PRIMARY_COLOR} !important`
  }
}))

export default useStyles
