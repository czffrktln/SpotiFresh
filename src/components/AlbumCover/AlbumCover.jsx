import './AlbumCover.css';

const AlbumCover = ({url, image}) => {

  return (
    <div className='AlbumCover'>
      <a href={url} target="_blank">
        <img src={image}></img>
      </a>
    </div>
  )
}
export default AlbumCover