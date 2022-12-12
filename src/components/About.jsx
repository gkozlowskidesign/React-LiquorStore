const features = [
    { name: 'Wine', description: 'There are many different types of wine, each with its own unique characteristics and flavors. Some of the most common types of wine include red wine, white wine, rosé wine, and sparkling wine.Red wine is made from dark-colored grape varieties and is known for its robust flavors and aromas, which can range from fruity and spicy to earthy and complex. Some popular varieties of red wine include Cabernet Sauvignon, Merlot, and Pinot Noir.White wine is made from light-colored grape varieties and is known for its crisp, refreshing flavors. White wines can range from dry to sweet, and common varieties include Chardonnay, Sauvignon Blanc, and Riesling.Rosé wine is made from a blend of red and white grapes, and it has a light pink color and a refreshing, fruity flavor. Rosé wines are often enjoyed as an aperitif or with light meals.Sparkling wine is a type of wine that is fermented with carbon dioxide, which gives it its signature bubbles. Sparkling wines are often associated with celebrations and special occasions, and popular varieties include Champagne and Prosecco. These are just a few examples of the many different types of wine that are available. There are countless other varieties and styles of wine to explore, each with its own unique characteristics and flavors.




Try again
' },
    { name: 'Liquor', description: 'Our Liquor selection includes many of the well known and world class brands with wide variety of choices including, Bourbons, Vodka, Scotch, Gin, Rum, Whisky and many others.' },
    { name: 'Beer', description: 'Our Beer selection includes a wide variety of well known top-quality Domestic Imports, Light-Beers, Dark-Beers and a unquie selection of I.P.A Beers.' },
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
  
