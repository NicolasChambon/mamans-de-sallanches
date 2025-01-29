import Image from 'next/image';

import presentationPicture2 from '@/assets/images/presentation-picture-2.webp';

import styles from './PresentationBottom.module.scss';

const PresentationBottom = () => {
  return (
    <div className={styles.Presentation}>
      <div className={styles.PresentationBottom}>
        <p className={styles.PresentationBottom_text}>
          Nous avons à cœur de créer un espace de partage, d&apos;écoute et
          d&apos;entraide. Nous vous proposons des rencontres, des ateliers, des
          conférences et des événements pour vous accompagner dans votre rôle de
          parent. Nous sommes convaincues que le soutien entre parents est
          essentiel pour traverser les difficultés et profiter pleinement des
          moments de joie.
        </p>
        <Image
          className={styles.PresentationBottom_img}
          src={presentationPicture2}
          alt="Dessin de mains de toutes les couleurs qui s'unissent"
        />
      </div>
    </div>
  );
};

export default PresentationBottom;
