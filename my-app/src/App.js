import React from "react";
import Navbar from "./components/Navbar";
import data from './data';
import Card from "./components/Card";

export default function App()
{
    const cards=data.map(item=>{
        return(
            <Card
            id={item.id}
            //item={item} OR
            {...item}

            />
        )
    })
   
    return(
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
