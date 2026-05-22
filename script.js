// Soal bank — setiap soal: q=pertanyaan, correct=jawaban benar, wrongs=[3 pengecoh]
const bank = [
  { q: "Apa yang dimaksud dengan ekonomi kreatif?", correct: "Ekonomi berbasis kreativitas, keterampilan, dan bakat individu untuk menghasilkan nilai", wrongs: ["Ekonomi yang hanya mengandalkan sumber daya alam", "Sistem ekonomi yang diatur penuh oleh pemerintah", "Ekonomi yang berfokus pada ekspor barang mentah"], explain: "Ekonomi kreatif adalah konsep ekonomi yang memanfaatkan kreativitas, keterampilan, dan bakat individu sebagai aset utama untuk menciptakan nilai ekonomi dan lapangan kerja." },
  { q: "Istilah 'ekonomi kreatif' pertama kali dipopulerkan oleh siapa?", correct: "John Howkins", wrongs: ["Adam Smith", "Karl Marx", "Milton Friedman"], explain: "John Howkins mempopulerkan istilah 'creative economy' dalam bukunya 'The Creative Economy' (2001), yang mengkaji hubungan antara kreativitas dan ekonomi." },
  { q: "Di Indonesia, lembaga pemerintah yang bertanggung jawab mengembangkan ekonomi kreatif adalah...", correct: "Badan Ekonomi Kreatif (Bekraf) / Kemenparekraf", wrongs: ["Kementerian Perdagangan", "Bank Indonesia", "Kementerian Perindustrian"], explain: "Badan Ekonomi Kreatif (Bekraf) dibentuk tahun 2015, kemudian dilebur ke Kementerian Pariwisata dan Ekonomi Kreatif (Kemenparekraf) untuk mengembangkan ekosistem ekonomi kreatif nasional." },
  { q: "Berapa jumlah subsektor ekonomi kreatif yang ditetapkan pemerintah Indonesia?", correct: "17 subsektor", wrongs: ["10 subsektor", "20 subsektor", "25 subsektor"], explain: "Pemerintah Indonesia menetapkan 17 subsektor ekonomi kreatif, antara lain: kuliner, fashion, kriya, musik, film, animasi, game, arsitektur, desain interior, dan lain-lain." },
  { q: "Subsektor ekonomi kreatif yang memberikan kontribusi terbesar terhadap PDB Indonesia adalah...", correct: "Kuliner", wrongs: ["Musik", "Film dan animasi", "Arsitektur"], explain: "Kuliner merupakan subsektor dengan kontribusi terbesar dalam ekonomi kreatif Indonesia, diikuti fashion dan kriya. Kuliner menyumbang lebih dari 40% total PDB ekonomi kreatif." },
  { q: "Apa yang membedakan ekonomi kreatif dengan ekonomi tradisional?", correct: "Sumber daya utama ekonomi kreatif adalah ide dan kreativitas manusia", wrongs: ["Ekonomi kreatif tidak memerlukan modal", "Ekonomi kreatif hanya ada di negara maju", "Ekonomi kreatif tidak bisa menghasilkan lapangan kerja"], explain: "Perbedaan utama ekonomi kreatif adalah penggunaan ide, kreativitas, dan pengetahuan sebagai input utama, berbeda dengan ekonomi tradisional yang mengandalkan sumber daya alam atau tenaga kerja fisik." },
  { q: "Hak Kekayaan Intelektual (HKI) sangat penting dalam ekonomi kreatif karena...", correct: "Melindungi kreasi dan memberikan nilai ekonomi pada karya kreatif", wrongs: ["Memperlambat inovasi", "Hanya berlaku untuk perusahaan besar", "Tidak berpengaruh pada pendapatan kreator"], explain: "HKI melindungi karya kreatif dari pembajakan dan memastikan kreator mendapatkan manfaat ekonomi dari ciptaannya, sehingga mendorong inovasi dan kreativitas lebih lanjut." },
  { q: "Konsep 'triple helix' dalam pengembangan ekonomi kreatif melibatkan kolaborasi antara...", correct: "Akademisi, pemerintah, dan industri/bisnis", wrongs: ["Pemerintah, swasta, dan media", "UMKM, koperasi, dan BUMN", "Eksportir, importir, dan bank"], explain: "Model triple helix menggambarkan kolaborasi tiga pihak: akademisi (perguruan tinggi), pemerintah, dan industri/bisnis untuk mendorong inovasi dan pertumbuhan ekonomi kreatif." },
  { q: "Manakah yang BUKAN merupakan ciri khas pelaku ekonomi kreatif?", correct: "Hanya bekerja di sektor manufaktur berat", wrongs: ["Berorientasi pada inovasi", "Mengandalkan kreativitas dan keahlian", "Mampu menciptakan nilai tambah dari ide"], explain: "Pelaku ekonomi kreatif tidak terbatas pada sektor manufaktur berat. Mereka justru banyak bergerak di bidang seni, desain, teknologi, kuliner, fashion, dan berbagai industri berbasis ide." },
  { q: "Produk ekonomi kreatif subsektor 'kriya' dari Indonesia yang telah diakui UNESCO adalah...", correct: "Batik tulis Yogyakarta dan Solo", wrongs: ["Baju dinas pegawai negeri", "Mobil produksi pabrik nasional", "Mie instan merek lokal"], explain: "Batik adalah produk kriya Indonesia yang diakui UNESCO sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi. Batik merupakan unggulan ekspor ekonomi kreatif Indonesia." },
  { q: "Dalam ekonomi kreatif, istilah 'industri budaya' (cultural industry) merujuk pada...", correct: "Industri yang memproduksi dan mendistribusikan barang dan jasa berbasis budaya", wrongs: ["Industri pariwisata dan perhotelan semata", "Industri pertanian tradisional", "Industri pertambangan dan energi"], explain: "Industri budaya mencakup produksi dan distribusi produk kreatif berbasis budaya seperti musik, film, seni, dan literatur yang memiliki nilai ekonomi sekaligus nilai budaya." },
  { q: "Platform digital seperti YouTube dan Spotify termasuk dalam subsektor ekonomi kreatif...", correct: "Aplikasi dan pengembangan game/konten digital", wrongs: ["Kriya dan kerajinan tangan", "Arsitektur", "Desain komunikasi visual cetak"], explain: "Platform streaming digital termasuk dalam ekosistem ekonomi kreatif berbasis teknologi digital, berkaitan erat dengan subsektor musik, film/animasi, dan pengembangan aplikasi." },
  { q: "Siapakah yang disebut sebagai 'bapak ekonomi kreatif Indonesia'?", correct: "Mari Elka Pangestu", wrongs: ["Sri Mulyani", "Sandiaga Uno", "Chairul Tanjung"], explain: "Mari Elka Pangestu adalah mantan Menteri Perdagangan RI yang memprakarsai pengembangan ekonomi kreatif di Indonesia melalui pemetaan dan pengembangan 14 subsektor awal ekraf." },
  { q: "Apa yang dimaksud dengan 'nilai tambah' dalam ekonomi kreatif?", correct: "Peningkatan nilai produk melalui kreativitas, desain, dan inovasi", wrongs: ["Penambahan bahan baku pada produk", "Kenaikan harga akibat inflasi", "Penambahan tenaga kerja di lini produksi"], explain: "Nilai tambah dalam ekonomi kreatif berasal dari kreativitas, desain, dan inovasi yang mengubah bahan mentah atau ide menjadi produk/jasa bernilai tinggi di pasar." },
  { q: "Subsektor ekonomi kreatif yang berkaitan dengan pembuatan film dan serial adalah...", correct: "Film, animasi, dan video", wrongs: ["Periklanan", "Musik", "Fotografi"], explain: "Film, animasi, dan video merupakan salah satu dari 17 subsektor resmi ekonomi kreatif Indonesia yang mencakup produksi konten audio-visual untuk hiburan, edukasi, dan informasi." },
  { q: "Ekonomi kreatif sering disebut juga sebagai ekonomi gelombang keberapa?", correct: "Gelombang keempat", wrongs: ["Gelombang pertama", "Gelombang kedua", "Gelombang ketiga"], explain: "Alvin Toffler membagi peradaban ekonomi menjadi beberapa gelombang: pertanian (1), industri (2), informasi (3), dan kreativitas (4). Ekonomi kreatif berada di gelombang keempat." },
  { q: "Manakah yang termasuk subsektor ekonomi kreatif di bidang fashion?", correct: "Desain pakaian, aksesori, dan tekstil bermotif lokal", wrongs: ["Produksi mesin jahit industri besar", "Impor bahan baku kain dari luar negeri", "Distribusi pakaian bekas impor"], explain: "Fashion dalam ekraf mencakup desain, kreasi, dan produksi pakaian serta aksesori yang mengandung nilai kreativitas dan identitas budaya lokal." },
  { q: "Apa peran teknologi informasi dalam pengembangan ekonomi kreatif?", correct: "Memperluas pasar, mempermudah distribusi, dan mendorong kolaborasi kreatif", wrongs: ["Menggantikan seluruh tenaga kerja kreatif", "Membatasi akses kreator lokal ke pasar global", "Meningkatkan biaya produksi secara signifikan"], explain: "Teknologi informasi memperluas jangkauan produk kreatif ke pasar global, memudahkan distribusi digital, dan membuka peluang kolaborasi lintas batas." },
  { q: "Dalam konteks ekraf, 'ekonomi berbagi' (sharing economy) seperti Airbnb dan Gojek termasuk contoh...", correct: "Inovasi model bisnis berbasis platform digital", wrongs: ["Ekonomi subsisten tradisional", "Sistem barter antar pelaku usaha", "Monopoli pasar digital"], explain: "Sharing economy memanfaatkan kreativitas dalam model bisnis berbasis platform untuk menghubungkan penyedia dan pengguna layanan secara efisien." },
  { q: "Kota mana di Indonesia yang telah ditetapkan sebagai UNESCO Creative City of Craft and Folk Art?", correct: "Yogyakarta", wrongs: ["Jakarta", "Bandung", "Surabaya"], explain: "Yogyakarta ditetapkan sebagai UNESCO Creative City of Craft and Folk Art karena kekayaan tradisi kerajinan dan seni rakyatnya yang kuat dan berkelanjutan." },
  { q: "Apa yang dimaksud dengan 'ekosistem ekonomi kreatif'?", correct: "Jaringan pelaku, institusi, infrastruktur, dan kebijakan yang mendukung pertumbuhan ekraf", wrongs: ["Lingkungan alam tempat seniman berkarya", "Pasar tradisional khusus produk seni", "Kawasan industri manufaktur kreatif"], explain: "Ekosistem ekonomi kreatif mencakup seluruh komponen yang saling mendukung: kreator, bisnis, pemerintah, lembaga pendidikan, teknologi, dan infrastruktur pendukung." },
  { q: "Subsektor ekonomi kreatif yang berhubungan dengan perancangan ruang dan bangunan disebut...", correct: "Arsitektur", wrongs: ["Desain interior saja", "Kriya", "Seni rupa"], explain: "Arsitektur sebagai subsektor ekonomi kreatif mencakup perancangan bangunan, ruang kota, dan lingkungan terbangun yang menggabungkan fungsi dengan nilai estetika dan kreativitas." },
  { q: "Manakah contoh produk ekonomi kreatif subsektor 'musik' yang mendunia dari Indonesia?", correct: "Angklung yang diakui UNESCO", wrongs: ["Gamelan hanya dikenal lokal", "Dangdut tidak termasuk ekraf", "Musik pop Indonesia tidak punya nilai ekspor"], explain: "Angklung, alat musik tradisional dari Jawa Barat, diakui UNESCO sebagai Warisan Budaya Takbenda pada 2010 dan menjadi representasi musik Indonesia di tingkat global." },
  { q: "Pemerintah Indonesia menetapkan target ekonomi kreatif sebagai tulang punggung ekonomi nasional pada tahun...", correct: "2045", wrongs: ["2025", "2030", "2035"], explain: "Dalam visi Indonesia Emas 2045, ekonomi kreatif ditargetkan menjadi salah satu pilar utama ekonomi nasional yang mendorong pertumbuhan berkelanjutan berbasis inovasi." },
  { q: "Apa perbedaan utama antara 'hak cipta' dan 'paten' dalam konteks HKI ekonomi kreatif?", correct: "Hak cipta melindungi karya seni/sastra secara otomatis, paten melindungi invensi teknis melalui pendaftaran", wrongs: ["Keduanya sama-sama memerlukan pendaftaran khusus", "Paten lebih mudah didapat daripada hak cipta", "Hak cipta hanya berlaku untuk karya digital"], explain: "Hak cipta melekat otomatis pada karya kreatif (seni, sastra, musik) sejak diciptakan, sedangkan paten harus didaftarkan dan melindungi temuan atau invensi yang bersifat teknis." },
  { q: "Manakah contoh nyata penerapan ekonomi kreatif di sektor kuliner Indonesia?", correct: "Restoran yang mengangkat cita rasa tradisional dengan konsep modern dan branding kuat", wrongs: ["Warung nasi tanpa konsep khusus", "Pabrik pengolahan makanan kaleng massal", "Impor produk makanan jadi dari luar negeri"], explain: "Ekonomi kreatif di sektor kuliner terwujud ketika makanan tradisional diolah dengan kreativitas dalam penyajian, branding, dan pengalaman pelanggan sehingga memiliki nilai tambah tinggi." }
];

