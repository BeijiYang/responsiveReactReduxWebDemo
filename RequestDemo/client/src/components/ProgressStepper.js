import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const styles = {
  root: {
    maxWidth: 400,
    flexGrow: 1,
    marginTop: 10,
  },
}
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0097A7',
    },
  },
})
class ProgressStepper extends React.Component {

  render() {
    const { classes, totalPageNum, activeStep } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <MobileStepper
          variant="progress"
          steps={totalPageNum}
          position="static"
          activeStep={activeStep}
          className={classes.root}
          nextButton={
            <Button size="small" onClick={this.props.handleNext} disabled={activeStep === totalPageNum - 1}>
              Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.props.handleBack} disabled={activeStep === 0}>
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
  totalPageNum: PropTypes.number.isRequired
}

export default withStyles(styles, { withTheme: true })(ProgressStepper)
