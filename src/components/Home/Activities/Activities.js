import classes from "./Activities.module.css";
import ActivitiesItem from "./ActivitiesItem";

const Activities = () => {
  const ACTIVITIES = [
    {
      url: "https://scontent.fmex5-1.fna.fbcdn.net/v/t39.30808-6/275303280_276806777939275_7942057264154924697_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHhYTb2J7UEpLO922LXh_ElBfuFo7to4wwF-4Wju2jjDIw6hPrxVvl30QZtOU8dydmElAy9LFI1mtc4cmD0pRWv&_nc_ohc=RZOIR9jaA0kAX-BZIln&_nc_ht=scontent.fmex5-1.fna&oh=00_AfAzk-UPXn6Etuy9Zipk9FzIfAfm9l__Paxb-uTD7ezLUQ&oe=640C0B22",
      title: 'Pláticas sobre “tenencia responsable"',
      text: "En escuelas, en estancias del sector salud y comunidades del municipio.",
    },
    {
      url: "https://scontent.fmex5-1.fna.fbcdn.net/v/t39.30808-6/228721887_131557915797496_3099279692953113626_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHJY-bhybs81iWKTVXHImHldN9cFMTuu_J031wUxO678n2kw8JXHAy-xPtKEZOraDZVretu2pyappYy7oHsH4Bq&_nc_ohc=QmPVjfcoUxUAX-aFaa6&_nc_ht=scontent.fmex5-1.fna&oh=00_AfA6EH3OHnUI8ZVyE2y9P1m-aWK0rURCLCg6gdMSkBlK8A&oe=640B36BF",
      title: "Campañas de esterilización",
      text: "Principalmente a hembras de la cabecera y comunidades del municipio. Estas se realizan con apoyo de padrinos y voluntarios que ayudan a costearlas, también con actividades como rifas o venta de postres.",
    },
    {
      url: "https://scontent.fmex5-1.fna.fbcdn.net/v/t39.30808-6/243191016_168460235440597_4372323069564564122_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGjgYk7Vx83622wowbRqP6G67C654riWZrrsLrniuJZmo1-9PjKygI9ROrZl8R3-RKLi1iYazJe3PzF7rHAvEpy&_nc_ohc=3EWZb0Ly4akAX_0pVAR&_nc_ht=scontent.fmex5-1.fna&oh=00_AfCbn0cLfBnBEmUVzF_fdCXtXPT994O5iRZqQPAxI-iabQ&oe=640BDD71",
      title: "Croquetones",
      text: "Se realizan cada dos o tres meses, en estos se coloca un stand donde se recaban donaciones en especie (alimento, medicamento y material de limpieza). Todo esto en beneficio de los perros que se encuentran en el refugio y algunos que apoyamos con atención médica gratuita.",
    },
    {
      url: "https://scontent.fmex5-1.fna.fbcdn.net/v/t39.30808-6/273876675_257328979887055_5952145666519175232_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGk2IC5baaFFvhMQ6s8R0Wq3Y4NtmQU6xfdjg22ZBTrF0Vut5xYB-RxrJ_C8UMSYhiNNCYzm8cEnZwzrPXGu_AI&_nc_ohc=8OEc1fTmEUoAX--sObw&_nc_ht=scontent.fmex5-1.fna&oh=00_AfClvqJD5sKbelPOgmPW7IHNDofQM_CsV8tQPj2WVLTItg&oe=640BD6BE",
      title: "Bazares",
      text: "Se coloca semanalmente una venta de ropa de uso y nueva, donada por nuestros voluntarios, todo el dinero recabado es para la alimentación semanal.",
    },
    {
      url: "https://scontent.fmex5-1.fna.fbcdn.net/v/t39.30808-6/272128739_243314501288503_8448321975914468718_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE0orT2Ig8ZWP7s81l9Pa4_IhBRxdBLhNkiEFHF0EuE2dMMRf5N8uC0Vpf_CIAwl73TOqYW4GSaQIy4fQVcMMpP&_nc_ohc=cvPjHRnwsFAAX_dmKEw&_nc_ht=scontent.fmex5-1.fna&oh=00_AfCayzF0CVgDXs1-Xd_PCOD68PhgjXM1m6nclTo1Msl8GA&oe=640BBBC2",
      title: "Rifas",
      text: "Se realizan cada tres meses y son con el apoyo de negocios, el dinero recabado se utiliza para esterilizaciones, vacunas y desparasitantes, para los perros del refugio y perros en situación de calle.",
    },
  ];

  return (
    <div className={classes.carousel}>
      <h2 className={classes.title}>Actividades que realizamos</h2>
      <ActivitiesItem activities={ACTIVITIES} />
    </div>
  );
};

export default Activities;
