import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function Select(props) {
    const { list, lable } = props;

    const [labels, setLabels] = useState([]);
    const [activeData, setActiveData] = useState('');
    const [activePreview, setActivePreview] = useState('')


    useEffect(() => { setLabels(list); }, [list])

    function clickItem(event) {
        setActiveData(event.target.textContent);
        props.onChange(event.target.textContent);
    } 
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={labels}
        onChange={(event) => clickItem(event)}
        sx={{ width: 400 }}
        renderInput={(params) => <TextField {...params} label={lable}/>}
      />

   
    );
  }