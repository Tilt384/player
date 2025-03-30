const playPauseBtn = document.getElementById("play-pause-btn");
const audioPlayer = document.getElementById("audio-player");
const albumCoverImg = document.getElementById("album-cover-img");

// Данные для песни и обложки (можно заменить на свои файлы)
const songData = {
  audioSrc: 'audio/Helena.mp3', // Путь к аудиофайлу
  coverSrc: src="https://lh3.googleusercontent.com/5JtzMbsUJfBViHSlte4ddyD7kd__O7w7JtK1Icwwb8xXMQZkgy7DYfKnVS57oEvEBQwlv6Z1VhbVdcpx8A=w544-h544-l90-rj" // Путь к обложке
};

const loadSong = (songData) => {
  // Устанавливаем путь к аудио
  const audioSource = document.createElement("source");
  audioSource.src = songData.audioSrc;
  audioSource.type = "audio/mp3";
  audioPlayer.innerHTML = ''; // Очищаем старые элементы
  audioPlayer.appendChild(audioSource); // Добавляем новый источник

  // Устанавливаем обложку альбома
  albumCoverImg.src = songData.coverSrc;

  // Загружаем источник в плеере
  audioPlayer.load();
};

// Функция для переключения состояния плеера
playPauseBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = "❚❚"; // Ставим паузу
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = "►"; // Ставим воспроизведение
  }
});

// Загрузка песни и обложки при загрузке страницы
window.onload = () => {
  loadSong(songData);
};
