
  
  export default function Example() {
    return (
        <div class="bg-black sm:grid grid-cols-5 grid-rows-1 px-4 py-6 sm:gap-4">
        <div class="col-span-4 bg-black rounded-xl ring-4 ring-black flex items-center mb-2">
        <h1 className="font text-5xl font-bold tracking-tight text-red-600 sm:text-7xl">View Selection</h1>
        </div>
        <div class="bg-black rounded-xl">
            <div class="bg-black rounded-xl list-none text-center ">
              <li class="py-3 bg-red-500 ring-4 ring-black rounded-xl hover:bg-red-300">
                <a href="/wine" class="list-none">Wines</a></li>
              <li class="py-3 mt-1 bg-red-500 to-black  ring-4 ring-black rounded-xl hover:bg-red-300">
                <a href="/liquor" class="list-none">Liquors</a></li>
              <li class="py-3 mt-1 bg-red-500 to-black  ring-4 ring-black rounded-xl hover:bg-red-300">
                <a href="/beer" class="list-none">Beers</a></li>
            </div>
        </div>
    </div>
    )
  }