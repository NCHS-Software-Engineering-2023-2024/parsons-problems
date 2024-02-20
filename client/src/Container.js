import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { Card } from './Card.js'
const style = {
  width: 400,
}
export const Container = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'asdf',
      },
      {
        id: 2,  
        text: 'asdfg',
      },
      {
        id: 3,
        text: 'asdfgh',
      },
      {
        id: 4,
        text: 'asdfghj',
      },
      {
        id: 5,
        text: 'asdfghjk',
      },
      {
        id: 6,
        text: "asdfghjkl",
      },
      {
        id: 7,
        text: 'asdfghjkl;',
      },
    ])
    const moveCard = useCallback((dragIndex, hoverIndex) => {
      setCards((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        }),
      )
    }, [])
    const renderCard = useCallback((card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      )
    }, [])
    return (
      <>
        <div style={style}>
            {cards.map((card, i) => renderCard(card, i))}
        </div>
      </>
    )
  }
}
