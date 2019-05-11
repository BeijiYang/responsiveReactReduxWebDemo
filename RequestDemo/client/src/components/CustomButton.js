import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import config from '../config/config'

const {
  colors: { ACCENT_COLOR }
} = config


const theme = createMuiTheme({
  palette: {
    secondary: {
      main: ACCENT_COLOR,
    },
  },
})
class CustomButton extends React.Component {

  render() {
    const { children, handleClick, disabled } = this.props

    return (
      <MuiThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleClick}
          disabled={disabled}
        >
          {children}
        </Button>
      </MuiThemeProvider>
    )
  }
}

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default withStyles({ withTheme: true })(CustomButton)
