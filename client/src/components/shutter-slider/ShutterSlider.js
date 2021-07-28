import React from 'react'
import './ShutterSlider.css'
import Slider from '@material-ui/core/Slider'

const ShutterSlider = (props) => {
  const label = props.label || 'unnamed window'

  return (
    <div className='shutter'>
      <div className='label'>{label}</div>
      <div className='vertical-slider'>
        {props.manualOverdrive && <Slider
          orientation='vertical'
          track='inverted'
          defaultValue={30}
          aria-labelledby='vertical-slider'
                                  />}
      </div>
    </div>
  )
}

export default ShutterSlider
