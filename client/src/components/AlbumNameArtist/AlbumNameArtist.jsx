import './AlbumNameArtist.css'

const AlbumNameArtist = ({name, artists, url}) => {

  
  return (
    <a href={url} target="_blank">
      <div className="AlbumNameArtist">
        <h2>{name}</h2>
        {artists}
      </div>
    </a>
  )
}
export default AlbumNameArtist