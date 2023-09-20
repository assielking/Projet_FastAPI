import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Main from "./components/Main.js";
import { useState } from "react";

function App() {
  const [link, setLink] = useState(1);
  const [user, setUser] = useState();
  const [apikey, setApiKey] = useState()
  return (
    <div className="h-full w-full">
      {user && (
        <div className="flex">
          <Layout link={link} setUser={setUser} user={user} setLink={setLink} />
          <Main link={link} user={user} setLink={setLink} apiKey={apikey}/>
        </div>
      )}
      {!user && <Login apikey={apikey} setApiKey={setApiKey} setUser={setUser} />}
    </div>
  );
}

export default App;
