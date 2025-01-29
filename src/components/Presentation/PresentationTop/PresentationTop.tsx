import Image from 'next/image';

import presentationPicture1 from '@/assets/images/presentation-picture-1.webp';

import styles from './PresentationTop.module.scss';

const PresentationTop = () => {
  return (
    <section className={styles.PresentationTop}>
      <Image
        className={styles.PresentationTop_img}
        src={presentationPicture1}
        alt="Dessin de mobile d'enfants avec des oiseaux mouche"
        height={300}
      />
      <div className={styles.PresentationTop_text}>
        <p className={styles.PresentationTop_text_abstract}>
          <strong>Mamans de Sallanches</strong>, association loi 1901, est née
          d&apos;une envie de rassembler, soutenir et célébrer la vie. Nous
          sommes conscientes qu&apos;être parents n&apos;est pas un long fleuve
          tranquille.
        </p>
        <p className={styles.PresentationTop_text_citation}>
          “Les <span>parents parfaits</span> que vous croisez sont ceux qui
          <span>n&apos;ont pas d&apos;enfants.</span>”
        </p>
      </div>
    </section>
  );
};

export default PresentationTop;
