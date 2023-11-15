class Music {
  constructor() {
    this.audio = new Audio();
    this.musicVolume = 0.5;
  }

  // Play the current song
  playMusicStart() {
    this.audio.src = '/js/music/start music.mp3';
    this.musicVolume = this.musicVolume;
    this.audio.loop = true;
    this.audio.play();
  }

  // Play music at the end
  playMusicEnd() {
    this.audio.src = './/end music.mp3';
    this.audio.volume = this.musicVolume;
    this.audio.loop = true;
    this.audio.play();
  }

  // Play alert sound on question
  playAlert() {
    this.audio.src = './/Alert.mp3';
    this.audio.volume = this.musicVolume;
    this.audio.loop = false;
    this.audio.play();
  }

  // Stopping the music in between pages to change them
  stopMusic() {
    this.audio.pause();
  }
}
