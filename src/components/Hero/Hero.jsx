import styles from './Hero.module.scss';
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroCenter}>
        <h1>
          manage any content <br /> anywhere
        </h1>
        <p>
          Strapi is the leading open-source headless CMS. It’s 100% JavaScript
          and fully customizable.
        </p>
      </div>
    </div>
  );
};
export default Hero;
