import React, { useEffect, useState } from 'react'
import { use } from 'react'

function Mainpage() {
  const[date,setdate]=useState(null)
  const[sourcecurrency,setsourcecurrency]=useState(null)
  const[targetcurrecy,settargetcurrency]=useState(null)
  const[amountinsourcecurrency,setamountinsourcecurrency]=useState(1)
  const[amountintargetcurrency,setamountintargetcurrency]=useState(1)
  const[currencynames,setcurrencynames]=useState([])

  //handlesubmit

  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(
      date,
      sourcecurrency,
      targetcurrecy,
      amountinsourcecurrency
    );
  }

  useEffect(()=>{
const getcurrencynames=async()=>{
  try{
    const responce = await axios.get(
      "http://localhost:5000/getallcurrencies"
    );
    setcurrencynames(responce.data);
  }catch(err){
    console.error(err);
  }
};
getcurrencynames();
  },[])
  return (
    <>
    <h1 className=' lg:mx-32 text-blue-400 text-5xl font-bold'>Calculate currency here </h1>
    <p className='lg:mx-30 py-8 px-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim autem tenetur laboriosam, eveniet corrupti saepe assumenda voluptatum maxime suscipit veritatis. Reprehenderit animi officiis quisquam reiciendis hic iusto distinctio inventore vitae.</p>

    <div  className="flex items-center justify-center flex-col">
      <section className='w-full lg:w-1/2 '>
        <form onSubmit={handlesubmit}>
        <div class="mb-5">
    <label htmlFor={date} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
    <input type="date"
    onChange={(e)=>setdate(e.target.value)} 
    id={date}
    name={date}
    value={date}
     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>

  <div className="mb-5">
  <label htmlFor="sourcecurrency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Source Currency
  </label>
  <select
    onChange={(e) => setsourcecurrency(e.target.value)}
    id="sourcecurrency"
    name="sourcecurrency"
    value={sourcecurrency}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    required
  >
    <option value="">Select source currency</option>
    {Object.keys(currencynames).map((currency) => (
  <option key={currency} value={currency}>
    {currencynames[currency]}
  </option>
))}

  </select>
</div>

  <div class="mb-5">
  <label htmlFor={targetcurrecy} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
    <select 
    onChange={(e)=>settargetcurrency(e.target.value)}
    id={targetcurrecy}
    name={targetcurrecy}
    value={targetcurrecy}
     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
       <option>USD</option>
      <option>UAD</option>
      <option>INR</option>
    </select>
  </div>

  <div class="mb-5">
    <label htmlFor={amountinsourcecurrency} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in source currency</label>
    <input type="number" 
    onChange={(e)=>setamountinsourcecurrency(e.target.value)}
    id={amountinsourcecurrency}
    name={amountinsourcecurrency}
    value={amountinsourcecurrency}
     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
  </div>

  <button onClick={handlesubmit} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
        </form>
      </section>
    </div>
    </>
  )
}

export default Mainpage