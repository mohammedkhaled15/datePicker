"use client"
import { useState } from "react"
import DatePicker, { DateObject } from "react-multi-date-picker"
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import gregorian_ar from "react-date-object/locales/gregorian_ar"

const Example4 = () => {

  const [fromDate, setFromDate] = useState(new DateObject({ locale: gregorian_ar }).format("dddd, D MMMM"))
  const [toDate, setToDate] = useState(new DateObject({ locale: gregorian_ar }).format("dddd, D MMMM"))

  function handleFromDateChange(value) {
    //your modification on passed value ....  
    setFromDate(value)
  }

  function handleToDateChange(value) {
    //your modification on passed value ....
    setToDate(value)
  }

  console.log("from: ", fromDate)
  console.log("to: ", toDate)
  // console.log("Diff: ", toDate - fromDate)
  return (
    <div className="flex flex-row-reverse gap-8  mt-10">
      <section className="flex gap-4 justify-center items-center">
        {/* <DatePicker
          value={fromTime}
          format="hh:mm a"
          onChange={handleFromTimeChange}
          locale={gregorian_ar}
          placeholder={new DateObject({ locale: gregorian_ar }).format("hh:mm a")}
          inputClass="bg-slate-600 rounded-lg w-fit flex items-center justify-center px-4 py-2"
        // plugins={[<TimePicker />]}
        /> */}
        {/* <TimePicker /> */}
        <DatePicker
          // render={<Icon />}
          value={fromDate}
          weekStartDayIndex={6}
          format="dddd, D MMMM"
          onChange={handleFromDateChange}
          locale={gregorian_ar}
          placeholder={new DateObject({ locale: gregorian_ar }).format("dddd, D MMMM")}
          inputClass="bg-slate-600 rounded-lg w-[150px] flex items-center justify-center px-4 py-2"
        />
        <label>من</label>
      </section>
      <section className="flex gap-4 justify-center items-center">
        <DatePicker
          // render={<Icon />}
          value={toDate}
          weekStartDayIndex={6}
          format="dddd, D MMMM"
          onChange={handleToDateChange}
          locale={gregorian_ar}
          placeholder={new DateObject({ locale: gregorian_ar }).format("dddd, D MMMM")}
          inputClass="bg-slate-600 rounded-lg w-[150px] flex items-center justify-center px-4 py-2"
        />
        <label>إلى</label>
      </section>
    </div>
  )

}

export default Example4