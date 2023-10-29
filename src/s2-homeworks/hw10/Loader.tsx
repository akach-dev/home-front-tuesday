import s from './Loader.module.css'
import {Box, CircularProgress} from "@mui/joy";


export const Loader = () => <div className={s.loader}>

  <CircularProgress
     sx={{
       "--CircularProgress-size": "90px",
       "--CircularProgress-trackThickness": "0px",
       "--CircularProgress-progressThickness": "9px"
     }}
  />


</div>