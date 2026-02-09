<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>XatSpace Profile</title>

<!-- Icons -->
<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Arial, sans-serif;
}

body{
  background:#0b0f16;
  color:#fff;
}

.container{
  max-width:420px;
  margin:auto;
  padding:15px;
}

/* ===== HEADER ===== */
.header{
  display:flex;
  align-items:center;
  gap:15px;
}

.avatar{
  width:80px;
  height:80px;
  border-radius:50%;
  border:3px solid #ff5e5e;
}

.stats{
  display:flex;
  gap:20px;
}

.stat{
  text-align:center;
}

.stat span{
  display:block;
  font-size:18px;
  font-weight:bold;
}

/* ===== INFO ===== */
.info{
  margin-top:15px;
  font-size:14px;
  line-height:1.6;
  opacity:.85;
}

.badge{
  background:#ff3c3c;
  padding:2px 8px;
  border-radius:6px;
  font-size:12px;
}

/* ===== TABS ===== */
.tabs{
  display:flex;
  gap:10px;
  margin:15px 0;
}

.tabs button{
  flex:1;
  padding:8px;
  background:rgba(255,255,255,0.05);
  border:1px solid rgba(255,255,255,0.1);
  color:#fff;
  border-radius:8px;
}

/* ===== STORIES ===== */
.stories{
  display:flex;
  gap:10px;
  overflow-x:auto;
  padding-bottom:10px;
}

.story{
  text-align:center;
  font-size:12px;
}

.story img{
  width:60px;
  height:60px;
  border-radius:50%;
  border:2px solid #ff5e5e;
}

/* ===== ACTIONS ===== */
.actions{
  display:flex;
  justify-content:space-around;
  margin:15px 0;
  font-size:24px;
}

/* ===== VIDEO ===== */
.video-card{
  background:#111827;
  border-radius:12px;
  overflow:hidden;
  cursor:pointer;
}

.video-card img{
  width:100%;
}

/* ===== MODAL ===== */
.modal{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,0.8);
  display:none;
  justify-content:center;
  align-items:center;
  z-index:999;
}

.modal iframe{
  width:90%;
  height:50%;
  border-radius:12px;
}

.modal.active{
  display:flex;
}
</style>
</head>

<body>

<div class="container">

  <!-- HEADER -->
  <div class="header">
    <img src="https://i.imgur.com/8Km9tLL.png" class="avatar">
    <div>
      <h3>JasonO</h3>
      <div class="stats">
        <div class="stat"><span>5</span>Friends</div>
        <div class="stat"><span>5</span>Photos</div>
        <div class="stat"><span>2</span>Videos</div>
      </div>
    </div>
  </div>

  <!-- INFO -->
  <div class="info">
    🎂 Birthday: 06 / Apr<br>
    💻 Web Designer<br>
    ❤️ Relationship: <span class="badge">Married</span><br>
    📍 Brasil - Minas Gerais
  </div>

  <!-- TABS -->
  <div class="tabs">
    <button>Web</button>
    <button>Chat</button>
    <button>Forum</button>
  </div>

  <!-- STORIES -->
  <div class="stories">
    <div class="story">
      <img src="https://i.imgur.com/Z6XcKkO.png">
      Fred
    </div>
    <div class="story">
      <img src="https://i.imgur.com/8Km9tLL.png">
      Daniela
    </div>
    <div class="story">
      <img src="https://i.imgur.com/7k12EPD.png">
      Elzo
    </div>
  </div>

  <!-- ACTIONS -->
  <div class="actions">
    <i class="bx bx-music"></i>
    <i class="bx bx-play-circle" onclick="openVideo()"></i>
    <i class="bx bx-camera"></i>
    <i class="bx bx-heart"></i>
  </div>

  <!-- VIDEO CARD -->
  <div class="video-card" onclick="openVideo()">
    <img src="https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg">
  </div>

</div>

<!-- MODAL -->
<div class="modal" id="videoModal" onclick="closeVideo()">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
    frameborder="0" allowfullscreen></iframe>
</div>

<script>
function openVideo(){
  document.getElementById("videoModal").classList.add("active");
}

function closeVideo(){
  document.getElementById("videoModal").classList.remove("active");
}
</script>

</body>
</html>