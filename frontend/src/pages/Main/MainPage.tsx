import Shield from "./assets/escudo.png";
import StTeresa from "./assets/stateresa-long2.jpg";
import Writing from "./assets/escrito-cut.jpg";
import "./MainPage.css";

export const MainPage = () => {
  return (
    <>
      <section className="wrapper">
        <div className="title">
          <h1>Carmelitas Descalzas Uruguay</h1>
          <img className="shield" src={Shield} />
        </div>
        <div className="images-container">
          <img src={Writing} className="writing-img" />
          <img src={StTeresa} className="saint-teresa-img" />
        </div>
      </section>
      <section className="landing-info">
        <h1>Un poco de historia...</h1>
        <p>
          Junto al monasterio de la calle Otorgués, se instalaron los talleres
          de una empresa; las emanaciones de los motores y las vibraciones que
          atentaban contra la construcción del monasterio y malograban la salud
          de las hermanas, determinaron que se tomara la decisión de
          trasladarse, por lo cual en 1968 ocuparon la casa de la calle Géminis
          6740 en Punta de Rieles. Posteriormente, el 13 de mayo de 1981,
          salieron del monasterio de Punta Rieles para fundar el nuevo Carmelo
          Nuestra Señora del Silencio y la Esperanza, en la Avenida Agraciada y
          Gil, las hnas. Carmen María, primera novicia del Carmelo uruguayo;
          María Teresa de la Eucaristía; María Magdalena de la Santísima
          Trinidad; Mariana del Niño Jesús; Clara Raquel de la Resurrección y
          María Clara de Cristo. El mismo día de la fundación entró la primera
          postulante, María Josefina Silveira, de Montevideo. En 1984, la casa
          de la fundación que se había adaptado a las necesidades del monasterio
          resultó pequeña y hubo que buscar una casa-quinta que puediera
          reformarse de acuerdo al estilo de vida del Carmelo. Milagrosamente se
          encontró la quinta que había sido de Henderson y luego de Alberto
          Gallinal, en la calle Amarales 3433. El arquitecto Francisco Collet se
          encargó de todo lo pertinente a la construcción religiosa,
          progresivamente y de acuerdo con las necesidades de la comunidad. El
          gran garaje de la casa se convirtió en dos locutorios. En el año 2000
          se hizo la portería y el torno; en el 2005 se construyeron la capilla
          y el claustro, todo dentro del mismo estilo original.
        </p>
        <h1>¿Qué significa ser Carmelita Descalza?</h1>
        <p>
          Las carmelitas descalzas, siendo un Instituto religioso de carácter
          estrictamente contemplativo, son sobre todo testigos claros de la
          primacía absoluta de Dios en la vida humana. Y por Él y respondiendo
          con un corazón disponible al don de la vocación personal, su
          existencia se convierte en una especie de ofrenda, no sólo por
          renunciar a la familia o a la libertad de comunicación en el mundo,
          sino sobre todo por subordinar toda la vida, hasta el más mínimo
          detalle, a la oración y firme perseverancia en la presencia de Dios.
          Al participar en el carisma de Santa Teresa de Jesús, las carmelitas
          descalzas “están llamadas a la contemplación, tanto en la oración como
          en la vida” (Constituciones 1991, n 10). Esta contemplación del Dios
          viviente es la razón de su existencia y su tarea principal. Todo lo
          demás es secundario. Y así con el fin de asegurar adecuadas
          condiciones de vida y específico “clima de oración” las carmelitas
          descalzas eligen la separación radical del mundo en la forma de la
          clausura papal, la soledad y el silencio. De esta manera, cuidando la
          auténtica libertad del espíritu y del cuerpo, ellas empeñan todas sus
          fuerzas en el encuentro nupcial con Dios, en la Eucaristía diaria y en
          la Liturgia de las Horas, como en la meditación. Su profunda
          experiencia de Dios se convierte en el fundamento de su apostolado a
          pesar de que se trata esencialmente de un apostolado del compromiso
          espiritual en las intenciones de la Iglesia y un apostolado del
          testimonio con exclusión de cualquier forma de ministerio activo.Un
          papel particular en el Carmelo teresiano desempeña la comunidad, que
          es un espacio de la comunión entre las hermanas. Las carmelitas
          descalzas forman pequeños colegios de Cristo, donde hay un ambiente
          muy familiar, la valiosa recreación teresiana. Así constituida la
          comunidad a la luz del derecho canónico es completamente autónoma y
          según el Código recibe el estatus de monasterio sui iuris (cf. can.
          613). En la vida cotidiana las monjas unen la oración ferviente y el
          trabajo manual. Este trabajo incluye tanto las tareas domésticas
          comunes, como las formas específicas de actividad encaminada a obtener
          fondos para el mantenimiento como por ejemplo: hornear las hostias,
          bordar los ornamentos litúrgicos o realizar iconos. Las carmelitas
          descalzas, escondidas en el silencio del monasterio y aparentemente
          desconocidas para el mundo, están presentes en todo el orbe. Según los
          últimos datos estadísticos las monjas alcanzan la considerable cifra
          de 11.500. (Siendo la Orden femenina de Clausura más importante del
          mundo católico). Casi 750 monasterios viven según las Constituciones
          aprobadas en 1991, y 140 según las Constituciones aprobadas en 1990.
          Estos monasterios se encuentran en el territorio de 98 naciones. Es
          muy destacable el gran desarrollo de la Orden en: Asia Sureste,
          América Latina, África y Europa del Este. Las numerosas y nuevas
          vocaciones permiten abrir nuevas fundaciones en Vietnam, Filipinas,
          Indonesia, México, Brasil, Argentina, Colombia, Madagascar, República
          Democrática del Congo, Polonia, Croacia y algunos países de la ex
          Unión Soviética. Sin duda es confortante el hecho que todavía siguen
          firmemente las vocaciones en el oeste de Europa, especialmente en
          España, Francia e Italia. Desafortunadamente, más y más comunidades
          sufren por la falta de nuevas vocaciones, algunas incluso, no pueden
          continuar y deben tomar la dolorosa decisión de la supresión. Tanto
          las alegrías como las dificultades son un signo de los tiempos que nos
          invita a discernir la voluntad de Dios y cumplirla fielmente en la
          nueva realidad.
        </p>
      </section>
    </>
  );
};
