export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this.id = data.trackId?.toString() || data.id;
  }

  get Template() {
    return /*html*/ `
    <div class="card" style="width: 18rem;">
    <img src="${this.albumArt}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${this.artist}</h5>
      <p class="card-text">${this.title}</p>
      <a href="#" class="btn btn-primary" onclick="app.songsController.addToPlaylist('${this.id}')">Add to Playlist</a>
    </div>
  </div>
        `;
  }

  get playlistTemplate() {
    return /*html*/`

    <div ${this.id}> Artist - ${this.artist} Song Name ${this.title}</div>

        `;
  }

  get allMusicTemplate(){
    return /*html*/ `
    <div onclick="app.songsController.setActive('${this.id}')">Artist - ${this.artist} Song Name ${this.title}</div>
    `
  }
}
