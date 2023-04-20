import { useState } from 'react';
import Header from './layout/header/Header';
import Main from './layout/main/Main';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-6 py-4">
      <Header />
      <Main/>
    </div>
  );
}

export default App;
