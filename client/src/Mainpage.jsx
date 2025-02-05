import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Mainpage() {
  const [date, setDate] = useState('');
  const [sourceCurrency, setSourceCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(1);
  const [currencyNames, setCurrencyNames] = useState([]);

  useEffect(() => {
    const getCurrencyNames = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getallcurrencies");
        
        console.log("API Response:", response.data); // ✅ Debugging log
  
        if (response.data && typeof response.data === "object") {
          setCurrencyNames(response.data);
        } else {
          console.error("Unexpected API response format:", response.data);
        }
      } catch (err) {
        console.error("API Fetch Error:", err);
      }
    };
    getCurrencyNames();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date, sourceCurrency, targetCurrency, amountInSourceCurrency);
  };

  return (
    <>
      <h1 className="lg:mx-32 text-blue-400 text-5xl font-bold">Calculate currency here</h1>
      <p className="lg:mx-30 py-8 px-20">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim autem tenetur laboriosam, eveniet corrupti saepe assumenda voluptatum maxime suscipit veritatis.
      </p>

      <div className="flex items-center justify-center flex-col">
        <section className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="sourceCurrency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Source Currency
              </label>


              <select
                id="sourceCurrency"
                name="sourceCurrency"
                value={sourceCurrency}
                onChange={(e) => setSourceCurrency(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"
                required
              >
                <option value="">Select source currency</option>
                {currencyNames &&
                  Object.entries(currencyNames).map(([code, name]) => (
                    <option key={code} value={code}>
                      {`${code} - ${name}`}
                    </option>
                  ))}
              </select>

            </div>

            <div className="mb-5">
              <label htmlFor="targetCurrency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Target Currency
              </label>
              <select
                id="targetCurrency"
                name="targetCurrency"
                value={targetCurrency}
                onChange={(e) => setTargetCurrency(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"
                required
              >
                <option value="">Select target currency</option>
                {currencyNames &&
                  Object.entries(currencyNames).map(([code, name]) => (
                    <option key={code} value={code}>
                      {`${code} - ${name}`}
                    </option>
                  ))}
              </select>
            </div>

            <div className="mb-5">
              <label htmlFor="amountInSourceCurrency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Amount in source currency
              </label>
              <input
                type="number"
                id="amountInSourceCurrency"
                name="amountInSourceCurrency"
                value={amountInSourceCurrency}
                onChange={(e) => setAmountInSourceCurrency(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Submit
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Mainpage;
