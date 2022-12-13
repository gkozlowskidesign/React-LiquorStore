
  
  export default function Example() {
    return (
        <div class="mx-auto bg-black grid grid-cols-4 grid-rows-1 px-8 py-6 gap-4">
        <div class="col-span-4 bg-black rounded-xl ring-4 ring-black flex items-center mb-2">
        <h1 className="font text-4xl font-bold tracking-tight text-red-600 ">Menu</h1>
        </div>
        <div class="bg-black rounded-xl">
            <div class="bg-black rounded-xl list-none text-center ">
              <li class="py-3 bg-black ring-4 ring-black rounded-xl">
                <a href="/wine" class="list-none text-red-500 hover:text-red-300">Wines</a></li>
              <li class="py-3 mt-1 bg-black ring-4 ring-black rounded-xl">
                <a href="/liquor" class="list-none text-red-500 hover:text-red-300">Liquors</a></li>
              <li class="py-3 mt-1 bg-black ring-4 ring-black rounded-xl">
                <a href="/beer" class="list-none text-red-500 hover:text-red-300">Beers</a></li>
            </div>
        </div>
    </div>
    )
  }
