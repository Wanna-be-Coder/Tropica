import axios from "axios";
import "./App.css";

function App() {
  const handleSubmit = () => {
    const data = {
      name: "Yo",
      total_amount: 10000,
    };

    axios
      .get("http://localhost:8000/init", data)
      .then((resp) => {
        // console.log(resp);
        window.location.replace(resp.data.gatewayPageUrl);
        // window.location.replace(resp.gatewayPageUrl);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <>
      {" "}
      <div className='App'>SSL Check</div>;
      <button
        class='your-button-class'
        id='sslczPayBtn'
        // token='if you have any token validation'
        // postdata='10000000'
        // order='If you already have the transaction generated for current order'
        // endpoint='http://localhost:8000/init'
        onClick={() => handleSubmit()}
      >
        {" "}
        Pay Now
      </button>
    </>
  );
}

export default App;
