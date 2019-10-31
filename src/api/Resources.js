const fetchCard = () => {
  return fetch('https://api.scryfall.com/cards/random').then(res => res.json());
};

const wrapPromise = promise => {
  let status = 'pending';
  let result = '';
  let suspender = promise.then(
    r => {
      status = 'success';
      result = r;
    },
    e => {
      status = 'error';
      result = e;
    }
  );

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      }

      return result;
    }
  };
};

export const randomNumber = async () => {
  return new Promise(res => setTimeout(() => res(Math.random()), 2500));
};

export const createResource = () => {
  return {
    card: wrapPromise(fetchCard()),
    num: wrapPromise(randomNumber())
  };
};
