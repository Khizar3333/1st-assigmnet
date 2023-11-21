import Image from 'next/image';
import YouTube from 'react-youtube';
import styles from './page.module.css';
import penaverselogo from '../public/penaverselogo.png';
import Contact from './component/Contact';
import Table from './component/Table';
// import video from "./component/Videopage";
export default function Home() {
  return (
    <>
      <header className={styles.pageheader}>
        <h1 className={styles.h1}>
          Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
        </h1>
        <h2 className={styles.h2}>
          Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users
        </h2>
      </header>
      <main className={styles.main}>
        <h1 className={styles.mainh1}>
          Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
        </h1>
        <div className={styles.divimg}>
          <Image className={styles.img} src={penaverselogo} alt="penaverselogo" />
        </div>
        <h2 className={styles.mainh1}>
          The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technologies globally. It is a community of Web 3 and Metaverse developers, designers, trainers, startup founders, and service providers.
        </h2>
        <h2 className={styles.Admissions}><a target='_blank' href="https://www.piaic.org/">Admissions Now Open in Karachi, Lahore, Islamabad,<br /> and Peshawar</a></h2>
        <p className={styles.Admissions}><a target='_blank' href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing">This document on Google Docs</a></p>
        <div className={styles.para}>
        <p>The internet is without a doubt the most important technological development in human history. Web3 and metaverse technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud computing, voice computing, ambient computing, and more.</p>

<p>Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centred on decentralised technologies and virtual worlds. Citi stated in a March 2022 <a target='_blank' href="https://www.citivelocity.com/citigps/metaverse-and-money/">research paper</a> that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.</p>
        </div>
        <div className={styles.video}>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/VW99u6JUruo"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
  <Contact/>
    <Table/>
      </main>
    </>
  );
}