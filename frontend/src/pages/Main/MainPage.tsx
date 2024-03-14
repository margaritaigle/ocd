import "./MainPage.css";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import StTeresa from "../assets/home/stteresa1.webp";

export const MainPage = () => {
  return (
    <>
      <MainTitle withBorder />
      <section className="info">
        <h1>Santa Teresa de Jesús, nuestra fundadora</h1>
        <div className="info-content">
          <p>
            Nace Teresa en Ávila el 28 de marzo de 1515. A los dieciocho años,
            entra en el Carmelo. A los cuarenta y cinco años, para responder a
            las gracias extraordinarias del Señor, emprende una nueva vida cuya
            divisa será: «O sufrir o morir». Es entonces cuando funda el
            convento de San José de Ávila, primero de los quince Carmelos que
            establecerá en España. Con san Juan de la Cruz, introdujo la gran
            reforma carmelitana. Sus escritos son un modelo seguro en los
            caminos de la plegaria y de la perfección. Murió en Alba de Tormes,
            al anochecer del 4 de octubre de 1582.
          </p>
          <img src={StTeresa} />
          <p className="frase">
            «Nada te turbe, nada te espante; todo se pasa, Dios no se muda; la
            paciencia todo lo alcanza. Quien a Dios tiene nada le falta.»
          </p>
          <p>
            En 1604 se inició el proceso de canonización de Teresa. En 1614 fue
            declarada beata, y en 1622 fue canonizada por Gregorio XV. En 1970
            fue proclamada doctora de la Iglesia, siendo la primera mujer que
            recibía esta distinción. Además de las obras citadas, dejó escritas
            las siguientes: Meditaciones sobre los cantares, Exclamaciones,
            Visita de descalzas, Avisos, Ordenanzas de una cofradía,
            Apuntaciones, Desafío espiritual, Vejamen y unas treinta poesías.
          </p>
        </div>
      </section>
      <section className="info">
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
          últimos datos estadísticos las monjas{" "}
        </p>
      </section>
      <section className="info">
        <h1>
          Carmelo Nuestra Señora del Silencio y la Esperanza <br /> (Montevideo)
        </h1>

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
          resultó pequeña y hubo que buscar una casa-quinta que pudiera
          reformarse de acuerdo al estilo de vida del Carmelo. Milagrosamente se
          encontró la quinta que había sido de Henderson y luego de Alberto
          Gallinal, en la calle Amarales 3433. El arquitecto Francisco Collet se
          encargó de todo lo pertinente a la construcción religiosa,
          progresivamente y de acuerdo con las necesidades de la comunidad. El
          gran garaje de la casa se convirtió en dos locutorios. En el año 2000
          se hizo la portería y el torno; en el 2005 se construyeron la capilla
          y el claustro, todo dentro del mismo estilo original.
        </p>
      </section>
    </>
  );
};
