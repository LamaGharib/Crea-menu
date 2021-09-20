import React from "react";
import { Text } from "../../../globalStyles";
import { DrinkType, Holder } from "./DrinksMenu.element";
import { Rapper } from "../../../globalStyles";

const DrinksMenu = () => {
  return (
    <Rapper>
      <DrinkType to="./Menu/DrinksMenu/Coffee">
        <img
          src="https://images.unsplash.com/photo-1517640033243-dc06bb716df5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80"
          alt="coffee"
          width="300px"
        />
        <Text>COFFEE</Text>
      </DrinkType>
      <DrinkType to="./Menu/DrinksMenu/Tea">
        <img
          src="https://cdn-resources.ableton.com/resources/filer_thumbnails/public/2012/10/11/crea.jpg__500x233_q85_crop_subsampling-2_upscale.jpg"
          alt="coffee"
          width="300px"
        />
        <Text>TEA</Text>
      </DrinkType>
      <DrinkType to="./Menu/DrinksMenu/Soda">
        <img
          src="https://cdn-resources.ableton.com/resources/filer_thumbnails/public/2012/10/11/crea.jpg__500x233_q85_crop_subsampling-2_upscale.jpg"
          alt="coffee"
          width="300px"
        />
        <Text>SODA</Text>
      </DrinkType>
      <DrinkType to="./Menu/DrinksMenu/ExtraRefreshing">
        <img
          src="https://cdn-resources.ableton.com/resources/filer_thumbnails/public/2012/10/11/crea.jpg__500x233_q85_crop_subsampling-2_upscale.jpg"
          alt="coffee"
          width="300px"
        />
        <Text>EXTRA REFRESHING</Text>
      </DrinkType>
      <DrinkType to="./Menu/DrinksMenu/BeerOnDraft">
        <img
          src="https://cdn-resources.ableton.com/resources/filer_thumbnails/public/2012/10/11/crea.jpg__500x233_q85_crop_subsampling-2_upscale.jpg"
          alt="coffee"
          width="300px"
        />
        <Text>BEER ON DRAFT</Text>
      </DrinkType>
      <DrinkType to="./Menu/DrinksMenu/BeerOnBottle">
        <img
          src="https://cdn-resources.ableton.com/resources/filer_thumbnails/public/2012/10/11/crea.jpg__500x233_q85_crop_subsampling-2_upscale.jpg"
          alt="coffee"
          width="300px"
        />
        <Text>BEER ON BOTTLE</Text>
      </DrinkType>
      <DrinkType to="./Menu/DrinksMenu/Wine">
        <img
          src="https://cdn-resources.ableton.com/resources/filer_thumbnails/public/2012/10/11/crea.jpg__500x233_q85_crop_subsampling-2_upscale.jpg"
          alt="coffee"
          width="300px"
        />
        <Text>WINE/PORT/VERMOUTH</Text>
      </DrinkType>
      <DrinkType to="./Menu/DrinksMenu/Whiskey">
        <img
          src="https://cdn-resources.ableton.com/resources/filer_thumbnails/public/2012/10/11/crea.jpg__500x233_q85_crop_subsampling-2_upscale.jpg"
          alt="coffee"
          width="300px"
        />
        <Text>WHISKEY/COGNAC</Text>
      </DrinkType>
      <DrinkType to="./Menu/DrinksMenu/Liqueur">
        <img
          src="https://cdn-resources.ableton.com/resources/filer_thumbnails/public/2012/10/11/crea.jpg__500x233_q85_crop_subsampling-2_upscale.jpg"
          alt="coffee"
          width="300px"
        />
        <Text>LIQUEUR</Text>
      </DrinkType>
      <DrinkType to="./Menu/DrinksMenu/Distilled">
        <img
          src="https://cdn-resources.ableton.com/resources/filer_thumbnails/public/2012/10/11/crea.jpg__500x233_q85_crop_subsampling-2_upscale.jpg"
          alt="coffee"
          width="300px"
        />
        <Text>DISTILLED</Text>
      </DrinkType>
    </Rapper>
  );
};

export default DrinksMenu;
