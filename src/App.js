import React from 'react'
import First from './component/First.js'
import Card from './component/Card.js'
import Second from './component/Second.js'
import Data from './data.js'
 export default function  App()
 {
     const array = Data.map((item) =>
     {
         return <Card
             key={item.id}
             item={item}
         />
         }
    )
    return(<div>
        
        <First />
        <Second/>
        <section className='cards-list'>{array}</section>
     
    </div>
    )

}