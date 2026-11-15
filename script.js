// =========================================================
// A LITTLE SURPRISE FOR YOU — Vanilla JavaScript
// Edit foto, caption, surat, dan pertanyaan game di bagian DATA.
 // =========================================================

// ---------- 1. PERSONAL CONTENT (EDIT BAGIAN INI) ----------
const memoryPhotos = [
  { src: "assets/images/1.JPEG", caption: "Kalau nggak salah, ini menjadi salah satu foto pertama kita berdua. Sebenarnya waktu itu suasananya ramai dan ada teman-teman lain juga. Tapi lucunya, kita bisa berfoto bersebelahan karena dibantu sama teman-teman yang waktu itu mengatur posisi kita. Mereka sempat bilang, *Kau situ lah, Li,* lalu aku juga dipindahkan sampai akhirnya kita berdiri bersebelahan. WKWK.Kalau diingat sekarang, ada hal kecil yang cukup lucu dari foto ini. Awalnya mungkin nggak ada rencana khusus untuk berfoto berdua, tetapi berkat bantuan teman-teman, akhirnya ada juga foto kita seperti ini. Sederhana memang, tetapi tetap menjadi salah satu kenangan yang aku simpan. Sometimes, the simplest moments become the sweetest memories. ♡" },
  { src: "assets/images/22.JPEG", caption: "Nah, kalau yang satu ini ada cerita tersendiri. Waktu itu kita sempat pergi menonton, kebetulan acaranya gratis, lalu setelah itu kita melanjutkan perjalanan untuk mencoba photobooth bersama Aisyah, dan Radit. Ini juga menjadi pengalaman pertama kita mencoba photobooth bersama. Setelah selesai, kita lanjut pergi ke OH SOME!. Menurutku seru juga kalau mengingat perjalanan hari itu, mulai dari menonton, mencoba photobooth, sampai pergi bersama. Mungkin terlihat seperti kegiatan biasa, tetapi justru hal-hal sederhana seperti ini yang nantinya bisa menjadi kenangan menyenangkan untuk diingat kembali. ✿" },
  { src: "assets/images/23.JPEG", caption: "Kalau foto yang ini mengingatkanku dengan kegiatan Pramuka. Dulu kita sama-sama mengikuti ekstrakurikuler Pramuka, dan sampai sekarang ternyata masih ada kesempatan untuk bertemu kembali dalam kegiatan latihan. Walaupun sekarang kamu lebih sering mengikuti latihan dibandingkan aku, rasanya tetap menyenangkan melihat kita masih punya salah satu kegiatan yang pernah menjadi bagian dari perjalanan kita. Ada banyak pengalaman yang pernah kita lalui selama Pramuka, mulai dari latihan sampai berbagai perlombaan. It's nice to see that some memories still bring us together." }
];

