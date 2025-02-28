import { useEffect, useState } from "react";
import { getAlbums } from "../../../utils/getAlbums";
import './HomePage.css'
import '../../App.css'
import AlbumCard from "../AlbumCard/AlbumCard";

const HomePage = () => {

  const [ albums, setAlbums ] = useState([]);

  useEffect(() => {
    getAlbums(setAlbums)
  }, [])


  return (
    <div id="HomePage">
      {albums && albums.map((album) => (
        <AlbumCard
          key={album.id}
          album={album}
        >
        </AlbumCard>
      ))}
    </div>
  )
};
export default HomePage;