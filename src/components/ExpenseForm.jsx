import React from "react";

function ExpenseForm() {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Enter amount"
        />
      </div>
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
          Type
        </label>
        <select
          id="type"
          name="type"
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
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
          credit or debit
        </label>
        <select
          id="type"
          name="type"
          className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;