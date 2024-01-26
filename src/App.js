import React,{useState} from "react"
import Expenses from "./components/EXPENSES/expenses";
import NewExpenses from "./components/NEWEXPENSES/newExpenses";
  const dummyExpenses = [
    {
      id: 1,
      title: "Bought Gold",
      amount: "150000",
      date: new Date(2021, 11, 15),
    },
    {
      id: 2,
      title: "Bought pendant",
      amount: "45000",
      date: new Date(2022, 6, 15),
    },
    {
      id: 3,
      title: "Debt cleared",
      amount: "200000",
      date: new Date(2022, 8, 15),
    },
  ];
  const App=()=> {
    const [expenses,setExpenses]=useState(dummyExpenses)
    const addExpensesHandler=(addExpenses)=>{
      setExpenses((prevExpenses)=>{
        return [addExpenses,...prevExpenses]
      })
    }
    return <div >
      <NewExpenses onAddExpense={addExpensesHandler}/>
      <Expenses items={expenses}/>
    </div>;
  }

export default App;
