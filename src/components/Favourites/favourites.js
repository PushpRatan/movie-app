import { useState } from "react";

export default function Favourites({ children, content }) {
  const [favourite, setFavourite] = useState([]);

  const addfavourites = () => {
    const newFavList = [...favourite, content];
    setFavourite(newFavList);
    console.log(favourite);
  };

  return <div onClick={addfavourites}>{children}</div>;
}
