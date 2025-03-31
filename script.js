const playPauseBtn = document.getElementById("play-pause-btn");
const audioPlayer = document.getElementById("audio-player");
const albumCoverImg = document.getElementById("album-cover-img");
const nextBtn = document.getElementById("next-btn");
const beforeBtn = document.getElementById("before-btn");
let currentIndex = 0;
const songAudio = [
  "audio/Helena.mp3",
  "audio/Black No. 1 (Little Miss Scare -All).mp3",
  "audio/Tear You Apart.mp3",
  "audio/Take Me.mp3",
  "audio/Come Undone.mp3",

];
const songCover = [
  "https://lh3.googleusercontent.com/5JtzMbsUJfBViHSlte4ddyD7kd__O7w7JtK1Icwwb8xXMQZkgy7DYfKnVS57oEvEBQwlv6Z1VhbVdcpx8A=w544-h544-l90-rj",
  "https://lh3.googleusercontent.com/wUTtzSfDfwiVcMLfidplDBVLIxtAAJQD_Ib6izsgZWuWJlcXlQZ-ArERzUpI31ES16ThgPStXOvNlP4=w544-h544-l90-rj",
  "https://lh3.googleusercontent.com/N-J6DkwVQ_5QP4f4eyeC-2RXVwB1DvO3FUkLVFGioq46LVGFRuzgQBijjp8TKtfIG-a_q-8sTftUt-s=w544-h544-s-l90-rj",
  "https://lh3.googleusercontent.com/jv4wTApw67zzZbF17bkcvdED-Spwt43Mb62sCZOLgGLvv517Mw4SCykS04kj-jMFy6P7LkyZuQMR3nwL=w544-h544-l90-rj",
  "https://lh3.googleusercontent.com/BBR2BBgn5JXKEm9gC3ddqKwyOJ3OsMZiWHTf-6BeBhoqzq0w5bay_p9H4xgXSZTj__74XvVFVMei4bOf=w544-h544-l90-rj"
];
const colorThief = new ColorThief();

const loadSong = (audioSrc, coverSrc) => {
  const audioSource = document.createElement("source");
  audioSource.src = audioSrc;
  audioSource.type = "audio/mp3";
  audioPlayer.innerHTML = ''; 
  audioPlayer.appendChild(audioSource);

  albumCoverImg.src = coverSrc;

  audioPlayer.load();
  albumCoverImg.onload = () => {
    const color = colorThief.getColor(albumCoverImg); 
    const rgbColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    document.body.style.backgroundColor = rgbColor; 
    document.querySelector(".player-container").style.backgroundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.7)`;
    document.querySelectorAll("button").forEach(btn => {
      btn.style.backgroundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.2)`;
      btn.style.borderColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.5)`;
    });
  };
};

playPauseBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = "❚❚"; 
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = "►";
  }
});

nextBtn.addEventListener("click", () =>{
  currentIndex = (currentIndex + 1) % songCover.length;
  audioPlayer.pause();
  playPauseBtn.textContent = "►";
  loadSong(songAudio[currentIndex], songCover[currentIndex]);
});
beforeBtn.addEventListener("click", () =>{
  currentIndex = (currentIndex - 1) % songCover.length;
  audioPlayer.pause();
  playPauseBtn.textContent = "►";
  loadSong(songAudio[currentIndex], songCover[currentIndex]);
});

window.onload = () => {
  loadSong(songAudio[currentIndex], songCover[currentIndex]);

};
