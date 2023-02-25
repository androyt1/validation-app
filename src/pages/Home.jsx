import React,{useState} from 'react'

const Home = () => {  

  const[formState,setFormState]=useState({
      fname:'',
      lname:'',
      email:'',
      phone:''
  })  
  const{fname,lname,email,phone}=formState

  const handleChange=event=>{
    const{name,value}=event.target
    setFormState((prevState)=>({
      ...formState,
      [name]:value
    }))
  }

  return (
    <div className='w-full h-screen border-red-600 shadow-sm shadow-red-400'>
        <div className='px-5 py-6 bg-red-600 text-white flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>Live Validation</h1>
        <h3 className='text-2xl pt-3'>This is a Simple Form Validation App</h3>
        </div>
        <form action="" className='w-2/3 mx-auto py-6 px-5  mt-8 bg-red-50'>
          <div className='grid grid-cols-4 w-full mb-4'>
              <div className='col-span-1 flex justify-start items-end'>
                <label htmlFor="fname" aria-label='First Name' className='font-semibold'>First Name <span>*</span></label>
              </div>
              <div className='col-span-3'>
              <input type="text" placeholder='Enter Your First Name' className='w-full bg-white p-1 border focus:outline-none focus:border-red-300' name='fname' value={fname} onChange={handleChange} />
              </div>
          </div>

          <div className='grid grid-cols-4 w-full mb-4'>
              <div className='col-span-1 flex justify-start items-end'>
                <label htmlFor="fname" aria-label='First Name' className='font-semibold'>Last Name <span>*</span></label>
              </div>
              <div className='col-span-3'>
              <input type="text" placeholder='Enter Your Last Name' className='w-full bg-white p-1 border focus:outline-none focus:border-red-300' name='lname' value={lname} onChange={handleChange} />
              </div>
          </div>

          <div className='grid grid-cols-4 w-full mb-4'>
              <div className='col-span-1 flex justify-start items-end'>
                <label htmlFor="fname" aria-label='First Name' className='font-semibold'>Email Address <span>*</span></label>
              </div>
              <div className='col-span-3'>
              <input type="text" placeholder='Enter Your Email Address' className='w-full bg-white p-1 border focus:outline-none focus:border-red-300' name='email' value={email} onChange={handleChange} />
              </div>
          </div>

          <div className='grid grid-cols-4 w-full mb-4'>
              <div className='col-span-1 flex justify-start items-end'>
                <label htmlFor="fname" aria-label='First Name' className='font-semibold'>Phone Number <span>*</span></label>
              </div>
              <div className='col-span-3'>
              <input type="text" placeholder='Enter Your Phone Number' className='w-full bg-white p-1 border focus:outline-none focus:border-red-300' name='phone' value={phone} onChange={handleChange}/>
              </div>
          </div>

          <div className='grid grid-cols-4 w-full mb-4'>
              <div className='col-span-1 flex justify-start items-end'>
                <button className='bg-red-600 text-white font-semibold py-1 px-6 mt-3'>Submit</button>
              </div>
              <div className='col-span-3'>
              
              </div>
          </div>

          
        </form>
    </div>
  )
}

export default Home