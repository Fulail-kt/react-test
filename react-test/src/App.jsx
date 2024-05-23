import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { data } from './constants/data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='fixed w-full'><Navbar /></div>
      <div className='w-full bg-gradient-to-r from-pink-800 to-purple-800  min-h-screen flex items-center '>
        <div className='w-full flex h-full  items-center justify-between'>

          <div className=' pl-28 w-1/2 flex flex-col gap-y-4 text-white'>

            <h1 className='font-bold font-sans text-4xl  tracking-wide'>
              The most powerfull <br /> way to automate <br /> your EDI
            </h1>

            <p>Leverage the power of API technology - faster <br />
              integrations, greater data accurancy, global <br />
              connectivity & total automation. </p>

          </div>
          <div className='w-1/2 relative  flex items-center justify-end '>

            <div className='relative bg-white border rounded-l-lg w-[65%] z-20 flex  h-80'>
              <div className='absolute text-white flex flex-col justify-center items-start gap-y-1 py-1 px-1 bg-opacity-95 bg-blue-950 h-full w-[65px] rounded-l-lg'>

                <div className='bg-pink-500  rounded-md w-[75%] grid place-items-center h-11'>
                  <p className='text-white'>AA</p>
                </div>
                <p className='text-[9px]'>Transaction</p>
                <div className='bg-white bg-opacity-20 rounded-md w-[75%] grid place-items-center h-11'>
                  <p className='text-white'>AA</p>
                </div>
                <p className='text-[9px]'>Transaction</p>
                <div className='bg-white bg-opacity-20 rounded-md w-[75%] grid place-items-center h-11'>
                  <p className='text-white'>AA</p>
                </div>
                <p className='text-[9px]'>Transaction</p>
                <div className='bg-white bg-opacity-20 rounded-md w-[75%] grid place-items-center h-11'>
                  <p className='text-white'>AA</p>
                </div>
                <p className='text-[9px]'>Transaction</p>
                <div className='bg-white bg-opacity-20 rounded-md w-[75%] grid place-items-center h-11'>
                  <p className='text-white'>AA</p>
                </div>
                <p className='text-[9px]'>Transaction</p>
              </div>

              <div className='w-full h-full  pl-16'>

                <div className='w-full px-2 flex flex-col gap-y-1 py-1 h-20'>
                  <h1 className='font-bold font-sans'>Transaction</h1>
                  <p className='text-xs text-gray-500'>List of EDIs exchanged with your trading partners</p>
                  <div className='flex gap-x-1'><span className='border w-[70%] h-5 flex items-center gap-x-1 text-gray-500'>O<input type="text" placeholder='Search' className='w-[100%] h-full flex items-center text-xs' /></span><button className='border px-1 text-xs'>O</button></div>
                </div>

                <div className='text-[8px] flex flex-col'>
                  <table className=''>
                    <thead className='bg-blue-100'>
                      <tr>
                        <th className='p-1'>TRANSACTION ID</th>
                        <th className='p-1'>DOCUMENTS ID</th>
                        <th className='p-1'>SENDER</th>
                        <th className='p-1'>RECIEVER</th>
                        <th className='p-1'>DOCUMENT TYPE</th>
                        <th className='p-1'>EDI STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((table, index) => (
                        <tr className='h-6 text-center'>
                          <td>{table?.id}</td>
                          <td>{table.doc}</td>
                          <td>{table?.send}</td>
                          <td>{table.rec}</td>
                          <td>{table.type}</td>
                          <td>{table?.Edi}</td>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                </div>

              </div>

            </div>

            {/* first one */}
            <div className='absolute bg-white  w-52 h-16 text-sm px-2 z-20 rounded-md flex items-center justify-between left-36 border shadow-md'>
              <div className='w-[30%] bg-pink-600 rounded-md h-[80%]'>
              </div>
              <div className='w-[65%] '>
                <p className="text-gray-500 font-semibold" >Inbound EDis</p>
                <div className='flex gap-x-3'>
                  <p>622 </p> <span className='text-green-500'>632%</span>
                </div>
              </div>
            </div>
            {/* second one */}
            <div className='absolute bg-white w-52 h-16 text-sm z-20 rounded-md px-2 flex items-center justify-between -bottom-9 border shadow-md'>
              <div className='w-[30%] bg-purple-800 rounded-md h-[80%]'>

              </div>
              <div className='w-[65%] '>
                <p className="text-gray-500 font-semibold" >Outbound EDis</p>
                <div className='flex gap-x-3'>
                  <p>316 </p> <span className='text-green-500'>89%</span>
                </div>
              </div>
            </div>

            {/* third one */}
            <div className='absolute bg-white w-52 h-16 text-sm z-20 rounded-l-md px-2 flex items-center justify-between -top-9 border shadow-md'>
              <div className='w-[30%] bg-purple-500 rounded-md h-[80%]'>

              </div>
              <div className='w-[65%] '>
                <p className="text-gray-500 font-semibold " >Transactions</p>
                <div className='flex gap-x-3'>
                  <p>938 </p> <span className='text-green-500'>272%</span>
                </div>
              </div>
            </div>



          {/* Dummy background box */}

          <div className='absolute  bg-white bg-opacity-30 border rounded-l-lg w-[67%] flex z-10  h-72'></div>
          <div className='absolute  bg-white bg-opacity-30 border rounded-l-lg w-[69%] flex z-10  h-60'></div>
          </div>
        </div>

{/* buttond */}

<button className='bg-white absolute rounded-full bottom-10 left-10 px-2 '>X</button>
      </div>
    </>
  )
}

export default App
