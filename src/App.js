import React, { useState } from "react";
import Header from "./components/Header";
import AddExpense from "./components/AddExpense";
import TableInfo from "./components/TableInfo";

export default function App() {
  const [expenses, setExpenses] = useState([]);
  return (
    <>
      <Header />
      <AddExpense setExpenses={setExpenses} />
      <TableInfo expenses={expenses} setExpenses={setExpenses} />
    </>
  );
}
