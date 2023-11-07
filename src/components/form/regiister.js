import React from 'react'
import { Button , FormControl , Select , MenuItem , InputLabel} from '@mui/material'
function Register() {
  return (
    <>
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={age}
    // label="Age"
    // onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
</>
  )
}

// noortae11@A
export default Register