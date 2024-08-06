import { useState } from "react";
import Form from "./Form";

function App() {
  const [data,setData] = useState(null)




  return (
    <div className="App">
     <Form setData={setData}/>
     {data && <div>weatherData: {JSON.stringify(data)}</div>}
    </div>
  );
}

export default App;