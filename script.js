

















// Numero de copos, recomendados entre 30 y 40
    let nieve_cantidad = 70;
    
    // Colores de los copos se mostrarán de forma aleatoria
    let nieve_colorr = ["#aaaacc", "#ddddFF", "#ccccDD"];
    
    // Tipo de letra de los copos
    let nieve_tipo = ["Arial Black", "Arial Narrow", "Times", "Comic Sans MS"];
    
    // Valor o letra de los copos
    let nieve_letra = "❅";
    
    // Velocidad de caída
    let nieve_velocidad = 1.0;
    
    // Tamaño más grande de los copos
    let nieve_cantidadsize = 20;
    
    // Tamaño más pequeño de los copos
    let nieve_chico = 8;
    
    // 1 toda la página - 2 zona izquierda - 3 centro de página - 4 zona derecha
    let nieve_zona = 1;
    
    let nieve = [];
    let marginbottom;
    let marginright;
    let x_mv = [];
    let crds = [];
    let lftrght = [];
    let browserinfos = navigator.userAgent;
    let ie5 = document.all && document.getElementById && !browserinfos.match(/Opera/);
    let ns6 = document.getElementById && !document.all;
    let opera = browserinfos.match(/Opera/);
    let browserok = ie5 || ns6 || opera;
    
    function aleatorio(range) {
      return Math.floor(range * Math.random());
    }
    
    function initnieve() {
      marginbottom = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      marginright = Math.max(
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    
      let nievesizerange = nieve_cantidadsize - nieve_chico;
    
      for (let i = 0; i <= nieve_cantidad; i++) {
        crds[i] = 0;
        lftrght[i] = Math.random() * 15;
        x_mv[i] = 0.03 + Math.random() / 10;
    
        let span = document.createElement("span");
        span.id = "s" + i;
        span.style.position = "absolute";
        span.style.top = "-" + nieve_cantidadsize + "px";
        span.style.fontFamily = nieve_tipo[aleatorio(nieve_tipo.length)];
        span.style.fontSize = aleatorio(nievesizerange) + nieve_chico + "px";
        span.style.color = nieve_colorr[aleatorio(nieve_colorr.length)];
        span.textContent = nieve_letra;
        document.body.appendChild(span);
    
        nieve[i] = span;
        nieve[i].sink = nieve_velocidad * parseInt(nieve[i].style.fontSize) / 5;
    
        if (nieve_zona == 1) {
          nieve[i].posx = aleatorio(marginright - parseInt(nieve[i].style.fontSize));
        } else if (nieve_zona == 2) {
          nieve[i].posx = aleatorio(marginright / 2 - parseInt(nieve[i].style.fontSize));
        } else if (nieve_zona == 3) {
          nieve[i].posx =
            aleatorio(marginright / 2 - parseInt(nieve[i].style.fontSize)) +
            marginright / 4;
        } else if (nieve_zona == 4) {
          nieve[i].posx =
            aleatorio(marginright / 2 - parseInt(nieve[i].style.fontSize)) +
            marginright / 2;
        }
    
        nieve[i].posy = aleatorio(2 * marginbottom - marginbottom - 2 * parseInt(nieve[i].style.fontSize));
        nieve[i].style.left = nieve[i].posx + "px";
        nieve[i].style.top = nieve[i].posy + "px";
      }
    
      movenieve();
    }
    
    function movenieve() {
      for (let i = 0; i <= nieve_cantidad; i++) {
        crds[i] += x_mv[i];
        nieve[i].posy += nieve[i].sink;
        nieve[i].style.left =
          nieve[i].posx + lftrght[i] * Math.sin(crds[i]) + "px";
        nieve[i].style.top = nieve[i].posy + "px";
    
        if (
          nieve[i].posy >= marginbottom - 2 * parseInt(nieve[i].style.fontSize) ||
          parseInt(nieve[i].style.left) > marginright - 3 * lftrght[i]
        ) {
          if (nieve_zona == 1) {
            nieve[i].posx = aleatorio(marginright - parseInt(nieve[i].style.fontSize));
          } else if (nieve_zona == 2) {
            nieve[i].posx = aleatorio(marginright / 2 - parseInt(nieve[i].style.fontSize));
          } else if (nieve_zona == 3) {
            nieve[i].posx =
              aleatorio(marginright / 2 - parseInt(nieve[i].style.fontSize)) +
              marginright / 4;
          } else if (nieve_zona == 4) {
            nieve[i].posx =
              aleatorio(marginright / 2 - parseInt(nieve[i].style.fontSize)) +
              marginright / 2;
          }
    
          nieve[i].posy = 0;
        }
      }
    
      setTimeout(movenieve, 50);
    }
    
    if (browserok) {
      window.onload = initnieve;
    }






const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    

    const activeItem = document.querySelector(".nav-item.active");
    if (activeItem) {
      activeItem.classList.remove("active");
    }
    
    navItem.classList.add("active");
  });
});

