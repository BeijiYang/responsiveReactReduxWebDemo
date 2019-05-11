import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import config from '../config/config'

const {
  colors: { TEXT_PRIMARY_COLOR, DARK_PRIMARY_COLOR }
} = config

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 10,
    backgroundColor: TEXT_PRIMARY_COLOR,
  },
}
const theme = createMuiTheme({
  palette: {
    primary: {
      main: DARK_PRIMARY_COLOR,
    },
  },
})
class ProgressStepper extends React.Component {

  render() {
    const { classes, totalPageNum, activeStep, handleNext, handleBack } = this.props

    return (
      <MuiThemeProvider theme={theme}>
        <MobileStepper
          variant="progress"
          steps={totalPageNum}
          position="static"
          activeStep={activeStep}
          className={classes.root}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === totalPageNum - 1}>
              Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
          </Button>
          }
        />
      </MuiThemeProvider>
    )
  }
}

ProgressStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  activeStep: PropTypes.number.isRequired,
  totalPageNum: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
}

export default withStyles(styles, { withTheme: true })(ProgressStepper)
