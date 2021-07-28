import React, { useState } from 'react'
import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import RoomSelector from './components/room-selector/RoomSelector'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const App = () => {
  const [manualOverdrive, setManualOverdrive] = useState(false)
  const classes = useStyles()

  const handleChange = (event) => {
    setManualOverdrive(event.target.checked)
  }

  return (
    <div className='App'>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Rolladensteuerung
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={manualOverdrive}
                  onChange={handleChange}
                  name='checkedA'
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
}
              label='Manuell'
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
      <RoomSelector manualOverdrive={manualOverdrive} />
    </div>
  )
}

export default App
