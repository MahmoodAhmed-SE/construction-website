import Header from "../../components/Header";
import styles from "./aboutUs.module.css";

export default function AboutUs() {
  return (
    <div>
      <Header isStaticColor={true} />
      <div className={styles.about_us_container}>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempore
          blanditiis totam eaque perspiciatis esse animi quis ea facere
          obcaecati, inventore, reiciendis expedita culpa recusandae, optio
          nulla voluptas cum corrupti quia? Deserunt expedita odit vitae tempora
          consectetur quam unde beatae quod pariatur accusantium facilis
          necessitatibus voluptas impedit, id nisi eaque rem tempore quidem
          quisquam laboriosam neque placeat iste reprehenderit. Aliquid
          eligendi, fugit maiores deserunt incidunt ea esse nam excepturi porro
          ipsum minus earum dolorum minima dolore placeat nostrum molestias
          quisquam sapiente veniam iure quasi reiciendis sit dolorem. Dolor,
          iure iste. Vel eum maiores, iusto eius laboriosam ut error a veniam!
        </p>
      </div>
    </div>
  );
}
