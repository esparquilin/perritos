import React, { useContext } from "react";

import Card from "../UI/Card";

import { transformName } from "../General/transformName";

import classes from "./PerritosList.module.css";
import Wrapper from "../General/Wrapper";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { FormContext } from "../../store/form-context";

const PerritosList = ({ perritosArray }) => {
  const ctx = useContext(FormContext);

  return (
    <>
      <Wrapper>
        <ul className={classes.list}>
          {perritosArray.map((perrito, indx) => (
            <Card customCard={classes.card} key={perrito.id}>
              <li>
                <div className={classes["image-container"]}>
                  <img alt="perro" src={perritosArray[indx].img}></img>
                </div>
                <div className={classes["data-content"]}>
                  <div className={classes.data}>
                    <h3 className={classes.name}>
                      {transformName(perrito.name)}
                    </h3>
                    <ul className={classes["data-list"]}>
                      <li>{perrito.sex}</li>
                      <li>{perrito.age} años</li>
                      <li>{perrito.size}</li>
                      <li>{perrito.breed}</li>
                    </ul>
                  </div>
                  <div className={classes.buttons}>
                    <Link to={perrito.id}>
                      <Button customButton={classes["button-details"]}>
                        Ver detalles
                      </Button>
                    </Link>

                    <Link to={perrito.id}>
                      <Button
                        customButton={classes["button-adoptar"]}
                        onClick={() => ctx.setFormIsShown(true)}
                      >
                        Adoptar
                      </Button>
                    </Link>
                  </div>
                </div>
              </li>
            </Card>
          ))}
        </ul>
      </Wrapper>
    </>
  );
};

export default PerritosList;
