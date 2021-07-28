import React from 'react'
import './RoomSelector.css'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ShutterSlider from '../shutter-slider/ShutterSlider'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  shutterGroup: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  }
}))

const RoomSelector = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.heading}>Wohnzimmer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.shutterGroup}>
            <ShutterSlider label='Terassentür 2' manualOverdrive={props.manualOverdrive} />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography className={classes.heading}>Küche</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.shutterGroup}>
            <ShutterSlider label='Küchenfenster' manualOverdrive={props.manualOverdrive} />
            <ShutterSlider label='Terassentür 1' manualOverdrive={props.manualOverdrive} />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default RoomSelector
