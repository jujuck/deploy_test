import react, {useEffect, useState} form 'react;

import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/items`)
      .then((res) => res.json())
      .then((json) => setItems(json))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="App">
      {items.map((item) => <h2>{item.title}</h2>)}
    </div>
  );
}

export default App;
