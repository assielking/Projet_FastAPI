import axios from "axios";
import React, { useEffect, useState } from "react";

const Login = ({ setUser, apikey, setApiKey }) => {
  const [tempapikey, setTemp] = useState()
  const [err, setErr] = useState()
  const handleLogin = async()=>{
    console.log(tempapikey)
    try {
      const {data }= await axios.get(`http://127.0.0.1:8000/authentication/?apikey=${tempapikey}`)
      setApiKey(tempapikey)
      setUser(data)
    } catch (error) {
      setErr(true)
      setTimeout(() => {
        setErr()
      }, 2000);
    }
    // if (data)
    // setUser('paulin')
    
  }
  return (
    <div class="flex min-h-screen items-center justify-center bg-gray-200 darkw:bg-gray-950 p-12">
      <div >
        <div class="max-w-sm rounded-3xl bg-gradient-to-b from-sky-300 to-purple-500 p-px darkw:from-gray-800 darkw:to-transparent">
          <div class="rounded-[calc(1.5rem-1px)] bg-white px-10 p-12 darkw:bg-gray-900">
            <div>
              <h1 class="text-xl font-semibold text-gray-800 darkw:text-white">
                Page de connexion
              </h1>
              <p class="text-sm tracking-wide mt-4 text-gray-600 darkw:text-gray-300">
                Veuillez vous connectez avec votre Api Key
              </p>
            </div>

            <div class="mt-8 space-y-8">
              <div class="space-y-6">
                <input
                  value={tempapikey}
                  onChange={(e)=>setTemp(e.target.value)}
                  class="w-full bg-transparent text-gray-600 darkw:text-white darkw:border-gray-700 rounded-md border border-gray-300 px-3 py-3 text-sm placeholder-gray-600 invalid:border-red-500 darkw:placeholder-gray-300"
                  placeholder="Votre Api key"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>

              <button  onClick={handleLogin} class="h-9 px-3 flex justify-center items-center py-6 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md text-white">
                Connexion
              </button>
              <div className="mb-6 mt-6 w-[80%] m-auto ">
       { err && <button
          type="submit"
          class="flex w-full mt-10 justify-center rounded-md  text-red-600 bg-red-300 px-3 py-3.5 text-sm font-semibold leading-6  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Une erreur est survenue lors de l'authentifcation
        </button>}
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
