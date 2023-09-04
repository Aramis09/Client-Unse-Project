import ShowImage from "@/components/showImage/showImage";
import styles from "./about.module.scss";
import Link from "next/link";

export default function About() {
  return (
    <section className={styles.container}>
      <h4>Quienes somos ?</h4>
      <Link href="/contacts">
        <button className={styles.buttonContact}> Contactenos </button>
      </Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora animi
        temporibus aliquid, enim fugiat fuga voluptate voluptatibus, provident
        omnis amet maxime vero eos dolore ab? Dignissimos suscipit doloremque
        accusantium illum! lorem Vivas y libres nos queremos. Una vez más, el
        sábado 3 de junio, miles de mujeres alzaron sus carteles y sus voces
        contra la violencia de género, en los alrededores del Congreso y en las
        principales plazas de todo el país. En Resistencia, Chaco, la
        movilización pasó por la Municipalidad y culminó en la explanada de la
        Casa de Gobierno. Mientras las mujeres gritaban ¡Ni una menos!, César
        Sena cumplía con sus actividades de militancia. Tenía su cuello arañado
        y cierto nerviosismo que calmó por la noche en un boliche.Según
        investigaciones judiciales posteriores, Sena mató a Cecilia Strzyzowski,
        su pareja, el día anterior. Le hizo una toma de artes marciales y la
        estranguló. Luego buscó deshacerse del cuerpo cortándolo y tirándolo al
        río y a los chanchos. Qué le pasa al alma en una muerte violenta, había
        googleado Sena días antes.César Sena es hijo de Marcela Acuña y
        Emerenciano Sena, líderes sociales muy cercanos al gobernador de Chaco,
        Jorge Capitanich. Líderes sociales que manejan montañas de dinero en una
        de las ciudades más pobres del país. Los tres miembros de la familia
        están detenidos por el femicidio de Cecilia, junto a cuatro
        colaboradores que habrían ayudado o callado el asesinato.César Sena, un
        hijo del poder
      </p>
      <ShowImage
        type="auto"
        idImage="s1ivio399kqmeoranmup"
        externalStyle={styles.image}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora animi
        temporibus aliquid, enim fugiat fuga voluptate voluptatibus, provident
        omnis amet maxime vero eos dolore ab? Dignissimos suscipit doloremque
        accusantium illum! lorem Vivas y libres nos queremos. Una vez más, el
        sábado 3 de junio, miles de mujeres alzaron sus carteles y sus voces
        contra la violencia de género, en los alrededores del Congreso y en las
        principales plazas de todo el país. En Resistencia, Chaco, la
        movilización pasó por la Municipalidad y culminó en la explanada de la
        Casa de Gobierno. Mientras las mujeres gritaban ¡Ni una menos!, César
        Sena cumplía con sus actividades de militancia. Tenía su cuello arañado
        y cierto nerviosismo que calmó por la noche en un boliche.Según
        investigaciones judiciales posteriores, Sena mató a Cecilia Strzyzowski,
        su pareja, el día anterior. Le hizo una toma de artes marciales y la
        estranguló. Luego buscó deshacerse del cuerpo cortándolo y tirándolo al
        río y a los chanchos. Qué le pasa al alma en una muerte violenta, había
        googleado Sena días antes.César Sena es hijo de Marcela Acuña y
        Emerenciano Sena, líderes sociales muy cercanos al gobernador de Chaco,
        Jorge Capitanich. Líderes sociales que manejan montañas de dinero en una
        de las ciudades más pobres del país. Los tres miembros de la familia
        están detenidos por el femicidio de Cecilia, junto a cuatro
        colaboradores que habrían ayudado o callado el asesinato.César Sena, un
        hijo del poder
      </p>
    </section>
  );
}
