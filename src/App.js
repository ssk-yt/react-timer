import React from 'react';
import Timer from './Timer';

function App() {
  return (
    <div>
      <h1>複数タイマーの例</h1>
      <Timer initialTime={10} />
      <Timer initialTime={20} />
      <Timer initialTime={30} />
    </div>
  );
}

export default App;