let cur = 0, score = 0, answered = false;
let shuffled = []; // array of {q, opts, ansIdx, explain}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function prepareQuiz() {
  shuffled = shuffle(bank).map(item => {
    // Build options array: correct + 3 wrongs, then shuffle
    const allOpts = [item.correct, ...item.wrongs];
    const shuffledOpts = shuffle(allOpts);
    const ansIdx = shuffledOpts.indexOf(item.correct);
    return { q: item.q, opts: shuffledOpts, ansIdx, explain: item.explain };
  });
}

function startQuiz() {
  prepareQuiz();
  cur = 0; score = 0; answered = false;
  document.getElementById('landing').style.display = 'none';
  document.getElementById('topic-chips').style.display = 'none';
  document.getElementById('landing-divider').style.display = 'none';
  document.getElementById('quiz-section').classList.add('active');
  renderQ();
}

function renderQ() {
  answered = false;
  const s = shuffled[cur];
  const num = cur + 1;
  const total = shuffled.length;
  document.getElementById('q-num').textContent = 'Soal ' + String(num).padStart(2,'0') + ' / ' + total;
  document.getElementById('q-text').textContent = s.q;
  document.getElementById('prog-info').textContent = 'Soal ' + num + ' dari ' + total;
  document.getElementById('prog-score').textContent = 'Skor: ' + score;
  document.getElementById('prog-fill').style.width = (num / total * 100) + '%';

  const keys = ['A','B','C','D'];
  const el = document.getElementById('options');
  el.innerHTML = '';
  s.opts.forEach((o, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.innerHTML = '<span class="opt-badge">' + keys[i] + '</span><span>' + o + '</span>';
    btn.onclick = () => pick(i);
    el.appendChild(btn);
  });

  document.getElementById('feedback').className = 'feedback';
  const bnext = document.getElementById('btn-next');
  bnext.className = 'btn-next';
  const isLast = cur === shuffled.length - 1;
  bnext.innerHTML = (isLast ? 'Lihat Hasil' : 'Lanjut') + ' <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
}

