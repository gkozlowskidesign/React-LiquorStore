import React from 'react'

const Contact = () => {
  return (
    <div id="Contact" className='w-full h-screen bg-black text-white'>
        <div className='flex flex-col p-8 justify-center max-w-screen-lg mx-auto h-full'>
            <br></br>
            <br></br>
            <br></br>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-400'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/50b193c5-6a24-4006-9abc-0d7fee95b9d7" method="post" className='flex flex-col w-full md:w-1/2'>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder='enter your name' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>

                    </input>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder='enter your email' 
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>
                        
                    </input>
                    <textarea 
                    name="message"
                    placeholder='Enter your message'
                    rows="10" 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>

                    </textarea>

                    <button 
                    className='text-white bg-gradient-to-b from-red-400 to-red-900 px-6 py-3 my-8 mx-auto flex-items-center rounded-md hover:scale-110 duartion-300'>
                        Give Feedback!
                    </button>
                    <br></br>
                    <br></br>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Contact
