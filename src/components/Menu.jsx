import React from 'react'

      {
        id: 1,
        name: 'Wine Selection',
        href: '/wine',
        type: 'wine',
        imageSrc: 'https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/305204076_445573760926519_4718150325861769894_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TdP1AmpfGN4AX8QJTzk&_nc_ht=scontent-bos5-1.xx&oh=00_AfBG2wlG0qNbY6AVjrwbb-BVetzxO1k4KnsqWjkAcNUZaw&oe=639C82BD',
        imageAlt: 'Cindys Wine and Spirits',
      },
      {
        id: 2,
        name: 'Beer Selection',
        href: '/beer',
        type: 'beer',
        imageSrc: 'https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/305204076_445573760926519_4718150325861769894_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TdP1AmpfGN4AX8QJTzk&_nc_ht=scontent-bos5-1.xx&oh=00_AfBG2wlG0qNbY6AVjrwbb-BVetzxO1k4KnsqWjkAcNUZaw&oe=639C82BD',
        imageAlt: 'Cindys Wine and Spirits',
      },
      {
        id: 3,
        name: 'Liquor Selection',
        href: '/liquor',
        type: 'liquor',
        imageSrc: 'https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/305204076_445573760926519_4718150325861769894_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TdP1AmpfGN4AX8QJTzk&_nc_ht=scontent-bos5-1.xx&oh=00_AfBG2wlG0qNbY6AVjrwbb-BVetzxO1k4KnsqWjkAcNUZaw&oe=639C82BD',
        imageAlt: 'Cindys Wine and Spirits',
      },
    // More products...
  ]
  

  export default function Example() {
    return (
      
                    
<div id="Contact" className='w-full bg-black text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto'>
            <br></br>
            <br></br>
            <br></br>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-red-500'>Menu</p>
                <p className='py-6'>Click on a publication to here about our offerings</p>
            </div>
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
        <a key={product.id} href={product.href} className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-lg font-bold text-indigo-400">{product.name}</h3>
        <p className="mt-1 text-sm font-medium text-white">{product.type}</p>
        </a>
        ))}
        
      </div>
    </div>
</div>




)
}
     
