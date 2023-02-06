import './App.css';

const App = () => {
  const name = "null";
  return (
    <div className="App">
      <p>
        hello this is a test
      </p>
      {name ? (
        <>
        no
        </>
      ) : (
        <h1>test</h1>
      )}
    </div>
  );
}

export default App;
