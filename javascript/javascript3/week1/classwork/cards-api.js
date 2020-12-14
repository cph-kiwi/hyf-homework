// Playing with this API: http://deckofcardsapi.com/ ...
// Shuffle new deck
fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then((response) => response.json())
  .then((deck) => {
    console.log(deck);

    // Display number of cards remaining
    const span = document.createElement("span");
    span.innerHTML = deck.remaining;
    document.body.appendChild(span);

    const deck_id = deck.deck_id;

    // Draw a card from the shuffled deck above
    fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
      .then((response) => response.json())
      .then((deck) => {
        console.log(deck);

        const suitSpan = document.createElement("span");
        suitSpan.innerHTML = deck.cards[0].suit;
        document.body.appendChild(suitSpan);

        const valueSpan = document.createElement("span");
        valueSpan.innerHTML = deck.cards[0].value;
        document.body.appendChild(valueSpan);

        const image = document.createElement("img");
        image.src = deck.cards[0].images.svg;
        document.body.appendChild(image);
      });
  });
