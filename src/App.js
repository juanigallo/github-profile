import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const getData = await fetch("https://api.github.com/users/juanigallo");
    const json = await getData.json();

    const data = {
      profile: json.login,
      name: json.name,
      description: json.bio
    };

    setData(data);
  }

  return (
    <>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <a href={`https://github.com/${data.profile}`}>
        <button>Ir a Github</button>
      </a>
    </>
  );
}

export default App;
