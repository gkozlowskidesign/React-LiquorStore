
  
  export default function Example() {
    return (

  <div id="Contact" className='w-full h-screen bg-black text-white'>
        <div className='flex flex-col p-8 justify-center max-w-screen-lg mx-auto h-full'>
            <br></br>
            <br></br>
            <br></br>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-500'>Menu</p>
                <p className='py-6'>Click on a publication to here about our offerings</p>
            </div>

            <div className='flex justify-center items-center'>
             <div class="bg-black rounded-xl mx-auto p-8">
                    <div class="bg-black rounded-xl list-none text-center mx-auto">
                      <li class="py-3 bg-black ring-4 ring-black rounded-xl">
                        <a href="/wine" class="list-none text-red-500 hover:text-red-300">Wines</a></li>
                      <li class="py-3 mt-1 bg-black ring-4 ring-black rounded-xl">
                        <a href="/liquor" class="list-none text-red-500 hover:text-red-300">Liquors</a></li>
                      <li class="py-3 mt-1 bg-black ring-4 ring-black rounded-xl">
                        <a href="/beer" class="list-none text-red-500 hover:text-red-300">Beers</a></li>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
