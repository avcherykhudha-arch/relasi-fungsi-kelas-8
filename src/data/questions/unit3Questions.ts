/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../../types';

export const UNIT_3_QUESTIONS: Question[] = [
  {
    id: 31,
    category: 'fungsi-konsep',
    difficulty: 'Mudah',
    stimulusType: 'teks',
    stimulusTitle: 'Syarat Relasi Disebut Fungsi',
    stimulusContent: 'Mister Jo mengajarkan dua aturan emas agar suatu relasi dari himpunan A ke himpunan B dapat disebut sebagai fungsi (pemetaan).',
    question: 'Syarat utama agar relasi dari A ke B disebut fungsi adalah...',
    options: [
      { id: 'A', text: 'Setiap anggota A dipasangkan dengan tepat satu anggota B', isCorrect: true, feedback: 'Tepat sekali! Seluruh anggota daerah asal (A) wajib memiliki kawan, dan kawannya hanya boleh tepat satu (tidak mendua).' },
      { id: 'B', text: 'Setiap anggota B dipasangkan dengan tepat satu anggota A', isCorrect: false, feedback: 'Ini syarat untuk fungsi satu-satu kebalikan, bukan definisi umum fungsi A ke B.' },
      { id: 'C', text: 'Jumlah anggota himpunan A harus sama dengan jumlah anggota himpunan B', isCorrect: false, feedback: 'Ini syarat korespondensi satu-satu, fungsi umum tidak memerlukan jumlah anggota sama.' },
      { id: 'D', text: 'Anggota himpunan A boleh memiliki lebih dari satu pasangan', isCorrect: false, feedback: 'Jika anggota A memiliki lebih dari satu pasangan, relasi tersebut BUKAN fungsi.' },
      { id: 'E', text: 'Semua anggota himpunan B harus memiliki pasangan', isCorrect: false, feedback: 'Anggota B boleh saja tidak memiliki pasangan dalam fungsi.' }
    ],
    caraNormal: {
      diketahui: 'Definisi fungsi dari himpunan A ke himpunan B.',
      ditanya: 'Syarat matematis agar relasi disebut fungsi.',
      konsep: 'Fungsi (pemetaan) adalah relasi khusus yang mengaitkan setiap x ∈ A dengan tepat satu y ∈ B.',
      langkah: [
        '1. Untuk setiap elemen a ∈ A, terdapat pasangan (a, b) ∈ R (tidak boleh kosong).',
        '2. Jika (a, b) ∈ R dan (a, c) ∈ R, maka b = c (tidak boleh bercabang).'
      ],
      kesimpulan: 'Setiap anggota A dipasangkan dengan tepat satu anggota B.'
    },
    caraCepat: {
      trik: '2 Pantangan Domain Mister Jo',
      alasan: 'Domain tidak boleh jomblo, domain tidak boleh selingkuh.',
      eksekusi: 'Artinya: "Setiap anggota A wajib punya tepat satu pasangan di B".'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['A1', 'A2', 'A3'],
      kodomain: ['B1', 'B2', 'B3'],
      arrows: [
        { from: 'A1', to: 'B1' },
        { from: 'A2', to: 'B2' },
        { from: 'A3', to: 'B2' }
      ],
      keterangan: 'Semua anggota domain memanah tepat 1 kali. Sah sebagai fungsi!'
    },
    ttsScript: 'Soal nomor tiga puluh satu. Syarat utama relasi dari A ke B disebut fungsi adalah: Setiap anggota A dipasangkan dengan tepat satu anggota B.',
    hint: 'Fokus pada himpunan asal A: semua harus berpasangan dan tidak boleh bercabang.'
  },
  {
    id: 32,
    category: 'fungsi-konsep',
    difficulty: 'Mudah',
    stimulusType: 'teks',
    stimulusTitle: 'Menentukan Relasi yang Merupakan Fungsi',
    stimulusContent: 'Perhatikan empat himpunan pasangan berurutan berikut:\nP = {(1, a), (2, b), (3, c)}\nQ = {(1, a), (1, b), (2, c)}\nR = {(1, a), (2, a), (3, a)}\nS = {(2, a), (3, b), (4, c)}',
    question: 'Himpunan pasangan berurutan yang BUKAN merupakan fungsi adalah...',
    options: [
      { id: 'A', text: 'Himpunan Q', isCorrect: true, feedback: 'Benar sekali! Pada himpunan Q, angka 1 muncul dua kali: (1, a) dan (1, b). Domain 1 bercabang dua, sehingga Q bukan fungsi!' },
      { id: 'B', text: 'Himpunan P', isCorrect: false, feedback: 'P adalah fungsi karena angka depan (1, 2, 3) semuanya berbeda.' },
      { id: 'C', text: 'Himpunan R', isCorrect: false, feedback: 'R adalah fungsi konstan (banyak-ke-satu). Angka depan (1, 2, 3) semuanya berbeda.' },
      { id: 'D', text: 'Himpunan S', isCorrect: false, feedback: 'S adalah fungsi karena angka depan (2, 3, 4) semuanya berbeda.' },
      { id: 'E', text: 'Himpunan P dan S', isCorrect: false, feedback: 'Keduanya merupakan fungsi.' }
    ],
    caraNormal: {
      diketahui: 'Empat himpunan pasangan berurutan P, Q, R, S.',
      ditanya: 'Manakah yang bukan fungsi?',
      konsep: 'Dalam himpunan pasangan berurutan suatu fungsi, tidak boleh ada elemen pertama (x) yang berulang.',
      langkah: [
        'Cek P: {1, 2, 3} -> tidak berulang (Fungsi)',
        'Cek Q: {1, 1, 2} -> angka 1 berulang! (BUKAN FUNGSI)',
        'Cek R: {1, 2, 3} -> tidak berulang (Fungsi)',
        'Cek S: {2, 3, 4} -> tidak berulang (Fungsi)'
      ],
      kesimpulan: 'Himpunan Q bukan fungsi.'
    },
    caraCepat: {
      trik: 'Cek Angka Depan Dobel',
      alasan: 'Fungsi mensyaratkan setiap elemen x unik.',
      eksekusi: 'Pada himpunan Q ada (1, a) dan (1, b) di mana angka depan 1 dobel. Langsung pilih Q!'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['1', '2'],
      kodomain: ['a', 'b', 'c'],
      arrows: [
        { from: '1', to: 'a' },
        { from: '1', to: 'b' },
        { from: '2', to: 'c' }
      ],
      keterangan: 'Angka 1 memancarkan dua panah sekaligus ke a dan b. Ini melanggar syarat fungsi!'
    },
    ttsScript: 'Soal nomor tiga puluh dua. Himpunan pasangan berurutan yang bukan fungsi adalah himpunan Q, karena angka satu di posisi depan berulang dua kali.',
    hint: 'Periksa koordinat pertama (angka di sebelah kiri). Ada angka yang muncul dua kali?'
  },
  {
    id: 33,
    category: 'fungsi-konsep',
    difficulty: 'Mudah',
    stimulusType: 'pola',
    stimulusTitle: 'Menghitung Banyak Pemetaan',
    stimulusContent: 'Diberikan himpunan A = {a, b, c} dan B = {1, 2}.',
    question: 'Banyaknya pemetaan yang mungkin dari himpunan A ke himpunan B adalah...',
    options: [
      { id: 'A', text: '8', isCorrect: true, feedback: 'Tepat sekali! n(A) = 3 dan n(B) = 2. Banyak pemetaan dari A ke B = n(B)^n(A) = 2³ = 8 cara!' },
      { id: 'B', text: '9', isCorrect: false, feedback: 'Itu adalah 3² = 9, yaitu banyak pemetaan dari B ke A (terbalik).' },
      { id: 'C', text: '6', isCorrect: false, feedback: 'Itu hasil perkalian 3 x 2, bukan perpangkatan.' },
      { id: 'D', text: '5', isCorrect: false, feedback: 'Itu hasil penjumlahan 3 + 2.' },
      { id: 'E', text: '16', isCorrect: false, feedback: 'Terlalu besar.' }
    ],
    caraNormal: {
      diketahui: 'A = {a, b, c} -> n(A) = 3. B = {1, 2} -> n(B) = 2.',
      ditanya: 'Banyak pemetaan dari A ke B.',
      konsep: 'Banyak pemetaan dari himpunan X ke Y adalah n(Y)^n(X).',
      langkah: [
        'Identifikasi n(A) = 3 dan n(B) = 2.',
        'Rumus pemetaan A ke B: n(B)^n(A) = 2³.',
        'Hitung: 2³ = 2 × 2 × 2 = 8.'
      ],
      kesimpulan: 'Banyak pemetaan = 8 cara.'
    },
    caraCepat: {
      trik: 'Belakang Pangkat Depan',
      alasan: 'Pemetaan A ke B = B pangkat A.',
      eksekusi: 'Banyak anggota B adalah 2, banyak anggota A adalah 3. Hitung 2³ = 8.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['a', 'b', 'c'],
      kodomain: ['1', '2'],
      arrows: [
        { from: 'a', to: '1' },
        { from: 'b', to: '1' },
        { from: 'c', to: '1' }
      ],
      keterangan: 'Setiap elemen {a, b, c} masing-masing punya 2 pilihan: 2 x 2 x 2 = 8.'
    },
    ttsScript: 'Soal nomor tiga puluh tiga. Himpunan A memiliki tiga anggota dan B memiliki dua anggota. Banyak pemetaan dari A ke B adalah dua pangkat tiga sama dengan delapan.',
    hint: 'Ingat rumus belakang pangkat depan: n(B) dipangkatkan n(A).'
  },
  {
    id: 34,
    category: 'fungsi-konsep',
    difficulty: 'Sedang',
    stimulusType: 'pola',
    stimulusTitle: 'Menghitung Banyak Pemetaan Terbalik',
    stimulusContent: 'Diketahui himpunan P = {bilangan prima ganjil kurang dari 10} dan Q = {faktor dari 4}.',
    question: 'Banyak pemetaan yang mungkin dari himpunan Q ke himpunan P adalah...',
    options: [
      { id: 'A', text: '27', isCorrect: true, feedback: 'Hebat sekali! Prima ganjil < 10: P = {3, 5, 7} -> n(P) = 3. Faktor dari 4: Q = {1, 2, 4} -> n(Q) = 3. Banyak pemetaan Q ke P = n(P)^n(Q) = 3³ = 27 cara!' },
      { id: 'B', text: '9', isCorrect: false, feedback: 'Itu adalah perkalian 3 x 3.' },
      { id: 'C', text: '6', isCorrect: false, feedback: 'Itu adalah korespondensi satu-satu (3!).' },
      { id: 'D', text: '81', isCorrect: false, feedback: 'Itu 3 pangkat 4.' },
      { id: 'E', text: '18', isCorrect: false, feedback: 'Bukan hasil perpangkatan yang benar.' }
    ],
    caraNormal: {
      diketahui: 'P = {3, 5, 7} -> n(P) = 3 (ingat 2 bilangan prima genap, jadi tidak ikut). Q = {1, 2, 4} -> n(Q) = 3.',
      ditanya: 'Banyak pemetaan dari Q ke P.',
      konsep: 'Banyak pemetaan Q ke P = n(P)^n(Q).',
      langkah: [
        'Daftar P: prima ganjil < 10 adalah 3, 5, 7 -> n(P) = 3.',
        'Daftar Q: faktor dari 4 adalah 1, 2, 4 -> n(Q) = 3.',
        'Banyak pemetaan Q ke P = 3³ = 27.'
      ],
      kesimpulan: 'Banyak pemetaan dari Q ke P adalah 27.'
    },
    caraCepat: {
      trik: 'Tujuan Pangkat Asal',
      alasan: 'Tujuan adalah P (3 anggota), asal adalah Q (3 anggota).',
      eksekusi: '3³ = 27 cara.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['1', '2', '4'],
      kodomain: ['3', '5', '7'],
      arrows: [
        { from: '1', to: '3' },
        { from: '2', to: '5' },
        { from: '4', to: '7' }
      ],
      keterangan: 'Setiap 3 anggota asal memiliki 3 pilihan di tujuan: 3 x 3 x 3 = 27.'
    },
    ttsScript: 'Soal nomor tiga puluh empat. Anggota P adalah tiga, lima, tujuh. Anggota Q adalah satu, dua, empat. Banyak pemetaan dari Q ke P adalah tiga pangkat tiga sama dengan dua puluh tujuh.',
    hint: 'Daftarkan anggota P (prima ganjil) dan Q (faktor dari 4), lalu hitung tujuannya dipangkatkan asalnya.'
  },
  {
    id: 35,
    category: 'fungsi-konsep',
    difficulty: 'Mudah',
    stimulusType: 'teks',
    stimulusTitle: 'Korespondensi Satu-Satu',
    stimulusContent: 'Diberikan dua himpunan K = {Senin, Selasa, Rabu} dan L = {1, 2, 3}.',
    question: 'Banyaknya korespondensi satu-satu yang dapat dibentuk dari himpunan K ke himpunan L adalah...',
    options: [
      { id: 'A', text: '6 cara', isCorrect: true, feedback: 'Tepat sekali! n(K) = n(L) = 3. Banyak korespondensi satu-satu = 3! = 3 × 2 × 1 = 6 cara!' },
      { id: 'B', text: '9 cara', isCorrect: false, feedback: 'Itu adalah perkalian 3 x 3.' },
      { id: 'C', text: '27 cara', isCorrect: false, feedback: 'Itu seluruh pemetaan biasa (3³), bukan korespondensi satu-satu.' },
      { id: 'D', text: '3 cara', isCorrect: false, feedback: 'Terlalu sedikit.' },
      { id: 'E', text: '1 cara', isCorrect: false, feedback: 'Bisa dibuat beberapa variasi susunan pasangan berurutan.' }
    ],
    caraNormal: {
      diketahui: 'K = {Senin, Selasa, Rabu} -> n = 3. L = {1, 2, 3} -> n = 3.',
      ditanya: 'Banyak korespondensi satu-satu.',
      konsep: 'Banyak korespondensi satu-satu dari dua himpunan dengan n anggota adalah n! = n × (n - 1) × (n - 2) × ... × 1.',
      langkah: [
        'Hitung n = 3.',
        'Hitung faktorial: 3! = 3 × 2 × 1 = 6.'
      ],
      kesimpulan: 'Ada 6 cara korespondensi satu-satu.'
    },
    caraCepat: {
      trik: 'Gunakan Rumus Faktorial n!',
      alasan: 'Elemen pertama punya 3 pilihan, elemen kedua tinggal 2 pilihan, elemen ketiga sisa 1 pilihan.',
      eksekusi: '3 x 2 x 1 = 6 cara.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['Senin', 'Selasa', 'Rabu'],
      kodomain: ['1', '2', '3'],
      arrows: [
        { from: 'Senin', to: '1' },
        { from: 'Selasa', to: '2' },
        { from: 'Rabu', to: '3' }
      ],
      keterangan: 'Setiap panah menghubungkan tepat satu ke satu tanpa bercabang dan tanpa kosong.'
    },
    ttsScript: 'Soal nomor tiga puluh lima. Banyak korespondensi satu-satu untuk himpunan dengan tiga anggota adalah tiga faktorial, yaitu tiga kali dua kali satu sama dengan enam cara.',
    hint: 'Gunakan perkalian menurun: 3 x 2 x 1.'
  },
  {
    id: 36,
    category: 'fungsi-konsep',
    difficulty: 'Mudah',
    stimulusType: 'teks',
    stimulusTitle: 'Menghitung Nilai Fungsi Linier',
    stimulusContent: 'Suatu fungsi dirumuskan dengan f(x) = 3x - 7. Siswa diminta menghitung bayangan dari angka 5.',
    question: 'Nilai dari f(5) adalah...',
    options: [
      { id: 'A', text: '8', isCorrect: true, feedback: 'Benar sekali! f(5) = 3(5) - 7 = 15 - 7 = 8.' },
      { id: 'B', text: '22', isCorrect: false, feedback: 'Salah tanda: 15 + 7 = 22, sedangkan di rumus tandanya pengurangan (-7).' },
      { id: 'C', text: '-8', isCorrect: false, feedback: 'Hasil 15 - 7 bernilai positif 8, bukan negatif.' },
      { id: 'D', text: '12', isCorrect: false, feedback: 'Periksa kembali hasil 3 dikali 5.' },
      { id: 'E', text: '10', isCorrect: false, feedback: 'Periksa kembali perhitungannya.' }
    ],
    caraNormal: {
      diketahui: 'Rumus fungsi f(x) = 3x - 7. Nilai masukan x = 5.',
      ditanya: 'Nilai f(5).',
      konsep: 'Substitusi: ganti setiap variabel x pada rumus dengan angka 5.',
      langkah: [
        'f(5) = 3(5) - 7',
        'f(5) = 15 - 7',
        'f(5) = 8'
      ],
      kesimpulan: 'Nilai f(5) adalah 8.'
    },
    caraCepat: {
      trik: 'Hitung Cepat Langsung',
      alasan: 'Operasi dasar perkalian lalu pengurangan.',
      eksekusi: '3 x 5 = 15, lalu 15 - 7 = 8.'
    },
    buktiVisual: {
      type: 'mesin',
      machineFormula: 'f(x) = 3x - 7',
      machineInputs: [{ x: 5, fx: 8 }],
      keterangan: 'Angka 5 masuk ke mesin, dikalikan 3 menjadi 15, dikurangi 7 keluar sebagai 8.'
    },
    ttsScript: 'Soal nomor tiga puluh enam. Jika f dari x sama dengan tiga x kurang tujuh, maka f dari lima adalah tiga kali lima dikurang tujuh, hasilnya delapan.',
    hint: 'Ganti huruf x dengan angka 5, kalikan dulu lalu kurangkan 7.'
  },
  {
    id: 37,
    category: 'fungsi-konsep',
    difficulty: 'Sedang',
    stimulusType: 'teks',
    stimulusTitle: 'Substitusi Nilai Negatif',
    stimulusContent: 'Diketahui fungsi g dirumuskan dengan g(x) = 10 - 4x.',
    question: 'Nilai dari g(-3) adalah...',
    options: [
      { id: 'A', text: '22', isCorrect: true, feedback: 'Tepat sekali! Hati-hati dengan tanda minus: g(-3) = 10 - 4(-3) = 10 - (-12) = 10 + 12 = 22!' },
      { id: 'B', text: '-2', isCorrect: false, feedback: 'Terjadi kesalahan tanda: mengira 10 - 12 = -2.' },
      { id: 'C', text: '-22', isCorrect: false, feedback: 'Hasil penjumlahan bernilai positif 22.' },
      { id: 'D', text: '18', isCorrect: false, feedback: 'Periksa kembali perkalian 4 dengan 3.' },
      { id: 'E', text: '2', isCorrect: false, feedback: 'Periksa kembali tanda operasi bilangan negatif.' }
    ],
    caraNormal: {
      diketahui: 'g(x) = 10 - 4x. x = -3.',
      ditanya: 'Nilai g(-3).',
      konsep: 'Substitusi x = -3 dan aturan perkalian bilangan bulat negatif: (-) × (-) = (+).',
      langkah: [
        'g(-3) = 10 - 4(-3)',
        '4 × (-3) = -12',
        'g(-3) = 10 - (-12) = 10 + 12 = 22'
      ],
      kesimpulan: 'Nilai g(-3) adalah 22.'
    },
    caraCepat: {
      trik: 'Minus Ketemu Minus Jadi Plus',
      alasan: '- 4(-3) = + 12.',
      eksekusi: '10 + 12 = 22. Langsung pilih A!'
    },
    buktiVisual: {
      type: 'mesin',
      machineFormula: 'g(x) = 10 - 4x',
      machineInputs: [{ x: -3, fx: 22 }],
      keterangan: 'Input -3 menghasilkan proses 10 - (-12) = 22.'
    },
    ttsScript: 'Soal nomor tiga puluh tujuh. Fungsi g dari x sama dengan sepuluh kurang empat x. Nilai g dari minus tiga adalah sepuluh ditambah dua belas sama dengan dua puluh dua.',
    hint: 'Ingat bahwa minus empat dikali minus tiga menghasilkan positif dua belas.'
  },
  {
    id: 38,
    category: 'fungsi-konsep',
    difficulty: 'Sedang',
    stimulusType: 'teks',
    stimulusTitle: 'Mencari Prapeta (Nilai x)',
    stimulusContent: 'Fungsi h didefinisikan dengan rumus h(x) = 5x + 3. Diketahui nilai h(a) = 38.',
    question: 'Nilai a yang memenuhi persamaan tersebut adalah...',
    options: [
      { id: 'A', text: '7', isCorrect: true, feedback: 'Benar sekali! 5a + 3 = 38 -> 5a = 38 - 3 = 35 -> a = 35 / 5 = 7.' },
      { id: 'B', text: '6', isCorrect: false, feedback: '5(6) + 3 = 33, bukan 38.' },
      { id: 'C', text: '8', isCorrect: false, feedback: '5(8) + 3 = 43, bukan 38.' },
      { id: 'D', text: '9', isCorrect: false, feedback: 'Terlalu besar.' },
      { id: 'E', text: '5', isCorrect: false, feedback: '5(5) + 3 = 28, bukan 38.' }
    ],
    caraNormal: {
      diketahui: 'h(x) = 5x + 3 dan h(a) = 38.',
      ditanya: 'Nilai masukan a (prapeta).',
      konsep: 'Selesaikan persamaan linier satu variabel h(a) = 38.',
      langkah: [
        '5a + 3 = 38',
        '5a = 38 - 3',
        '5a = 35',
        'a = 35 / 5 = 7'
      ],
      kesimpulan: 'Nilai a = 7.'
    },
    caraCepat: {
      trik: 'Balik Operasi (Operasi Invers)',
      alasan: 'Kebalikan dari tambah 3 adalah kurang 3, kebalikan dari kali 5 adalah bagi 5.',
      eksekusi: '(38 - 3) / 5 = 35 / 5 = 7.'
    },
    buktiVisual: {
      type: 'mesin',
      machineFormula: 'h(x) = 5x + 3',
      machineInputs: [{ x: 7, fx: 38 }],
      keterangan: 'Membalik panah output 38 kembali ke input menghasilkan angka 7.'
    },
    ttsScript: 'Soal nomor tiga puluh delapan. Fungsi h dari x sama dengan lima x ditambah tiga. Jika hasilnya tiga puluh delapan, kurangkan tiga puluh delapan dengan tiga menjadi tiga puluh lima, lalu bagi lima hasilnya tujuh.',
    hint: 'Kurangkan 38 dengan 3 terlebih dahulu, kemudian bagi dengan 5.'
  },
  {
    id: 39,
    category: 'fungsi-konsep',
    difficulty: 'Sulit',
    stimulusType: 'teks',
    stimulusTitle: 'Menentukan Rumus Fungsi dari Dua Titik',
    stimulusContent: 'Suatu fungsi linier f(x) = ax + b memiliki nilai f(2) = 11 dan f(4) = 19.',
    question: 'Nilai a dan b berturut-turut adalah...',
    options: [
      { id: 'A', text: 'a = 4 dan b = 3', isCorrect: true, feedback: 'Luar biasa! a = (19 - 11) / (4 - 2) = 8 / 2 = 4. Lalu f(2) = 4(2) + b = 11 -> 8 + b = 11 -> b = 3.' },
      { id: 'B', text: 'a = 3 dan b = 4', isCorrect: false, feedback: 'Terbalik antara nilai a dan nilai b.' },
      { id: 'C', text: 'a = 4 dan b = -3', isCorrect: false, feedback: 'Salah tanda pada nilai b.' },
      { id: 'D', text: 'a = 2 dan b = 7', isCorrect: false, feedback: 'Periksa kembali selisih pembagian a.' },
      { id: 'E', text: 'a = 5 dan b = 1', isCorrect: false, feedback: 'f(4) = 5(4) + 1 = 21, bukan 19.' }
    ],
    caraNormal: {
      diketahui: 'f(x) = ax + b. f(2) = 11 dan f(4) = 19.',
      ditanya: 'Nilai a dan b.',
      konsep: 'Sistem Persamaan Linier Dua Variabel (SPLDV) dengan eliminasi dan substitusi.',
      langkah: [
        'Persamaan (1): 2a + b = 11',
        'Persamaan (2): 4a + b = 19',
        'Kurangkan (2) dengan (1): (4a - 2a) = (19 - 11) -> 2a = 8 -> a = 4.',
        'Substitusikan a = 4 ke (1): 2(4) + b = 11 -> 8 + b = 11 -> b = 3.'
      ],
      kesimpulan: 'a = 4 dan b = 3.'
    },
    caraCepat: {
      trik: 'Rumus Gradien Langsung',
      alasan: 'a = Δf / Δx = (19 - 11) / (4 - 2) = 8 / 2 = 4.',
      eksekusi: 'Cari b saat x = 2: 11 - (4 x 2) = 11 - 8 = 3. Maka a = 4, b = 3.'
    },
    buktiVisual: {
      type: 'tabel',
      tableData: [
        { x: 2, y: 11 },
        { x: 3, y: 15 },
        { x: 4, y: 19 }
      ],
      keterangan: 'Tampak selisih y bernilai 4 untuk setiap pertambahan 1 pada x (a = 4).'
    },
    ttsScript: 'Soal nomor tiga puluh sembilan. Diketahui f dari dua sama dengan sebelas dan f dari empat sama dengan sembilan belas. Selisih sembilan belas kurang sebelas dibagi dua adalah empat, dan nilai b adalah tiga.',
    hint: 'Cari selisih hasil (19 - 11) lalu bagi dengan selisih masukan (4 - 2).'
  },
  {
    id: 40,
    category: 'fungsi-konsep',
    difficulty: 'Sulit',
    stimulusType: 'teks',
    stimulusTitle: 'Menghitung Nilai f(x) untuk Nilai Tertentu',
    stimulusContent: 'Diketahui fungsi f(x) = ax + b. Jika f(-1) = 2 dan f(2) = 11, berapakah nilai f(5)?',
    question: 'Nilai dari f(5) adalah...',
    options: [
      { id: 'A', text: '20', isCorrect: true, feedback: 'Tepat sekali! a = (11 - 2) / (2 - (-1)) = 9 / 3 = 3. b = 11 - 3(2) = 5. Rumus: f(x) = 3x + 5. Maka f(5) = 3(5) + 5 = 15 + 5 = 20!' },
      { id: 'B', text: '18', isCorrect: false, feedback: 'Periksa kembali nilai a dan b.' },
      { id: 'C', text: '23', isCorrect: false, feedback: 'Periksa kembali substitusi ke rumus fungsinya.' },
      { id: 'D', text: '15', isCorrect: false, feedback: 'Lupa menambahkan nilai b = 5.' },
      { id: 'E', text: '25', isCorrect: false, feedback: 'Terlalu besar.' }
    ],
    caraNormal: {
      diketahui: 'f(-1) = 2, f(2) = 11. Ditanya: f(5).',
      ditanya: 'Nilai f(5).',
      konsep: 'Cari rumus f(x) = ax + b terlebih dahulu, lalu substitusikan x = 5.',
      langkah: [
        'Persamaan 1: -a + b = 2',
        'Persamaan 2: 2a + b = 11',
        'Kurangkan: (2a - (-a)) = 11 - 2 -> 3a = 9 -> a = 3.',
        'Substitusi: -3 + b = 2 -> b = 5. Rumus: f(x) = 3x + 5.',
        'Hitung f(5) = 3(5) + 5 = 15 + 5 = 20.'
      ],
      kesimpulan: 'Nilai f(5) = 20.'
    },
    caraCepat: {
      trik: 'Lompatan Pola Linier',
      alasan: 'Dari x = 2 ke x = 5 bertambah 3 langkah. Karena a = 3, maka nilai f bertambah 3 x 3 = 9.',
      eksekusi: 'f(5) = f(2) + 9 = 11 + 9 = 20!'
    },
    buktiVisual: {
      type: 'tabel',
      tableData: [
        { x: -1, y: 2 },
        { x: 2, y: 11 },
        { x: 5, y: 20 }
      ],
      keterangan: 'Tabel garis lurus membuktikan f(5) bernilai tepat 20.'
    },
    ttsScript: 'Soal nomor empat puluh. Dari f minus satu sama dengan dua dan f dua sama dengan sebelas, kita dapatkan a sama dengan tiga dan b sama dengan lima. Nilai f lima adalah tiga kali lima ditambah lima sama dengan dua puluh.',
    hint: 'Cari gradien a terlebih dahulu: (11 - 2) / (2 - (-1)) = 9 / 3 = 3.'
  },
  {
    id: 41,
    category: 'fungsi-konsep',
    difficulty: 'Sedang',
    stimulusType: 'teks',
    stimulusTitle: 'Nilai Fungsi Komposit Sederhana',
    stimulusContent: 'Diberikan f(x) = 2x + 1. Tentukan bentuk dari f(x + 3).',
    question: 'Bentuk sederhana dari f(x + 3) adalah...',
    options: [
      { id: 'A', text: '2x + 7', isCorrect: true, feedback: 'Benar sekali! f(x + 3) = 2(x + 3) + 1 = 2x + 6 + 1 = 2x + 7.' },
      { id: 'B', text: '2x + 4', isCorrect: false, feedback: 'Lupa mengalikan angka 3 dengan 2 pada sifat distributif (2 x 3 = 6).' },
      { id: 'C', text: '2x + 3', isCorrect: false, feedback: 'Salah dalam penerapan rumus fungsi.' },
      { id: 'D', text: '2x + 6', isCorrect: false, feedback: 'Lupa menambahkan konstanta +1 di akhir rumus.' },
      { id: 'E', text: 'x + 4', isCorrect: false, feedback: 'Koefisien x tetap 2.' }
    ],
    caraNormal: {
      diketahui: 'f(x) = 2x + 1. Input baru adalah (x + 3).',
      ditanya: 'Bentuk ekspresi f(x + 3).',
      konsep: 'Substitusi: ganti setiap huruf x dengan (x + 3) dan gunakan sifat distributif.',
      langkah: [
        'f(x + 3) = 2(x + 3) + 1',
        '= (2 × x) + (2 × 3) + 1',
        '= 2x + 6 + 1',
        '= 2x + 7'
      ],
      kesimpulan: 'f(x + 3) = 2x + 7.'
    },
    caraCepat: {
      trik: 'Sifat Distributif Cepat',
      alasan: '2 dikali (x + 3) menghasilkan 2x + 6.',
      eksekusi: '2x + 6 + 1 = 2x + 7.'
    },
    buktiVisual: {
      type: 'mesin',
      machineFormula: 'f(...) = 2(...) + 1',
      keterangan: 'Masukkan (x + 3) ke dalam mesin: 2(x + 3) + 1 = 2x + 7.'
    },
    ttsScript: 'Soal nomor empat puluh satu. Jika f dari x sama dengan dua x ditambah satu, maka f dari x tambah tiga adalah dua kali kurung x tambah tiga tutup kurung ditambah satu, disederhanakan menjadi dua x ditambah tujuh.',
    hint: 'Ganti x dengan kurung (x + 3), lalu kalikan ke dalam: 2(x) + 2(3) + 1.'
  },
  {
    id: 42,
    category: 'fungsi-konsep',
    difficulty: 'Sedang',
    stimulusType: 'teks',
    stimulusTitle: 'Penjumlahan Nilai Fungsi',
    stimulusContent: 'Diketahui rumus fungsi f(x) = 5 - 2x.',
    question: 'Nilai dari f(3) + f(-1) adalah...',
    options: [
      { id: 'A', text: '6', isCorrect: true, feedback: 'Tepat sekali! f(3) = 5 - 2(3) = 5 - 6 = -1. f(-1) = 5 - 2(-1) = 5 + 2 = 7. Maka f(3) + f(-1) = -1 + 7 = 6!' },
      { id: 'B', text: '8', isCorrect: false, feedback: 'Periksa tanda minus pada f(3).' },
      { id: 'C', text: '-6', isCorrect: false, feedback: 'Hasil penjumlahannya positif 6.' },
      { id: 'D', text: '4', isCorrect: false, feedback: 'Periksa kembali perhitungan substitusi f(-1).' },
      { id: 'E', text: '12', isCorrect: false, feedback: 'Terlalu besar.' }
    ],
    caraNormal: {
      diketahui: 'f(x) = 5 - 2x.',
      ditanya: 'Nilai f(3) + f(-1).',
      konsep: 'Hitung masing-masing nilai fungsi lalu jumlahkan.',
      langkah: [
        'Hitung f(3) = 5 - 2(3) = 5 - 6 = -1.',
        'Hitung f(-1) = 5 - 2(-1) = 5 + 2 = 7.',
        'Jumlahkan keduanya: f(3) + f(-1) = (-1) + 7 = 6.'
      ],
      kesimpulan: 'Hasil akhirnya adalah 6.'
    },
    caraCepat: {
      trik: 'Hitung Mental Terpisah',
      alasan: '5 - 6 = -1 dan 5 + 2 = 7.',
      eksekusi: '-1 + 7 = 6.'
    },
    buktiVisual: {
      type: 'tabel',
      tableData: [
        { x: 3, y: -1 },
        { x: -1, y: 7 }
      ],
      keterangan: 'Hasil nilai y untuk x=3 adalah -1 dan x=-1 adalah 7. Jumlah = 6.'
    },
    ttsScript: 'Soal nomor empat puluh dua. Nilai f tiga adalah minus satu, dan f minus satu adalah tujuh. Dijumlahkan menghasilkan enam.',
    hint: 'Cari f(3) terlebih dahulu, cari f(-1), lalu jumlahkan kedua hasilnya.'
  },
  {
    id: 43,
    category: 'fungsi-konsep',
    difficulty: 'Sulit',
    stimulusType: 'teks',
    stimulusTitle: 'Prapeta dengan Pecahan',
    stimulusContent: 'Fungsi f dinyatakan dengan rumus f(x) = (3x - 1) / 2. Diketahui f(k) = 7.',
    question: 'Nilai k yang memenuhi adalah...',
    options: [
      { id: 'A', text: '5', isCorrect: true, feedback: 'Benar sekali! (3k - 1) / 2 = 7 -> 3k - 1 = 14 -> 3k = 15 -> k = 5!' },
      { id: 'B', text: '4', isCorrect: false, feedback: '(3(4) - 1) / 2 = 11/2 = 5.5, bukan 7.' },
      { id: 'C', text: '6', isCorrect: false, feedback: '(3(6) - 1) / 2 = 17/2 = 8.5, bukan 7.' },
      { id: 'D', text: '7', isCorrect: false, feedback: 'Periksa kembali langkah perkalian silang.' },
      { id: 'E', text: '3', isCorrect: false, feedback: '(3(3) - 1) / 2 = 8/2 = 4, bukan 7.' }
    ],
    caraNormal: {
      diketahui: 'f(x) = (3x - 1) / 2 dan f(k) = 7.',
      ditanya: 'Nilai k.',
      konsep: 'Persamaan linier dengan pecahan.',
      langkah: [
        '(3k - 1) / 2 = 7',
        'Kalikan kedua ruas dengan 2: 3k - 1 = 7 × 2 = 14',
        '3k = 14 + 1 = 15',
        'k = 15 / 3 = 5'
      ],
      kesimpulan: 'Nilai k adalah 5.'
    },
    caraCepat: {
      trik: 'Kali Silang Mundur',
      alasan: '7 dikali 2 = 14. Lalu 14 ditambah 1 = 15. Lalu 15 dibagi 3 = 5.',
      eksekusi: 'Hasil k = 5.'
    },
    buktiVisual: {
      type: 'mesin',
      machineFormula: 'f(k) = (3k - 1) / 2 = 7',
      machineInputs: [{ x: 5, fx: 7 }],
      keterangan: 'Jika k = 5: (3(5) - 1)/2 = (15 - 1)/2 = 14/2 = 7.'
    },
    ttsScript: 'Soal nomor empat puluh tiga. Persamaan tiga k kurang satu per dua sama dengan tujuh. Kalikan tujuh dengan dua menjadi empat belas, tambah satu menjadi lima belas, lalu bagi tiga hasilnya lima.',
    hint: 'Kalikan 7 dengan penyebut 2 terlebih dahulu.'
  },
  {
    id: 44,
    category: 'fungsi-konsep',
    difficulty: 'Mudah',
    stimulusType: 'diagram',
    stimulusTitle: 'Menentukan Jenis Fungsi',
    stimulusContent: 'Sebuah relasi memasangkan himpunan anak ke himpunan warna baju yang dipakai: {Andi -> Biru, Budi -> Merah, Caca -> Biru}.',
    question: 'Berdasarkan jenis pemetaannya, relasi tersebut termasuk ke dalam...',
    options: [
      { id: 'A', text: 'Fungsi banyak-ke-satu', isCorrect: true, feedback: 'Tepat sekali! Andi dan Caca (banyak anggota asal) memilih baju yang sama yaitu Biru (satu anggota kawan). Jadi disebut fungsi banyak-ke-satu (many-to-one).' },
      { id: 'B', text: 'Fungsi satu-satu (korespondensi satu-satu)', isCorrect: false, feedback: 'Bukan satu-satu karena warna Biru dipasangkan dengan 2 anak sekaligus.' },
      { id: 'C', text: 'Bukan fungsi sama sekali', isCorrect: false, feedback: 'Ini tetap sah sebagai fungsi karena setiap anak hanya memakai tepat satu warna baju.' },
      { id: 'D', text: 'Relasi satu-ke-banyak', isCorrect: false, feedback: 'Satu anak tidak memakai banyak warna baju sekaligus.' },
      { id: 'E', text: 'Relasi kosong', isCorrect: false, feedback: 'Ada anggota dan pasangannya.' }
    ],
    caraNormal: {
      diketahui: 'Domain: {Andi, Budi, Caca}. Pasangan: (Andi, Biru), (Budi, Merah), (Caca, Biru).',
      ditanya: 'Jenis fungsi.',
      konsep: 'Jika ada lebih dari satu elemen domain yang memiliki peta sama di kodomain, fungsi tersebut berjenis banyak-ke-satu (surjektif / umum).',
      langkah: [
        'Setiap anak tepat punya 1 baju -> Sah Fungsi.',
        'Warna Biru dipilih oleh 2 anak (Andi dan Caca) -> Banyak ke satu.'
      ],
      kesimpulan: 'Merupakan fungsi banyak-ke-satu.'
    },
    caraCepat: {
      trik: 'Lihat Peta yang Sama',
      alasan: 'Dua orang memilih tujuan yang sama di kodomain.',
      eksekusi: 'Banyak orang -> satu warna = banyak-ke-satu.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['Andi', 'Budi', 'Caca'],
      kodomain: ['Biru', 'Merah'],
      arrows: [
        { from: 'Andi', to: 'Biru' },
        { from: 'Budi', to: 'Merah' },
        { from: 'Caca', to: 'Biru' }
      ],
      keterangan: 'Dua panah dari Andi dan Caca bertemu di warna Biru.'
    },
    ttsScript: 'Soal nomor empat puluh empat. Relasi tersebut merupakan fungsi banyak ke satu, karena dua anak yaitu Andi dan Caca memilih warna baju yang sama yaitu biru.',
    hint: 'Berapa anak yang memilih warna biru?'
  },
  {
    id: 45,
    category: 'fungsi-konsep',
    difficulty: 'Sulit',
    stimulusType: 'teks',
    stimulusTitle: 'Menentukan Rumus f(x) Kuadratik Sederhana',
    stimulusContent: 'Fungsi f(x) = x² - 3x + c memiliki nilai f(4) = 9.',
    question: 'Nilai c pada rumus fungsi tersebut adalah...',
    options: [
      { id: 'A', text: '5', isCorrect: true, feedback: 'Hebat sekali! f(4) = 4² - 3(4) + c = 16 - 12 + c = 4 + c. Karena f(4) = 9, maka 4 + c = 9 -> c = 9 - 4 = 5!' },
      { id: 'B', text: '3', isCorrect: false, feedback: '4 + 3 = 7, bukan 9.' },
      { id: 'C', text: '-5', isCorrect: false, feedback: 'Salah tanda konstanta.' },
      { id: 'D', text: '1', isCorrect: false, feedback: 'Periksa kembali perhitungan 4² - 3(4).' },
      { id: 'E', text: '7', isCorrect: false, feedback: 'Terlalu besar.' }
    ],
    caraNormal: {
      diketahui: 'f(x) = x² - 3x + c dan f(4) = 9.',
      ditanya: 'Nilai konstanta c.',
      konsep: 'Substitusi x = 4 ke rumus fungsi.',
      langkah: [
        'f(4) = (4)² - 3(4) + c',
        '9 = 16 - 12 + c',
        '9 = 4 + c',
        'c = 9 - 4 = 5'
      ],
      kesimpulan: 'Nilai c adalah 5.'
    },
    caraCepat: {
      trik: 'Hitung Nilai Parsial Saat x = 4',
      alasan: '4² - 3(4) = 16 - 12 = 4.',
      eksekusi: '4 + c = 9 -> c = 5.'
    },
    buktiVisual: {
      type: 'mesin',
      machineFormula: 'f(x) = x² - 3x + 5',
      machineInputs: [{ x: 4, fx: 9 }],
      keterangan: '4 dikuadratkan (16), dikurang 12 (4), ditambah 5 menghasilkan 9.'
    },
    ttsScript: 'Soal nomor empat puluh lima. Empat kuadrat dikurang tiga kali empat hasilnya empat. Agar menjadi sembilan, nilai c haruslah lima.',
    hint: 'Hitung 4² - 3(4), lalu cari berapa yang harus ditambahkan agar menjadi 9.'
  }
];
