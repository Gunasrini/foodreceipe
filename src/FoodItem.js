import React from 'react'

export default function FoodItem(getFood) {
  return (
    <div className='card'>
      <img src={getFood.data.strMealThumb} alt='food' />
      <div className='info'>
        <h2>{getFood.data.strMeal}</h2>
        <span className='category'>{getFood.data.strCategory}</span>
      </div>
    </div>
  )
}
