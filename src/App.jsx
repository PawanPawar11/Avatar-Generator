import React from 'react'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  return (
    <div className='min-h-screen bg-linear-to-br from-purple-500 via-indigo-400 to-pink-500 flex items-center justify-center'>
      <div className='flex flex-col items-center gap-6 w-full lg:w-2xl h-96 bg-white-500/30 rounded-xl shadow-2xl backdrop-blur-xl p-4'>
        <img src="/avatar.png" alt="avatar png" className='w-24' />

        <div className='text-center'>
          <p>Avatar Generator</p>
          <p>Generate Male, Female, Cartoon, or Realistic avatars.</p>
        </div>

        <select>
          <option>Male</option>
          <option>Female</option>
          <option>Cartoon</option>
          <option>Illustration</option>
        </select>

        <div>
          https://www.pawanpawar.me
        </div>

        <div className='flex gap-6 w-full'>
          <button className='flex-1 bg-yellow-200 rounded-md p-1'>
            <i class="ri-arrow-right-up-line"></i>
            Change
          </button>
          <button className='flex-1 bg-cyan-200 rounded-md p-1'>
            <i class="ri-arrow-down-line"></i>
            Download
          </button>
          <button className='flex-1 bg-slate-200 rounded-md p-1'>
            <i class="ri-file-copy-line"></i>
            Copy
          </button>
        </div>
      </div>
    </div>
  )
}

export default App