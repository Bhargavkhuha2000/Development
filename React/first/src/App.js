import React, { useState } from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 3, 28),
  },
  {
    id: 'e3',
    title: 'New Desk',
    amount: 294.67,
    date: new Date(2020, 4, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((pewvExpenses) => {
      return [expense, ...expenses];
    });
  };
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started"),
  //   React.createElement(Expenses, { items: expense })
  // );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
