import EntryForm from './EntryForm'
import './NewExpense.css'

const Newexpense = (props) => {
    const expenseHandler=(expense)=>{
        const expenseData={
            ...expense,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    return (
    <div className='new-expense'>
        <EntryForm onExpense={expenseHandler}/>
    </div>
    );
}

export default Newexpense;