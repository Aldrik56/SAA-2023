import Image from "next/image";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <>
    <div style={{overflow:"hidden"}}>
      <div style={{width:"100vw",height:"100vh",position:"absolute",zIndex:"-1",left:"0",overflow:"hidden"}}>
        <Image
          src={background}
          alt="Background"
          style={{
            position: "absolute",
            right:"0",
            left:"0",
            zIndex: "-1",
            width: "100%",
            height: "100%"
            // position: "absolute", 
            // width: "100%",
            // // height: "100%",
            // left: "0",
            // top: "0",
            // zIndex: "-1",
            // backgroundSize: "cover",
            // backgroundPosition: "center center" ,
            // backgroundRepeat: "no-repeat",
          }}
          priority={true}   
        />
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

        // @media (max-width: 1299px) {
        //   .container {
        //     margin: 0 20px;
        //     position: relative;
        //   }
        // }

        // @media (max-width: 999px) {
        //   .container {
        //     margin: 0 10px;
        //     position: relative;
        //   }
        // }

        // @media (max-width: 699px) {
        //   .container {
        //     margin: 0 5px;
        //     position: relative;
        //   }
        // }

        // @media (max-width: 399px) {
        //   .container {
        //     margin: 0 2px;
        //     position: relative;
        //   }
        // }
      `}</style>
    </div>
    </>
  );
}

export default MyApp;
