import React, { useEffect, useState } from "react";
import Example from "../../Example";
const sexeOptions = [
  {
    id: 0,
    name: "Femme",
  },
  {
    id: 1,
    name: "Homme",
  },
];
const classeOptions = [
  {
    id: 1,
    name: "Classe 1",
  },
  {
    id: 2,
    name: "Classe 2",
  },
  {
    id: 3,
    name: "Classe 3",
  },
];
const Titanic = ({ response, handleSubmit, loading, setResponse}) => {
  const [tempAge, setAge] = useState();
  const [tempSexe, setSexe] = useState({
    id: 0,
    name: "Femme",
  });
  const [tempClasse, setClasse] = useState({
    id: 1,
    name: "Classe 1",
  });
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
          Veuillez entrer votre age
        </label>
        <div class="mt-6">
          <input
            value={tempAge}
            onChange={(e) => setAge(e.target.value)}
            id="email"
            name="email"
            type="number"
            // autocomplete="email"
            required
            class="block w-full text-[18px] rounded-md border-0 text-center py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
          />
        </div>
      </div>
      <div className="w-[80%] m-auto mt-6">
        <label
          for="email"
          class="block text-center text-md font-medium leading-6 text-gray-900"
        >
          Selectionnez votre sexe
        </label>
        <Example setOption={setSexe} arr={sexeOptions} selected={tempSexe} />
      </div>
      <div className="w-[80%] m-auto mt-6">
        <label
          for="email"
          class="block text-center text-md font-medium leading-6 text-gray-900"
        >
          Selectionnez votre classe
        </label>
        <Example
          setOption={setClasse}
          arr={classeOptions}
          selected={tempClasse}
        />
      </div>
      <div className="mb-6 mt-6 w-[80%] m-auto ">
        <button
          onClick={() =>
            handleSubmit("prediction_titanic", {
              Age: tempAge,
              SexCode: tempSexe.id,
              Pclass: tempClasse.id,
            })
          }
          type="submit"
          class="flex w-full mt-10 justify-center rounded-md bg-indigo-600 px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Soumettre
        </button>
      </div>
      <div className="h-[1px]">
        {response?.link === 2 && loading === false && (
          <div className="mb-6 w-[80%] m-auto">
            <button
              type="submit"
              class="flex w-full mt-6 justify-center rounded-md bg-teal-300 px-3 py-3.5 text-[18px] font-semibold leading-6 text-teal-700 shadow-sm hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
            >
              {response.value}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Titanic;
