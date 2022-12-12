const features = [
    { name: 'Wine', description: 'There are many different types of wine, each with its own unique characteristics and flavors. Some of the most common types of wine include red wine, white wine, rosé wine, and sparkling wine.Red wine is made from dark-colored grape varieties and is known for its robust flavors and aromas, which can range from fruity and spicy to earthy and complex. Some popular varieties of red wine include Cabernet Sauvignon, Merlot, and Pinot Noir.White wine is made from light-colored grape varieties and is known for its crisp, refreshing flavors. White wines can range from dry to sweet, and common varieties include Chardonnay, Sauvignon Blanc, and Riesling.Rosé wine is made from a blend of red and white grapes, and it has a light pink color and a refreshing, fruity flavor. Rosé wines are often enjoyed as an aperitif or with light meals.Sparkling wine is a type of wine that is fermented with carbon dioxide, which gives it its signature bubbles. Sparkling wines are often associated with celebrations and special occasions, and popular varieties include Champagne and Prosecco. These are just a few examples of the many different types of wine that are available. There are countless other varieties and styles of wine to explore, each with its own unique characteristics and flavors.' },
    { name: 'Liquor', description: 'There are many different types of liquor, each with its own unique flavor and characteristics. Some of the most common types of liquor include vodka, gin, rum, whiskey, and tequila. Vodka is a clear, flavorless spirit that is made from grains or potatoes. It is typically consumed neat or in cocktails, and it is known for its smooth, clean taste. Gin is a clear spirit that is flavored with juniper berries and other botanicals. It has a distinct, pine-like flavor and is commonly enjoyed in cocktails like the martini or gin and tonic. Rum is a dark, sweet spirit that is made from sugarcane. It is commonly associated with the Caribbean, and it is often enjoyed in cocktails like the mojito or rum and coke. Whiskey is a spirit that is made from grain and aged in oak barrels. It has a rich, complex flavor and is commonly enjoyed neat or on the rocks. Tequila is a clear spirit that is made from the blue agave plant. It is often associated with Mexico, and it is commonly enjoyed in cocktails like the margarita. These are just a few examples of the many different types of liquor that are available. There are countless other varieties and styles of liquor to explore, each with its own unique flavors and characteristics.' },
    { name: 'Beer', description: 'There are many different types of beer, each with its own unique flavor and characteristics. Some of the most common types of beer include lagers, ales, pilsners, stouts, and porters. Lagers are a type of beer that is fermented at cooler temperatures and for longer periods of time than ales. This results in a crisp, clean flavor and a refreshing finish. Some popular varieties of lager include Budweiser and Coors. Ales are a type of beer that is fermented at warmer temperatures and for shorter periods of time than lagers. This results in a more complex, fruity flavor and a slightly bitter finish. Some popular varieties of ale include IPA and pale ale. Pilsners are a type of lager that originated in the Czech Republic. They are known for their light, crisp flavor and golden color. Some popular varieties of pilsner include Pilsner Urquell and Heineken. Stouts are a type of dark beer that is made with roasted malts and barley. They have a rich, full-bodied flavor and a dark color, and popular varieties include Guinness and oatmeal stout. Porters are a type of dark beer that originated in London. They are made with roasted malts and hops, and they have a rich, complex flavor and a dark color. Some popular varieties of porter include Newcastle and Old Rasputin. These are just a few examples of the many different types of beer that are available. There are countless other varieties and styles of beer to explore, each with its own unique flavors and characteristics' },
  ]
  
  export default function Example() {
    return (
      <div id="Learn-More" className="bg-gradient-to-b from-red-400 to-black">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-10 px-4 sm:px-6 sm:py-22 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
       
       <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-10">


        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Cindy's Background</h2>
        <hr></hr>
        <h4 className="text-3xl font-bold tracking-tight text-white sm:text-3xl">About</h4>
            <p className="text-white">
            Cindys Wine and Spirits offers an amazing beautiful shopping experience. The store is filled with a huge selection of wines from all over the world. 
            We have walls of vodka, Bourbons, Tequilas, Rums, Gins, Whiskeys, Moonshines and other liquor we also deliver gift baskets locally and have over 100 
            cold wines and we also have a beer cave with craft Brews, Domestic and Imported beers. Our selection is by far the best on the Connecticut shoreline.</p>
        

            <h4 className="text-3xl font-bold tracking-tight text-white sm:text-3xl">History</h4>
            <p className="text-white">
            On September 8th 2022 we closed our doors at 688 Boston Post Rd, Westbrook Connecticut and moved to our newly built store location at 1238 Boston Post Rd, Westbrook Connecticut. 
            Our new location opened its doors on September 13th 2022 in the heart of Westbrook right down the street from the green and in our beautiful new shop. </p>

              </div>
              

              <dl className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-y-5 lg:gap-x-8">
              <img
              src="https://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2021/08/11114624/Drizly-OG1.jpg"
              className="w-full shadow-2xl border-3 border-transparent rounded-xl"
              alt="DRIZLY"
              />  

              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-bold text-red-500 text-2xl">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-white">{feature.description}</dd>
                </div>
              ))}
              </dl>
     

         </div>
       </div>
    
   
    )
  }
  
