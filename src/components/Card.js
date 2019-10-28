import React from 'react';

export const Card = ({ resource }) => {
  const card = resource.card.read();

  return <img src={card.image_uris.large} alt={card.flavor_text} />;
};