function pick(idx) {
  if (answered) return;
  answered = true;
  const s = shuffled[cur];
  const btns = document.querySelectorAll('.opt');
  btns.forEach(b => b.disabled = true);

  const fb = document.getElementById('feedback');
  if (idx === s.ansIdx) {
    score++;
    btns[idx].classList.add('correct');
    fb.className = 'feedback correct show';
    document.getElementById('fb-icon').textContent = '✓';
    document.getElementById('fb-text').textContent = 'Benar! ' + s.explain;
  } else {
    btns[idx].classList.add('wrong');
    btns[s.ansIdx].classList.add('correct');
    fb.className = 'feedback wrong show';
    document.getElementById('fb-icon').textContent = '✗';
    document.getElementById('fb-text').textContent = 'Kurang tepat. ' + s.explain;
  }

  document.getElementById('prog-score').textContent = 'Skor: ' + score;
  document.getElementById('btn-next').classList.add('show');
}

function nextQ() {
  cur++;
  if (cur >= shuffled.length) showResult();
  else renderQ();
}

function showResult() {
  document.getElementById('quiz-section').classList.remove('active');
  document.getElementById('result-section').classList.add('active');

  const total = shuffled.length;
  const pct = Math.round(score / total * 100);
  document.getElementById('res-fraction').textContent = score + '/' + total;

  let emoji, predikat, desc;
  if (pct >= 88) { emoji='🏆'; predikat='Luar Biasa!'; desc='Pemahamanmu tentang ekonomi kreatif sangat mendalam. Kamu siap jadi pelaku ekraf masa depan!'; }
  else if (pct >= 72) { emoji='🌟'; predikat='Bagus Sekali!'; desc='Hampir sempurna! Kamu sudah menguasai sebagian besar materi ekonomi kreatif.'; }
  else if (pct >= 56) { emoji='👍'; predikat='Cukup Baik!'; desc='Dasar-dasarnya sudah kamu pahami. Pelajari lagi bagian yang masih kurang.'; }
  else if (pct >= 40) { emoji='📖'; predikat='Terus Belajar!'; desc='Kamu punya dasar yang baik. Fokus pada topik HKI, subsektor, dan tokoh ekraf ya.'; }
  else { emoji='📚'; predikat='Ayo Semangat!'; desc='Jangan menyerah! Baca kembali materi ekonomi kreatif dan coba lagi ya.'; }

  document.getElementById('res-emoji').textContent = emoji;
  document.getElementById('res-predikat').textContent = predikat;
  document.getElementById('res-desc').textContent = desc;
  document.getElementById('bar-pct').textContent = pct + '%';
  setTimeout(() => { document.getElementById('score-bar').style.width = pct + '%'; }, 100);
}

