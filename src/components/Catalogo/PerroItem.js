import classes from "./PerroItem.module.css";

import React, { useContext } from "react";

import { transformName } from "../General/transformName";

import { useEffect, useState } from "react";
import Card from "../UI/Card";
import { useParams } from "react-router-dom";
import Button from "../UI/Button";
import { FormContext } from "../../store/form-context";
import AdoptarForm from "../form/AdoptarForm";
import FormSent from "../form/FormSent";

const PerroItem = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currIndex, setCurrIndex] = useState(0);
  const [dogDescription, setDogDescription] = useState(null);

  const ctx = useContext(FormContext);

  const { perro } = useParams();

  useEffect(() => {
    const fetchDogDescription = async () => {
      const response = await fetch(
        "https://perritos-hermosos-default-rtdb.firebaseio.com/perritos/" +
          perro +
          ".json"
      );

      const responseData = await response.json();

      setDogDescription(responseData);
      setIsLoading(false);
    };

    fetchDogDescription();
  }, [perro]);

  const changeImage = (indx) => {
    setCurrIndex(indx);
  };

  if (isLoading) {
    return <Card>Loading...</Card>;
  }

  return (
    <>
      {ctx.formIsShown && <AdoptarForm dogName={dogDescription.name} />}
      {ctx.formSucceed && <FormSent />}
      <div className={classes.container}>
        <div className={classes.items}>
          {dogDescription.images.map((img, indx) => (
            <img
              alt="perro"
              key={indx}
              src={img}
              className={classes.img}
              style={indx === currIndex ? { filter: "opacity(1)" } : {}}
              onClick={() => changeImage(indx)}
            />
          ))}
        </div>

        <div className={classes["big-img-container"]}>
          <img
            src={dogDescription.images[currIndex]}
            className={classes["big-img"]}
            alt="perro"
          />
        </div>

        <div className={classes.text}>
          <h2>{transformName(dogDescription.name)}</h2>
          <p>Edad: {dogDescription.age} años</p>
          <p>Raza: {transformName(dogDescription.breed)}</p>
          <p>Sexo: {transformName(dogDescription.sex)}</p>
          <p>Tamaño: {transformName(dogDescription.size)}</p>
          <p>{transformName(dogDescription.dogBehaviour)}</p>
          <p>{transformName(dogDescription.humanBehaviour)}</p>
          <p className={classes.esterilizado}>
            {transformName(dogDescription.sterilized)}
          </p>
          <div className={classes.align}>
            <Button
              customButton={classes.button}
              onClick={() => ctx.setFormIsShown(true)}
            >
              Adoptar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerroItem;
