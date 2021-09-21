import React from "react";
import { Welcome, PhotoHolder, Images } from "./Home.elements";
import { Rapper } from "../../../globalStyles";

const Home = () => {
  return (
    <>
      <Rapper>
        <Welcome>Welcome to Crea cafe</Welcome>
        <PhotoHolder>
          <Images
            src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.6435-9/183435241_10158939429280520_4984124568320586983_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=kv73SuyhYkEAX8yxluq&_nc_ht=scontent-ams4-1.xx&oh=e7b63f9d89e4d8699e3ccb2748b612cc&oe=616DAFE4"
            alt="crea"
          />
          <Images
            src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.6435-9/66214579_10157061390100520_2392317584398614528_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=kl1_UNZi39sAX9O5Uq7&_nc_ht=scontent-amt2-1.xx&oh=a7cd27fc7f7ee5657eb536d9dc39bde9&oe=616D9B8D"
            alt="crea"
          />
        </PhotoHolder>
      </Rapper>
    </>
  );
};

export default Home;
