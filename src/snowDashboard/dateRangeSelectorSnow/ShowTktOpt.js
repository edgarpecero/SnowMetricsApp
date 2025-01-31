import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useSnowDashboard } from '../../Hooks/useSnowDashboard';
import { TicketTypeOptions } from '../helpers/snowHelpers';

// Create a custom theme with orange as the primary color for the radio button
const ShowTktOpt = () => {
  const { setTicketType, ticketType } = useSnowDashboard();

  const handleChange = (event) => {
    const newValue = event.target.value;
    setTicketType(newValue);
  };

  return (
    <div>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={ticketType}
          onChange={handleChange}
        >
          {Object.values(TicketTypeOptions).map((type) => (
            <FormControlLabel
              key={type.value}
              value={type.value}
              control={<Radio size="small" />}
              label={type.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default React.memo(ShowTktOpt);
