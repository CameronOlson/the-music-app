import { ProxyState } from "../AppState.js";
import { sandboxService } from "../Services/SandboxService.js";
import songsService from "../Services/SongsService.js";


//Private
/**Draws the Search results to the page */
function _drawResults() { 
  let template=""
  ProxyState.songs.forEach(s => template += s.allMusicTemplate)
  document.getElementById('songs').innerHTML = template
}

/**Draws the Users saved songs to the page */
function _drawPlaylistSongs() { 
  console.log("draw playlist ran")
  let template = ""
  ProxyState.playlistSongs.forEach(p => template += p.playlistTemplate)
  document.getElementById('playlist').innerHTML = ProxyState.currentSong.template
}

function _drawCurrentSong(){
  document.getElementById('current-song').innerHTML = ProxyState.currentSong.Template
}


//Public
export default class SongsController {
  constructor() {
    ProxyState.on('songs', _drawResults)

    ProxyState.on('currentSong', _drawCurrentSong)

    ProxyState.on('playlistSongs', _drawPlaylistSongs)
    
    //TODO Don't forget to register your listeners and get your data
  }

 
  search(e) {
    e.preventDefault();
    try {
      songsService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }

  addToPlaylist(id){
    sandboxService.addToPlaylistSongs()
    


}

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
  addSong(id) { }

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) { }

  setActive(songId){
    songsService.setActive(songId)

  }

}
