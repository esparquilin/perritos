import MainNavigation from "../components/MainNavigation/MainNavigation";
import { Link } from "react-router-dom";
import Card from "../components/UI/Card";

import Error from "../components/Error/Error";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <Error></Error>
    </>
  );
};

export default ErrorPage;
