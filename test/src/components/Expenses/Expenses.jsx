import React, { useState } from "react";
import "./Expenses.css";

function Expenses() {
  const [expenses, setExpenses] = useState([
    { id: 1, category: "Feed", amount: 5000, date: "2025-02-01" },
    { id: 2, category: "Labor", amount: 3000, date: "2025-02-03" },
    { id: 3, category: "Veterinary", amount: 1500, date: "2025-02-05" },
    { id: 4, category: "Equipment", amount: 7000, date: "2025-02-07" },
    { id: 5, category: "Maintenance", amount: 2000, date: "2025-02-10" },
    { id: 6, category: "Miscellaneous", amount: 1200, date: "2025-02-11" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortBy, setSortBy] = useState("date"); // Default sorting by date
  const [newExpense, setNewExpense] = useState({ category: "", amount: "", date: "" });
  const [editingExpense, setEditingExpense] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  // Add new expense
  const handleAddExpense = () => {
    if (!newExpense.category || !newExpense.amount || !newExpense.date) {
      alert("Please fill in all fields!");
      return;
    }

    const newEntry = {
      id: Date.now(), // Unique ID
      category: newExpense.category,
      amount: Number(newExpense.amount),
      date: newExpense.date,
    };

    setExpenses([...expenses, newEntry]);
    setNewExpense({ category: "", amount: "", date: "" });
  };

  // Delete expense
  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Start editing an expense
  const handleEditExpense = (expense) => {
    setEditingExpense(expense);
    setNewExpense({ category: expense.category, amount: expense.amount, date: expense.date });
  };

  // Update an expense
  const handleUpdateExpense = () => {
    if (!newExpense.category || !newExpense.amount || !newExpense.date) {
      alert("Please fill in all fields!");
      return;
    }

    setExpenses(
      expenses.map((expense) =>
        expense.id === editingExpense.id
          ? { ...expense, category: newExpense.category, amount: Number(newExpense.amount), date: newExpense.date }
          : expense
      )
    );

    setEditingExpense(null);
    setNewExpense({ category: "", amount: "", date: "" });
  };

  // Filter and sort expenses
  let filteredExpenses = expenses.filter((expense) =>
    expense.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (categoryFilter) {
    filteredExpenses = filteredExpenses.filter((expense) => expense.category === categoryFilter);
  }

  filteredExpenses.sort((a, b) => (sortBy === "amount" ? b.amount - a.amount : new Date(b.date) - new Date(a.date)));

  // Calculate Total Expenses
  const totalExpenses = filteredExpenses.reduce((acc, expense) => acc + expense.amount, 0);

  // Expense Breakdown by Category
  const categoryBreakdown = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return (
    <div className="expenses-container">
      <h2 className="expenses-title">💸 Farm Expenses</h2>
      <p className="expenses-subtitle">
        Track all farm-related expenses, including feed, labor, maintenance, veterinary, and more.
      </p>

      {/* Filters & Sorting */}
      <div className="filters">
        <input
          type="text"
          placeholder="🔍 Search expenses..."
          className="expense-search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="">All Categories</option>
          {[...new Set(expenses.map((exp) => exp.category))].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>
      </div>

      {/* Add / Edit Expense Form */}
      <div className="expense-form">
        <input type="text" name="category" placeholder="Category" value={newExpense.category} onChange={handleChange} />
        <input type="number" name="amount" placeholder="Amount" value={newExpense.amount} onChange={handleChange} />
        <input type="date" name="date" value={newExpense.date} onChange={handleChange} />
        {editingExpense ? (
          <button className="update-btn" onClick={handleUpdateExpense}>✏️ Update Expense</button>
        ) : (
          <button className="add-btn" onClick={handleAddExpense}>➕ Add Expense</button>
        )}
      </div>

      {/* Expense Table */}
      <div className="expense-table">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount (₹)</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.length > 0 ? (
              filteredExpenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.category}</td>
                  <td>₹{expense.amount.toLocaleString()}</td>
                  <td>{expense.date}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEditExpense(expense)}>✏️ Edit</button>
                    <button className="delete-btn" onClick={() => handleDeleteExpense(expense.id)}>🗑️ Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-results">❌ No matching expenses found!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Expense Breakdown by Category */}
      <div className="expense-breakdown">
        <h3>📊 Expense Breakdown</h3>
        <ul>
          {Object.entries(categoryBreakdown).map(([category, amount]) => (
            <li key={category}>
              <strong>{category}:</strong> ₹{amount.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>

      {/* Total Expenses */}
      <div className="total-expenses">
        <h3>💰 Total Expenses: ₹{totalExpenses.toLocaleString()}</h3>
      </div>
    </div>
  );
}

export default Expenses;
