/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../../types';

export const UNIT_2_QUESTIONS: Question[] = [
  {
    id: 16,
    category: 'domain-representasi',
    difficulty: 'Mudah',
    stimulusType: 'diagram',
    stimulusTitle: 'Menentukan Domain dan Kodomain',
    stimulusContent: 'Diberikan diagram panah dari himpunan A = {p, q, r} ke himpunan B = {1, 2, 3, 4}. Terdapat panah dari p ke 2, q ke 3, dan r ke 2.',
    question: 'Berdasarkan diagram tersebut, himpunan yang merupakan Domain adalah...',
    options: [
      { id: 'A', text: '{p, q, r}', isCorrect: true, feedback: 'Tepat sekali! Domain adalah daerah asal, yaitu seluruh anggota himpunan A: {p, q, r}.' },
      { id: 'B', text: '{1, 2, 3, 4}', isCorrect: false, feedback: 'Ini adalah Kodomain (daerah kawan).' },
      { id: 'C', text: '{2, 3}', isCorrect: false, feedback: 'Ini adalah Range (daerah hasil).' },
      { id: 'D', text: '{p, q}', isCorrect: false, feedback: 'r juga anggota himpunan A, jadi harus diikutsertakan.' },
      { id: 'E', text: '{1, 4}', isCorrect: false, feedback: 'Ini anggota kodomain yang tidak terpilih.' }
    ],
    caraNormal: {
      diketahui: 'Himpunan A = {p, q, r}, himpunan B = {1, 2, 3, 4}. Relasi dari A ke B.',
      ditanya: 'Himpunan manakah yang merupakan Domain?',
      konsep: 'Domain adalah seluruh anggota himpunan asal (himpunan di sebelah kiri panah).',
      langkah: [
        'Identifikasi himpunan asal: Himpunan A.',
        'Sebutkan semua anggota himpunan A: p, q, dan r.',
        'Maka Domain = {p, q, r}.'
      ],
      kesimpulan: 'Domain adalah {p, q, r}.'
    },
    caraCepat: {
      trik: 'Kiri = Asal = Domain',
      alasan: 'Domain selalu berada di himpunan awal/kiri.',
      eksekusi: 'Himpunan di sebelah kiri adalah A = {p, q, r}. Langsung pilih opsi A!'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['p', 'q', 'r'],
      kodomain: ['1', '2', '3', '4'],
      arrows: [
        { from: 'p', to: '2' },
        { from: 'q', to: '3' },
        { from: 'r', to: '2' }
      ],
      keterangan: 'Domain adalah seluruh kotak himpunan asal di sebelah kiri.'
    },
    ttsScript: 'Soal nomor enam belas. Berdasarkan diagram panah dari himpunan A ke B, himpunan yang merupakan domain adalah p, q, r, yaitu seluruh anggota himpunan asal A.',
    hint: 'Domain adalah daerah asal tempat panah bermula.'
  },
  {
    id: 17,
    category: 'domain-representasi',
    difficulty: 'Mudah',
    stimulusType: 'diagram',
    stimulusTitle: 'Menentukan Range (Daerah Hasil)',
    stimulusContent: 'Pada relasi dari A = {2, 3, 4} ke B = {5, 6, 7, 8, 9}, pasangan yang terbentuk adalah {(2, 6), (3, 7), (4, 6)}.',
    question: 'Daerah hasil (Range) dari relasi tersebut adalah...',
    options: [
      { id: 'A', text: '{6, 7}', isCorrect: true, feedback: 'Benar sekali! Range adalah anggota kodomain yang terkena panah/dipilih, yaitu {6, 7}.' },
      { id: 'B', text: '{5, 6, 7, 8, 9}', isCorrect: false, feedback: 'Ini adalah Kodomain, bukan Range.' },
      { id: 'C', text: '{2, 3, 4}', isCorrect: false, feedback: 'Ini adalah Domain.' },
      { id: 'D', text: '{5, 8, 9}', isCorrect: false, feedback: 'Ini adalah anggota kodomain yang TIDAK terpilih.' },
      { id: 'E', text: '{6, 6, 7}', isCorrect: false, feedback: 'Dalam penulisan himpunan, anggota yang sama tidak boleh ditulis berulang.' }
    ],
    caraNormal: {
      diketahui: 'Pasangan: (2, 6), (3, 7), (4, 6). Kodomain B = {5, 6, 7, 8, 9}.',
      ditanya: 'Daerah hasil (Range).',
      konsep: 'Range adalah himpunan semua nilai kedua (koordinat kedua / y) dari pasangan berurutan.',
      langkah: [
        'Kumpulkan semua nilai kedua dari pasangan: 6, 7, 6.',
        'Tuliskan sebagai himpunan tanpa pengulangan elemen: {6, 7}.'
      ],
      kesimpulan: 'Range = {6, 7}.'
    },
    caraCepat: {
      trik: 'Ambil Angka Kanan yang Unik',
      alasan: 'Range = elemen tujuan yang memiliki pasangan.',
      eksekusi: 'Angka kanan: 6, 7, 6 -> Anggota uniknya adalah {6, 7}.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['2', '3', '4'],
      kodomain: ['5', '6', '7', '8', '9'],
      arrows: [
        { from: '2', to: '6' },
        { from: '3', to: '7' },
        { from: '4', to: '6' }
      ],
      keterangan: 'Hanya angka 6 dan 7 di kodomain yang menerima panah.'
    },
    ttsScript: 'Soal nomor tujuh belas. Pasangan berurutan {(2, 6), (3, 7), (4, 6)}. Daerah hasil atau Range adalah himpunan angka tujuan yaitu 6 dan 7.',
    hint: 'Kumpulkan semua angka di posisi kanan tanda kurung tanpa mendobelkan.'
  },
  {
    id: 18,
    category: 'domain-representasi',
    difficulty: 'Sedang',
    stimulusType: 'diagram',
    stimulusTitle: 'Kodomain vs Range',
    stimulusContent: 'Perhatikan relasi R = {(1, a), (2, c), (3, a)} dari himpunan P = {1, 2, 3} ke himpunan Q = {a, b, c, d}.',
    question: 'Pernyataan berikut yang BENAR adalah...',
    options: [
      { id: 'A', text: 'Kodomain adalah {a, b, c, d} dan Range adalah {a, c}.', isCorrect: true, feedback: 'Tepat sekali! Kodomain adalah seluruh himpunan kawan Q, sedangkan Range adalah yang terpilih saja yaitu {a, c}.' },
      { id: 'B', text: 'Kodomain adalah {a, c} dan Range adalah {a, b, c, d}.', isCorrect: false, feedback: 'Terbalik antara pengertian Kodomain dan Range.' },
      { id: 'C', text: 'Range sama dengan Kodomain.', isCorrect: false, feedback: 'Tidak sama, karena b dan d ada di Kodomain tapi tidak ada di Range.' },
      { id: 'D', text: 'Domain adalah {a, c} dan Range adalah {1, 2, 3}.', isCorrect: false, feedback: 'Domain adalah daerah asal di kiri, yaitu {1, 2, 3}.' },
      { id: 'E', text: 'Range hanya terdiri dari {a} saja.', isCorrect: false, feedback: 'c juga termasuk dalam Range karena dipasangkan dengan 2.' }
    ],
    caraNormal: {
      diketahui: 'P = {1, 2, 3}, Q = {a, b, c, d}. R = {(1, a), (2, c), (3, a)}.',
      ditanya: 'Pernyataan yang benar mengenai Kodomain dan Range.',
      konsep: 'Kodomain = seluruh himpunan tujuan (Q). Range = anggota Q yang menjadi kawan dari anggota P.',
      langkah: [
        'Kodomain = Q = {a, b, c, d}.',
        'Range = kawan yang terpilih = {a, c}.'
      ],
      kesimpulan: 'Kodomain = {a, b, c, d} dan Range = {a, c}.'
    },
    caraCepat: {
      trik: 'Bedakan Calon vs Pemenang',
      alasan: 'Kodomain = semua calon di Q, Range = yang menang dipanah.',
      eksekusi: 'Semua calon di Q = {a, b, c, d}, pemenang = {a, c}.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['1', '2', '3'],
      kodomain: ['a', 'b', 'c', 'd'],
      arrows: [
        { from: '1', to: 'a' },
        { from: '2', to: 'c' },
        { from: '3', to: 'a' }
      ],
      keterangan: 'a dan c mendapat panah, sedangkan b dan d tetap berada di Kodomain tapi tidak di Range.'
    },
    ttsScript: 'Soal nomor delapan belas. Kodomain adalah seluruh himpunan tujuan yaitu a, b, c, d. Dan range adalah himpunan yang terpilih saja yaitu a dan c.',
    hint: 'Kodomain adalah semua anggota di sebelah kanan, range hanya yang dapat panah.'
  },
  {
    id: 19,
    category: 'domain-representasi',
    difficulty: 'Sedang',
    stimulusType: 'grafik',
    stimulusTitle: 'Membaca Diagram Kartesius',
    stimulusContent: 'Pada diagram Kartesius, titik-titik yang ditandai adalah (1, 2), (2, 4), (3, 6), dan (4, 8). Sumbu X mewakili anggota himpunan A dan sumbu Y mewakili anggota himpunan B.',
    question: 'Relasi yang menghubungkan himpunan A ke himpunan B adalah...',
    options: [
      { id: 'A', text: 'Setengah dari', isCorrect: true, feedback: 'Luar biasa! 1 adalah setengah dari 2, 2 setengah dari 4, 3 setengah dari 6, dan 4 setengah dari 8.' },
      { id: 'B', text: 'Dua kali dari', isCorrect: false, feedback: 'Terbalik! Jika dua kali dari, persamaannya adalah x = 2y, sedangkan ini y = 2x.' },
      { id: 'C', text: 'Dua kurangnya dari', isCorrect: false, feedback: 'Untuk x=3, 3 bukan 2 kurangnya dari 6 (6 - 2 = 4).' },
      { id: 'D', text: 'Faktor dari', isCorrect: false, feedback: 'Terlalu umum, karena 1 juga faktor dari 4, 6, 8 tetapi titik tersebut tidak digambar.' },
      { id: 'E', text: 'Kuadrat dari', isCorrect: false, feedback: '1 bukan kuadrat dari 2.' }
    ],
    caraNormal: {
      diketahui: 'Titik koordinat (x, y): (1, 2), (2, 4), (3, 6), (4, 8).',
      ditanya: 'Nama relasi dari A (sumbu X) ke B (sumbu Y).',
      konsep: 'Temukan hubungan x ke y sedemikian rupa sehingga kalimat "x adalah [relasi] y" bernilai benar.',
      langkah: [
        '1 = 1/2 × 2 -> 1 setengah dari 2',
        '2 = 1/2 × 4 -> 2 setengah dari 4',
        '3 = 1/2 × 6 -> 3 setengah dari 6',
        '4 = 1/2 × 8 -> 4 setengah dari 8'
      ],
      kesimpulan: 'Relasinya adalah "setengah dari".'
    },
    caraCepat: {
      trik: 'Hitung Rasio x / y',
      alasan: '1/2 = 2/4 = 3/6 = 4/8 = 1/2.',
      eksekusi: 'Karena x selalu bernilai 1/2 dari y, maka relasinya adalah "setengah dari".'
    },
    buktiVisual: {
      type: 'koordinat',
      tableData: [
        { x: 1, y: 2 },
        { x: 2, y: 4 },
        { x: 3, y: 6 },
        { x: 4, y: 8 }
      ],
      keterangan: 'Titik-titik membentuk garis lurus y = 2x, yang artinya x adalah setengah dari y.'
    },
    ttsScript: 'Soal nomor sembilan belas. Titik-titik koordinat satu koma dua, dua koma empat, tiga koma enam, dan empat koma delapan menunjukkan relasi setengah dari.',
    hint: 'Bandingkan nilai sumbu X dengan nilai sumbu Y: nilai X adalah separuh dari nilai Y.'
  },
  {
    id: 20,
    category: 'domain-representasi',
    difficulty: 'Mudah',
    stimulusType: 'teks',
    stimulusTitle: 'Bentuk Pasangan Berurutan',
    stimulusContent: 'Diberikan himpunan K = {3, 5} dan L = {6, 8, 10}. Relasi dari K ke L adalah "faktor dari".',
    question: 'Penulisan yang benar dalam bentuk himpunan pasangan berurutan adalah...',
    options: [
      { id: 'A', text: '{(3, 6), (5, 10)}', isCorrect: true, feedback: 'Benar sekali! 3 membagi habis 6, dan 5 membagi habis 10. Angka 8 tidak habis dibagi 3 maupun 5.' },
      { id: 'B', text: '{(3, 6), (3, 8), (5, 10)}', isCorrect: false, feedback: '3 bukan faktor dari 8.' },
      { id: 'C', text: '{(6, 3), (10, 5)}', isCorrect: false, feedback: 'Urutan terbalik! Domain K harus di posisi pertama.' },
      { id: 'D', text: '{(3, 6), (5, 8), (5, 10)}', isCorrect: false, feedback: '5 bukan faktor dari 8.' },
      { id: 'E', text: '{(3, 10), (5, 6)}', isCorrect: false, feedback: '3 bukan faktor dari 10, dan 5 bukan faktor dari 6.' }
    ],
    caraNormal: {
      diketahui: 'K = {3, 5}, L = {6, 8, 10}. Aturan: k faktor dari l.',
      ditanya: 'Himpunan pasangan berurutan.',
      konsep: 'Cari semua pasangan (k, l) di mana l habis dibagi k.',
      langkah: [
        'Untuk 3: 6 habis dibagi 3 -> (3, 6). 8 dan 10 tidak habis dibagi 3.',
        'Untuk 5: 10 habis dibagi 5 -> (5, 10). 6 dan 8 tidak habis dibagi 5.',
        'Gabungkan: {(3, 6), (5, 10)}.'
      ],
      kesimpulan: 'Pasangan berurutan adalah {(3, 6), (5, 10)}.'
    },
    caraCepat: {
      trik: 'Uji Habis Dibagi',
      alasan: '6 : 3 = 2, 10 : 5 = 2.',
      eksekusi: 'Hanya (3, 6) dan (5, 10) yang habis dibagi.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['3', '5'],
      kodomain: ['6', '8', '10'],
      arrows: [
        { from: '3', to: '6' },
        { from: '5', to: '10' }
      ],
      keterangan: 'Garis panah hanya menghubungkan 3 ke 6 dan 5 ke 10.'
    },
    ttsScript: 'Soal nomor dua puluh. Himpunan pasangan berurutan untuk relasi faktor dari K ke L adalah tiga koma enam dan lima koma sepuluh.',
    hint: '3 habis membagi 6, 5 habis membagi 10.'
  },
  {
    id: 21,
    category: 'domain-representasi',
    difficulty: 'Sedang',
    stimulusType: 'tabel',
    stimulusTitle: 'Representasi Tabel',
    stimulusContent: 'Perhatikan tabel hubungan x dan y berikut:\n| x | 1 | 2 | 3 | 4 |\n| y | 4 | 7 | 10 | 13 |',
    question: 'Jika relasi tersebut dinyatakan dengan aturan rumus y dalam x, maka rumusnya adalah...',
    options: [
      { id: 'A', text: 'y = 3x + 1', isCorrect: true, feedback: 'Tepat sekali! Selisih y tiap kenaikan x bernilai 3 (koefisien x = 3). Untuk x=1: 3(1)+1 = 4. Cocok sempurna!' },
      { id: 'B', text: 'y = 2x + 2', isCorrect: false, feedback: 'Untuk x=3: 2(3)+2 = 8, padahal di tabel nilainya 10.' },
      { id: 'C', text: 'y = 4x', isCorrect: false, feedback: 'Untuk x=2: 4(2) = 8, padahal di tabel nilainya 7.' },
      { id: 'D', text: 'y = 3x - 1', isCorrect: false, feedback: 'Untuk x=1: 3(1)-1 = 2, padahal di tabel nilainya 4.' },
      { id: 'E', text: 'y = x + 3', isCorrect: false, feedback: 'Untuk x=2: 2 + 3 = 5, padahal di tabel nilainya 7.' }
    ],
    caraNormal: {
      diketahui: 'Tabel: (1, 4), (2, 7), (3, 10), (4, 13).',
      ditanya: 'Rumus linier y = ax + b.',
      konsep: 'Nilai a adalah beda antar suku berturutan (tingkat perubahan y).',
      langkah: [
        'Beda y: 7 - 4 = 3, 10 - 7 = 3, 13 - 10 = 3 -> Jadi a = 3.',
        'Cari b: Masukkan x = 1 dan y = 4 ke y = 3x + b -> 4 = 3(1) + b -> b = 4 - 3 = 1.',
        'Rumus fungsi: y = 3x + 1.'
      ],
      kesimpulan: 'Rumus yang tepat adalah y = 3x + 1.'
    },
    caraCepat: {
      trik: 'Trik Beda Tingkat Satu',
      alasan: 'Setiap x naik 1, y bertambah 3. Berarti pasti 3x.',
      eksekusi: 'Untuk x = 1, 3(1) butuh ditambah 1 agar menjadi 4. Jadi langsung y = 3x + 1!'
    },
    buktiVisual: {
      type: 'tabel',
      tableData: [
        { x: 1, y: 4 },
        { x: 2, y: 7 },
        { x: 3, y: 10 },
        { x: 4, y: 13 }
      ],
      keterangan: 'Pola pertambahan konstan sebesar +3 membuktikan rumus y = 3x + 1.'
    },
    ttsScript: 'Soal nomor dua puluh satu. Dari tabel pasangan nilai x dan y, setiap kenaikan satu pada x menghasilkan pertambahan tiga pada y. Rumusnya adalah y sama dengan tiga x ditambah satu.',
    hint: 'Lihat selisih nilai y: selalu bertambah 3!'
  },
  {
    id: 22,
    category: 'domain-representasi',
    difficulty: 'Sedang',
    stimulusType: 'diagram',
    stimulusTitle: 'Menghitung Banyak Elemen Range',
    stimulusContent: 'Himpunan A = {-2, -1, 0, 1, 2}. Relasi dari A ke bilangan bulat didefinisikan dengan aturan y = x² - 1.',
    question: 'Banyaknya anggota daerah hasil (Range) dari relasi tersebut adalah...',
    options: [
      { id: 'A', text: '3 anggota', isCorrect: true, feedback: 'Hebat sekali! Nilai y yang dihasilkan adalah: (-2)² - 1 = 3, (-1)² - 1 = 0, 0² - 1 = -1, 1² - 1 = 0, 2² - 1 = 3. Anggota uniknya adalah {-1, 0, 3}, yaitu ada 3 anggota!' },
      { id: 'B', text: '5 anggota', isCorrect: false, feedback: 'Perhatikan bahwa nilai 0 dan 3 muncul dua kali, dalam himpunan hanya dihitung satu kali.' },
      { id: 'C', text: '4 anggota', isCorrect: false, feedback: 'Hitung kembali hasil kuadrat untuk setiap nilai x.' },
      { id: 'D', text: '2 anggota', isCorrect: false, feedback: 'Terlalu sedikit, nilai -1, 0, dan 3 semuanya dihasilkan.' },
      { id: 'E', text: '1 anggota', isCorrect: false, feedback: 'Ada lebih dari satu nilai hasil.' }
    ],
    caraNormal: {
      diketahui: 'Domain A = {-2, -1, 0, 1, 2}. Aturan y = x² - 1.',
      ditanya: 'Banyak anggota Range (n(Range)).',
      konsep: 'Range adalah himpunan semua nilai y unik yang dihasilkan.',
      langkah: [
        'x = -2 -> y = (-2)² - 1 = 4 - 1 = 3',
        'x = -1 -> y = (-1)² - 1 = 1 - 1 = 0',
        'x = 0  -> y = 0² - 1 = -1',
        'x = 1  -> y = 1² - 1 = 1 - 1 = 0',
        'x = 2  -> y = 2² - 1 = 4 - 1 = 3',
        'Himpunan Range = {-1, 0, 3}. Banyak anggotanya = 3.'
      ],
      kesimpulan: 'Banyak anggota Range adalah 3.'
    },
    caraCepat: {
      trik: 'Simetri Kuadrat',
      alasan: 'x² menghasilkan nilai yang sama untuk x dan -x.',
      eksekusi: 'Nilai x=0 menghasilkan 1 nilai unik, pasangan x=±1 menghasilkan 1 nilai unik, pasangan x=±2 menghasilkan 1 nilai unik. Total = 1 + 1 + 1 = 3.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['-2', '-1', '0', '1', '2'],
      kodomain: ['-1', '0', '3'],
      arrows: [
        { from: '-2', to: '3' },
        { from: '-1', to: '0' },
        { from: '0', to: '-1' },
        { from: '1', to: '0' },
        { from: '2', to: '3' }
      ],
      keterangan: 'Terlihat beberapa panah menuju ke angka yang sama, sehingga hanya ada 3 anggota di Range.'
    },
    ttsScript: 'Soal nomor dua puluh dua. Rumus y sama dengan x kuadrat kurang satu untuk domain minus dua sampai positif dua menghasilkan range minus satu, nol, dan tiga. Jadi ada tiga anggota.',
    hint: 'Ingat bilangan positif dan negatif jika dikuadratkan menghasilkan angka yang sama.'
  },
  {
    id: 23,
    category: 'domain-representasi',
    difficulty: 'Mudah',
    stimulusType: 'teks',
    stimulusTitle: 'Domain Bilangan Asli Kurang Dari',
    stimulusContent: 'Diberikan relasi f(x) = 2x + 5 dengan daerah asal Domain = {x | 1 ≤ x < 5, x ∈ Bilangan Asli}.',
    question: 'Anggota daerah asal (Domain) tersebut adalah...',
    options: [
      { id: 'A', text: '{1, 2, 3, 4}', isCorrect: true, feedback: 'Tepat sekali! Tanda ≤ berarti 1 ikut, sedangkan < 5 berarti 5 tidak ikut. Jadi anggotanya 1, 2, 3, 4.' },
      { id: 'B', text: '{1, 2, 3, 4, 5}', isCorrect: false, feedback: 'Angka 5 tidak termasuk karena tandanya kurang dari (<), bukan kurang dari sama dengan (≤).' },
      { id: 'C', text: '{2, 3, 4}', isCorrect: false, feedback: 'Angka 1 harus ikut karena tanda 1 ≤ x.' },
      { id: 'D', text: '{0, 1, 2, 3, 4}', isCorrect: false, feedback: '0 bukan bilangan asli.' },
      { id: 'E', text: '{2, 3, 4, 5}', isCorrect: false, feedback: 'Salah batas bawah dan batas atas.' }
    ],
    caraNormal: {
      diketahui: 'Notasi pembentuk himpunan: {x | 1 ≤ x < 5, x ∈ Bilangan Asli}.',
      ditanya: 'Mendaftarkan anggota Domain.',
      konsep: 'Bilangan asli dimulai dari 1, 2, 3, ... Batas: minimal 1 dan lebih kecil dari 5.',
      langkah: [
        'Bilangan asli pertama: 1 (memenuhi 1 ≤ x)',
        'Bilangan berikutnya: 2, 3, 4 (memenuhi < 5)',
        'Bilangan 5 tidak ikut karena tandanya < 5.'
      ],
      kesimpulan: 'Domain = {1, 2, 3, 4}.'
    },
    caraCepat: {
      trik: 'Cek Tanda Ketidaksamaan',
      alasan: 'Ada garis bawah pada ≤ (ikut), tidak ada garis bawah pada < (tidak ikut).',
      eksekusi: 'Mulai dari 1 sampai 4 saja: {1, 2, 3, 4}.'
    },
    buktiVisual: {
      type: 'tabel',
      tableData: [
        { x: 1, y: 7 },
        { x: 2, y: 9 },
        { x: 3, y: 11 },
        { x: 4, y: 13 }
      ],
      keterangan: 'Nilai x yang valid hanya 1, 2, 3, dan 4.'
    },
    ttsScript: 'Soal nomor dua puluh tiga. Notasi x lebih dari sama dengan satu dan kurang dari lima untuk bilangan asli menghasilkan anggota domain satu, dua, tiga, empat.',
    hint: 'Perhatikan tanda sama dengan pada angka 1 dan tidak ada tanda sama dengan pada angka 5.'
  },
  {
    id: 24,
    category: 'domain-representasi',
    difficulty: 'Sulit',
    stimulusType: 'grafik',
    stimulusTitle: 'Menganalisis Titik pada Koordinat',
    stimulusContent: 'Sebuah relasi disajikan dalam diagram Kartesius dengan titik-titik: A(1, 3), B(2, 5), C(3, 7), D(4, p). Diketahui semua titik berada pada garis lurus fungsi linier yang sama.',
    question: 'Nilai p pada koordinat titik D adalah...',
    options: [
      { id: 'A', text: '9', isCorrect: true, feedback: 'Luar biasa! Pola y: 3, 5, 7 selalu bertambah 2. Maka p = 7 + 2 = 9.' },
      { id: 'B', text: '8', isCorrect: false, feedback: 'Kurang tepat, selisih antar nilai y adalah 2.' },
      { id: 'C', text: '10', isCorrect: false, feedback: 'Terlalu besar.' },
      { id: 'D', text: '11', isCorrect: false, feedback: 'Itu adalah nilai y jika x = 5.' },
      { id: 'E', text: '12', isCorrect: false, feedback: 'Periksa kembali pola barisan aritmetika nilai y.' }
    ],
    caraNormal: {
      diketahui: 'Titik (1, 3), (2, 5), (3, 7), (4, p) segaris.',
      ditanya: 'Nilai p.',
      konsep: 'Gradien/beda antar titik sama: m = (y2 - y1) / (x2 - x1).',
      langkah: [
        'Gradien: (5 - 3) / (2 - 1) = 2/1 = 2.',
        'Persamaan garis: y = 2x + b -> 3 = 2(1) + b -> b = 1 -> y = 2x + 1.',
        'Untuk x = 4: p = 2(4) + 1 = 8 + 1 = 9.'
      ],
      kesimpulan: 'Nilai p = 9.'
    },
    caraCepat: {
      trik: 'Lanjutkan Pola Penambahan',
      alasan: 'Nilai y membentuk pola: 3 (+2) -> 5 (+2) -> 7 (+2) -> 9.',
      eksekusi: '7 + 2 = 9. Langsung pilih A!'
    },
    buktiVisual: {
      type: 'koordinat',
      tableData: [
        { x: 1, y: 3 },
        { x: 2, y: 5 },
        { x: 3, y: 7 },
        { x: 4, y: 9 }
      ],
      keterangan: 'Keempat titik terletak tepat pada garis lurus y = 2x + 1.'
    },
    ttsScript: 'Soal nomor dua puluh empat. Titik-titik satu koma tiga, dua koma lima, tiga koma tujuh, dan empat koma p terletak segaris. Nilai p adalah sembilan.',
    hint: 'Perhatikan penambahan nilai y: dari 3 ke 5 bertambah 2, dari 5 ke 7 bertambah 2.'
  },
  {
    id: 25,
    category: 'domain-representasi',
    difficulty: 'Sedang',
    stimulusType: 'diagram',
    stimulusTitle: 'Menemukan Pasangan dari Diagram Panah',
    stimulusContent: 'Diagram panah menunjukkan relasi "tiga lebihnya dari" himpunan P ke himpunan Q. Jika P = {5, 7, 9} dan Q = {1, 2, 4, 6}.',
    question: 'Anggota himpunan Q yang menjadi pasangan dari 7 adalah...',
    options: [
      { id: 'A', text: '4', isCorrect: true, feedback: 'Tepat sekali! 7 adalah tiga lebihnya dari 4, karena 7 = 4 + 3.' },
      { id: 'B', text: '2', isCorrect: false, feedback: '7 bukan 3 lebihnya dari 2 (2 + 3 = 5).' },
      { id: 'C', text: '6', isCorrect: false, feedback: '7 bukan 3 lebihnya dari 6 (6 + 3 = 9).' },
      { id: 'D', text: '1', isCorrect: false, feedback: '7 bukan 3 lebihnya dari 1 (1 + 3 = 4).' },
      { id: 'E', text: 'Tidak ada pasangan', isCorrect: false, feedback: 'Ada, yaitu 4 yang ada di himpunan Q.' }
    ],
    caraNormal: {
      diketahui: 'P = {5, 7, 9}, Q = {1, 2, 4, 6}. Aturan: p adalah 3 lebihnya dari q (p = q + 3).',
      ditanya: 'Pasangan q untuk p = 7.',
      konsep: 'Selesaikan persamaan p = q + 3 -> q = p - 3.',
      langkah: [
        'q = 7 - 3 = 4.',
        'Periksa apakah 4 ∈ Q: Ya, 4 ada di himpunan Q.'
      ],
      kesimpulan: 'Pasangan dari 7 adalah 4.'
    },
    caraCepat: {
      trik: 'Kurangkan 3 Langsung',
      alasan: '"p tiga lebihnya dari q" berarti q bernilai 3 lebih kecil dari p.',
      eksekusi: '7 - 3 = 4. Langsung jawab 4.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['5', '7', '9'],
      kodomain: ['1', '2', '4', '6'],
      arrows: [
        { from: '5', to: '2' },
        { from: '7', to: '4' },
        { from: '9', to: '6' }
      ],
      keterangan: 'Panah dari 7 mengarah tepat ke angka 4.'
    },
    ttsScript: 'Soal nomor dua puluh lima. Pada relasi tiga lebihnya dari, pasangan untuk angka tujuh adalah empat, karena tujuh dikurangi tiga sama dengan empat.',
    hint: 'Kurangkan 7 dengan 3.'
  },
  {
    id: 26,
    category: 'domain-representasi',
    difficulty: 'Sedang',
    stimulusType: 'teks',
    stimulusTitle: 'Notasi Himpunan Pasangan Berurutan',
    stimulusContent: 'Diberikan f: x -> 2x - 3 dengan daerah asal D = {-1, 0, 1, 2}.',
    question: 'Himpunan pasangan berurutan yang sesuai adalah...',
    options: [
      { id: 'A', text: '{(-1, -5), (0, -3), (1, -1), (2, 1)}', isCorrect: true, feedback: 'Benar sekali! f(-1)=2(-1)-3=-5, f(0)=-3, f(1)=2(1)-3=-1, f(2)=2(2)-3=1.' },
      { id: 'B', text: '{(-1, -1), (0, 3), (1, 5), (2, 7)}', isCorrect: false, feedback: 'Kesalahan perhitungan tanda minus.' },
      { id: 'C', text: '{(-1, 5), (0, 3), (1, 1), (2, -1)}', isCorrect: false, feedback: 'Semua tanda nilai fungsi terbalik.' },
      { id: 'D', text: '{(-1, -5), (0, 0), (1, -1), (2, 1)}', isCorrect: false, feedback: 'Untuk x=0, hasilnya adalah -3, bukan 0.' },
      { id: 'E', text: '{(-1, -3), (0, -3), (1, -1), (2, 1)}', isCorrect: false, feedback: 'Untuk x=-1 hasilnya -5.' }
    ],
    caraNormal: {
      diketahui: 'f(x) = 2x - 3, Domain D = {-1, 0, 1, 2}.',
      ditanya: 'Himpunan pasangan berurutan (x, f(x)).',
      konsep: 'Substitusi setiap nilai x ke rumus f(x).',
      langkah: [
        'x = -1 -> f(-1) = 2(-1) - 3 = -2 - 3 = -5 -> (-1, -5)',
        'x = 0  -> f(0) = 2(0) - 3 = 0 - 3 = -3 -> (0, -3)',
        'x = 1  -> f(1) = 2(1) - 3 = 2 - 3 = -1 -> (1, -1)',
        'x = 2  -> f(2) = 2(2) - 3 = 4 - 3 = 1 -> (2, 1)'
      ],
      kesimpulan: 'Pasangannya: {(-1, -5), (0, -3), (1, -1), (2, 1)}.'
    },
    caraCepat: {
      trik: 'Cek Nilai Saat x = 0',
      alasan: 'Saat x = 0, y = 2(0) - 3 = -3.',
      eksekusi: 'Cari opsi yang memiliki titik (0, -3). Hanya opsi A!'
    },
    buktiVisual: {
      type: 'mesin',
      machineFormula: 'f(x) = 2x - 3',
      machineInputs: [
        { x: -1, fx: -5 },
        { x: 0, fx: -3 },
        { x: 1, fx: -1 },
        { x: 2, fx: 1 }
      ],
      keterangan: 'Mesin fungsi memproses x menjadi 2x - 3.'
    },
    ttsScript: 'Soal nomor dua puluh enam. Untuk rumus dua x kurang tiga dengan domain minus satu sampai dua, himpunan pasangan berurutannya adalah minus satu koma minus lima, nol koma minus tiga, satu koma minus satu, dan dua koma satu.',
    hint: 'Ganti x dengan 0 terlebih dahulu: 2(0) - 3 = -3.'
  },
  {
    id: 27,
    category: 'domain-representasi',
    difficulty: 'Sulit',
    stimulusType: 'tabel',
    stimulusTitle: 'Range Fungsi Kuadrat Sederhana',
    stimulusContent: 'Fungsi h didefinisikan dengan rumus h(x) = 7 - x² dengan domain A = {-3, -1, 1, 2, 3}.',
    question: 'Daerah hasil (Range) dari fungsi h adalah...',
    options: [
      { id: 'A', text: '{-2, 3, 6}', isCorrect: true, feedback: 'Tepat sekali! h(±3) = 7 - 9 = -2. h(±1) = 7 - 1 = 6. h(2) = 7 - 4 = 3. Anggota range: {-2, 3, 6}.' },
      { id: 'B', text: '{-2, 3, 6, 8}', isCorrect: false, feedback: 'Tidak ada masukan yang menghasilkan 8.' },
      { id: 'C', text: '{-9, -1, 1, 4, 9}', isCorrect: false, feedback: 'Ini nilai kuadratnya, belum dikurangkan dari 7.' },
      { id: 'D', text: '{2, -3, -6}', isCorrect: false, feedback: 'Kesalahan tanda perhitungan.' },
      { id: 'E', text: '{-2, 2, 3, 6}', isCorrect: false, feedback: 'Angka 2 bukan hasil fungsi.' }
    ],
    caraNormal: {
      diketahui: 'h(x) = 7 - x², Domain = {-3, -1, 1, 2, 3}.',
      ditanya: 'Himpunan Range.',
      konsep: 'Range = {h(x) | x ∈ Domain}.',
      langkah: [
        'h(-3) = 7 - (-3)² = 7 - 9 = -2',
        'h(-1) = 7 - (-1)² = 7 - 1 = 6',
        'h(1) = 7 - 1² = 7 - 1 = 6',
        'h(2) = 7 - 2² = 7 - 4 = 3',
        'h(3) = 7 - 3² = 7 - 9 = -2',
        'Kumpulkan nilai unik dari yang terkecil: {-2, 3, 6}.'
      ],
      kesimpulan: 'Range = {-2, 3, 6}.'
    },
    caraCepat: {
      trik: 'Kelompokkan Nilai Kuadrat',
      alasan: 'x² bernilai: 9 (dari ±3), 1 (dari ±1), 4 (dari 2).',
      eksekusi: '7 - 9 = -2, 7 - 1 = 6, 7 - 4 = 3. Hasilnya {-2, 3, 6}.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['-3', '-1', '1', '2', '3'],
      kodomain: ['-2', '3', '6'],
      arrows: [
        { from: '-3', to: '-2' },
        { from: '-1', to: '6' },
        { from: '1', to: '6' },
        { from: '2', to: '3' },
        { from: '3', to: '-2' }
      ],
      keterangan: 'Hanya ada 3 nilai hasil berbeda pada kodomain.'
    },
    ttsScript: 'Soal nomor dua puluh tujuh. Fungsi h dari x sama dengan tujuh kurang x kuadrat menghasilkan daerah hasil minus dua, tiga, dan enam.',
    hint: 'Kuadratkan dulu nilainya: (-3)² = 9, lalu 7 - 9 = -2.'
  },
  {
    id: 28,
    category: 'domain-representasi',
    difficulty: 'Mudah',
    stimulusType: 'diagram',
    stimulusTitle: 'Mengenal Istilah Pemetaan',
    stimulusContent: 'Dalam matematika, istilah "Domain", "Kodomain", dan "Range" sering digunakan untuk mendeskripsikan himpunan pada relasi.',
    question: 'Istilah baku dalam Bahasa Indonesia untuk "Range" adalah...',
    options: [
      { id: 'A', text: 'Daerah hasil', isCorrect: true, feedback: 'Tepat sekali! Domain = Daerah Asal, Kodomain = Daerah Kawan, Range = Daerah Hasil.' },
      { id: 'B', text: 'Daerah asal', isCorrect: false, feedback: 'Daerah asal adalah Domain.' },
      { id: 'C', text: 'Daerah kawan', isCorrect: false, feedback: 'Daerah kawan adalah Kodomain.' },
      { id: 'D', text: 'Daerah irisan', isCorrect: false, feedback: 'Daerah irisan adalah interseksi himpunan.' },
      { id: 'E', text: 'Daerah gabungan', isCorrect: false, feedback: 'Daerah gabungan adalah union himpunan.' }
    ],
    caraNormal: {
      diketahui: 'Istilah matematika Range.',
      ditanya: 'Istilah bahasa Indonesianya.',
      konsep: 'Terminologi fungsi dan relasi SMP.',
      langkah: [
        'Domain = Daerah asal',
        'Kodomain = Daerah kawan',
        'Range = Daerah hasil'
      ],
      kesimpulan: 'Range adalah daerah hasil.'
    },
    caraCepat: {
      trik: 'Ingat A-K-H (Asal - Kawan - Hasil)',
      alasan: 'Urutan: Domain (Asal) -> Kodomain (Kawan) -> Range (Hasil).',
      eksekusi: 'Range selalu berpasangan dengan "Hasil".'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['Domain (Asal)'],
      kodomain: ['Kodomain (Kawan)', 'Range (Hasil)'],
      arrows: [{ from: 'Domain (Asal)', to: 'Range (Hasil)' }],
      keterangan: 'Panah berakhir di Range yang merupakan bagian dari Kodomain.'
    },
    ttsScript: 'Soal nomor dua puluh delapan. Istilah baku Bahasa Indonesia untuk range adalah daerah hasil.',
    hint: 'Hasil dari pemrosesan fungsi disebut apa?'
  },
  {
    id: 29,
    category: 'domain-representasi',
    difficulty: 'Sedang',
    stimulusType: 'diagram',
    stimulusTitle: 'Diagram Kartesius Relasi Kuadrat',
    stimulusContent: 'Diberikan himpunan pasangan berurutan: {(-2, 4), (-1, 1), (0, 0), (1, 1), (2, 4)}.',
    question: 'Jika digambarkan pada bidang koordinat Kartesius, titik-titik tersebut akan membentuk pola...',
    options: [
      { id: 'A', text: 'Kurva parabola terbuka ke atas', isCorrect: true, feedback: 'Benar sekali! Pola y = x² membentuk kurva parabola melengkung mulus yang membuka ke atas dengan titik puncak di (0, 0).' },
      { id: 'B', text: 'Garis lurus miring ke kanan', isCorrect: false, feedback: 'Bukan garis lurus karena nilai y tidak bertambah konstan (derajat dua/kuadrat).' },
      { id: 'C', text: 'Lingkaran tertutup', isCorrect: false, feedback: 'Lingkaran memiliki persamaan x² + y² = r².' },
      { id: 'D', text: 'Garis horizontal mendatar', isCorrect: false, feedback: 'Titik-titik memiliki ketinggian y yang berbeda.' },
      { id: 'E', text: 'Garis vertikal tegak lurus', isCorrect: false, feedback: 'Nilai x berbeda-beda.' }
    ],
    caraNormal: {
      diketahui: 'Titik-titik: (-2, 4), (-1, 1), (0, 0), (1, 1), (2, 4).',
      ditanya: 'Bentuk geometris kurva pada diagram kartesius.',
      konsep: 'Grafik fungsi kuadrat y = x².',
      langkah: [
        'Perhatikan bahwa untuk x dan -x, nilai y bernilai sama (simetris terhadap sumbu Y).',
        'Titik terendah berada di (0, 0).',
        'Saat x menjauh dari 0, y bertambah semakin cepat melengkung ke atas.'
      ],
      kesimpulan: 'Membentuk kurva parabola terbuka ke atas.'
    },
    caraCepat: {
      trik: 'Bentuk y = x²',
      alasan: 'Fungsi kuadrat x² selalu memiliki grafik parabola simetris.',
      eksekusi: 'Koefisien x² positif (+1), jadi parabola membuka ke atas.'
    },
    buktiVisual: {
      type: 'koordinat',
      tableData: [
        { x: -2, y: 4 },
        { x: -1, y: 1 },
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 4 }
      ],
      keterangan: 'Titik-titik membentuk lengkungan parabola berbentuk mangkok ke atas.'
    },
    ttsScript: 'Soal nomor dua puluh sembilan. Titik-titik dari relasi y sama dengan x kuadrat membentuk pola kurva parabola yang terbuka ke atas.',
    hint: 'Persamaan y = x kuadrat menghasilkan grafik berbentuk apa?'
  },
  {
    id: 30,
    category: 'domain-representasi',
    difficulty: 'Sulit',
    stimulusType: 'diagram',
    stimulusTitle: 'Menentukan Relasi Pasangan Balikan',
    stimulusContent: 'Relasi R dari A ke B didefinisikan sebagai "kelipatan dari". Himpunan A = {12, 15} dan B = {3, 4, 5}.',
    question: 'Banyak anggota himpunan pasangan berurutan pada relasi tersebut adalah...',
    options: [
      { id: 'A', text: '4 pasangan', isCorrect: true, feedback: 'Tepat sekali! 12 kelipatan dari 3 dan 4 -> (12, 3), (12, 4). 15 kelipatan dari 3 dan 5 -> (15, 3), (15, 5). Total ada 4 pasangan!' },
      { id: 'B', text: '3 pasangan', isCorrect: false, feedback: 'Kurang satu pasangan, 12 habis dibagi 4 dan 3.' },
      { id: 'C', text: '5 pasangan', isCorrect: false, feedback: '12 bukan kelipatan 5, dan 15 bukan kelipatan 4.' },
      { id: 'D', text: '6 pasangan', isCorrect: false, feedback: 'Itu adalah jumlah seluruh kemungkinan jika semua terhubung.' },
      { id: 'E', text: '2 pasangan', isCorrect: false, feedback: 'Terlalu sedikit.' }
    ],
    caraNormal: {
      diketahui: 'A = {12, 15}, B = {3, 4, 5}. Relasi: a kelipatan dari b.',
      ditanya: 'Banyak pasangan berurutan (a, b).',
      konsep: 'a habis dibagi b (a mod b = 0).',
      langkah: [
        'Untuk 12: 12 mod 3 = 0 -> (12, 3). 12 mod 4 = 0 -> (12, 4). 12 mod 5 ≠ 0.',
        'Untuk 15: 15 mod 3 = 0 -> (15, 3). 15 mod 4 ≠ 0. 15 mod 5 = 0 -> (15, 5).',
        'Pasangan = {(12, 3), (12, 4), (15, 3), (15, 5)}.'
      ],
      kesimpulan: 'Ada 4 pasangan berurutan.'
    },
    caraCepat: {
      trik: 'Hitung Pembagi Tiap Angka',
      alasan: '12 punya 2 pembagi di B (3 dan 4). 15 punya 2 pembagi di B (3 dan 5).',
      eksekusi: '2 + 2 = 4 pasangan.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['12', '15'],
      kodomain: ['3', '4', '5'],
      arrows: [
        { from: '12', to: '3' },
        { from: '12', to: '4' },
        { from: '15', to: '3' },
        { from: '15', to: '5' }
      ],
      keterangan: 'Ada 4 garis panah yang menghubungkan himpunan A ke himpunan B.'
    },
    ttsScript: 'Soal nomor tiga puluh. Dua belas kelipatan dari tiga dan empat. Lima belas kelipatan dari tiga dan lima. Total ada empat pasangan berurutan.',
    hint: 'Cek bilangan mana saja di himpunan B yang membagi habis 12 dan 15.'
  }
];
