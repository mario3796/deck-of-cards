import { useState } from 'react';

import Form from '../Form/Form';
import Cards from '../Cards/Cards';

const Feed = () => {
  const [counter, setCounter] = useState(0);
  const [cards, setCards] = useState([]);

  const fetchCardsHandler = async() => {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=' + counter);
    const data = await response.json();
    let loadedCards = [];
    data.cards.forEach(card => {
      loadedCards.push(card);
    });
    console.log(loadedCards);
    setCards(loadedCards);
  }

  return (
    <div className="App">
      <Form counter={counter} setCounter={setCounter} clicked={fetchCardsHandler}/>
      <Cards cards={cards} />
    </div>
  );
}

export default Feed;
