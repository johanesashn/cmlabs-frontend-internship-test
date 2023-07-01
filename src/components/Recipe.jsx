import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NavbarChild from "./NavbarChilld";
import { nanoid } from "nanoid";
import ReactPlayer from 'react-player';

export default function Recipe(){
    const { foodId } = useParams();
    const [meals, setMeals] = useState([])

    useEffect(() => {
        $.ajax({
            url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`,
            method: 'GET',
            dataType: 'json',
            success: function(data) {
              let meals = data.meals.map(function(meal) {
                return {
                  name: meal.strMeal,
                  instruction: meal.strInstructions,
                  image: meal.strMealThumb,
                  video: meal.strYoutube,
                  area: meal.strArea
                }
              })
              setMeals(meals)
            },
            error: function(xhr, status, error) {
              console.error(error)
            }
          })
          
          window.scrollTo({
            top: 0, 
            behavior: "instant"
          })
    }, [])

    const instruction = meals.map((meal) => (
        <div className="recipe-content" key={nanoid()}>
            <div className="recipe-header">
                <img className="recipe-image" src={meal.image} alt="" />
                <div className="recipe-title">
                    <h2>Instruction to make <span>{meal.name}</span></h2>
                    <p>{meal.area} Culinary</p>
                </div>
            </div>
            <div className="recipe-instruction">
                <h3>Steps: </h3>
                {meal.instruction}
            </div>
            {meal.video && <div className="recipe-video">
                <h3>Video Tutorial</h3>
                <ReactPlayer url={meal.video} controls width="100%" />
            </div>}
        </div>
    ))

    return (
        <div>
            <NavbarChild/>
            {instruction}
        </div>
    )
}