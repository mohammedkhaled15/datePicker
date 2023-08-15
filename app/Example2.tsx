import React, { useState } from "react";
import Datepicker, { DateType, DateValueType } from "react-tailwindcss-datepicker"

interface handleValueProps{
  startDate:Date,
  endDate:number
}

const Example2 = () => {

  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11)
});

const handleValueChange = (newValue:handleValueProps) => {
    console.log("newValue:", newValue);
    setValue(newValue);
};

return (
    <div>
        <Datepicker value={value} onChange={handleValueChange} />
    </div>
);
}

export default Example2