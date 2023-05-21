import Image from "next/image";
import "../styles/globals.css";
import background from '../public/assets/Background.png';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <div style={{overflow:"hidden",width:"100%"}}>
      <div>
      </div>
      <Component {...pageProps} />
      <style jsx>{`
        .container {
          margin: 0px 0px;
        }
        @media (min-width: 1400px) {
          .container {
            margin: 0;
            position: relative;

          }
        }

        @media (max-width: 1299px) {
          .container {
            margin: 0 20px;
            position: relative;
          }
        }

        @media (max-width: 999px) {
          .container {
            margin: 0 10px;
            position: relative;
          }
        }

        @media (max-width: 699px) {
          .container {
            margin: 0 5px;
            position: relative;
          }
        }

        @media (max-width: 399px) {
          .container {
            margin: 0 2px;
            position: relative;
          }
        }
      `}</style>
    </div>
    </>
  );
}

export default MyApp;