function resetQuiz() {
  prepareQuiz();
  cur = 0; score = 0; answered = false;
  document.getElementById('result-section').classList.remove('active');
  document.getElementById('quiz-section').classList.add('active');
  renderQ();
}

function shareResult() {
  const pct = Math.round(score / shuffled.length * 100);
  const txt = 'Aku dapat skor ' + score + '/' + shuffled.length + ' (' + pct + '%) di Kuis Ekonomi Kreatif PIPAS!';
  if (navigator.share) { navigator.share({ title: 'Kuis Ekonomi Kreatif PIPAS', text: txt }); }
  else { navigator.clipboard.writeText(txt).then(() => showToast('Hasil disalin ke clipboard!')); }
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

/* System Nyawa */

const MAX_LIVES = 3;
let livesLeft = MAX_LIVES;

// Sisipkan baris nyawa ke dalam quiz section setelah prog-track
function injectLivesRow() {
  if (document.getElementById('lives-row')) return;
  const row = document.createElement('div');
  row.className = 'lives-row';
  row.id = 'lives-row';
  row.innerHTML = renderHearts(livesLeft) + '<span class="lives-label" id="lives-label">nyawa</span>';
  const track = document.querySelector('.prog-track');
  track.insertAdjacentElement('afterend', row);
}

function renderHearts(count) {
  let html = '';
  for (let i = 0; i < MAX_LIVES; i++) {
    const lost = i >= count ? ' lost' : '';
    html += `<span class="life-icon${lost}" id="life-${i}">❤️</span>`;
  }
  return html;
}

function updateLivesDisplay() {
  const row = document.getElementById('lives-row');
  if (!row) return;
  for (let i = 0; i < MAX_LIVES; i++) {
    const el = document.getElementById('life-' + i);
    if (!el) continue;
    if (i >= livesLeft) {
      el.classList.add('lost');
    } else {
      el.classList.remove('lost');
    }
  }
  const label = document.getElementById('lives-label');
  if (label) label.textContent = livesLeft + ' nyawa';
}

function loseLife() {
  if (livesLeft <= 0) return;
  const idx = livesLeft - 1;
  const el = document.getElementById('life-' + idx);
  if (el) {
    el.classList.add('shake');
    setTimeout(() => {
      el.classList.remove('shake');
      el.classList.add('lost');
    }, 500);
  }
  livesLeft--;
  const label = document.getElementById('lives-label');
  if (label) setTimeout(() => { label.textContent = livesLeft + ' nyawa'; }, 200);
  if (livesLeft <= 0) {
    setTimeout(triggerGameOver, 700);
  }
}

function triggerGameOver() {
  const optionsEl = document.getElementById('options');
  const feedbackEl = document.getElementById('feedback');
  feedbackEl.className = 'feedback';
  optionsEl.innerHTML = '';

  const banner = document.createElement('div');
  banner.className = 'game-over-banner';
  banner.innerHTML = `
    <div class="go-emoji">💔</div>
    <div class="go-title">Nyawa Habis!</div>
    <div class="go-desc">Skor kamu: ${score} / ${shuffled.length} soal. Coba lagi ya!</div>
  `;
  optionsEl.insertAdjacentElement('afterend', banner);

  const bnext = document.getElementById('btn-next');
  bnext.className = 'btn-next show';
  bnext.innerHTML = 'Lihat Hasil <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
  bnext.onclick = showResult;
}

// Override pick() — tambahkan loseLife() saat salah
const _origPick = pick;
window.pick = function(idx) {
  if (answered) return;
  const s = shuffled[cur];
  _origPick(idx);
  if (idx !== s.ansIdx) {
    loseLife();
  }
};

// Override startQuiz() — reset nyawa
const _origStart = startQuiz;
window.startQuiz = function() {
  livesLeft = MAX_LIVES;
  _origStart();
  injectLivesRow();
  updateLivesDisplay();
};

// Override resetQuiz() — reset nyawa
const _origReset = resetQuiz;
window.resetQuiz = function() {
  livesLeft = MAX_LIVES;
  const banner = document.querySelector('.game-over-banner');
  if (banner) banner.remove();
  _origReset();
  injectLivesRow();
  updateLivesDisplay();
};