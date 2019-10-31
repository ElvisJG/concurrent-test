import React, { Suspense, useState, useTransition } from 'react';
import { createResource } from './api/Resources';
import { Card } from './components/Card';
import { Num } from './components/Num';
import ErrorBoundary from './ErrorBoundary';

const initialResource = createResource();

function App() {
  const [resource, setResource] = useState(initialResource);
  const [startTransition, isPending] = useTransition({
    timeoutMs: 2500
  });

  return (
    <div className='App'>
      <Suspense
        fallback={
          <h2>
            Looks like this might take a bit{' '}
            <span role='img' aria-label='sweating'>
              😅
            </span>
          </h2>
        }
      >
        <Num resource={resource} />
      </Suspense>
      <Suspense fallback={<h1>Loading Card...</h1>}>
        <ErrorBoundary>
          <Card resource={resource} />
        </ErrorBoundary>
      </Suspense>
      <button
        className='new-card'
        onClick={() => {
          startTransition(() => {
            setResource(createResource());
          });
        }}
      >
        New Card
      </button>
      {isPending ? <p className='loading'>Loading...</p> : null}
    </div>
  );
}

export default App;
