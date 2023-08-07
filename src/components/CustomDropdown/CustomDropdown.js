import React from 'react'
import Typography from "@mui/material/Typography";
// import Select from "@mui/material/Select";
import Select from "react-select"
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { COLORS } from '../../utils/Theme';

function CustomDropdown({Options,Value,OnChange,Label,error}) {

    // console.log("Options",Options);
  return (
    // <FormControl sx={{ m: 1, minWidth: "98.5%" }}>
    //   <InputLabel id="demo-simple-select-helper-label">{Label}</InputLabel>
    //   <Select
    //     labelId="demo-simple-select-helper-label"
    //     id="demo-simple-select-helper"
    //     value={Value}
    //     label={Label}
    //     onChange={OnChange}
    //   >
    //     {Options.map((val, index) => {
    //       return <MenuItem value={val.value}>{val.label}</MenuItem>;
    //     })}
    //   </Select>
    // </FormControl>
    <Select
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: error ? COLORS.red : "#b3b3b3",
          height: 57,
          ":hover": {
            borderColor: error ? COLORS.red : null,
          },
        }),
      }}
      options={Options}
      value={Value}
      onChange={OnChange}
      placeholder={"Select " + Label}
    />
  );
}

export default CustomDropdown;