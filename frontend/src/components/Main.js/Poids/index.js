import React, { useEffect, useState } from "react";

const Poids = ({ response,loading, handleSubmit, setResponse }) => {
  const [taille, setTaille] = useState();
  
  useEffect(() => {
    setResponse()
    
  }, []);

  return (
    <div className="mt-10 m-auto">
      <div className="w-[80%] m-auto">
        <label
          for="email"
          class="block text-center text-md font-medium leading-6 text-gray-900"
        >
          Veuillez entrez votre taille
        </label>
        <div class="mt-6">
          <input
            value={taille}
            onChange={(e) => setTaille(e.target.value)}
            id="email"
            name="email"
            type="number"
            // autocomplete="email"
            required
            class="block w-full text-[18px] rounded-md border-0 text-center py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
          />
        </div>
      </div>
      <div className="mb-6 w-[80%] m-auto">
        <button
          onClick={() => handleSubmit('prediction_Poids',{taille})}
          type="submit"
          class="flex w-full mt-6 justify-center rounded-md bg-indigo-600 px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Soumettre
        </button>
      </div>

      {response?.link===1 && loading ===false&& <div className="mb-6 w-[80%] m-auto">
        <button
          type="submit"
          class="flex w-full mt-6 justify-center rounded-md bg-teal-300 px-3 py-3.5 text-[18px] font-semibold leading-6 text-teal-700 shadow-sm hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
        >
         {response.value.poids} Kg 
        </button>
      </div>}
    </div>
  );
};

export default Poids;
