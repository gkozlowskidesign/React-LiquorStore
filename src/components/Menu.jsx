import React from 'react'
const products = [
      {
        id: 1,
        name: 'Wine Selection',
        href: '/wine',
        type: 'wine',
        imageSrc: 'https://github.com/gkozlowskidesign/React-LiquorStore/blob/codespace-gkozlowskidesign-cindys-update-1/Screen%20Shot%202022-09-23%20at%204.04.59%20PM.png?raw=true',
        imageAlt: 'Cindys Wine and Spirits',
      },
      {
        id: 2,
        name: 'Beer Selection',
        href: '/beer',
        type: 'beer',
        imageSrc: 'https://github.com/gkozlowskidesign/React-LiquorStore/blob/codespace-gkozlowskidesign-cindys-update-1/Screen%20Shot%202022-09-23%20at%204.04.59%20PM.png?raw=true',
        imageAlt: 'Cindys Wine and Spirits',
      },
      {
        id: 3,
        name: 'Liquor Selection',
        href: '/liquor',
        type: 'liquor',
        imageSrc: 'https://github.com/gkozlowskidesign/React-LiquorStore/blob/codespace-gkozlowskidesign-cindys-update-1/Screen%20Shot%202022-09-23%20at%204.04.59%20PM.png?raw=true',
        imageAlt: 'Cindys Wine and Spirits',
      },
    // More products...
  ]
  

export default function Example() {
return (
      
                    
<div id="Contact" className='w-full bg-black text-white mx-auto'>
      <div className='flex flex-col justify-center max-w-screen-lg mx-auto'>
        <div className='pb-2'>
            <p className='text-4xl font-bold inline border-b-4 border-red-400'>Menu</p>
            <p className='py-6'>Click on our collectible NFT publications to learn about our offerings</p>
        </div>
      
        <div className="mx-auto max-w-2xl py-10 px-4 sm:px-6 lg:max-w-7xl">
           <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl ring-4 ring-black bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img src={product.imageSrc} alt={product.imageAlt} className="mx-auto w-full object-cover object-center group-hover:opacity-75"/>
                  </div>
              <h3 className="mt-4 text-lg font-bold text-red-400">{product.name}</h3>
              <p className="mt-1 text-sm font-medium text-white">{product.type}</p>
              </a>
              ))}
           </div>
        </div>
      </div>
    </div>
)}
     
