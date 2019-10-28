import React, { Suspense } from 'react';
import { createResource } from './api/Resources';
import { Card } from './components/Card';
import { Num } from './components/Num';

const resource = createResource();

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<h1>Loading Number...</h1>}>
        <Num resource={resource} />
      </Suspense>
      <Suspense fallback={<h1>Loading Card...</h1>}>
        <Card resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;
