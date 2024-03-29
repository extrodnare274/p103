import React from "react";
import "./expensesList.css"
import ExpenseItem from "./expensesItem"
const ExpensesList = (props) => {
if(props.items.length===0){
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
}
return (
  <ul className="expenses-list">
    {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        amount={expense.amount}
        title={expense.title}
        date={expense.date}
      />
    ))}
    
  </ul>
);
};
export default ExpensesList;
