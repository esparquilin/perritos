import { useRouteLoaderData } from "react-router-dom";
import React from "react";

import PerritosList from "../components/Catalogo/PerritosList";

const CatalogoPage = () => {
  const responseData = useRouteLoaderData("perritos-catalogo");

  const perritosArray = [];

  for (const key in responseData) {
    perritosArray.push({
      id: responseData[key].name,
      name: responseData[key].name,
      breed: responseData[key].breed,
      age: responseData[key].age,
      size: responseData[key].size,
      sex: responseData[key].sex,
      img: responseData[key].images[0],
    });
  }

  return (
    <>
      <PerritosList perritosArray={perritosArray}></PerritosList>
    </>
  );
};

export default CatalogoPage;

export const loadPerritos = async () => {
  const response = await fetch(
    "https://perritos-hermosos-default-rtdb.firebaseio.com/perritos.json"
  );
  if (!response.ok) {
    console.log("Algo malo paso master");
    throw {
      message: "No se pudo acceder a la lista de perritos ):",
    };
  } else return response;
};
