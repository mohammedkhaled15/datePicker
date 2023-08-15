"use client"
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker"

const arMonths = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسيمبر"]

const date = new DateObject

const Example3 = () => {

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleFromDate = (newValue) => {
    setFrom(newValue);
  };
  const handleToChange = (newValue) => {
    setTo(newValue);
  };
  console.log("from:", from);
  console.log("to:", to);

  return (
    <div className="flex flex-row gap-8">
      <section>
        <label>From</label>
        <Datepicker
          asSingle={true}
          value={from}
          onChange={handleFromDate}
        />
      </section>
      <section>
        <label>To</label>
        <Datepicker
          useRange={false}
          asSingle={true}
          value={to}
          onChange={handleToChange}
        />
      </section>
    </div>
  );
}

export default Example3