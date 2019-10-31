import React from 'react';

export const Card = ({ resource }) => {
  const card = resource.card.read();

  return (
    <div className='card-section'>
      <h1 className='card-title'>
        {card.name} by {card.artist}
      </h1>
      <img
        src={card.image_uris.art_crop}
        alt={card.flavor_text}
        className='card-art'
      />
      <p className='fetched'>
        Fetched from the{' '}
        <a href='https://scryfall.com/docs/api' className='card-link'>
          Scryfall
        </a>{' '}
        API{' '}
        <span role='img' aria-label='Wizard'>
          🧙🏽‍
        </span>
      </p>
    </div>
  );
};