const achievementPhotos = [
  { src: "assets/images/8.JPEG", title: "Duta Genre Deli Serdang 2026", caption: "Aku bangga banget lihat perjalananmu yang satu ini. Awalnya mungkin kamu cuma ingin mencoba sesuatu yang baru, tetapi ternyata kamu bisa sampai di titik menjadi salah satu finalis Duta Genre Sumatera Utara 2026. Keren banget menurutku. Apalagi dari sini aku juga ikut termotivasi untuk mencoba hal yang sama, sampai akhirnya aku memberanikan diri mengikuti Duta Pelopor Pendidikan Anak Sumatera Utara 2026. Mungkin kamu nggak sadar, tetapi dari keberanianmu mencoba sesuatu, aku juga jadi punya keberanian untuk mengambil kesempatan baru. So, thank you for inspiring me!" },
  { src: "assets/images/21.JPEG", title: "Secretary of OSIS", caption: "Satu hal yang aku kagumi darimu adalah kamu nggak berhenti mencoba ketika sesuatu belum berjalan sesuai harapan. Aku tahu sebelumnya kamu pernah mencoba mencalonkan diri sebagai wakil ketua OSIS, tetapi belum berhasil. Namun, kamu tetap mencoba lagi dengan mengambil kesempatan menjadi sekretaris OSIS hingga akhirnya dipercaya menjadi Sekretaris I. Menurutku itu keren banget, karena nggak semua orang punya keberanian untuk mencoba kembali setelah mengalami kegagalan. Aku harap kamu juga bangga dengan dirimu sendiri, karena sudah berani mengambil kesempatan itu." },
  { src: "assets/images/20.JPEG", title: "Pramuka", caption: "Kalau mengingat masa Pramuka, ada banyak hal yang menurutku menarik untuk dikenang. Apalagi waktu kita masih satu tim dan mengikuti berbagai perlombaan, salah satunya LCTP. Aku masih ingat bagaimana kita sama-sama berusaha mempelajari banyak materi dan menjawab setiap soal dengan sebaik mungkin. Aku kagum karena kamu bisa mengingat banyak hal dan selalu berusaha memberikan yang terbaik. Senang rasanya pernah berada di satu tim denganmu dan melewati pengalaman itu bersama. It's a nice memory to remember!" },
  { src: "assets/images/16.JPEG", title: "Fashion Design", caption: "Aku juga suka banget melihat hasil gambarmu, terutama desain pakaian yang kamu buat sendiri. Setiap kali kamu mengirimkan hasil gambarmu, aku selalu merasa keren banget, karena ternyata kamu punya kemampuan untuk menuangkan ide dan imajinasimu ke dalam sebuah desain. Aku mungkin bisa menggambar, tetapi untuk membuat desain pakaian seperti yang kamu lakukan, itu sesuatu yang berbeda bagiku. Kadang aku juga membayangkan bagaimana kalau suatu saat nanti kamu benar-benar mengembangkan kemampuan itu menjadi sebuah usaha atau bahkan punya butik sendiri. Semoga apa yang kamu sukai sekarang bisa menjadi sesuatu yang besar di masa depan. Keep creating, okay!" },
  { src: "assets/images/7.JPEG", title: "The Olimpiad Journey", caption: "Aku juga kagum dengan banyaknya kesempatan dan olimpiade yang pernah kamu ikuti. Apalagi ketika kamu pernah cerita tentang amanah dari gurumu untuk mengikuti olimpiade dengan deadline yang cukup mepet. Di tengah kegiatan lain yang juga harus kamu jalani, kamu masih berusaha menyelesaikan tanggung jawab itu. Kalau dipikir-pikir, pasti melelahkan banget, ya. Tetapi kamu tetap berusaha menjalankannya. Menurutku itu salah satu hal yang patut dibanggakan darimu. Aku suka melihat bagaimana kamu mau mengambil kesempatan dan mencoba banyak hal baru. Semoga kamu nggak pernah kehilangan semangat itu, ya!" },
  { src: "assets/images/14.JPEG", title: "Master of Ceremony", caption: "Nah, kalau yang satu ini sepertinya sudah nggak perlu diragukan lagi. Aku selalu kagum melihatmu ketika menjadi MC di berbagai acara. Mulai dari acara sekolah, Remaja Masjid, PHBI, bahkan sampai acara wisuda di TK. Menurutku keren banget bagaimana kamu bisa menyesuaikan diri dengan berbagai suasana acara, baik formal maupun nonformal. Setiap melihatmu membawakan acara, aku jadi berpikir bahwa aku juga harus belajar mengembangkan kemampuan public speaking-ku. Jujur, aku termotivasi dari caramu berbicara dan membawa suasana. Hopefully, someday I can do it too!" }
];

const peloporPhotos = [
  { src: "assets/images/13.JPEG", caption: "Preparation Night" },
  { src: "assets/images/12.JPEG", caption: "After Performance" },
  { src: "assets/images/5.JPEG", caption: "Before the Stage" }
];

