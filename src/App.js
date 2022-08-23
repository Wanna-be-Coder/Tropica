import "./App.css";

function App() {
  return (
    <>
      {" "}
      <div className='App'>SSL Check</div>;
      <button
        class='your-button-class'
        id='sslczPayBtn'
        token='if you have any token validation'
        postdata='10000000'
        order='If you already have the transaction generated for current order'
        endpoint='http://localhost:8000/init'
      >
        {" "}
        Pay Now
      </button>
    </>
  );
}

export default App;
