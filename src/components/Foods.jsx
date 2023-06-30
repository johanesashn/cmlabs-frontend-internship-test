import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Foods(){
    const [cards, setCards] = useState([])

    useEffect(() => {
        // ini disuruh pakai ajax makanya beda
        // biasanya kan pakai fetch
        $.ajax({
            url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
            method: 'GET',
            dataType: 'json',
            success: function(data) {
              let cards = data.categories.map(function(category) {
                return {
                  name: category.strCategory,
                  image: category.strCategoryThumb,
                };
              });
              setCards(cards);
            },
            error: function(xhr, status, error) {
              console.error(error);
            }
          });
    }, [])

    const cardElements = cards.map((card, index) => {
            let name = ""
            let food = ""
            if (index === 0) {
                name = "one"
                food = "beef"
            } else if (index === 1) {
                name = "two"
                food = "Chicken"
            } else if (index === 2) {
                name = "three"
                food = "Dessert"
            } else if (index === 3) {
                name = "four"
                food = "Lamb"
            } else if (index === 4) {
                food = "Miscellaneous"
                name = "five"
            } else if (index === 5) {
                name = "six"
                food = "Pasta"
            } else if (index === 6) {
                name = "seven"
                food = "Pork"
            } else if (index === 7) {
                name = "eight"
                food = "Seafood"
            } else if (index === 8) {
                name = "nine"
                food = "Side"
            } else if (index === 9) {
                name = "ten"
                food = "Starter"
            } else if (index === 10) {
                name = "eleven"
                food = "Vegan"
            } else if (index === 11) {
                name = "twelve"
                food = "Vegetarian"
            } else if (index === 12) {
                name = "thirteen"
                food = "Breakfast"
            } else if (index === 13) {
                name = "fourteen"
                food = "Goat"
            }

            return (
                <div className={`food-card ${name}`}>
                    <img src={card.image} alt="" />
                    <div className="card-caption">
                        <p className="food-name">{card.name}</p>
                        <Link 
                            to={`/content/${food}`}
                            className="card-link"
                        >
                            <button 
                                className="visit"
                            >
                                visit
                            </button>
                        </Link>
                    </div>
                </div>
            )
    })

    return (
        <div className="foods" id="foods">
            <h2>What Do You Want To Make?</h2>
            <div className="food-container">
                {cardElements}
            </div>
        </div>
    )
}