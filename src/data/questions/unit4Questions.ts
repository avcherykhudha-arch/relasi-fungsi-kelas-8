/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../../types';

export const UNIT_4_QUESTIONS: Question[] = [
  {
    id: 46,
    category: 'kontekstual-hots',
    difficulty: 'Sedang',
    stimulusType: 'teks',
    stimulusTitle: 'Tarif Taksi Mister Jo',
    stimulusContent: 'Sebuah perusahaan taksi menetapkan tarif awal (buka pintu) sebesar Rp8.000 dan tarif per kilometer berikutnya sebesar Rp4.500. Kiko menaiki taksi tersebut sejauh 12 km.',
    question: 'Berapakah total biaya yang harus dibayar Kiko?',
    options: [
      { id: 'A', text: 'Rp62.000', isCorrect: true, feedback: 'Tepat sekali! Total = Rp8.000 + (12 x Rp4.500) = Rp8.000 + Rp54.000 = Rp62.000.' },
      { id: 'B', text: 'Rp54.000', isCorrect: false, feedback: 'Lupa menambahkan biaya tarif awal buka pintu (Rp8.000).' },
      { id: 'C', text: 'Rp60.000', isCorrect: false, feedback: 'Periksa kembali perkalian 12 dengan 4.500.' },
      { id: 'D', text: 'Rp70.000', isCorrect: false, feedback: 'Terlalu mahal.' },
      { id: 'E', text: 'Rp58.500', isCorrect: false, feedback: 'Kurang tepat perhitungannya.' }
    ],
    caraNormal: {
      diketahui: 'Tarif awal b = Rp8.000, tarif per km a = Rp4.500, jarak tempuh x = 12 km.',
      ditanya: 'Total biaya f(12).',
      konsep: 'Model fungsi linier f(x) = ax + b.',
      langkah: [
        'Bentuk rumus fungsi: f(x) = 4500x + 8000.',
        'Substitusikan x = 12: f(12) = (4500 × 12) + 8000.',
        '4500 × 12 = 54.000.',
        'f(12) = 54.000 + 8.000 = 62.000.'
      ],
      kesimpulan: 'Total biaya yang harus dibayar adalah Rp62.000.'
    },
    caraCepat: {
      trik: 'Kalikan Lalu Jumlahkan Awal',
      alasan: '12 x 4.500 = 54.000.',
      eksekusi: '54.000 + 8.000 = 62.000.'
    },
    buktiVisual: {
      type: 'tabel',
      tableData: [
        { x: 0, y: 8000 },
        { x: 5, y: 30500 },
        { x: 10, y: 53000 },
        { x: 12, y: 62000 }
      ],
      keterangan: 'Saat x=0 biaya Rp8.000, dan pada jarak 12 km biaya mencapai Rp62.000.'
    },
    ttsScript: 'Soal nomor empat puluh enam. Tarif taksi buka pintu delapan ribu rupiah ditambah empat ribu lima ratus per kilometer. Untuk dua belas kilometer, biayanya adalah lima puluh empat ribu ditambah delapan ribu sama dengan enam puluh dua ribu rupiah.',
    hint: 'Kalikan 12 dengan 4.500, lalu tambahkan tarif awal 8.000.'
  },
  {
    id: 47,
    category: 'kontekstual-hots',
    difficulty: 'HOTS',
    stimulusType: 'teks',
    stimulusTitle: 'Menghitung Jarak Maksimal dari Saldo',
    stimulusContent: 'Berdasarkan tarif taksi pada soal sebelumnya: f(x) = 4500x + 8000. Mimi hanya membawa uang pas sebesar Rp80.000.',
    question: 'Jarak terjauh dalam bilangan bulat (km) yang dapat ditempuh oleh Mimi adalah...',
    options: [
      { id: 'A', text: '16 km', isCorrect: true, feedback: 'Luar biasa! 4500x + 8000 ≤ 80.000 -> 4500x ≤ 72.000 -> x ≤ 72.000 / 4500 = 16 km tepat!' },
      { id: 'B', text: '15 km', isCorrect: false, feedback: 'Mimi masih punya sisa uang cukup untuk menempuh 16 km.' },
      { id: 'C', text: '17 km', isCorrect: false, feedback: 'Untuk 17 km biayanya Rp84.500, uang Mimi tidak cukup.' },
      { id: 'D', text: '18 km', isCorrect: false, feedback: 'Biaya akan melebihi saldo Mimi.' },
      { id: 'E', text: '14 km', isCorrect: false, feedback: 'Bukan jarak terjauh.' }
    ],
    caraNormal: {
      diketahui: 'f(x) = 4500x + 8000, Saldo maksimal = Rp80.000.',
      ditanya: 'Jarak terjauh x.',
      konsep: 'Pertidaksamaan linier: f(x) ≤ 80.000.',
      langkah: [
        '4500x + 8000 ≤ 80.000',
        '4500x ≤ 80.000 - 8000',
        '4500x ≤ 72.000',
        'x ≤ 72.000 / 4500 = 16 km'
      ],
      kesimpulan: 'Jarak terjauh yang dapat ditempuh adalah 16 km.'
    },
    caraCepat: {
      trik: 'Kurangkan Awal Lalu Bagi',
      alasan: 'Uang yang tersedia untuk jarak perjalanan adalah 80.000 - 8.000 = 72.000.',
      eksekusi: '72.000 : 4.500 = 16 km tepat.'
    },
    buktiVisual: {
      type: 'mesin',
      machineFormula: 'f(x) = 4500x + 8000 ≤ 80.000',
      machineInputs: [{ x: 16, fx: 80000 }],
      keterangan: 'Nilai input x = 16 menghasilkan total pas Rp80.000.'
    },
    ttsScript: 'Soal nomor empat puluh tujuh. Kurangkan delapan puluh ribu dengan delapan ribu menjadi tujuh puluh dua ribu rupiah. Dibagi empat ribu lima ratus menghasilkan tepat enam belas kilometer.',
    hint: 'Kurangkan uang Mimi dengan 8.000, lalu bagi sisanya dengan 4.500.'
  },
  {
    id: 48,
    category: 'kontekstual-hots',
    difficulty: 'Sedang',
    stimulusType: 'tabel',
    stimulusTitle: 'Biaya Cetak Kaos Kelas',
    stimulusContent: 'Percetakan Kaos "Kreasi Imut" mematok harga cetak kaos kelas sesuai tabel:\n| Jumlah Kaos (x) | 10 | 20 | 30 |\n| Total Biaya (Rp) | 550.000 | 1.050.000 | 1.550.000 |',
    question: 'Rumus fungsi biaya cetak B(x) untuk x buah kaos adalah...',
    options: [
      { id: 'A', text: 'B(x) = 50.000x + 50.000', isCorrect: true, feedback: 'Tepat sekali! Kenaikan 10 kaos biayanya bertambah Rp500.000 (Rp50.000 per kaos). Untuk x=10: 50.000(10) + 50.000 = 550.000.' },
      { id: 'B', text: 'B(x) = 55.000x', isCorrect: false, feedback: 'Untuk x=20: 55.000(20) = 1.100.000, padahal di tabel 1.050.000.' },
      { id: 'C', text: 'B(x) = 50.000x + 100.000', isCorrect: false, feedback: 'Untuk x=10: 500.000 + 100.000 = 600.000, tidak cocok dengan tabel.' },
      { id: 'D', text: 'B(x) = 45.000x + 100.000', isCorrect: false, feedback: 'Kenaikan per kaos bukan 45.000.' },
      { id: 'E', text: 'B(x) = 60.000x - 50.000', isCorrect: false, feedback: 'Tidak sesuai dengan data tabel.' }
    ],
    caraNormal: {
      diketahui: 'Titik (10, 550.000) dan (20, 1.050.000).',
      ditanya: 'Rumus linier B(x) = ax + b.',
      konsep: 'Gradien tarif a = ΔB / Δx.',
      langkah: [
        'a = (1.050.000 - 550.000) / (20 - 10) = 500.000 / 10 = 50.000.',
        'Substitusi x = 10: 550.000 = 50.000(10) + b -> 550.000 = 500.000 + b -> b = 50.000.',
        'Rumus: B(x) = 50.000x + 50.000.'
      ],
      kesimpulan: 'Rumus biaya adalah B(x) = 50.000x + 50.000.'
    },
    caraCepat: {
      trik: 'Trik Biaya Variabel per Satuan',
      alasan: 'Tambah 10 kaos nambah 500 ribu, berarti 50 ribu per kaos.',
      eksekusi: 'Biaya dasar = 550.000 - (10 x 50.000) = 50.000. Rumus: 50.000x + 50.000.'
    },
    buktiVisual: {
      type: 'tabel',
      tableData: [
        { x: 10, y: 550000 },
        { x: 20, y: 1050000 },
        { x: 30, y: 1550000 }
      ],
      keterangan: 'Tiap kenaikan 10 kaos, biaya bertambah tepat Rp500.000.'
    },
    ttsScript: 'Soal nomor empat puluh delapan. Setiap penambahan sepuluh kaos, biaya bertambah lima ratus ribu rupiah, atau lima puluh ribu rupiah per kaos. Rumusnya adalah B dari x sama dengan lima puluh ribu x ditambah lima puluh ribu.',
    hint: 'Berapa pertambahan biaya dari 10 ke 20 kaos?'
  },
  {
    id: 49,
    category: 'kontekstual-hots',
    difficulty: 'HOTS',
    stimulusType: 'teks',
    stimulusTitle: 'Sandi Rahasia Pemetaan',
    stimulusContent: 'Dalam klub matematika Mister Jo, setiap huruf alfabet diubah menjadi angka urutannya (A=1, B=2, C=3, ..., Z=26), kemudian disandikan dengan rumus fungsi: f(x) = 2x + 1. Jika sandi yang diterima adalah angka 19, huruf asli apakah itu?',
    question: 'Huruf asli yang dikirimkan adalah...',
    options: [
      { id: 'A', text: 'I', isCorrect: true, feedback: 'Hebat sekali! f(x) = 2x + 1 = 19 -> 2x = 18 -> x = 9. Huruf ke-9 dalam alfabet adalah I!' },
      { id: 'B', text: 'H', isCorrect: false, feedback: 'H adalah huruf ke-8 (f(8) = 17).' },
      { id: 'C', text: 'J', isCorrect: false, feedback: 'J adalah huruf ke-10 (f(10) = 21).' },
      { id: 'D', text: 'K', isCorrect: false, feedback: 'K adalah huruf ke-11.' },
      { id: 'E', text: 'G', isCorrect: false, feedback: 'G adalah huruf ke-7.' }
    ],
    caraNormal: {
      diketahui: 'f(x) = 2x + 1. Nilai sandi f(x) = 19. Pemetaan alfabet A=1, B=2, ...',
      ditanya: 'Huruf asli pembuat sandi.',
      konsep: 'Fungsi invers untuk memecahkan sandi kriptografi.',
      langkah: [
        '2x + 1 = 19',
        '2x = 19 - 1 = 18',
        'x = 18 / 2 = 9',
        'Cari huruf ke-9 dalam abjad: A(1), B(2), C(3), D(4), E(5), F(6), G(7), H(8), I(9).'
      ],
      kesimpulan: 'Huruf aslinya adalah I.'
    },
    caraCepat: {
      trik: 'Dekodekan Cepat',
      alasan: '(19 - 1) / 2 = 9.',
      eksekusi: 'Huruf ke-9 = I.'
    },
    buktiVisual: {
      type: 'mesin',
      machineFormula: 'f(x) = 2x + 1 = 19 -> x = 9 (Huruf I)',
      machineInputs: [{ x: 9, fx: 19 }],
      keterangan: 'Huruf I (angka 9) diproses mesin 2(9)+1 keluar sebagai 19.'
    },
    ttsScript: 'Soal nomor empat puluh sembilan. Sembilan belas dikurangi satu sama dengan delapan belas, dibagi dua sama dengan sembilan. Huruf kesembilan dalam alfabet adalah huruf I.',
    hint: 'Kurangkan 19 dengan 1, bagi dengan 2, lalu cari huruf ke berapa hasil tersebut.'
  },
  {
    id: 50,
    category: 'kontekstual-hots',
    difficulty: 'HOTS',
    stimulusType: 'grafik',
    stimulusTitle: 'Uji Garis Vertikal (Vertical Line Test)',
    stimulusContent: 'Mister Jo menampilkan lima gambar bentuk kurva pada bidang kartesius: (1) Lingkaran, (2) Garis lurus miring, (3) Kurva parabola tertidur ke kanan (membuka ke samping), (4) Kurva berbentuk huruf S tegak.',
    question: 'Berdasarkan Uji Garis Vertikal, manakah yang MERUPAKAN fungsi y = f(x)?',
    options: [
      { id: 'A', text: 'Hanya (2) Garis lurus miring', isCorrect: true, feedback: 'Tepat sekali! Pada garis lurus miring, setiap garis vertikal hanya memotong tepat di satu titik. Lingkaran memotong di 2 titik, parabola tertidur memotong di 2 titik, dan kurva S memotong di 3 titik!' },
      { id: 'B', text: '(1) dan (2)', isCorrect: false, feedback: 'Lingkaran bukan fungsi karena garis vertikal memotong bagian atas dan bawah.' },
      { id: 'C', text: '(2) dan (3)', isCorrect: false, feedback: 'Parabola tertidur memotong di dua titik (atas dan bawah).' },
      { id: 'D', text: '(1), (2), dan (3)', isCorrect: false, feedback: 'Hanya garis lurus miring yang memenuhi.' },
      { id: 'E', text: 'Semuanya merupakan fungsi', isCorrect: false, feedback: 'Tidak semua kurva adalah fungsi.' }
    ],
    caraNormal: {
      diketahui: 'Empat bentuk kurva.',
      ditanya: 'Kurva yang memenuhi syarat fungsi y = f(x).',
      konsep: 'Uji Garis Vertikal: jika sembarang garis vertikal x = c memotong kurva paling banyak di satu titik, maka kurva adalah fungsi.',
      langkah: [
        'Lingkaran: garis vertikal memotong di 2 titik -> Bukan fungsi.',
        'Garis lurus miring: garis vertikal selalu memotong tepat di 1 titik -> FUNGSI.',
        'Parabola tidur (x = y²): memotong di 2 titik -> Bukan fungsi.',
        'Kurva S tegak: memotong di 3 titik -> Bukan fungsi.'
      ],
      kesimpulan: 'Hanya garis lurus miring (2) yang merupakan fungsi.'
    },
    caraCepat: {
      trik: 'Tarik Garis Vertikal Imajiner',
      alasan: 'Garis tegak tidak boleh menembus kurva lebih dari 1 kali.',
      eksekusi: 'Hanya garis lurus miring yang dipotong tepat satu kali.'
    },
    buktiVisual: {
      type: 'koordinat',
      tableData: [
        { x: -2, y: -1 },
        { x: 0, y: 1 },
        { x: 2, y: 3 },
        { x: 4, y: 5 }
      ],
      keterangan: 'Garis lurus miring memotong setiap nilai x tepat satu kali.'
    },
    ttsScript: 'Soal nomor lima puluh. Berdasarkan uji garis vertikal, hanya garis lurus miring yang merupakan fungsi, karena garis tegak memotong kurva tepat di satu titik.',
    hint: 'Bayangkan garis tegak lurus ke atas dan bawah: apakah menabrak grafik lebih dari 1 kali?'
  },
  {
    id: 51,
    category: 'kontekstual-hots',
    difficulty: 'HOTS',
    stimulusType: 'teks',
    stimulusTitle: 'Penyusutan Nilai Mesin Usaha',
    stimulusContent: 'Sebuah printer 3D dibeli seharga Rp12.000.000. Setiap tahun, nilai printer mengalami penyusutan harga sebesar Rp1.500.000. Nilai printer setelah t tahun dirumuskan dengan V(t) = 12.000.000 - 1.500.000t.',
    question: 'Setelah berapa tahun nilai printer tersebut menjadi Rp3.000.000?',
    options: [
      { id: 'A', text: '6 tahun', isCorrect: true, feedback: 'Hebat sekali! 12.000.000 - 1.500.000t = 3.000.000 -> 1.500.000t = 9.000.000 -> t = 9.000.000 / 1.500.000 = 6 tahun!' },
      { id: 'B', text: '5 tahun', isCorrect: false, feedback: 'Setelah 5 tahun nilainya masih Rp4.500.000.' },
      { id: 'C', text: '7 tahun', isCorrect: false, feedback: 'Setelah 7 tahun nilainya tinggal Rp1.500.000.' },
      { id: 'D', text: '8 tahun', isCorrect: false, feedback: 'Setelah 8 tahun nilainya Rp0.' },
      { id: 'E', text: '4 tahun', isCorrect: false, feedback: 'Setelah 4 tahun nilainya Rp6.000.000.' }
    ],
    caraNormal: {
      diketahui: 'V(t) = 12.000.000 - 1.500.000t. Nilai target V(t) = 3.000.000.',
      ditanya: 'Waktu t dalam tahun.',
      konsep: 'Persamaan linier satu variabel.',
      langkah: [
        '12.000.000 - 1.500.000t = 3.000.000',
        '1.500.000t = 12.000.000 - 3.000.000',
        '1.500.000t = 9.000.000',
        't = 9.000.000 / 1.500.000 = 6 tahun'
      ],
      kesimpulan: 'Printer berharga Rp3.000.000 setelah 6 tahun.'
    },
    caraCepat: {
      trik: 'Hitung Penurunan Total',
      alasan: 'Penurunan harga total yang terjadi = 12 juta - 3 juta = 9 juta.',
      eksekusi: '9 juta / 1,5 juta = 6 tahun.'
    },
    buktiVisual: {
      type: 'tabel',
      tableData: [
        { x: 0, y: 12000000 },
        { x: 2, y: 9000000 },
        { x: 4, y: 6000000 },
        { x: 6, y: 3000000 }
      ],
      keterangan: 'Tampak pada t = 6 tahun nilai tepat tersisa Rp3.000.000.'
    },
    ttsScript: 'Soal nomor lima puluh satu. Dua belas juta dikurangi tiga juta adalah sembilan juta rupiah. Dibagi satu juta lima ratus ribu per tahun menghasilkan waktu enam tahun.',
    hint: 'Berapa total nilai harga yang berkurang dari 12 juta menjadi 3 juta?'
  },
  {
    id: 52,
    category: 'kontekstual-hots',
    difficulty: 'Sedang',
    stimulusType: 'pola',
    stimulusTitle: 'Pola Susunan Batang Korek Api',
    stimulusContent: 'Budi menyusun batang korek api membentuk pola persegi berderet:\n• Pola 1: 1 persegi butuh 4 batang\n• Pola 2: 2 persegi berderet butuh 7 batang\n• Pola 3: 3 persegi berderet butuh 10 batang',
    question: 'Rumus fungsi f(n) untuk menentukan banyak batang korek api pada pola ke-n adalah...',
    options: [
      { id: 'A', text: 'f(n) = 3n + 1', isCorrect: true, feedback: 'Tepat sekali! Beda tiap pola adalah 3 batang (3n). Untuk n=1: 3(1)+1 = 4. Rumus f(n) = 3n + 1.' },
      { id: 'B', text: 'f(n) = 4n', isCorrect: false, feedback: 'Untuk n=2: 4(2) = 8, padahal hanya butuh 7 batang (karena ada batang yang berimpit).' },
      { id: 'C', text: 'f(n) = 3n + 2', isCorrect: false, feedback: 'Untuk n=1: 3(1)+2 = 5, padahal hanya butuh 4 batang.' },
      { id: 'D', text: 'f(n) = 2n + 2', isCorrect: false, feedback: 'Untuk n=3: 2(3)+2 = 8, padahal butuh 10 batang.' },
      { id: 'E', text: 'f(n) = 4n - 1', isCorrect: false, feedback: 'Untuk n=1: 4(1)-1 = 3, salah.' }
    ],
    caraNormal: {
      diketahui: 'n = 1 -> 4 batang. n = 2 -> 7 batang. n = 3 -> 10 batang.',
      ditanya: 'Rumus fungsi f(n).',
      konsep: 'Barisan aritmetika dengan beda konstan b = 3.',
      langkah: [
        'Beda b = 7 - 4 = 3 -> koefisien n adalah 3.',
        'f(n) = 3n + c.',
        'Untuk n = 1: 3(1) + c = 4 -> 3 + c = 4 -> c = 1.',
        'Maka rumus f(n) = 3n + 1.'
      ],
      kesimpulan: 'Rumus fungsinya adalah f(n) = 3n + 1.'
    },
    caraCepat: {
      trik: 'Trik Beda Konstan',
      alasan: 'Setiap bertambah 1 persegi, hanya nambah 3 batang baru.',
      eksekusi: 'Pasti 3n. Saat n=1 butuh 4 batang, jadi 3(1) + 1 = 4. Langsung f(n) = 3n + 1!'
    },
    buktiVisual: {
      type: 'tabel',
      tableData: [
        { x: 1, y: 4 },
        { x: 2, y: 7 },
        { x: 3, y: 10 },
        { x: 4, y: 13 }
      ],
      keterangan: 'Tabel menunjukkan pola konstan penambahan 3 batang korek api.'
    },
    ttsScript: 'Soal nomor lima puluh dua. Karena setiap penambahan satu persegi membutuhkan tiga batang tambahan, rumusnya adalah f dari n sama dengan tiga n ditambah satu.',
    hint: 'Hitung selisih dari 4 ke 7 dan 7 ke 10.'
  },
  {
    id: 53,
    category: 'kontekstual-hots',
    difficulty: 'HOTS',
    stimulusType: 'teks',
    stimulusTitle: 'Konversi Suhu Reamur ke Celcius',
    stimulusContent: 'Hubungan antara skala suhu Celcius (C) dan Reamur (R) dapat dinyatakan sebagai fungsi C(R) = (5/4)R. Di sebuah laboratorium, termometer Reamur menunjukkan angka 28°R.',
    question: 'Suhu tersebut jika dinyatakan dalam derajat Celcius adalah...',
    options: [
      { id: 'A', text: '35°C', isCorrect: true, feedback: 'Benar sekali! C(28) = (5/4) x 28 = 5 x 7 = 35°C.' },
      { id: 'B', text: '32°C', isCorrect: false, feedback: 'Periksa kembali perhitungan (5/4) dikali 28.' },
      { id: 'C', text: '30°C', isCorrect: false, feedback: 'Kurang tepat perhitungannya.' },
      { id: 'D', text: '40°C', isCorrect: false, feedback: 'Terlalu tinggi.' },
      { id: 'E', text: '22,4°C', isCorrect: false, feedback: 'Itu adalah hasil pembagian terbalik (4/5 x 28).' }
    ],
    caraNormal: {
      diketahui: 'C(R) = (5/4)R. Input R = 28°R.',
      ditanya: 'Suhu Celcius C(28).',
      konsep: 'Substitusi nilai ke fungsi pecahan linier.',
      langkah: [
        'C(28) = (5/4) × 28',
        '28 dibagi 4 = 7',
        '5 × 7 = 35°C'
      ],
      kesimpulan: 'Suhu dalam derajat Celcius adalah 35°C.'
    },
    caraCepat: {
      trik: 'Bagi Dulu Baru Kali',
      alasan: '28 : 4 = 7, lalu 7 x 5 = 35.',
      eksekusi: 'Langsung dapatkan 35°C.'
    },
    buktiVisual: {
      type: 'mesin',
      machineFormula: 'C(R) = (5/4)R',
      machineInputs: [{ x: 28, fx: 35 }],
      keterangan: 'Input 28°R diproses menjadi 35°C.'
    },
    ttsScript: 'Soal nomor lima puluh tiga. Dua puluh delapan dibagi empat sama dengan tujuh. Tujuh dikali lima sama dengan tiga puluh lima derajat Celcius.',
    hint: 'Bagi 28 dengan 4 terlebih dahulu, lalu kalikan hasilnya dengan 5.'
  },
  {
    id: 54,
    category: 'kontekstual-hots',
    difficulty: 'HOTS',
    stimulusType: 'teks',
    stimulusTitle: 'Analisis Kesalahan Penalaran Siswa',
    stimulusContent: 'Doni menyatakan: "Jika f(x) = 2x + 3, maka f(a + b) pasti sama dengan f(a) + f(b) karena f dapat didistribusikan ke dalam tanda kurung seperti perkalian biasa."',
    question: 'Bagaimanakah penilaian yang benar terhadap pernyataan Doni?',
    options: [
      { id: 'A', text: 'Salah, karena f(x) adalah notasi pemetaan fungsi, bukan variabel perkalian biasa.', isCorrect: true, feedback: 'Luar biasa! f(a+b) = 2(a+b)+3 = 2a+2b+3. Sedangkan f(a)+f(b) = (2a+3)+(2b+3) = 2a+2b+6 (berbeda 3). f bukan huruf pengali!' },
      { id: 'B', text: 'Benar, karena sifat distributif berlaku untuk semua simbol matematika.', isCorrect: false, feedback: 'Notasi fungsi f(...) bukan perkalian aljabar.' },
      { id: 'C', text: 'Benar, jika nilai a dan b positif.', isCorrect: false, feedback: 'Tetap tidak sama berapapun nilai positifnya (selalu selisih 3).' },
      { id: 'D', text: 'Salah, hanya jika f(x) memiliki pangkat dua.', isCorrect: false, feedback: 'Pada fungsi linier dengan konstanta b ≠ 0 pun sudah tidak sama.' },
      { id: 'E', text: 'Benar untuk semua fungsi linier.', isCorrect: false, feedback: 'Hanya benar jika konstanta c = 0 (fungsi linier homogen f(x)=ax).' }
    ],
    caraNormal: {
      diketahui: 'Pernyataan Doni: f(a + b) = f(a) + f(b) pada f(x) = 2x + 3.',
      ditanya: 'Analisis kebenaran logika.',
      konsep: 'Notasi fungsi f(x) bukan operasi perkalian f × x.',
      langkah: [
        'Hitung ruas kiri: f(a + b) = 2(a + b) + 3 = 2a + 2b + 3.',
        'Hitung ruas kanan: f(a) + f(b) = (2a + 3) + (2b + 3) = 2a + 2b + 6.',
        'Bandingkan: 2a + 2b + 3 ≠ 2a + 2b + 6 (ada selisih konstanta 3).'
      ],
      kesimpulan: 'Pernyataan Doni salah secara konsep matematis.'
    },
    caraCepat: {
      trik: 'Uji dengan Angka Sederhana',
      alasan: 'Ambil a = 1, b = 1. a + b = 2.',
      eksekusi: 'f(2) = 2(2)+3 = 7. f(1) = 5. f(1)+f(1) = 10. Terbukti 7 ≠ 10!'
    },
    buktiVisual: {
      type: 'mesin',
      machineFormula: 'f(a + b) ≠ f(a) + f(b)',
      keterangan: 'f(2) = 7, sedangkan f(1) + f(1) = 10. Doni keliru menganggap f sebagai pengali.'
    },
    ttsScript: 'Soal nomor lima puluh empat. Pernyataan Doni salah. Lambang f dari x adalah notasi pemetaan fungsi, bukan huruf pengali variabel biasa.',
    hint: 'Coba masukkan angka a = 1 dan b = 1 untuk mengujinya.'
  },
  {
    id: 55,
    category: 'kontekstual-hots',
    difficulty: 'Sedang',
    stimulusType: 'teks',
    stimulusTitle: 'Tarif Sewa Lapangan Futsal',
    stimulusContent: 'Sewa lapangan futsal "Juara" memberlakukan aturan tarif: Rp100.000 untuk 1 jam pertama, dan Rp75.000 untuk setiap jam berikutnya. Sebuah tim menyewa lapangan selama 4 jam.',
    question: 'Berapa total biaya sewa yang harus dibayar tim tersebut?',
    options: [
      { id: 'A', text: 'Rp325.000', isCorrect: true, feedback: 'Tepat sekali! Jam pertama = Rp100.000. Tiga jam berikutnya = 3 x Rp75.000 = Rp225.000. Total = Rp100.000 + Rp225.000 = Rp325.000.' },
      { id: 'B', text: 'Rp400.000', isCorrect: false, feedback: 'Itu jika semua jam dihitung Rp100.000.' },
      { id: 'C', text: 'Rp300.000', isCorrect: false, feedback: 'Itu jika 4 jam dikali Rp75.000 tanpa penyesuaian jam pertama.' },
      { id: 'D', text: 'Rp350.000', isCorrect: false, feedback: 'Periksa kembali perhitungan 3 jam berikutnya.' },
      { id: 'E', text: 'Rp375.000', isCorrect: false, feedback: 'Terlalu mahal.' }
    ],
    caraNormal: {
      diketahui: 'Jam ke-1 = Rp100.000. Jam ke-2,3,4 (3 jam tambahan) = Rp75.000/jam.',
      ditanya: 'Total biaya untuk 4 jam.',
      konsep: 'Fungsi linier sepotong: B(t) = 100.000 + 75.000(t - 1) untuk t ≥ 1.',
      langkah: [
        'Jam tambahan = 4 - 1 = 3 jam.',
        'Biaya jam tambahan = 3 × 75.000 = 225.000.',
        'Total biaya = 100.000 + 225.000 = 325.000.'
      ],
      kesimpulan: 'Total biaya adalah Rp325.000.'
    },
    caraCepat: {
      trik: 'Pisahkan Jam Pertama',
      alasan: '100.000 + (3 x 75.000).',
      eksekusi: '100.000 + 225.000 = 325.000.'
    },
    buktiVisual: {
      type: 'tabel',
      tableData: [
        { x: 1, y: 100000 },
        { x: 2, y: 175000 },
        { x: 3, y: 250000 },
        { x: 4, y: 325000 }
      ],
      keterangan: 'Tampak biaya pada jam ke-4 tepat mencapai Rp325.000.'
    },
    ttsScript: 'Soal nomor lima puluh lima. Jam pertama seratus ribu rupiah, ditambah tiga jam berikutnya dikali tujuh puluh lima ribu rupiah sama dengan dua ratus dua puluh lima ribu. Totalnya tiga ratus dua puluh lima ribu rupiah.',
    hint: 'Ingat jam pertama Rp100.000, sisanya 3 jam dikalikan Rp75.000.'
  },
  {
    id: 56,
    category: 'kontekstual-hots',
    difficulty: 'HOTS',
    stimulusType: 'teks',
    stimulusTitle: 'Menentukan Daerah Asal Alami (Natural Domain)',
    stimulusContent: 'Fungsi f dirumuskan dengan f(x) = 12 / (x - 3). Agar f(x) menghasilkan bilangan riil yang terdefinisi dengan baik, himpunan semesta manakah yang harus dihindari?',
    question: 'Nilai x yang TIDAK boleh menjadi anggota domain fungsi f adalah...',
    options: [
      { id: 'A', text: 'x = 3', isCorrect: true, feedback: 'Benar sekali! Jika x = 3, maka penyebut menjadi 3 - 3 = 0. Pembagian dengan angka 0 TIDAK TERDEFINISI dalam matematika!' },
      { id: 'B', text: 'x = 0', isCorrect: false, feedback: 'Untuk x = 0, f(0) = 12 / (-3) = -4 (terdefinisi dengan baik).' },
      { id: 'C', text: 'x = -3', isCorrect: false, feedback: 'Untuk x = -3, f(-3) = 12 / (-6) = -2 (terdefinisi).' },
      { id: 'D', text: 'x = 4', isCorrect: false, feedback: 'Untuk x = 4, f(4) = 12 / 1 = 12 (terdefinisi).' },
      { id: 'E', text: 'Semua bilangan bulat diperbolehkan', isCorrect: false, feedback: 'Angka 3 terlarang karena membuat penyebut nol.' }
    ],
    caraNormal: {
      diketahui: 'f(x) = 12 / (x - 3).',
      ditanya: 'Nilai x yang dilarang pada domain.',
      konsep: 'Pecahan p / q terdefinisi jika dan hanya jika penyebut q ≠ 0.',
      langkah: [
        'Syarat penyebut: x - 3 ≠ 0.',
        'Pindahkan -3 ke ruas kanan: x ≠ 3.'
      ],
      kesimpulan: 'Nilai x yang tidak boleh adalah x = 3.'
    },
    caraCepat: {
      trik: 'Cari Pembuat Nol Penyebut',
      alasan: 'Penyebut tidak boleh sama dengan nol.',
      eksekusi: 'x - 3 = 0 -> x = 3.'
    },
    buktiVisual: {
      type: 'mesin',
      machineFormula: 'f(x) = 12 / (x - 3)',
      machineInputs: [{ x: 3, fx: NaN }],
      keterangan: 'Jika dimasukkan angka 3, mesin membagi dengan 0 dan terjadi error tidak terdefinisi.'
    },
    ttsScript: 'Soal nomor lima puluh enam. Penyebut pecahan tidak boleh sama dengan nol. x kurang tiga sama dengan nol menghasilkan x sama dengan tiga. Jadi angka tiga tidak boleh masuk ke daerah asal.',
    hint: 'Berapa nilai x yang membuat penyebut (x - 3) menjadi 0?'
  },
  {
    id: 57,
    category: 'kontekstual-hots',
    difficulty: 'Sedang',
    stimulusType: 'teks',
    stimulusTitle: 'Model Ketinggian Air Waduk',
    stimulusContent: 'Ketinggian air di pintu waduk saat pintu dibuka berkurang secara teratur mengikuti fungsi h(t) = 150 - 5t, dengan h dalam centimeter dan t dalam menit.',
    question: 'Waktu yang dibutuhkan agar ketinggian air waduk berkurang menjadi 90 cm adalah...',
    options: [
      { id: 'A', text: '12 menit', isCorrect: true, feedback: 'Tepat sekali! 150 - 5t = 90 -> 5t = 150 - 90 = 60 -> t = 60 / 5 = 12 menit!' },
      { id: 'B', text: '10 menit', isCorrect: false, feedback: '150 - 5(10) = 100 cm, belum 90 cm.' },
      { id: 'C', text: '15 menit', isCorrect: false, feedback: '150 - 5(15) = 75 cm.' },
      { id: 'D', text: '8 menit', isCorrect: false, feedback: '150 - 5(8) = 110 cm.' },
      { id: 'E', text: '14 menit', isCorrect: false, feedback: 'Periksa kembali pembagian 60 dengan 5.' }
    ],
    caraNormal: {
      diketahui: 'h(t) = 150 - 5t. Target h(t) = 90.',
      ditanya: 'Waktu t dalam menit.',
      konsep: 'Menyelesaikan persamaan linier.',
      langkah: [
        '150 - 5t = 90',
        '5t = 150 - 90',
        '5t = 60',
        't = 60 / 5 = 12 menit'
      ],
      kesimpulan: 'Dibutuhkan waktu 12 menit.'
    },
    caraCepat: {
      trik: 'Hitung Selisih Ketinggian Lalu Bagi',
      alasan: 'Air berkurang sebanyak 150 - 90 = 60 cm.',
      eksekusi: '60 : 5 = 12 menit.'
    },
    buktiVisual: {
      type: 'tabel',
      tableData: [
        { x: 0, y: 150 },
        { x: 5, y: 125 },
        { x: 10, y: 100 },
        { x: 12, y: 90 }
      ],
      keterangan: 'Pada menit ke-12, ketinggian air tepat berada pada angka 90 cm.'
    },
    ttsScript: 'Soal nomor lima puluh tujuh. Selisih ketinggian adalah seratus lima puluh dikurang sembilan puluh sama dengan enam puluh sentimeter. Dibagi lima sentimeter per menit hasilnya dua belas menit.',
    hint: 'Kurangkan 150 dengan 90, lalu bagi hasilnya dengan 5.'
  },
  {
    id: 58,
    category: 'kontekstual-hots',
    difficulty: 'HOTS',
    stimulusType: 'teks',
    stimulusTitle: 'Masalah Dua Fungsi Bersaing',
    stimulusContent: 'Dua toko menawarkan paket internet:\n• Toko A: Biaya langganan f(x) = 20.000 + 3.000x\n• Toko B: Biaya langganan g(x) = 10.000 + 5.000x\ndi mana x adalah pemakaian dalam Gigabyte (GB).',
    question: 'Pada pemakaian berapa GB biaya kedua toko tersebut bernilai TEPAT SAMA?',
    options: [
      { id: 'A', text: '5 GB', isCorrect: true, feedback: 'Hebat sekali! 20.000 + 3.000x = 10.000 + 5.000x -> 2.000x = 10.000 -> x = 5 GB!' },
      { id: 'B', text: '4 GB', isCorrect: false, feedback: 'Toko A = 32.000, Toko B = 30.000 (tidak sama).' },
      { id: 'C', text: '6 GB', isCorrect: false, feedback: 'Toko A = 38.000, Toko B = 40.000 (tidak sama).' },
      { id: 'D', text: '7 GB', isCorrect: false, feedback: 'Periksa kembali penyamaan kedua fungsi.' },
      { id: 'E', text: '3 GB', isCorrect: false, feedback: 'Toko A = 29.000, Toko B = 25.000.' }
    ],
    caraNormal: {
      diketahui: 'f(x) = 20.000 + 3.000x, g(x) = 10.000 + 5.000x.',
      ditanya: 'Nilai x saat f(x) = g(x).',
      konsep: 'Titik temu (ekuilibrium) dua persamaan linier.',
      langkah: [
        'Samakan: 20.000 + 3.000x = 10.000 + 5.000x',
        'Pindahkan variabel: 5.000x - 3.000x = 20.000 - 10.000',
        '2.000x = 10.000',
        'x = 10.000 / 2.000 = 5 GB'
      ],
      kesimpulan: 'Biaya bernilai sama saat pemakaian 5 GB (keduanya sebesar Rp35.000).'
    },
    caraCepat: {
      trik: 'Selisih Biaya Awal / Selisih Tarif per GB',
      alasan: 'Beda biaya awal = 10.000. Beda tarif per GB = 2.000.',
      eksekusi: '10.000 / 2.000 = 5 GB.'
    },
    buktiVisual: {
      type: 'koordinat',
      tableData: [
        { x: 0, y: 20000 },
        { x: 5, y: 35000 },
        { x: 10, y: 50000 }
      ],
      keterangan: 'Kedua garis fungsi berpotongan tepat di koordinat (5, 35000).'
    },
    ttsScript: 'Soal nomor lima puluh delapan. Samakan kedua persamaan fungsi. Sepuluh ribu dibagi dua ribu menghasilkan pemakaian tepat lima Gigabyte.',
    hint: 'Samakan kedua rumus: 20.000 + 3.000x = 10.000 + 5.000x.'
  },
  {
    id: 59,
    category: 'kontekstual-hots',
    difficulty: 'HOTS',
    stimulusType: 'teks',
    stimulusTitle: 'Penalaran Relasi Kuadrat Terbalik',
    stimulusContent: 'Diketahui relasi R dari himpunan bilangan bulat A ke B didefinisikan dengan R = {(x, y) | x² + y² = 25}.',
    question: 'Jika x = 3, nilai-nilai y yang mungkin berpasangan dengan x adalah...',
    options: [
      { id: 'A', text: '4 dan -4', isCorrect: true, feedback: 'Tepat sekali! 3² + y² = 25 -> 9 + y² = 25 -> y² = 16 -> y = √16 = ±4. Jadi y bisa bernilai 4 atau -4!' },
      { id: 'B', text: 'Hanya 4', isCorrect: false, feedback: '(-4)² juga menghasilkan 16, jadi -4 juga pasangan yang sah.' },
      { id: 'C', text: 'Hanya -4', isCorrect: false, feedback: 'Nilai positif 4 juga memenuhi persamaan.' },
      { id: 'D', text: '5 dan -5', isCorrect: false, feedback: '3² + 5² = 9 + 25 = 34, bukan 25.' },
      { id: 'E', text: '16 dan -16', isCorrect: false, feedback: 'Itu adalah nilai y², belum diakarkan.' }
    ],
    caraNormal: {
      diketahui: 'x² + y² = 25. Nilai x = 3.',
      ditanya: 'Nilai y yang memenuhi.',
      konsep: 'Persamaan lingkaran x² + y² = r².',
      langkah: [
        'Substitusi x = 3: 3² + y² = 25',
        '9 + y² = 25',
        'y² = 25 - 9 = 16',
        'y = ±√16 = 4 atau -4'
      ],
      kesimpulan: 'Nilai y yang mungkin adalah 4 dan -4.'
    },
    caraCepat: {
      trik: 'Tripel Pythagoras (3, 4, 5)',
      alasan: '3² + 4² = 5² = 25. Karena bentuk kuadrat, tanda positif dan negatif keduanya berlaku.',
      eksekusi: 'y = ±4.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['3'],
      kodomain: ['4', '-4'],
      arrows: [
        { from: '3', to: '4' },
        { from: '3', to: '-4' }
      ],
      keterangan: 'Angka 3 memanah ke 4 dan -4, membuktikan relasi lingkaran ini bukan fungsi.'
    },
    ttsScript: 'Soal nomor lima puluh sembilan. Tiga kuadrat adalah sembilan. Dua puluh lima dikurang sembilan sama dengan enam belas. Akar dari enam belas adalah positif empat dan negatif empat.',
    hint: 'Ganti x dengan 3: 9 + y² = 25. Berapa kuadrat dari y?'
  },
  {
    id: 60,
    category: 'kontekstual-hots',
    difficulty: 'HOTS',
    stimulusType: 'teks',
    stimulusTitle: 'Penerapan Fungsi Efisiensi Energi',
    stimulusContent: 'Sebuah panel surya portabel milik Mister Jo menghasilkan daya listrik P(t) = -t² + 8t + 20 (dalam Watt), di mana t menyatakan waktu dalam jam (0 ≤ t ≤ 8) terhitung sejak pukul 08.00 pagi.',
    question: 'Daya listrik maksimum yang dapat dihasilkan oleh panel surya tersebut adalah...',
    options: [
      { id: 'A', text: '36 Watt', isCorrect: true, feedback: 'Luar biasa! Puncak fungsi kuadrat terjadi saat t = -b/(2a) = -8 / (2 x (-1)) = 4 jam (pukul 12.00). Daya maksimum = -(4)² + 8(4) + 20 = -16 + 32 + 20 = 36 Watt!' },
      { id: 'B', text: '32 Watt', isCorrect: false, feedback: 'Periksa kembali perhitungan substitusi saat t = 4.' },
      { id: 'C', text: '40 Watt', isCorrect: false, feedback: 'Terlalu besar.' },
      { id: 'D', text: '28 Watt', isCorrect: false, feedback: 'Itu daya saat t = 1 atau t = 7.' },
      { id: 'E', text: '20 Watt', isCorrect: false, feedback: 'Itu daya awal saat t = 0.' }
    ],
    caraNormal: {
      diketahui: 'P(t) = -t² + 8t + 20. a = -1, b = 8, c = 20.',
      ditanya: 'Daya maksimum (nilai optimum fungsi kuadrat).',
      konsep: 'Sumbu simetri t_puncak = -b / (2a), lalu substitusikan untuk nilai maksimum.',
      langkah: [
        't_puncak = -8 / (2 × (-1)) = -8 / -2 = 4 jam.',
        'P_maks = P(4) = -(4)² + 8(4) + 20.',
        'P_maks = -16 + 32 + 20.',
        'P_maks = 16 + 20 = 36 Watt.'
      ],
      kesimpulan: 'Daya listrik maksimum yang dihasilkan adalah 36 Watt.'
    },
    caraCepat: {
      trik: 'Rumus Nilai Optimum D / (-4a)',
      alasan: 'D = b² - 4ac = 64 - 4(-1)(20) = 64 + 80 = 144.',
      eksekusi: 'Nilai optimum = 144 / (-4 x (-1)) = 144 / 4 = 36 Watt!'
    },
    buktiVisual: {
      type: 'tabel',
      tableData: [
        { x: 2, y: 32 },
        { x: 3, y: 35 },
        { x: 4, y: 36 },
        { x: 5, y: 35 },
        { x: 6, y: 32 }
      ],
      keterangan: 'Tabel membuktikan nilai puncak tertinggi berada pada t = 4 dengan daya 36 Watt.'
    },
    ttsScript: 'Soal nomor enam puluh. Waktu puncak terjadi pada t sama dengan empat jam. Masukkan empat ke rumus: minus enam belas ditambah tiga puluh dua ditambah dua puluh menghasilkan daya maksimum tiga puluh enam Watt.',
    hint: 'Cari waktu puncak t = -b / (2a) terlebih dahulu, lalu masukkan nilainya ke rumus P(t).'
  }
];
