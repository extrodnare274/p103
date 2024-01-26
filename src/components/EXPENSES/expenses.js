import React, { useState } from "react";
import ExpensesFilter from "./expensesFilter";
import ExpensesList from "./expensesList"
import ExpensesChart from "./expensesChart"
import Card from "../CARD/card";
const Expenses = (props) => {
    const [filteredYear,setFilteredYear]=useState(2020)
    const filterYearHander=(Year)=>{
setFilteredYear(Year)
    }
    const filterExpenses=
        props.items.filter((expense)=>{
              return expense.date.getFullYear().toString()===filteredYear
        })

    
    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selectedYear={filteredYear}
            onchangeYear={filterYearHander}
          />
          <ExpensesChart expenses={filterExpenses} />
          <ExpensesList items={filterExpenses} />
        </Card>
      </div>
    );
};
export default Expenses;
