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
            } else if (index === 1) {
                name = "two"
            } else if (index === 2) {
                name = "three"
            } else if (index === 3) {
                name = "four"
            } else if (index === 4) {
                name = "five"
            } else if (index === 5) {
                name = "six"
            } else if (index === 6) {
                name = "seven"
            } else if (index === 7) {
                name = "eight"
            } else if (index === 8) {
                name = "nine"
            } else if (index === 9) {
                name = "ten"
            } else if (index === 10) {
                name = "eleven"
            } else if (index === 11) {
                name = "twelve"
            } else if (index === 12) {
                name = "thirteen"
            } else if (index === 13) {
                name = "fourteen"
            }

            return (
                <div className={`food-card ${name}`}>
                    <img src={card.image} alt="" />
                    <div className="card-caption">
                        <p className="food-name">{card.name}</p>
                        <Link 
                            to={`/content/${card.name}`}
                            className="card-link"
                        >
                            <button 
                                className="visit"
                            >
                                See
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