const containers = document.querySelectorAll(".containers");

containers.forEach((container) => {
  let isDragging = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - container.offsetLeft;
    const step = (x - startX) * 0.6;
    container.scrollLeft = scrollLeft - step;
  });

  container.addEventListener("mouseup", () => {
    isDragging = false;
  });

  container.addEventListener("mouseleave", () => {
    isDragging = false;
  });
});

const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const rotatingImage = document.getElementById("rotatingImage");
const songName = document.querySelector(".music-player h2");
const artistName = document.querySelector(".music-player p");

let rotating = false;
let currentRotation = 0;
let rotationInterval;

const songs = [
  {
    title: "Zenitsu Theme",
    name: "Naps Tho x Musicality Remix",
    source:
      "https://github.com/iiUnknow/Mp3/raw/main/Demon%20Slayer%20-%20Zenitsu%20Theme%20(Trap%20Remix)%20%20(Naps%20Tho%20x%20Musicality%20Remix).mp3",
    cover:
      "333.jpg",
  },
  {
    title: "Slayer Zenitsu?",
    name: "Zenitsu vs Daki",
    source:
      "https://github.com/iiUnknow/Mp3/raw/main/Demon%20Slayer%20S2_%20Zenitsu%20Theme%20V3%20%20EPIC%20VERSION%20(Zenitsu%20vs%20Daki).mp3",
    cover:
      "444.jpg",
  },
  {
    title: "ZENITSU MAIN THEME",
    name: "Kimetsu no Yaiba OST",
    source:
      "https://github.com/iiUnknow/Mp3/raw/main/Demon%20Slayer_%20Kimetsu%20no%20Yaiba%20OST%20-%20ZENITSU%20MAIN%20THEME.mp3",
    cover:
      "555.jpg",
  },


{
    title: "Zenitsu vs Kaigaku",
    name: "Flaming Thunder God",
    source:
      "https://github.com/iiUnknow/Mp3/raw/main/Zenitsu%207th%20Form_%20Flaming%20Thunder%20God%20(Zenitsu%20vs%20Kaigaku)%20%20Demon%20Slayer_%20Infinity%20Castle%20OST%20Cover.mp3",
    cover:
      "666.jpg",

},

{
 title: "Type Beat - Zenitsu",
    name: " Flute Freestyle Trap Instrumental",
    source:
      "https://github.com/iiUnknow/Mp3/raw/main/Zenitsu%207th%20Form_%20Flaming%20Thunder%20God%20(Zenitsu%20vs%20Kaigaku)%20%20Demon%20Slayer_%20Infinity%20Castle%20OST%20Cover.mp3",
    cover:
      "777.jpg",


},
];

let currentSongIndex = 0;

function startRotation() {
  if (!rotating) {
    rotating = true;
    rotationInterval = setInterval(rotateImage, 50);
  }
}

function pauseRotation() {
  clearInterval(rotationInterval);
  rotating = false;
}

function rotateImage() {
  currentRotation += 1;
  rotatingImage.style.transform = `rotate(${currentRotation}deg)`;
}

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;
  rotatingImage.src = songs[currentSongIndex].cover;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

song.addEventListener("ended", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

function playPause() {
  if (song.paused) {
    song.play();
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
    startRotation();
  } else {
    song.pause();
    controlIcon.classList.remove("fa-pause");
    controlIcon.classList.add("fa-play");
    pauseRotation();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
  startRotation();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  speed: 600,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 10,
    stretch: 120,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
   on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});



const artists = document.querySelectorAll('.artist');
const modal = document.getElementById('reelModal');
const frame = document.getElementById('youtubeFrame');
const close = document.getElementById('closeReel');

artists.forEach(item => {
  item.addEventListener('click', () => {
    const url = item.dataset.youtube;
    if (!url) return;
    frame.src = url + "?autoplay=1";
    modal.style.display = 'flex';
  });
});

close.onclick = () => {
  frame.src = "";
  modal.style.display = 'none';
};

