import React from "react";
import "./expensesFilter.css"
const ExpensesFilter = (props) => {
    const filterYearHandler=(event)=>{
        props.onchangeYear(event.target.value)
    }
return (
  <div className="expenses-filter">
    <div className="expenses-filter_control">
      <label>select the year</label>
      <select value={props.selectedYear} onChange={filterYearHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  </div>
);

};
export default ExpensesFilter;
