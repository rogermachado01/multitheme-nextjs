import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Divider } from "@mui/material";

const ThemeSelector = () => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Base Theme
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="base" control={<Radio />} label="Base" />
          <FormControlLabel value="summer" control={<Radio />} label="Summer" />
        </RadioGroup>
      </FormControl>
      <Divider />
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Header Theme
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="none" control={<Radio />} label="None" />
          <FormControlLabel value="coffe" control={<Radio />} label="Coffe" />
          <FormControlLabel value="drink" control={<Radio />} label="Drink" />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export { ThemeSelector };
