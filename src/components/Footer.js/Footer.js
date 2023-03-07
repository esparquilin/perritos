import classes from "./Footer.module.css";

import { BsFacebook, BsInstagram, BsTelephone, BsHouse } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

import logo from "../../assets/images/icon-image.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.grid}>
        <Link to="/">
          <img src={logo} />
        </Link>

        <div className={classes.contact}>
          <h3>¡Contactanos!</h3>

          <div>
            <BsHouse className={classes.icon} />
            <p>
              Canal Sin Nombre No. 57, 50400 Temascalcingo de José María
              Velasco, Méx.
            </p>
          </div>

          <div>
            <BsTelephone className={classes.icon} />
            <p>71-2189-0790</p>
          </div>
          <div>
            <BsTelephone className={classes.icon} />
            <p>71-2206-1799</p>
          </div>
          <div>
            <BsTelephone className={classes.icon} />
            <p>71-2215-3946</p>
          </div>
        </div>

        <div className={classes["social-media-icons"]}>
          <div className={classes["align-social-media"]}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/alberguecaninomimejoramigo?mibextid=LQQJ4d"
            >
              <BsFacebook className={`${classes.link} ${classes.facebook}`} />
            </a>
            <p>&nbsp;Refugio Canino Mi Mejor Amigo</p>
          </div>

          <div className={classes["align-social-media"]}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/refugio_canino_mi_mejoramigo/?igshid=YmMyMTA2M2Y%3D"
            >
              <BsInstagram
                className={`${classes.link} ${classes.instagram}`}
              ></BsInstagram>
            </a>
            <p>&nbsp;@refugio_canino_mi_mejoramigo</p>
          </div>

          <div className={classes["align-social-media"]}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.tiktok.com/@refugiomimejoamigotemaa?_t=8aKNwXYiiVp&_r=1"
            >
              <FaTiktok
                className={`${classes.link} ${classes.tiktok}`}
              ></FaTiktok>
            </a>
            <p>&nbsp;@refugiomimejoamigotemaa</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
