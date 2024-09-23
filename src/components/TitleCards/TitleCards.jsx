import React, { useEffect, useRef } from 'react'
import './titlecards.css'
import cards_data from '../../assets/cards/Cards_data'



const TitleCards = ({tilte, category}) => {
    const cardsRef = useRef();

    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(() => {
        cardsRef.current.addEventListener('wheel', handleWheel)
    }, [])

  return (
    <div className='title-cards'>
        <h2>{tilte ? tilte : "Popular on Netflix"}</h2>
        <div className="card-list" ref={cardsRef}>
            {cards_data.map((card, index) => (
                <div className="card" key={index}>
                    <img src={card.image} alt={card.name} />
                    <p>{card.name}</p>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default TitleCards