const letterText = `Dear Jessica,

Happy birthday! Another year, another chance to create more beautiful memories.

By the way, ada beberapa hal yang sebenarnya ingin aku sampaikan kepadamu. Selama ini, aku melihat banyak hal menarik darimu, mulai dari keberanianmu mencoba sesuatu yang baru, kemampuan yang kamu punya, sampai bagaimana kamu selalu berusaha mengambil berbagai kesempatan yang datang kepadamu.

Aku bangga melihat perjalananmu selama ini. Mulai dari Duta Genre, OSIS, Pramuka, berbagai olimpiade, kemampuanmu dalam menggambar dan mendesain, sampai ketika kamu menjadi MC di berbagai acara. Mungkin bagimu beberapa hal tersebut adalah sesuatu yang biasa saja, tetapi menurutku ada banyak hal yang bisa aku pelajari darimu.

Bahkan, ada beberapa hal yang tanpa kamu sadari membuatku ikut termotivasi untuk mencoba sesuatu. Salah satunya ketika melihatmu mengikuti Duta Genre, aku jadi punya keinginan untuk mencoba kesempatan yang sama hingga akhirnya mengikuti Pelopor Pendidikan Anak Sumatera Utara 2026. Aku juga jadi ingin belajar menjadi MC ketika melihat bagaimana kamu membawakan berbagai acara. Menarik ya, ternyata dari hal-hal yang kamu lakukan, ada orang lain yang ikut mendapatkan motivasi untuk berkembang.

Aku juga berharap kamu bisa lebih percaya dengan dirimu sendiri. Jangan terlalu sering merasa bahwa apa yang kamu lakukan belum cukup baik. Karena dari apa yang aku lihat, ada banyak hal yang sebenarnya sudah berhasil kamu lakukan dan patut kamu banggakan. Nggak harus selalu mendapatkan juara, jabatan, atau pencapaian tertentu untuk merasa bahwa dirimu sudah berkembang. Sometimes, simply having the courage to try is already something worth being proud of.

Semoga di umur yang baru ini, kamu bisa mendapatkan lebih banyak kebahagiaan, pengalaman baru, dan kesempatan untuk mengembangkan apa yang kamu sukai. Semoga semua hal yang sedang kamu perjuangkan juga mendapatkan hasil terbaik. Jangan lupa untuk menikmati setiap prosesnya, ya. Kalau suatu saat ada hal yang belum berjalan sesuai harapan, jangan langsung merasa bahwa kamu nggak mampu. Masih banyak kesempatan lain yang bisa kamu coba.

Terakhir, tetap jadi Jessica yang aku kenal, ya. Terus belajar, terus berkembang, dan jangan berhenti mencoba hal-hal baru. Aku harap suatu saat nanti kamu bisa melihat kembali semua perjalananmu dan merasa bangga dengan sejauh apa kamu sudah melangkah.

Once again, happy birthday! I hope this year will be a good chapter for you. Stay happy, stay kind, and keep being yourself.

And don't forget to be proud of yourself, just as much as you make others proud. ♡

With lots of good wishes, ♡ `;

// ---------- 2. PAGE NAVIGATION ----------
const pages = [...document.querySelectorAll(".page")];
let currentPage = 1;

function showPage(pageNumber) {
  const target = Math.min(8, Math.max(1, pageNumber));
  pages.forEach((page) => {
    page.classList.toggle("active", Number(page.dataset.page) === target);
  });
  currentPage = target;
  document.getElementById("progress-label").textContent = `${String(target).padStart(2, "0")} / 08`;
  document.getElementById("progress-fill").style.width = `${(target / 8) * 100}%`;
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (target === 2) launchConfetti(95);
}

document.getElementById("open-surprise").addEventListener("click", () => {
  showPage(2);
  launchConfetti(150);
});
document.getElementById("begin-journey").addEventListener("click", () => showPage(3));

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => showPage(currentPage + 1));
});
document.querySelectorAll("[data-prev]").forEach((button) => {
  button.addEventListener("click", () => showPage(currentPage - 1));
});

// ---------- 3. MEMORY GALLERY ----------
let memoryIndex = 0;
const memoryImage = document.getElementById("memory-image");
const memoryCaption = document.getElementById("memory-caption");
const memoryCount = document.getElementById("memory-count");

function renderMemory() {
  const item = memoryPhotos[memoryIndex];
  memoryImage.src = item.src;
  memoryImage.alt = `Foto kenangan ${memoryIndex + 1}`;
  memoryCaption.textContent = item.caption;
  memoryCount.textContent = `${String(memoryIndex + 1).padStart(2, "0")} / ${String(memoryPhotos.length).padStart(2, "0")}`;
  memoryImage.animate([{ opacity: .35, transform: "scale(.98)" }, { opacity: 1, transform: "scale(1)" }], { duration: 350 });
}
document.getElementById("memory-prev").addEventListener("click", () => {
  memoryIndex = (memoryIndex - 1 + memoryPhotos.length) % memoryPhotos.length;
  renderMemory();
});
document.getElementById("memory-next").addEventListener("click", () => {
  memoryIndex = (memoryIndex + 1) % memoryPhotos.length;
  renderMemory();
});

