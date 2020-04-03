export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
    
  }

  get Template() {
    return /*html*/ `
    <div class="card" style="">
    <img src="${this.albumArt}" class="card-img-top img-fluid" alt="...">
    <div class="card-body">
      <p class="card-text">
        <p> Artist: ${this.artist}</p>
        <p> Song: ${this.title}</p>
      </p>
      <button onclick="app.songsController.preview('${this._id}')">Preview</button>
    </div>
  </div>
        `;
  }

  get previewTemplate(){
    return /*html*/ `
    <div class="card" style="width: 18rem;">
    <img src="${this.albumArt}" class="card-img-top img-fluid" alt="...">
    <div class="card-body">
      <p class="card-text">
        <p> Artist: ${this.artist}</p>
        <p> Song: ${this.title}</p>
      </p>
      <button onclick="app.songsController.preview('${this._id}')">Preview</button>
    </div>
  </div>
        `;
  }

  get playlistTemplate() {
    return `

        `;
  }
}
