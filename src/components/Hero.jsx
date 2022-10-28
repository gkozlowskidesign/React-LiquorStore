export default function Example() {
    return (
      <div className="relative overflow-hidden w-full h-screen py-2 px-2 bg-gradient-to-b from-black to-red-400 text-white">
        <div className="pt-5 pb-20 sm:pt-24 sm:pb-20 lg:pt-40 lg:pb-20">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-5xl font-bold tracking-tight text-white sm:text-8xl">Cindy's <span className="text-red-600">
                <br></br>Wine</span></h1>
              <h1 className="font text-5xl font-bold tracking-tight text-white sm:text-8xl">And <span className="text-red-600">
                  Spirits</span></h1>
              <p className="mt-4 text-2xl text-white">
              We pride ourselves in being voted #1 Best Wine and Liquor store on the Connecticut Shore line!

              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-80 w-70 overflow-hidden  hidden md:block rounded-xl">
                          <img
                             src="https://images.pexels.com/photos/14103309/pexels-photo-14103309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                             alt="Whiskey"
                        
                            className="h-full w-full object-cover object-center border-3 border-transparent"
                          />
                        </div>
                      <div className="h-64 w-70 overflow-hidden  hidden md:block rounded-xl">                          
                      <img
                             src="https://images.pexels.com/photos/13713070/pexels-photo-13713070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                             alt="Tequila"
                            className="h-full w-full object-cover object-center border-3 border-transparent"
                          />
                        </div>
                        <div className="h-full w-64 overflow-hidden hidden md:block rounded-xl">
                          <img                          
                             src="https://images.pexels.com/photos/1089932/pexels-photo-1089932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                             alt="Corona"
                            className="h-full w-64 object-cover object-center border-3 border-transparent"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-60 overflow-hidden hidden md:block  rounded-xl">
                          <img
                            src="https://images.pexels.com/photos/9584972/pexels-photo-9584972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Tequila"
                            className="h-full w-full object-cover object-center border-3 border-transparent"
                          />
                        </div>
                        <div className="h-86 w-68 overflow-hidden rounded-xl">
                          <img
                            src="https://images.pexels.com/photos/774455/pexels-photo-774455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Wine Cellar"
                            className="h-full w-68 object-center border-3 border-transparent "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