function renderPhotoCards() {
  const achievementGrid = document.getElementById("achievement-grid");
  achievementGrid.innerHTML = achievementPhotos.map((item, index) => `
    <article class="achievement-card" style="--tilt:${index % 2 === 0 ? "-1deg" : "1deg"}">
      <img src="${item.src}" alt="Achievement ${index + 1}: ${item.title}">
      <h4>${item.title}</h4>
      <p>${item.caption}</p>
    </article>
  `).join("");

  const peloporGrid = document.getElementById("pelopor-grid");
  peloporGrid.innerHTML = peloporPhotos.map((item, index) => `
    <article class="pelopor-photo">
      <img src="${item.src}" alt="Foto Pelopor ${index + 1}">
      <p>${item.caption}</p>
    </article>
  `).join("");
}
renderMemory();
renderPhotoCards();

// ---------- 4. INTERACTIVE LETTER ----------
const envelopeButton = document.getElementById("envelope-button");
const letterPaper = document.getElementById("letter-paper");
const letterContent = document.getElementById("letter-content");
let letterOpened = false;

envelopeButton.addEventListener("click", () => {
  if (letterOpened) return;
  letterOpened = true;
  envelopeButton.classList.add("opened");
  document.getElementById("envelope-hint").textContent = "A little message, just for you ♡";
  letterPaper.setAttribute("aria-hidden", "false");
  letterPaper.classList.add("visible");
  letterContent.textContent = letterText;
});

// ---------- 5. SEVEN OPEN-ENDED WISH QUESTIONS ----------
const wishForm = document.getElementById("wish-form");
const wishStatus = document.getElementById("wish-save-status");
const wishStorageKey = "aLittleSurpriseWishAnswers";

function collectWishAnswers() {
  return Array.from({ length: 7 }, (_, index) => {
    const field = document.getElementById(`wish-${index + 1}`);
    return { question: field.labels[0].textContent.trim(), answer: field.value.trim() };
  });
}

function saveWishAnswers() {
  const answers = collectWishAnswers();
  try {
    localStorage.setItem(wishStorageKey, JSON.stringify({ savedAt: new Date().toISOString(), answers }));
    wishStatus.textContent = "Jawaban berhasil disimpan di browser ini. Kamu juga bisa download salinannya ya! ♡";
    return answers;
  } catch (error) {
    wishStatus.textContent = "Browser tidak mengizinkan penyimpanan otomatis. Coba gunakan tombol Download jawaban.";
    return answers;
  }
}

function downloadWishAnswers() {
  const answers = saveWishAnswers();
  const content = [
    "A LITTLE SURPRISE FOR YOU ♡",
    "Jawaban untuk 7 pertanyaan I Wish You...",
    `Disimpan: ${new Date().toLocaleString("id-ID")}`,
    "",
    ...answers.flatMap((item, index) => [item.question, item.answer || "(Belum diisi)", ""])
  ].join("\n");
  const file = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = "jawaban-i-wish-you.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  wishStatus.textContent = "File jawaban berhasil disiapkan. Kirim file ini ke pembuat website supaya jawabannya bisa dibaca juga. ♡";
}

try {
  const saved = JSON.parse(localStorage.getItem(wishStorageKey) || "null");
  if (saved && Array.isArray(saved.answers)) {
    saved.answers.forEach((item, index) => {
      const field = document.getElementById(`wish-${index + 1}`);
      if (field && typeof item.answer === "string") field.value = item.answer;
    });
  }
} catch (error) {
  // Abaikan data browser yang tidak dapat dibaca; form tetap bisa digunakan.
}

wishForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveWishAnswers();
});
wishForm.querySelectorAll("textarea").forEach((field) => {
  field.addEventListener("input", () => {
    try {
      localStorage.setItem(wishStorageKey, JSON.stringify({ savedAt: new Date().toISOString(), answers: collectWishAnswers() }));
      wishStatus.textContent = "Tersimpan otomatis di browser ini ♡";
    } catch (error) {
      wishStatus.textContent = "Penyimpanan otomatis tidak tersedia. Gunakan tombol Simpan atau Download jawaban.";
    }
  });
});
document.getElementById("download-wishes").addEventListener("click", downloadWishAnswers);

