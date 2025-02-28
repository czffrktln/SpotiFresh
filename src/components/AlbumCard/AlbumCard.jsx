import { useState } from "react";
import './AlbumCard.css';
import AlbumCover from "../AlbumCover/AlbumCover";
import AlbumNameArtist from "../AlbumNameArtist/AlbumNameArtist";

const AlbumCard = ({album}) => {

  const { external_urls, images, name, artists } = album;
  const [ isHovering, setIsHovering ] = useState(false);
  

  return (
    <div className="AlbumCard"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    > 
      <AlbumCover 
        url={external_urls.spotify} 
        image={images[0].url}
        setIsHovering={setIsHovering}
      >
      </AlbumCover>
      { isHovering &&
        <AlbumNameArtist
          url={external_urls.spotify}
          name={name}
          artists={artists.map((artist) => <h3 key={artist.id}>{artist.name}</h3>)}
        >
        </AlbumNameArtist>
      }
    </div>
  )
};
export default AlbumCard;