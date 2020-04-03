import store from "../store.js";
import SongService from "../Services/SongsService.js";

//Private
/**Draws the Search results to the page */
function _drawResults() {
  let songs = store.State.songs;
  let template = ''
  songs.forEach(song => template += song.Template)
  document.getElementById('results').innerHTML = template
}


function _drawPreview(){
  let preview = store.State.activeSong
  let template = ''
  preview.forEach(preview => template += preview.Template)
  document.getElementById("preview").innerHTML = template
}
/**Draws the Users saved songs to the page */
function _drawPlaylist() {}

//Public
export default class SongsController {
  constructor() {
    //TODO Don't forget to register your subscribers
    store.subscribe('songs', _drawResults)
    store.subscribe('preview', _drawPreview)
  }

  /**Takes in the form submission event and sends the query to the service */
  search(event) {
    //NOTE You dont need to change this method
    event.preventDefault();
    console.log('working');
    try {
      SongService.getMusicByQuery(event.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
  addSong(id) {}

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) {}

  preview(songName){
    SongService.preview(songName)
  }
}
