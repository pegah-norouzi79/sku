import * as React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import { MenuItem, Select } from "@mui/material";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    fontFamily: "regular",
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px ",
    fontFamily: "regular",
    "&:focus": {
      borderRadius: 4,
      border: "2px solid #0096f5",
    },
  },
}));

export default function ResponsibleSelect({
  value,
  onChange,
  name
}) {
  return (
    <FormControl size="small">
      <InputLabel id="demo-customized-select-label">
        {" "}
        مسئولیت
      </InputLabel>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={value}
        onChange={onChange}
        name={name}
        input={<BootstrapInput />}
      >
        
        <MenuItem value="master">استاد</MenuItem>
        <MenuItem value="PHD-student">دانشجو دکترا</MenuItem>
        <MenuItem value="MSc-student">دانشجو ارشد</MenuItem>
        <MenuItem value="student">دانشجو کارشناسی</MenuItem>
      </Select>
    </FormControl>
  );
}