// ---------- 6. MUSIC PLAYER ----------
const music = document.getElementById("background-music");
const musicToggle = document.getElementById("music-toggle");
const musicLabel = document.getElementById("music-label");
let musicIsPlaying = false;

musicToggle.addEventListener("click", async () => {
  if (!musicIsPlaying) {
    try {
      await music.play();
      musicIsPlaying = true;
      musicLabel.textContent = "Pause music";
      musicToggle.setAttribute("aria-label", "Pause background music");
    } catch (error) {
      musicLabel.textContent = "Add song.mp3";
      musicToggle.setAttribute("aria-label", "Music file not added yet");
      alert("Musiknya belum tersedia. Tambahkan file lagu bernama song.mp3 ke folder assets/music, lalu coba lagi ya!");
    }
  } else {
    music.pause();
    musicIsPlaying = false;
    musicLabel.textContent = "Play music";
    musicToggle.setAttribute("aria-label", "Play background music");
  }
});
music.addEventListener("ended", () => {
  musicIsPlaying = false;
  musicLabel.textContent = "Play music";
});

// ---------- 7. CONFETTI & FLOATING DECOR ----------
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
let confettiPieces = [];
let confettiFrame = null;

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function launchConfetti(amount = 80) {
  const colors = ["#f5b6c8", "#b9dff4", "#ffe59a", "#cfc1f1", "#bfe4d1", "#ffffff"];
  for (let i = 0; i < amount; i += 1) {
    confettiPieces.push({
      x: Math.random() * window.innerWidth,
      y: -20 - Math.random() * window.innerHeight * .4,
      size: 4 + Math.random() * 6,
      speed: 2 + Math.random() * 4,
      drift: (Math.random() - .5) * 2.5,
      rotation: Math.random() * 360,
      spin: (Math.random() - .5) * 8,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
  if (!confettiFrame) animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  confettiPieces.forEach((piece) => {
    piece.y += piece.speed;
    piece.x += piece.drift;
    piece.rotation += piece.spin;
    ctx.save();
    ctx.translate(piece.x, piece.y);
    ctx.rotate(piece.rotation * Math.PI / 180);
    ctx.fillStyle = piece.color;
    ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * .65);
    ctx.restore();
  });
  confettiPieces = confettiPieces.filter((piece) => piece.y < window.innerHeight + 30);
  if (confettiPieces.length) confettiFrame = requestAnimationFrame(animateConfetti);
  else {
    cancelAnimationFrame(confettiFrame);
    confettiFrame = null;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}

const floatingDecor = document.getElementById("floating-decor");
function addFloatingDecor() {
  const symbols = ["♡", "✦", "✿", "✧", "·"];
  const item = document.createElement("span");
  item.className = "float-item";
  item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  item.style.left = `${Math.random() * 100}%`;
  item.style.fontSize = `${12 + Math.random() * 18}px`;
  item.style.animationDuration = `${8 + Math.random() * 7}s`;
  floatingDecor.appendChild(item);
  setTimeout(() => item.remove(), 16000);
}
setInterval(addFloatingDecor, 1500);

// ---------- 8. RESTART ----------
document.getElementById("unlock-message").disabled = false;
document.getElementById("unlock-message").addEventListener("click", () => {
  document.getElementById("hidden-message").classList.remove("hidden");
  document.getElementById("unlock-message").classList.add("hidden");
  document.getElementById("hidden-lock").textContent = "🔓";
  document.getElementById("hidden-title").textContent = "You unlocked a little secret!";
  document.getElementById("hidden-message-box").scrollIntoView({ behavior: "smooth", block: "center" });
  launchConfetti(90);
});

document.getElementById("restart-website").addEventListener("click", () => {
  music.pause();
  music.currentTime = 0;
  musicIsPlaying = false;
  musicLabel.textContent = "Putar musik";
  musicToggle.setAttribute("aria-label", "Play background music");
  window.location.reload();
});

// Start at the secret page and keep the birthday hidden until the first click.
showPage(1);

