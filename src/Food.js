import React, { useState } from 'react'
import FoodItem from './FoodItem'

export default function Food() {


    const [search, setSearch] = useState("");

    const [food, getFood] = useState([]);

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

    const searchBtn = (e) => {
        e.preventDefault();
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                getFood(data.meals);
            })
            .catch(error => console.log(error));
    }
    return (
        <div className='foodContainer'>
            <h1>Search Your Food Receipe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore unde sed ducimus voluptates illum! </p>
            <div className='searchfood'>
                <form onSubmit={searchBtn}>
                    <input type="search" placeholder='Enter your food name' className='search-bar' onChange={(e) => setSearch(e.target.value)} value={search} />
                    <button type="button" onClick={searchBtn}><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className='container'>
                {
                    (food === null) ?
                        <h3 className='notfound'>Oops!.. No Food Found Which Your are Looking for</h3> :
                        food.map((res) => {
                            return (
                                <FoodItem key={res.idMeal} data={res} />
                            )
                        })
                }
            </div>
        </div>
    )
}
