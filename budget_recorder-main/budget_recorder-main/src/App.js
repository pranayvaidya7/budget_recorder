import React, { useState } from "react";

import RenderExpenses from "./components/RenderExpenses";
import Newexpense from './components/Newexpense'

const dummy = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const[expenses, setexpenses] = useState(dummy);

  const addExpenseHandler = (expense) => {
      setexpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      })
  };

  return (
    <div>
      <div>
        <Newexpense onAddExpense={addExpenseHandler}/>
      </div>
      <div>
        <RenderExpenses expenses={expenses}/>
      </div>
    </div>
  );
}

export default App;
