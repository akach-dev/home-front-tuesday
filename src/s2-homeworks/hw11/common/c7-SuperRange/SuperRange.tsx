import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
     <Slider
        sx={{ // стили для слайдера // пишет студент
          maxWidth: 147,
          color: '#00CC22',
          height: 3,
          padding: '13px 0',
          '& .MuiSlider-thumb': {
            height: 18,
            width: 18,
            backgroundColor: '#fff',
            border: '1px solid currentColor',
            '&::before': {
              height: 6,
              width: 6,
              backgroundColor: '#00CC22',
            },
            '&:hover': {
              boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
            },
            '& .airbnb-bar': {
              height: 9,
              width: 1,
              backgroundColor: 'currentColor',
              marginLeft: 1,
              marginRight: 1,
            },
          },
          '& .MuiSlider-track': {
            height: 3,
          },
          '& .MuiSlider-rail': {
            height: 3,
            color: '#8B8B8B',
          },
        }}
        {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
     />
  )
}

export default SuperRange
