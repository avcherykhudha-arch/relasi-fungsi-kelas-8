/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../types';

export const FINAL_EXAM_QUESTIONS: Question[] = [
  {
    id: 101,
    category: 'relasi-konsep',
    difficulty: 'Mudah',
    stimulusType: 'teks',
    stimulusTitle: 'Konsep Dasar Relasi',
    stimulusContent: 'Mister Jo menuliskan himpunan A = {Budi, Cici, Dedi} dan B = {Matematika, IPA, Seni}. Diberikan aturan relasi "pelajaran yang diminati". Budi menyukai Matematika dan IPA, Cici menyukai Seni, sedangkan Dedi menyukai Matematika.',
    question: 'Banyak pasangan berurutan yang terbentuk dari relasi tersebut adalah...',
    options: [
      { id: 'A', text: '4 pasangan', isCorrect: true, feedback: 'Tepat sekali! Pasangannya: (Budi, Matematika), (Budi, IPA), (Cici, Seni), (Dedi, Matematika). Total 4 pasangan.' },
      { id: 'B', text: '3 pasangan', isCorrect: false, feedback: 'Budi memiliki 2 pasangan.' },
      { id: 'C', text: '5 pasangan', isCorrect: false, feedback: 'Dedi dan Cici masing-masing hanya memiliki 1 pasangan.' },
      { id: 'D', text: '6 pasangan', isCorrect: false, feedback: 'Terlalu banyak.' },
      { id: 'E', text: '2 pasangan', isCorrect: false, feedback: 'Terlalu sedikit.' }
    ],
    caraNormal: {
      diketahui: 'Budi -> Matematika, IPA (2). Cici -> Seni (1). Dedi -> Matematika (1).',
      ditanya: 'Banyak pasangan berurutan.',
      konsep: 'Jumlahkan setiap pasangan terhubung.',
      langkah: ['Budi: 2 pasang', 'Cici: 1 pasang', 'Dedi: 1 pasang', 'Total = 2 + 1 + 1 = 4'],
      kesimpulan: 'Ada 4 pasangan berurutan.'
    },
    caraCepat: {
      trik: 'Jumlahkan Peminat',
      alasan: '2 + 1 + 1 = 4.',
      eksekusi: 'Langsung 4.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['Budi', 'Cici', 'Dedi'],
      kodomain: ['Matematika', 'IPA', 'Seni'],
      arrows: [
        { from: 'Budi', to: 'Matematika' },
        { from: 'Budi', to: 'IPA' },
        { from: 'Cici', to: 'Seni' },
        { from: 'Dedi', to: 'Matematika' }
      ],
      keterangan: 'Ada 4 anak panah pada diagram.'
    },
    ttsScript: 'Soal evaluasi satu. Budi menyukai dua pelajaran, Cici satu pelajaran, dan Dedi satu pelajaran. Total ada empat pasangan berurutan.',
    hint: 'Hitung total pelajaran yang dipilih oleh ketiga siswa.'
  },
  {
    id: 102,
    category: 'relasi-konsep',
    difficulty: 'Mudah',
    stimulusType: 'diagram',
    stimulusTitle: 'Relasi Kurang Dari Tiga',
    stimulusContent: 'Diketahui P = {1, 2} dan Q = {2, 3, 4}. Relasi dari P ke Q adalah "tiga kurangnya dari".',
    question: 'Pasangan berurutan yang benar adalah...',
    options: [
      { id: 'A', text: '{(1, 4)}', isCorrect: true, feedback: 'Benar sekali! 1 adalah tiga kurangnya dari 4 (1 = 4 - 3). Untuk 2, 2 = 5 - 3, namun 5 tidak ada di himpunan Q!' },
      { id: 'B', text: '{(1, 4), (2, 5)}', isCorrect: false, feedback: 'Angka 5 bukan anggota himpunan Q.' },
      { id: 'C', text: '{(4, 1)}', isCorrect: false, feedback: 'Urutan terbalik.' },
      { id: 'D', text: '{(1, 2), (2, 3)}', isCorrect: false, feedback: 'Ini relasi "satu kurangnya dari".' },
      { id: 'E', text: 'Himpunan kosong', isCorrect: false, feedback: 'Ada pasangan (1, 4).' }
    ],
    caraNormal: {
      diketahui: 'P = {1, 2}, Q = {2, 3, 4}. p = q - 3 atau q = p + 3.',
      ditanya: 'Pasangan (p, q).',
      konsep: 'Cari q ∈ Q sedemikian sehingga q = p + 3.',
      langkah: [
        'p = 1 -> q = 1 + 3 = 4 ∈ Q -> (1, 4)',
        'p = 2 -> q = 2 + 3 = 5 ∉ Q (tidak ada di Q)'
      ],
      kesimpulan: 'Pasangannya hanya {(1, 4)}.'
    },
    caraCepat: {
      trik: 'Tambah 3 ke Anggota P',
      alasan: '1 + 3 = 4 (ada di Q), 2 + 3 = 5 (tidak ada di Q).',
      eksekusi: 'Hanya {(1, 4)}.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['1', '2'],
      kodomain: ['2', '3', '4'],
      arrows: [{ from: '1', to: '4' }],
      keterangan: 'Hanya 1 yang terhubung ke 4.'
    },
    ttsScript: 'Soal evaluasi dua. Satu ditambah tiga adalah empat yang ada di himpunan Q. Dua ditambah tiga adalah lima yang tidak ada di Q. Jadi pasangannya hanya satu koma empat.',
    hint: 'Ingat bahwa pasangan di sebelah kanan harus ada di himpunan Q.'
  },
  {
    id: 103,
    category: 'domain-representasi',
    difficulty: 'Mudah',
    stimulusType: 'diagram',
    stimulusTitle: 'Menentukan Range Relasi',
    stimulusContent: 'Diberikan pasangan berurutan: {(2, 3), (4, 5), (6, 3), (8, 7)}.',
    question: 'Daerah hasil (Range) dari relasi di atas adalah...',
    options: [
      { id: 'A', text: '{3, 5, 7}', isCorrect: true, feedback: 'Tepat sekali! Elemen kedua unik adalah 3, 5, dan 7.' },
      { id: 'B', text: '{2, 4, 6, 8}', isCorrect: false, feedback: 'Ini adalah Domain (daerah asal).' },
      { id: 'C', text: '{3, 3, 5, 7}', isCorrect: false, feedback: 'Anggota himpunan tidak ditulis berulang.' },
      { id: 'D', text: '{2, 3, 4, 5, 6, 7, 8}', isCorrect: false, feedback: 'Ini gabungan domain dan range.' },
      { id: 'E', text: '{5, 7}', isCorrect: false, feedback: 'Angka 3 juga termasuk anggota range.' }
    ],
    caraNormal: {
      diketahui: 'Pasangan: (2, 3), (4, 5), (6, 3), (8, 7).',
      ditanya: 'Range.',
      konsep: 'Range = kumpulan nilai koordinat kedua (y) tanpa pengulangan.',
      langkah: ['Koordinat kedua: 3, 5, 3, 7', 'Hilangkan duplikasi: {3, 5, 7}'],
      kesimpulan: 'Range = {3, 5, 7}.'
    },
    caraCepat: {
      trik: 'Ambil Nilai Belakang',
      alasan: 'Nilai belakang: 3, 5, 7.',
      eksekusi: '{3, 5, 7}.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['2', '4', '6', '8'],
      kodomain: ['3', '5', '7'],
      arrows: [
        { from: '2', to: '3' },
        { from: '4', to: '5' },
        { from: '6', to: '3' },
        { from: '8', to: '7' }
      ],
      keterangan: 'Tampak range yang dituju panah adalah {3, 5, 7}.'
    },
    ttsScript: 'Soal evaluasi tiga. Daerah hasil atau range dari pasangan berurutan tersebut adalah tiga, lima, tujuh.',
    hint: 'Kumpulkan semua angka di posisi belakang kurung.'
  },
  {
    id: 104,
    category: 'domain-representasi',
    difficulty: 'Sedang',
    stimulusType: 'tabel',
    stimulusTitle: 'Pola Fungsi dari Tabel',
    stimulusContent: 'Perhatikan tabel berikut:\n| x | -1 | 0 | 1 | 2 |\n| y | -5 | -2 | 1 | 4 |',
    question: 'Rumus fungsi yang menyatakan hubungan tabel di atas adalah...',
    options: [
      { id: 'A', text: 'y = 3x - 2', isCorrect: true, feedback: 'Benar sekali! Beda nilai y konstan +3 (koefisien x = 3). Saat x = 0, y = -2 (konstanta = -2). Rumus: y = 3x - 2.' },
      { id: 'B', text: 'y = 2x - 3', isCorrect: false, feedback: 'Untuk x=1: 2(1)-3 = -1, tidak sesuai tabel.' },
      { id: 'C', text: 'y = 3x + 2', isCorrect: false, feedback: 'Salah tanda konstanta.' },
      { id: 'D', text: 'y = 4x - 1', isCorrect: false, feedback: 'Kenaikan bukan 4.' },
      { id: 'E', text: 'y = x - 4', isCorrect: false, feedback: 'Kenaikan bukan 1.' }
    ],
    caraNormal: {
      diketahui: 'Tabel: (-1, -5), (0, -2), (1, 1), (2, 4).',
      ditanya: 'Rumus y = ax + b.',
      konsep: 'a = beda y, b = nilai y saat x = 0.',
      langkah: [
        'Beda y: (-2) - (-5) = 3, 1 - (-2) = 3 -> a = 3.',
        'Saat x = 0, y = -2 -> b = -2.',
        'Rumus: y = 3x - 2.'
      ],
      kesimpulan: 'Rumus adalah y = 3x - 2.'
    },
    caraCepat: {
      trik: 'Cek Titik Potong x = 0',
      alasan: 'Saat x = 0, y = -2. Jadi konstanta wajib -2.',
      eksekusi: 'Beda tiap langkah adalah 3. Langsung y = 3x - 2.'
    },
    buktiVisual: {
      type: 'tabel',
      tableData: [
        { x: -1, y: -5 },
        { x: 0, y: -2 },
        { x: 1, y: 1 },
        { x: 2, y: 4 }
      ],
      keterangan: 'Tabel menunjukkan beda +3 konstan dan titik (0, -2).'
    },
    ttsScript: 'Soal evaluasi empat. Beda antar suku adalah tiga, dan saat x bernilai nol hasilnya minus dua. Rumusnya adalah y sama dengan tiga x kurang dua.',
    hint: 'Lihat nilai y saat x = 0.'
  },
  {
    id: 105,
    category: 'fungsi-konsep',
    difficulty: 'Mudah',
    stimulusType: 'teks',
    stimulusTitle: 'Identifikasi Fungsi',
    stimulusContent: 'Perhatikan empat relasi dari himpunan A = {1, 2, 3} ke B = {p, q}:\nI. {(1, p), (2, q), (3, p)}\nII. {(1, p), (2, p), (1, q)}\nIII. {(1, q), (2, q), (3, q)}\nIV. {(1, p), (3, q)}',
    question: 'Relasi yang merupakan fungsi adalah...',
    options: [
      { id: 'A', text: 'I dan III', isCorrect: true, feedback: 'Hebat! Pada I dan III, seluruh domain {1, 2, 3} muncul tepat 1 kali. Pada II angka 1 muncul 2 kali, dan pada IV angka 2 hilang (jomblo)!' },
      { id: 'B', text: 'I dan II', isCorrect: false, feedback: 'II bukan fungsi karena angka 1 mendua.' },
      { id: 'C', text: 'II dan IV', isCorrect: false, feedback: 'Keduanya bukan fungsi.' },
      { id: 'D', text: 'I dan IV', isCorrect: false, feedback: 'IV bukan fungsi karena angka 2 tidak punya pasangan.' },
      { id: 'E', text: 'Hanya I', isCorrect: false, feedback: 'III juga merupakan fungsi (fungsi konstan).' }
    ],
    caraNormal: {
      diketahui: 'Domain A = {1, 2, 3}.',
      ditanya: 'Relasi yang sah sebagai fungsi.',
      konsep: 'Domain harus lengkap {1, 2, 3} dan masing-masing muncul tepat sekali di posisi pertama.',
      langkah: [
        'I: {1, 2, 3} masing-masing 1 kali -> FUNGSI.',
        'II: 1 muncul 2 kali -> BUKAN FUNGSI.',
        'III: {1, 2, 3} masing-masing 1 kali -> FUNGSI.',
        'IV: 2 tidak muncul -> BUKAN FUNGSI.'
      ],
      kesimpulan: 'Yang merupakan fungsi adalah I dan III.'
    },
    caraCepat: {
      trik: 'Periksa Kelengkapan Domain',
      alasan: 'Harus ada 1, 2, dan 3 tanpa dobel.',
      eksekusi: 'Hanya I dan III yang memuat 1, 2, 3 tepat satu kali.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['1', '2', '3'],
      kodomain: ['p', 'q'],
      arrows: [
        { from: '1', to: 'p' },
        { from: '2', to: 'q' },
        { from: '3', to: 'p' }
      ],
      keterangan: 'Diagram I: semua domain memanah tepat 1 kali.'
    },
    ttsScript: 'Soal evaluasi lima. Relasi yang merupakan fungsi adalah satu dan tiga, karena setiap anggota domain berpasangan tepat satu kali.',
    hint: 'Cari yang angka depannya tepat ada 1, 2, dan 3 tanpa ada yang dobel atau hilang.'
  },
  {
    id: 106,
    category: 'fungsi-konsep',
    difficulty: 'Mudah',
    stimulusType: 'pola',
    stimulusTitle: 'Banyak Pemetaan Eksponen',
    stimulusContent: 'Diketahui himpunan M = {x | 1 ≤ x ≤ 4, x ∈ Bilangan Cacah} dan N = {faktor prima dari 6}.',
    question: 'Banyaknya pemetaan yang mungkin dari himpunan M ke himpunan N adalah...',
    options: [
      { id: 'A', text: '16 cara', isCorrect: true, feedback: 'Tepat sekali! M = {1, 2, 3, 4} -> n(M) = 4. N = {2, 3} -> n(N) = 2. Pemetaan M ke N = n(N)^n(M) = 2⁴ = 16 cara!' },
      { id: 'B', text: '8 cara', isCorrect: false, feedback: '2³ = 8, bukan 2⁴.' },
      { id: 'C', text: '64 cara', isCorrect: false, feedback: '4³ = 64.' },
      { id: 'D', text: '12 cara', isCorrect: false, feedback: 'Hasil perkalian 4 x 3.' },
      { id: 'E', text: '24 cara', isCorrect: false, feedback: 'Bukan hasil pemangkatan yang tepat.' }
    ],
    caraNormal: {
      diketahui: 'M = {1, 2, 3, 4} -> n(M) = 4. N = {2, 3} -> n(N) = 2.',
      ditanya: 'Banyak pemetaan M ke N.',
      konsep: 'n(N)^n(M).',
      langkah: ['n(N) = 2', 'n(M) = 4', '2⁴ = 2 × 2 × 2 × 2 = 16'],
      kesimpulan: 'Banyak pemetaan = 16 cara.'
    },
    caraCepat: {
      trik: 'Tujuan Pangkat Asal',
      alasan: '2 pangkat 4.',
      eksekusi: '2⁴ = 16.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['1', '2', '3', '4'],
      kodomain: ['2', '3'],
      arrows: [],
      keterangan: 'Masing-masing dari 4 anggota memiliki 2 pilihan tujuan: 2⁴ = 16.'
    },
    ttsScript: 'Soal evaluasi enam. Banyak anggota M adalah empat dan N adalah dua. Banyak pemetaan dari M ke N adalah dua pangkat empat sama dengan enam belas.',
    hint: 'Hitung banyak anggota M dan N, lalu hitung n(N) dipangkatkan n(M).'
  },
  {
    id: 107,
    category: 'fungsi-konsep',
    difficulty: 'Sedang',
    stimulusType: 'teks',
    stimulusTitle: 'Korespondensi Satu-Satu',
    stimulusContent: 'Diberikan himpunan A = {a, b, c, d} dan B = {1, 2, 3, 4}.',
    question: 'Banyaknya korespondensi satu-satu yang mungkin dari himpunan A ke himpunan B adalah...',
    options: [
      { id: 'A', text: '24', isCorrect: true, feedback: 'Benar sekali! n = 4. Banyak korespondensi satu-satu = 4! = 4 × 3 × 2 × 1 = 24 cara!' },
      { id: 'B', text: '16', isCorrect: false, feedback: 'Itu adalah 4² = 16.' },
      { id: 'C', text: '256', isCorrect: false, feedback: 'Itu seluruh fungsi pemetaan biasa 4⁴ = 256.' },
      { id: 'D', text: '12', isCorrect: false, feedback: 'Terlalu sedikit.' },
      { id: 'E', text: '6', isCorrect: false, feedback: 'Itu adalah 3!.' }
    ],
    caraNormal: {
      diketahui: 'n(A) = 4, n(B) = 4.',
      ditanya: 'Banyak korespondensi satu-satu.',
      konsep: 'n! = n × (n - 1) × ... × 1.',
      langkah: ['4! = 4 × 3 × 2 × 1 = 24'],
      kesimpulan: 'Banyaknya adalah 24 cara.'
    },
    caraCepat: {
      trik: 'Faktorial 4!',
      alasan: '4 x 3 x 2 x 1 = 24.',
      eksekusi: 'Langsung 24.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['a', 'b', 'c', 'd'],
      kodomain: ['1', '2', '3', '4'],
      arrows: [
        { from: 'a', to: '1' },
        { from: 'b', to: '2' },
        { from: 'c', to: '3' },
        { from: 'd', to: '4' }
      ],
      keterangan: 'Contoh salah satu dari 24 kombinasi korespondensi satu-satu.'
    },
    ttsScript: 'Soal evaluasi tujuh. Banyak korespondensi satu-satu untuk empat anggota adalah empat faktorial sama dengan dua puluh empat.',
    hint: 'Kalikan menurun: 4 x 3 x 2 x 1.'
  },
  {
    id: 108,
    category: 'fungsi-konsep',
    difficulty: 'Mudah',
    stimulusType: 'teks',
    stimulusTitle: 'Menghitung Nilai Fungsi Linier Sederhana',
    stimulusContent: 'Fungsi f dirumuskan dengan f(x) = 4 - 3x.',
    question: 'Nilai dari f(5) adalah...',
    options: [
      { id: 'A', text: '-11', isCorrect: true, feedback: 'Tepat sekali! f(5) = 4 - 3(5) = 4 - 15 = -11.' },
      { id: 'B', text: '11', isCorrect: false, feedback: 'Hasil 4 - 15 bernilai negatif.' },
      { id: 'C', text: '-19', isCorrect: false, feedback: 'Periksa kembali tanda operasi.' },
      { id: 'D', text: '19', isCorrect: false, feedback: 'Salah tanda.' },
      { id: 'E', text: '-7', isCorrect: false, feedback: 'Kurang tepat perhitungannya.' }
    ],
    caraNormal: {
      diketahui: 'f(x) = 4 - 3x, x = 5.',
      ditanya: 'Nilai f(5).',
      konsep: 'Substitusi langsung.',
      langkah: ['f(5) = 4 - 3(5) = 4 - 15 = -11'],
      kesimpulan: 'Nilai f(5) = -11.'
    },
    caraCepat: {
      trik: 'Hitung Mental',
      alasan: '3 x 5 = 15, lalu 4 - 15 = -11.',
      eksekusi: '-11.'
    },
    buktiVisual: {
      type: 'mesin',
      machineFormula: 'f(x) = 4 - 3x',
      machineInputs: [{ x: 5, fx: -11 }],
      keterangan: '5 dikali -3 menghasilkan -15, ditambah 4 menjadi -11.'
    },
    ttsScript: 'Soal evaluasi delapan. Empat dikurangi tiga kali lima adalah empat dikurang lima belas sama dengan minus sebelas.',
    hint: '3 dikali 5 adalah 15, berapa hasil 4 dikurangi 15?'
  },
  {
    id: 109,
    category: 'fungsi-konsep',
    difficulty: 'Sedang',
    stimulusType: 'teks',
    stimulusTitle: 'Mencari Prapeta Fungsi',
    stimulusContent: 'Fungsi g(x) = 2x - 9 memiliki bayangan g(p) = 15.',
    question: 'Nilai p adalah...',
    options: [
      { id: 'A', text: '12', isCorrect: true, feedback: 'Benar sekali! 2p - 9 = 15 -> 2p = 24 -> p = 12.' },
      { id: 'B', text: '10', isCorrect: false, feedback: '2(10) - 9 = 11, bukan 15.' },
      { id: 'C', text: '14', isCorrect: false, feedback: '2(14) - 9 = 19.' },
      { id: 'D', text: '3', isCorrect: false, feedback: '2(3) - 9 = -3.' },
      { id: 'E', text: '8', isCorrect: false, feedback: '2(8) - 9 = 7.' }
    ],
    caraNormal: {
      diketahui: 'g(p) = 2p - 9 = 15.',
      ditanya: 'Nilai p.',
      konsep: 'Persamaan linier satu variabel.',
      langkah: ['2p = 15 + 9 = 24', 'p = 24 / 2 = 12'],
      kesimpulan: 'Nilai p = 12.'
    },
    caraCepat: {
      trik: 'Invers Operasi',
      alasan: '(15 + 9) / 2 = 24 / 2 = 12.',
      eksekusi: '12.'
    },
    buktiVisual: {
      type: 'mesin',
      machineFormula: 'g(x) = 2x - 9',
      machineInputs: [{ x: 12, fx: 15 }],
      keterangan: 'Input 12 menghasilkan output tepat 15.'
    },
    ttsScript: 'Soal evaluasi sembilan. Lima belas ditambah sembilan sama dengan dua puluh empat, dibagi dua hasilnya dua belas.',
    hint: 'Tambah 15 dengan 9, lalu bagi dengan 2.'
  },
  {
    id: 110,
    category: 'fungsi-konsep',
    difficulty: 'Sulit',
    stimulusType: 'teks',
    stimulusTitle: 'Menentukan Rumus Fungsi Linier',
    stimulusContent: 'Suatu fungsi f(x) = ax + b memiliki f(3) = 10 dan f(-2) = -15.',
    question: 'Rumus fungsi f(x) yang benar adalah...',
    options: [
      { id: 'A', text: 'f(x) = 5x - 5', isCorrect: true, feedback: 'Luar biasa! a = (10 - (-15)) / (3 - (-2)) = 25 / 5 = 5. f(3) = 5(3) + b = 10 -> 15 + b = 10 -> b = -5. Jadi f(x) = 5x - 5.' },
      { id: 'B', text: 'f(x) = 5x + 5', isCorrect: false, feedback: 'Salah tanda pada b.' },
      { id: 'C', text: 'f(x) = 3x + 1', isCorrect: false, feedback: 'f(3) = 10 cocok, tetapi f(-2) = -5 (tidak cocok dengan -15).' },
      { id: 'D', text: 'f(x) = 4x - 2', isCorrect: false, feedback: 'Gradien bukan 4.' },
      { id: 'E', text: 'f(x) = 6x - 8', isCorrect: false, feedback: 'f(3) = 10 cocok, tetapi f(-2) = -20.' }
    ],
    caraNormal: {
      diketahui: '3a + b = 10 dan -2a + b = -15.',
      ditanya: 'Rumus f(x).',
      konsep: 'SPLDV eliminasi b.',
      langkah: [
        '(3a - (-2a)) = 10 - (-15) -> 5a = 25 -> a = 5.',
        '3(5) + b = 10 -> 15 + b = 10 -> b = -5.',
        'Rumus: f(x) = 5x - 5.'
      ],
      kesimpulan: 'f(x) = 5x - 5.'
    },
    caraCepat: {
      trik: 'Gradien Selisih',
      alasan: 'a = (10 + 15) / (3 + 2) = 25 / 5 = 5.',
      eksekusi: 'b = 10 - (5 x 3) = -5. Rumus: 5x - 5.'
    },
    buktiVisual: {
      type: 'tabel',
      tableData: [
        { x: -2, y: -15 },
        { x: 0, y: -5 },
        { x: 3, y: 10 }
      ],
      keterangan: 'Garis lurus f(x) = 5x - 5 menghubungkan (-2, -15) dan (3, 10).'
    },
    ttsScript: 'Soal evaluasi sepuluh. Selisih bayangan dua puluh lima dibagi selisih domain lima menghasilkan gradien lima. Rumus fungsinya adalah lima x kurang lima.',
    hint: 'Kurangkan kedua persamaan untuk mencari nilai a terlebih dahulu.'
  },
  {
    id: 111,
    category: 'fungsi-konsep',
    difficulty: 'Sulit',
    stimulusType: 'teks',
    stimulusTitle: 'Menghitung Nilai dari Rumus yang Dicari',
    stimulusContent: 'Berdasarkan fungsi pada soal sebelumnya f(x) = 5x - 5, berapakah nilai dari f(7)?',
    question: 'Nilai dari f(7) adalah...',
    options: [
      { id: 'A', text: '30', isCorrect: true, feedback: 'Tepat sekali! f(7) = 5(7) - 5 = 35 - 5 = 30.' },
      { id: 'B', text: '35', isCorrect: false, feedback: 'Lupa mengurangkan dengan 5.' },
      { id: 'C', text: '40', isCorrect: false, feedback: 'Salah tanda: 35 + 5 = 40.' },
      { id: 'D', text: '25', isCorrect: false, feedback: 'Periksa kembali perhitungan.' },
      { id: 'E', text: '32', isCorrect: false, feedback: 'Kurang tepat perhitungannya.' }
    ],
    caraNormal: {
      diketahui: 'f(x) = 5x - 5. x = 7.',
      ditanya: 'Nilai f(7).',
      konsep: 'Substitusi.',
      langkah: ['f(7) = 5(7) - 5 = 35 - 5 = 30'],
      kesimpulan: 'Nilai f(7) adalah 30.'
    },
    caraCepat: {
      trik: 'Hitung Langsung',
      alasan: '5 x 7 = 35, lalu 35 - 5 = 30.',
      eksekusi: '30.'
    },
    buktiVisual: {
      type: 'mesin',
      machineFormula: 'f(x) = 5x - 5',
      machineInputs: [{ x: 7, fx: 30 }],
      keterangan: '7 masuk mesin 5(7) - 5 keluar sebagai 30.'
    },
    ttsScript: 'Soal evaluasi sebelas. Lima dikali tujuh adalah tiga puluh lima, dikurang lima sama dengan tiga puluh.',
    hint: 'Kalikan 5 dengan 7 lalu kurangkan 5.'
  },
  {
    id: 112,
    category: 'kontekstual-hots',
    difficulty: 'Sedang',
    stimulusType: 'teks',
    stimulusTitle: 'Tarif Rental Mobil',
    stimulusContent: 'Rental mobil "Ceria" memberlakukan biaya sewa Rp250.000 per hari ditambah Rp2.000 untuk setiap kilometer pemakaian. Pak Joko menyewa mobil selama 1 hari dan menempuh jarak 150 km.',
    question: 'Total biaya sewa mobil yang harus dibayar Pak Joko adalah...',
    options: [
      { id: 'A', text: 'Rp550.000', isCorrect: true, feedback: 'Benar sekali! Biaya = Rp250.000 + (150 x Rp2.000) = Rp250.000 + Rp300.000 = Rp550.000.' },
      { id: 'B', text: 'Rp300.000', isCorrect: false, feedback: 'Hanya biaya jarak saja, belum termasuk sewa harian.' },
      { id: 'C', text: 'Rp500.000', isCorrect: false, feedback: 'Kurang Rp50.000.' },
      { id: 'D', text: 'Rp600.000', isCorrect: false, feedback: 'Terlalu mahal.' },
      { id: 'E', text: 'Rp450.000', isCorrect: false, feedback: 'Periksa kembali perhitungan jarak.' }
    ],
    caraNormal: {
      diketahui: 'Biaya harian = 250.000, tarif km = 2.000, jarak = 150 km.',
      ditanya: 'Total biaya.',
      konsep: 'f(x) = 2.000x + 250.000.',
      langkah: [
        'Biaya jarak = 150 × 2.000 = 300.000',
        'Total = 250.000 + 300.000 = 550.000'
      ],
      kesimpulan: 'Total biaya adalah Rp550.000.'
    },
    caraCepat: {
      trik: '150 x 2.000 + 250.000',
      alasan: '300.000 + 250.000 = 550.000.',
      eksekusi: 'Rp550.000.'
    },
    buktiVisual: {
      type: 'tabel',
      tableData: [
        { x: 0, y: 250000 },
        { x: 50, y: 350000 },
        { x: 100, y: 450000 },
        { x: 150, y: 550000 }
      ],
      keterangan: 'Grafik linier biaya naik hingga Rp550.000 pada 150 km.'
    },
    ttsScript: 'Soal evaluasi dua belas. Seratus lima puluh kilometer dikali dua ribu rupiah adalah tiga ratus ribu rupiah. Ditambah sewa dasar dua ratus lima puluh ribu rupiah menjadi lima ratus lima puluh ribu rupiah.',
    hint: 'Kalikan 150 dengan 2.000, lalu tambahkan 250.000.'
  },
  {
    id: 113,
    category: 'kontekstual-hots',
    difficulty: 'HOTS',
    stimulusType: 'teks',
    stimulusTitle: 'Penerapan Fungsi Konsumsi Listrik',
    stimulusContent: 'Sebuah lampu pemanas kandang ayam mengonsumsi energi E(t) = 150t watt-jam, di mana t menyatakan lama waktu menyala dalam jam. Jika biaya listrik adalah Rp1.500 per kilowatt-jam (1 kilowatt-jam = 1.000 watt-jam), berapakah biaya listrik jika lampu menyala selama 20 jam?',
    question: 'Biaya listrik lampu tersebut selama 20 jam adalah...',
    options: [
      { id: 'A', text: 'Rp4.500', isCorrect: true, feedback: 'Hebat sekali! E(20) = 150 x 20 = 3.000 watt-jam = 3 kWh. Biaya = 3 x Rp1.500 = Rp4.500!' },
      { id: 'B', text: 'Rp3.000', isCorrect: false, feedback: 'Itu adalah jumlah kilowatt-jamnya (3 kWh).' },
      { id: 'C', text: 'Rp6.000', isCorrect: false, feedback: 'Terlalu mahal.' },
      { id: 'D', text: 'Rp45.000', isCorrect: false, feedback: 'Lupa membagi dengan 1.000 saat mengubah ke kilowatt-jam.' },
      { id: 'E', text: 'Rp15.000', isCorrect: false, feedback: 'Kurang tepat perhitungannya.' }
    ],
    caraNormal: {
      diketahui: 'E(t) = 150t. t = 20 jam. Tarif = Rp1.500 / kWh. 1 kWh = 1.000 Wh.',
      ditanya: 'Biaya listrik.',
      konsep: 'Perhitungan energi dan tarif proporsional.',
      langkah: [
        'Total watt-jam = 150 × 20 = 3.000 Wh.',
        'Konversi ke kWh = 3.000 / 1.000 = 3 kWh.',
        'Total biaya = 3 × 1.500 = Rp4.500.'
      ],
      kesimpulan: 'Biaya yang dikeluarkan adalah Rp4.500.'
    },
    caraCepat: {
      trik: 'Hitung kWh Langsung',
      alasan: '150 x 20 = 3.000 Wh = 3 kWh.',
      eksekusi: '3 x 1.500 = 4.500.'
    },
    buktiVisual: {
      type: 'mesin',
      machineFormula: 'E(20) = 3000 Wh = 3 kWh -> Biaya = 3 x 1500 = 4500',
      machineInputs: [{ x: 20, fx: 4500 }],
      keterangan: 'Input 20 jam menghasilkan total biaya Rp4.500.'
    },
    ttsScript: 'Soal evaluasi tiga belas. Tiga ribu watt jam sama dengan tiga kilowatt jam. Tiga dikali seribu lima ratus rupiah adalah empat ribu lima ratus rupiah.',
    hint: 'Kalikan 150 dengan 20, bagi 1.000 untuk jadi kWh, lalu kalikan Rp1.500.'
  },
  {
    id: 114,
    category: 'kontekstual-hots',
    difficulty: 'HOTS',
    stimulusType: 'grafik',
    stimulusTitle: 'Titik Potong Dua Garis Fungsi',
    stimulusContent: 'Dua fungsi f(x) = 3x - 1 dan g(x) = x + 7 digambarkan pada bidang Kartesius.',
    question: 'Koordinat titik potong kedua grafik fungsi tersebut adalah...',
    options: [
      { id: 'A', text: '(4, 11)', isCorrect: true, feedback: 'Tepat sekali! 3x - 1 = x + 7 -> 2x = 8 -> x = 4. Lalu y = 4 + 7 = 11. Jadi titik potongnya di (4, 11)!' },
      { id: 'B', text: '(3, 10)', isCorrect: false, feedback: 'f(3) = 8, g(3) = 10 (tidak berpotongan di x = 3).' },
      { id: 'C', text: '(4, 10)', isCorrect: false, feedback: 'Nilai y untuk x=4 adalah 11, bukan 10.' },
      { id: 'D', text: '(2, 5)', isCorrect: false, feedback: 'f(2) = 5, tapi g(2) = 9.' },
      { id: 'E', text: '(5, 12)', isCorrect: false, feedback: 'f(5) = 14, g(5) = 12.' }
    ],
    caraNormal: {
      diketahui: 'f(x) = 3x - 1, g(x) = x + 7.',
      ditanya: 'Titik potong (x, y).',
      konsep: 'Samakan f(x) = g(x) untuk mencari absis x.',
      langkah: [
        '3x - 1 = x + 7',
        '3x - x = 7 + 1',
        '2x = 8 -> x = 4',
        'y = 4 + 7 = 11'
      ],
      kesimpulan: 'Titik potongnya adalah (4, 11).'
    },
    caraCepat: {
      trik: 'Samakan dan Uji',
      alasan: '3x - x = 7 + 1 -> 2x = 8 -> x = 4.',
      eksekusi: 'y = 4 + 7 = 11. Titik potong (4, 11).'
    },
    buktiVisual: {
      type: 'koordinat',
      tableData: [
        { x: 2, y: 5 },
        { x: 4, y: 11 },
        { x: 6, y: 17 }
      ],
      keterangan: 'Kedua grafik garis berpotongan di satu titik tepat di (4, 11).'
    },
    ttsScript: 'Soal evaluasi empat belas. Samakan tiga x kurang satu dengan x ditambah tujuh. Dua x sama dengan delapan sehingga x sama dengan empat. Nilai y adalah sebelas. Titik potongnya empat koma sebelas.',
    hint: 'Samakan 3x - 1 = x + 7 untuk mencari nilai x.'
  },
  {
    id: 115,
    category: 'domain-representasi',
    difficulty: 'Sedang',
    stimulusType: 'diagram',
    stimulusTitle: 'Jumlah Anggota Range',
    stimulusContent: 'Diketahui fungsi f: x -> |x - 2| dengan domain D = {-1, 0, 1, 2, 3}.',
    question: 'Banyak anggota himpunan daerah hasil (Range) adalah...',
    options: [
      { id: 'A', text: '4 anggota', isCorrect: true, feedback: 'Benar sekali! Nilai mutlak: f(-1)=|-3|=3, f(0)=|-2|=2, f(1)=|-1|=1, f(2)=|0|=0, f(3)=|1|=1. Nilai uniknya: {0, 1, 2, 3}, yaitu ada 4 anggota!' },
      { id: 'B', text: '5 anggota', isCorrect: false, feedback: 'Nilai 1 muncul dua kali (saat x = 1 dan x = 3).' },
      { id: 'C', text: '3 anggota', isCorrect: false, feedback: 'Hitung kembali semua hasil mutlak.' },
      { id: 'D', text: '2 anggota', isCorrect: false, feedback: 'Terlalu sedikit.' },
      { id: 'E', text: '1 anggota', isCorrect: false, feedback: 'Hasilnya bervariasi.' }
    ],
    caraNormal: {
      diketahui: 'f(x) = |x - 2|. D = {-1, 0, 1, 2, 3}.',
      ditanya: 'Banyak anggota Range.',
      konsep: 'Nilai mutlak selalu menghasilkan bilangan non-negatif.',
      langkah: [
        'x = -1 -> |-1 - 2| = |-3| = 3',
        'x = 0  -> |0 - 2| = |-2| = 2',
        'x = 1  -> |1 - 2| = |-1| = 1',
        'x = 2  -> |2 - 2| = 0',
        'x = 3  -> |3 - 2| = 1',
        'Range = {0, 1, 2, 3}. Banyaknya = 4 anggota.'
      ],
      kesimpulan: 'Banyak anggota Range adalah 4.'
    },
    caraCepat: {
      trik: 'Cek Angka Hasil yang Sama',
      alasan: 'x = 1 dan x = 3 keduanya menghasilkan nilai jarak 1.',
      eksekusi: 'Dari 5 masukan, hanya 1 pasang yang bernilai sama, jadi ada 5 - 1 = 4 anggota unik.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['-1', '0', '1', '2', '3'],
      kodomain: ['0', '1', '2', '3'],
      arrows: [
        { from: '-1', to: '3' },
        { from: '0', to: '2' },
        { from: '1', to: '1' },
        { from: '2', to: '0' },
        { from: '3', to: '1' }
      ],
      keterangan: 'Ada 4 elemen kodomain yang terkena panah.'
    },
    ttsScript: 'Soal evaluasi lima belas. Nilai mutlak menghasilkan hasil nol, satu, dua, dan tiga. Jadi daerah hasil memiliki empat anggota.',
    hint: 'Ingat tanda garis tegak mutlak mengubah bilangan negatif menjadi positif.'
  },
  {
    id: 116,
    category: 'relasi-konsep',
    difficulty: 'Sedang',
    stimulusType: 'teks',
    stimulusTitle: 'Relasi Bilangan Kuadrat Kurang Dari',
    stimulusContent: 'Diberikan himpunan A = {2, 3} dan B = {1, 4, 9, 16}. Relasi dari A ke B adalah "kuadratnya kurang dari".',
    question: 'Manakah pasangan berikut yang MEMENUHI relasi tersebut?',
    options: [
      { id: 'A', text: '(2, 9)', isCorrect: true, feedback: 'Tepat sekali! Kuadrat dari 2 adalah 4. Apakah 4 kurang dari 9? Ya, 4 < 9! Jadi (2, 9) memenuhi.' },
      { id: 'B', text: '(3, 4)', isCorrect: false, feedback: 'Kuadrat dari 3 adalah 9, dan 9 TIDAK kurang dari 4.' },
      { id: 'C', text: '(3, 9)', isCorrect: false, feedback: 'Kuadrat dari 3 adalah 9, dan 9 sama dengan 9 (bukan kurang dari).' },
      { id: 'D', text: '(2, 4)', isCorrect: false, feedback: 'Kuadrat dari 2 adalah 4, dan 4 sama dengan 4 (tidak kurang dari).' },
      { id: 'E', text: '(2, 1)', isCorrect: false, feedback: 'Kuadrat dari 2 adalah 4, dan 4 lebih besar dari 1.' }
    ],
    caraNormal: {
      diketahui: 'A = {2, 3}, B = {1, 4, 9, 16}. Syarat: a² < b.',
      ditanya: 'Pasangan yang memenuhi.',
      konsep: 'Hitung a² lalu uji apakah a² < b.',
      langkah: [
        'Uji (2, 9): 2² = 4 < 9 (BENAR)',
        'Uji (3, 4): 3² = 9 < 4 (SALAH)',
        'Uji (3, 9): 3² = 9 < 9 (SALAH)',
        'Uji (2, 4): 2² = 4 < 4 (SALAH)'
      ],
      kesimpulan: 'Pasangan yang memenuhi adalah (2, 9).'
    },
    caraCepat: {
      trik: '2 Kuadrat = 4',
      alasan: '4 lebih kecil dari 9.',
      eksekusi: '(2, 9).'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['2', '3'],
      kodomain: ['1', '4', '9', '16'],
      arrows: [
        { from: '2', to: '9' },
        { from: '2', to: '16' },
        { from: '3', to: '16' }
      ],
      keterangan: '2 terhubung ke 9 dan 16.'
    },
    ttsScript: 'Soal evaluasi enam belas. Kuadrat dari dua adalah empat. Karena empat kurang dari sembilan, maka pasangan dua koma sembilan memenuhi relasi.',
    hint: 'Hitung kuadrat angka pertama, lalu cek apakah lebih kecil dari angka kedua.'
  },
  {
    id: 117,
    category: 'fungsi-konsep',
    difficulty: 'HOTS',
    stimulusType: 'teks',
    stimulusTitle: 'Notasi Fungsi Bersusun',
    stimulusContent: 'Diketahui f(x) = 2x - 3. Berapakah nilai dari f(f(4))?',
    question: 'Nilai dari f(f(4)) adalah...',
    options: [
      { id: 'A', text: '7', isCorrect: true, feedback: 'Hebat sekali! Pertama cari f(4) = 2(4) - 3 = 8 - 3 = 5. Kemudian masukkan hasil 5 ke fungsi lagi: f(5) = 2(5) - 3 = 10 - 3 = 7!' },
      { id: 'B', text: '5', isCorrect: false, feedback: 'Itu baru nilai f(4), belum dimasukkan kembali ke f.' },
      { id: 'C', text: '9', isCorrect: false, feedback: 'Periksa kembali perhitungan substitusi kedua.' },
      { id: 'D', text: '11', isCorrect: false, feedback: 'Terlalu besar.' },
      { id: 'E', text: '3', isCorrect: false, feedback: 'Kurang tepat.' }
    ],
    caraNormal: {
      diketahui: 'f(x) = 2x - 3.',
      ditanya: 'Nilai f(f(4)).',
      konsep: 'Komposisi fungsi bertahap: selesaikan bagian dalam terlebih dahulu.',
      langkah: [
        'Langkah 1: Hitung f(4) = 2(4) - 3 = 8 - 3 = 5.',
        'Langkah 2: Hitung f(f(4)) = f(5) = 2(5) - 3 = 10 - 3 = 7.'
      ],
      kesimpulan: 'Nilai f(f(4)) adalah 7.'
    },
    caraCepat: {
      trik: 'Dua Kali Masuk Mesin',
      alasan: 'Input 4 keluar 5. Input 5 keluar 7.',
      eksekusi: '7.'
    },
    buktiVisual: {
      type: 'mesin',
      machineFormula: 'f(x) = 2x - 3 (Dua Tahap)',
      machineInputs: [
        { x: 4, fx: 5 },
        { x: 5, fx: 7 }
      ],
      keterangan: 'Mesin tahap 1 menghasilkan 5, yang lalu masuk ke mesin tahap 2 menghasilkan 7.'
    },
    ttsScript: 'Soal evaluasi tujuh belas. f dari empat adalah lima. Masukkan lima kembali ke rumus fungsi: dua kali lima dikurang tiga sama dengan tujuh.',
    hint: 'Hitung dulu f(4), lalu masukkan jawabannya kembali ke rumus f(x).'
  },
  {
    id: 118,
    category: 'kontekstual-hots',
    difficulty: 'HOTS',
    stimulusType: 'teks',
    stimulusTitle: 'Penerapan Fungsi Kuota Internet',
    stimulusContent: 'Sisa kuota internet Kiko dirumuskan dengan K(h) = 30 - 1,5h (dalam GB), di mana h menyatakan jumlah hari pemakaian sejak paket diaktifkan.',
    question: 'Setelah berapa hari kuota internet Kiko akan habis tak bersisa (K(h) = 0)?',
    options: [
      { id: 'A', text: '20 hari', isCorrect: true, feedback: 'Tepat sekali! 30 - 1,5h = 0 -> 1,5h = 30 -> h = 30 / 1,5 = 20 hari!' },
      { id: 'B', text: '15 hari', isCorrect: false, feedback: 'Setelah 15 hari sisa kuota masih 30 - 22,5 = 7,5 GB.' },
      { id: 'C', text: '25 hari', isCorrect: false, feedback: 'Sebelum hari ke-25 sudah habis.' },
      { id: 'D', text: '18 hari', isCorrect: false, feedback: 'Periksa kembali pembagian 30 dengan 1,5.' },
      { id: 'E', text: '30 hari', isCorrect: false, feedback: 'Itu jika pemakaian hanya 1 GB per hari.' }
    ],
    caraNormal: {
      diketahui: 'K(h) = 30 - 1,5h. Target K(h) = 0.',
      ditanya: 'Hari ke h.',
      konsep: 'Mencari pembuat nol fungsi.',
      langkah: [
        '30 - 1,5h = 0',
        '1,5h = 30',
        'h = 30 / 1,5 = 300 / 15 = 20 hari'
      ],
      kesimpulan: 'Kuota habis dalam 20 hari.'
    },
    caraCepat: {
      trik: 'Bagi Langsung Kuota Awal',
      alasan: '30 : 1,5 = 20.',
      eksekusi: '20 hari.'
    },
    buktiVisual: {
      type: 'tabel',
      tableData: [
        { x: 0, y: 30 },
        { x: 10, y: 15 },
        { x: 20, y: 0 }
      ],
      keterangan: 'Pada hari ke-20 grafik menyentuh angka 0.'
    },
    ttsScript: 'Soal evaluasi delapan belas. Tiga puluh dibagi satu koma lima sama dengan dua puluh hari.',
    hint: 'Bagi 30 dengan 1,5.'
  },
  {
    id: 119,
    category: 'domain-representasi',
    difficulty: 'Sedang',
    stimulusType: 'diagram',
    stimulusTitle: 'Menentukan Anggota yang Memiliki Pasangan Sama',
    stimulusContent: 'Pada fungsi f: A -> B dengan f(x) = x² - 4, domain A = {-3, -2, -1, 0, 1, 2, 3}.',
    question: 'Anggota domain yang memiliki bayangan bernilai 0 adalah...',
    options: [
      { id: 'A', text: '-2 dan 2', isCorrect: true, feedback: 'Benar sekali! (-2)² - 4 = 4 - 4 = 0 dan 2² - 4 = 4 - 4 = 0. Jadi anggota domainnya adalah -2 dan 2.' },
      { id: 'B', text: 'Hanya 2', isCorrect: false, feedback: '(-2) juga menghasilkan bayangan 0.' },
      { id: 'C', text: '-4 dan 4', isCorrect: false, feedback: '4 bukan anggota domain A.' },
      { id: 'D', text: '0 saja', isCorrect: false, feedback: 'f(0) = 0² - 4 = -4, bukan 0.' },
      { id: 'E', text: '-1 dan 1', isCorrect: false, feedback: 'f(±1) = 1 - 4 = -3.' }
    ],
    caraNormal: {
      diketahui: 'f(x) = x² - 4 = 0.',
      ditanya: 'Nilai x ∈ A yang memenuhi.',
      konsep: 'Akar-akar persamaan kuadrat x² = 4.',
      langkah: [
        'x² - 4 = 0',
        'x² = 4',
        'x = √4 = 2 atau x = -√4 = -2'
      ],
      kesimpulan: 'Anggota domain tersebut adalah -2 dan 2.'
    },
    caraCepat: {
      trik: 'Akar dari 4',
      alasan: 'x² = 4 -> x = ±2.',
      eksekusi: '-2 dan 2.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['-2', '2'],
      kodomain: ['0'],
      arrows: [
        { from: '-2', to: '0' },
        { from: '2', to: '0' }
      ],
      keterangan: 'Kedua panah dari -2 dan 2 bertemu di angka 0.'
    },
    ttsScript: 'Soal evaluasi sembilan belas. x kuadrat kurang empat sama dengan nol menghasilkan x kuadrat sama dengan empat. Anggotanya adalah minus dua dan positif dua.',
    hint: 'Berapa kuadrat yang jika dikurang 4 hasilnya 0?'
  },
  {
    id: 120,
    category: 'kontekstual-hots',
    difficulty: 'HOTS',
    stimulusType: 'teks',
    stimulusTitle: 'Simulasi Pembuatan Kotak Karton',
    stimulusContent: 'Sebuah lembaran karton persegi berukuran 20 cm x 20 cm akan dipotong pada keempat sudutnya dengan ukuran x cm lalu dilipat menjadi kotak tanpa tutup. Luas alas kotak tersebut dapat dinyatakan sebagai fungsi L(x) = (20 - 2x)². Jika x = 3 cm, berapakah luas alas kotak?',
    question: 'Luas alas kotak tersebut adalah...',
    options: [
      { id: 'A', text: '196 cm²', isCorrect: true, feedback: 'Luar biasa! L(3) = (20 - 2(3))² = (20 - 6)² = (14)² = 196 cm²!' },
      { id: 'B', text: '256 cm²', isCorrect: false, feedback: 'Itu adalah (16)², jika salah mengalikan 2(3).' },
      { id: 'C', text: '144 cm²', isCorrect: false, feedback: 'Itu (12)².' },
      { id: 'D', text: '324 cm²', isCorrect: false, feedback: 'Itu (18)².' },
      { id: 'E', text: '100 cm²', isCorrect: false, feedback: 'Terlalu kecil.' }
    ],
    caraNormal: {
      diketahui: 'L(x) = (20 - 2x)². x = 3 cm.',
      ditanya: 'Luas alas L(3).',
      konsep: 'Substitusi geometri aljabar.',
      langkah: [
        'Panjang sisi alas = 20 - 2(3) = 20 - 6 = 14 cm.',
        'Luas alas = 14² = 196 cm².'
      ],
      kesimpulan: 'Luas alas kotak adalah 196 cm².'
    },
    caraCepat: {
      trik: '14 Kuadrat',
      alasan: '20 - 6 = 14. 14 x 14 = 196.',
      eksekusi: '196 cm².'
    },
    buktiVisual: {
      type: 'mesin',
      machineFormula: 'L(x) = (20 - 2x)²',
      machineInputs: [{ x: 3, fx: 196 }],
      keterangan: 'Sisi 14 cm dikuadratkan menghasilkan luas 196 cm².'
    },
    ttsScript: 'Soal evaluasi dua puluh. Dua puluh dikurangi dua kali tiga adalah empat belas. Empat belas dikuadratkan menghasilkan luas alas seratus sembilan puluh enam sentimeter persegi.',
    hint: 'Kurangkan 20 dengan (2 x 3 = 6), lalu kuadratkan hasilnya.'
  }
];
