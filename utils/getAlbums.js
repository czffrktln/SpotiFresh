import axios from "axios";

export const getAlbums = async (setAlbums) => {
  const accessToken = sessionStorage.getItem("access_token")
  const response = await axios.get("https://api.spotify.com/v1/browse/new-releases?limit=24", {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  })
  setAlbums(response.data.albums.items)
}