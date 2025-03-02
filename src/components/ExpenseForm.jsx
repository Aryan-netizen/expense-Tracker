import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
const [formValues, setFormValues] = useState({
    amount: "",
    type: "food",
    creditDebit: "debit"
});

const [errors, setErrors] = useState({});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    
    // Clear error when field is edited
    if (errors[name]) {
    setErrors({ ...errors, [name]: "" });
    }
};

const validateForm = () => {
    const newErrors = {};
    
    if (!formValues.amount || formValues.amount <= 0) {
    newErrors.amount = "Please enter a valid amount greater than 0";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};

const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
    onAddExpense({
        ...formValues,
        amount: parseFloat(formValues.amount),
        date: new Date().toISOString()
    });
    
    // Reset form after submission
    setFormValues({
        amount: "",
        type: "food",
        creditDebit: "debit"
    });
    }
};
return (
<form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <input
        type="number"
        id="amount"
        name="amount"
        value={formValues.amount}
        onChange={handleChange}
        className={`mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.amount ? 'border-red-500' : ''}`}
        placeholder="Enter amount"
        />
        {errors.amount && (
        <p className="mt-1 text-sm text-red-600">{errors.amount}</p>
        )}
      </div>
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
          Type
        </label>
        <select
        id="type"
        name="type"
        value={formValues.type}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
        {["food","transportation","entertainment","healthcare","shopping","other"].map((item, i) =>{
            return(
                <option key={i} value={item}>{item}</option>
            )
        })}
          
        </select>
      </div>
      <div>
        <label htmlFor="creditDebit" className="block text-sm font-medium text-gray-700">
        Credit or Debit
        </label>
        <select
        id="creditDebit"
        name="creditDebit"
        value={formValues.creditDebit}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
      </div>
      <div>
        <button
        type="submit"
        disabled={!formValues.amount}
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;