import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './RenderExpenses.css'
import ExpenseFilter from './ExpenseFilter';


function RenderExpenses(props) {

  const [yearDetail, setfiltYear] = useState('2020');

  const addYearHandler = (filtYear) => {
    setfiltYear(filtYear);
  }

  const filteredYear = props.expenses.filter(item=> {
    return (item.date.getFullYear().toString() === yearDetail);
  }
  )

  return (
    <div className='expenses'>
      <div>
        <ExpenseFilter onYearChange={addYearHandler}/>
      </div>
      <div>
        {filteredYear.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>)}
      </div>
    </div>
  );
}

export default RenderExpenses;
