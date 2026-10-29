/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../../types';

export const UNIT_1_QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'relasi-konsep',
    difficulty: 'Mudah',
    stimulusType: 'teks',
    stimulusTitle: 'Pilihan Ekskul Siswa',
    stimulusContent: 'Dalam suatu kelas, terdapat tiga siswa: Andi, Budi, dan Citra. Andi memilih ekskul Pramuka dan Futsal. Budi memilih ekskul Musik. Citra tidak memilih ekskul apa pun karena fokus olimpiade sains.',
    question: 'Berdasarkan cerita di atas, apakah hubungan antara himpunan siswa dan himpunan ekstrakurikuler merupakan suatu relasi?',
    options: [
      { id: 'A', text: 'Ya, merupakan relasi karena terdapat aturan pengait yang jelas yaitu "memilih ekskul".', isCorrect: true, feedback: 'Tepat sekali! Relasi adalah aturan yang menghubungkan dua himpunan, tanpa syarat kaku setiap anggota harus memilih atau hanya boleh memilih satu.' },
      { id: 'B', text: 'Bukan relasi, karena Citra tidak memilih ekskul apa pun sehingga ada anggota yang kosong.', isCorrect: false, feedback: 'Dalam relasi biasa, anggota himpunan asal boleh saja tidak berpasangan.' },
      { id: 'C', text: 'Bukan relasi, karena Andi serakah memilih dua ekskul sekaligus.', isCorrect: false, feedback: 'Relasi membolehkan anggota asal memiliki lebih dari satu pasangan.' },
      { id: 'D', text: 'Bukan relasi, karena ekskul Musik hanya dipilih oleh satu siswa.', isCorrect: false, feedback: 'Banyaknya anggota yang memilih suatu elemen tidak membatalkan status relasi.' },
      { id: 'E', text: 'Hanya merupakan relasi jika Andi melepaskan salah satu ekskulnya.', isCorrect: false, feedback: 'Aturan relasi tidak mensyaratkan anggota asal hanya memiliki satu pasangan.' }
    ],
    caraNormal: {
      diketahui: 'Himpunan siswa A = {Andi, Budi, Citra}, Himpunan ekskul B = {Pramuka, Futsal, Musik}. Pasangan: (Andi, Pramuka), (Andi, Futsal), (Budi, Musik).',
      ditanya: 'Apakah hubungan tersebut merupakan relasi?',
      konsep: 'Relasi dari himpunan A ke B adalah aturan yang menghubungkan anggota himpunan A dengan anggota himpunan B.',
      langkah: [
        'Periksa apakah ada dua himpunan: Ya, himpunan siswa dan himpunan ekskul.',
        'Periksa apakah ada aturan yang menghubungkan: Ya, aturannya adalah "memilih ekskul".',
        'Ingat bahwa relasi tidak membatasi jumlah pasangan tiap anggota.'
      ],
      kesimpulan: 'Hubungan tersebut sah merupakan sebuah relasi matematis.'
    },
    caraCepat: {
      trik: 'Cek Aturan Penghubung',
      alasan: 'Relasi hanya membutuhkan aturan pengait yang jelas.',
      eksekusi: 'Karena ada aturan "memilih ekskul", langsung simpulkan ini adalah relasi tanpa ragu!'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['Andi', 'Budi', 'Citra'],
      kodomain: ['Pramuka', 'Futsal', 'Musik'],
      arrows: [
        { from: 'Andi', to: 'Pramuka' },
        { from: 'Andi', to: 'Futsal' },
        { from: 'Budi', to: 'Musik' }
      ],
      keterangan: 'Diagram panah menunjukkan Andi memiliki 2 panah, Budi 1 panah, Citra 0 panah. Ini sah sebagai relasi.'
    },
    ttsScript: 'Soal nomor satu. Dalam suatu kelas, terdapat tiga siswa: Andi, Budi, dan Citra. Andi memilih ekskul Pramuka dan Futsal. Budi memilih ekskul Musik. Citra tidak memilih ekskul apa pun. Berdasarkan cerita di atas, apakah hubungan antara himpunan siswa dan himpunan ekskul merupakan suatu relasi? Jawabannya adalah A: Ya, merupakan relasi karena terdapat aturan pengait yang jelas.',
    hint: 'Ingat definisi relasi: apakah ada aturan yang menghubungkan kedua himpunan?'
  },
  {
    id: 2,
    category: 'relasi-konsep',
    difficulty: 'Mudah',
    stimulusType: 'diagram',
    stimulusTitle: 'Relasi Faktor Dari',
    stimulusContent: 'Diberikan himpunan P = {2, 3, 5} dan Q = {4, 6, 9, 10}. Relasi yang menghubungkan P ke Q adalah "faktor dari".',
    question: 'Anggota himpunan P yang dihubungkan dengan angka 6 pada himpunan Q adalah...',
    options: [
      { id: 'A', text: 'Hanya 2', isCorrect: false, feedback: 'Kurang lengkap, angka 3 juga membagi habis 6.' },
      { id: 'B', text: 'Hanya 3', isCorrect: false, feedback: 'Kurang lengkap, angka 2 juga membagi habis 6.' },
      { id: 'C', text: '2 dan 3', isCorrect: true, feedback: 'Benar sekali! Faktor dari 6 adalah 1, 2, 3, 6. Dari himpunan P, angka 2 dan 3 keduanya membagi habis 6.' },
      { id: 'D', text: '2 dan 5', isCorrect: false, feedback: '5 bukan faktor dari 6 karena 6 tidak habis dibagi 5.' },
      { id: 'E', text: '2, 3, dan 5', isCorrect: false, feedback: '5 bukan faktor dari 6.' }
    ],
    caraNormal: {
      diketahui: 'P = {2, 3, 5}, Q = {4, 6, 9, 10}. Relasi: "faktor dari".',
      ditanya: 'Anggota P yang dihubungkan dengan angka 6 di Q.',
      konsep: 'a adalah faktor dari b jika b habis dibagi oleh a (sisa pembagian = 0).',
      langkah: [
        'Uji 2: 6 : 2 = 3 (habis dibagi), jadi 2 faktor dari 6.',
        'Uji 3: 6 : 3 = 2 (habis dibagi), jadi 3 faktor dari 6.',
        'Uji 5: 6 : 5 = 1 sisa 1 (tidak habis), jadi 5 bukan faktor dari 6.'
      ],
      kesimpulan: 'Anggota P yang dihubungkan ke 6 adalah 2 dan 3.'
    },
    caraCepat: {
      trik: 'Uji Keterbagian',
      alasan: '6 genap (habis dibagi 2), jumlah digit 6 habis dibagi 3, dan tidak berakhiran 0 atau 5.',
      eksekusi: '6 habis dibagi 2 dan 3 saja dari anggota P.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['2', '3', '5'],
      kodomain: ['4', '6', '9', '10'],
      arrows: [
        { from: '2', to: '6' },
        { from: '3', to: '6' }
      ],
      keterangan: 'Tampak dua anak panah dari 2 dan 3 mengarah tepat ke angka 6.'
    },
    ttsScript: 'Soal nomor dua. Himpunan P = {2, 3, 5} dan Q = {4, 6, 9, 10}. Relasi yang menghubungkan P ke Q adalah "faktor dari". Anggota himpunan P yang dihubungkan dengan angka 6 adalah 2 dan 3.',
    hint: 'Bilangan mana saja di himpunan P yang dapat membagi habis angka 6?'
  },
  {
    id: 3,
    category: 'relasi-konsep',
    difficulty: 'Mudah',
    stimulusType: 'teks',
    stimulusTitle: 'Pernyataan Hubungan',
    stimulusContent: 'Perhatikan pasangan-pasangan berikut: (Indonesia, Jakarta), (Jepang, Tokyo), (Malaysia, Kuala Lumpur), (Filipina, Manila).',
    question: 'Aturan relasi yang paling tepat untuk menghubungkan negara dengan kotanya tersebut adalah...',
    options: [
      { id: 'A', text: 'Ibu kota dari', isCorrect: true, feedback: 'Hebat! Jakarta adalah ibu kota Indonesia, Tokyo ibu kota Jepang, dan seterusnya.' },
      { id: 'B', text: 'Kota terbesar kedua di', isCorrect: false, feedback: 'Jakarta dan Tokyo adalah ibu kota, bukan kota terbesar kedua.' },
      { id: 'C', text: 'Pelabuhan utama dari', isCorrect: false, feedback: 'Bukan aturan yang tepat dan spesifik.' },
      { id: 'D', text: 'Kota kelahiran presiden dari', isCorrect: false, feedback: 'Tidak sesuai dengan definisi geografis resmi.' },
      { id: 'E', text: 'Provinsi dari', isCorrect: false, feedback: 'Negara-negara tersebut bukan provinsi.' }
    ],
    caraNormal: {
      diketahui: 'Pasangan: (Indonesia, Jakarta), (Jepang, Tokyo), (Malaysia, Kuala Lumpur), (Filipina, Manila).',
      ditanya: 'Aturan relasi yang tepat dari himpunan negara ke himpunan kota.',
      konsep: 'Nama relasi harus memenuhi kalimat logis yang benar untuk semua pasangan: "Negara A memiliki [relasi] Kota B".',
      langkah: [
        'Uji: Indonesia beribu kota Jakarta (Benar).',
        'Uji: Jepang beribu kota Tokyo (Benar).',
        'Uji: Malaysia beribu kota Kuala Lumpur (Benar).'
      ],
      kesimpulan: 'Relasi yang tepat adalah "beribu kota di" atau "ibu kota dari".'
    },
    caraCepat: {
      trik: 'Substitusi Kalimat Nyata',
      alasan: 'Hubungkan langsung nama negara dan kota dalam satu kalimat umum.',
      eksekusi: 'Jakarta, Tokyo, Kuala Lumpur, Manila adalah ibu kota negara masing-masing.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['Indonesia', 'Jepang', 'Malaysia'],
      kodomain: ['Jakarta', 'Tokyo', 'Kuala Lumpur'],
      arrows: [
        { from: 'Indonesia', to: 'Jakarta' },
        { from: 'Jepang', to: 'Tokyo' },
        { from: 'Malaysia', to: 'Kuala Lumpur' }
      ],
      keterangan: 'Diagram menghubungkan setiap negara tepat ke kota pusat pemerintahannya.'
    },
    ttsScript: 'Soal nomor tiga. Perhatikan pasangan negara dan kota: Indonesia Jakarta, Jepang Tokyo, Malaysia Kuala Lumpur. Aturan relasi yang paling tepat adalah Ibu kota dari.',
    hint: 'Apa kedudukan Jakarta bagi Indonesia dan Tokyo bagi Jepang?'
  },
  {
    id: 4,
    category: 'relasi-konsep',
    difficulty: 'Sedang',
    stimulusType: 'pola',
    stimulusTitle: 'Relasi Dua Kurang Dari',
    stimulusContent: 'Diberikan himpunan A = {1, 2, 3, 4} dan B = {3, 4, 5, 6, 7}. Relasi dari A ke B didefinisikan sebagai "dua kurangnya dari".',
    question: 'Himpunan pasangan berurutan yang menyatakan relasi tersebut adalah...',
    options: [
      { id: 'A', text: '{(1, 3), (2, 4), (3, 5), (4, 6)}', isCorrect: true, feedback: 'Benar sekali! 1 adalah dua kurangnya dari 3 (1 = 3 - 2), 2 adalah dua kurangnya dari 4 (2 = 4 - 2), dst.' },
      { id: 'B', text: '{(3, 1), (4, 2), (5, 3), (6, 4)}', isCorrect: false, feedback: 'Terbalik urutannya! Anggota A harus ditaruh di depan.' },
      { id: 'C', text: '{(1, -1), (2, 0), (3, 1), (4, 2)}', isCorrect: false, feedback: 'Hasil pasangan di sebelah kanan harus merupakan anggota himpunan B.' },
      { id: 'D', text: '{(1, 2), (2, 3), (3, 4), (4, 5)}', isCorrect: false, feedback: 'Ini relasi "satu kurangnya dari", bukan dua.' },
      { id: 'E', text: '{(2, 4), (3, 6), (4, 8)}', isCorrect: false, feedback: 'Ini relasi "setengah dari".' }
    ],
    caraNormal: {
      diketahui: 'A = {1, 2, 3, 4}, B = {3, 4, 5, 6, 7}. Relasi: a adalah "dua kurangnya dari" b, artinya a = b - 2 atau b = a + 2.',
      ditanya: 'Himpunan pasangan berurutan (a, b).',
      konsep: 'Cari pasangan (a, b) sehingga b = a + 2 dengan a ∈ A dan b ∈ B.',
      langkah: [
        'Untuk a = 1: b = 1 + 2 = 3 ∈ B -> (1, 3)',
        'Untuk a = 2: b = 2 + 2 = 4 ∈ B -> (2, 4)',
        'Untuk a = 3: b = 3 + 2 = 5 ∈ B -> (3, 5)',
        'Untuk a = 4: b = 4 + 2 = 6 ∈ B -> (4, 6)'
      ],
      kesimpulan: 'Pasangannya adalah {(1, 3), (2, 4), (3, 5), (4, 6)}.'
    },
    caraCepat: {
      trik: 'Ubah ke Persamaan b = a + 2',
      alasan: '"a adalah 2 kurangnya dari b" setara dengan b = a + 2.',
      eksekusi: 'Tinggal tambahkan 2 pada setiap anggota A: 1+2=3, 2+2=4, 3+2=5, 4+2=6. Cocok dengan opsi A!'
    },
    buktiVisual: {
      type: 'tabel',
      tableData: [
        { x: 1, y: 3 },
        { x: 2, y: 4 },
        { x: 3, y: 5 },
        { x: 4, y: 6 }
      ],
      keterangan: 'Setiap nilai y selalu bernilai 2 lebih besar dari nilai x (x = y - 2).'
    },
    ttsScript: 'Soal nomor empat. Himpunan A = {1, 2, 3, 4} dan B = {3, 4, 5, 6, 7}. Relasi "dua kurangnya dari" menghasilkan himpunan pasangan berurutan {(1, 3), (2, 4), (3, 5), (4, 6)}.',
    hint: 'Jika x dua kurangnya dari y, maka y bernilai x ditambah 2.'
  },
  {
    id: 5,
    category: 'relasi-konsep',
    difficulty: 'Sedang',
    stimulusType: 'diagram',
    stimulusTitle: 'Relasi Kuadrat Dari',
    stimulusContent: 'Himpunan K = {1, 4, 9, 16, 25} dan L = {1, 2, 3, 4, 5}. Diberikan relasi "kuadrat dari" dari himpunan K ke himpunan L.',
    question: 'Pasangan berurutan yang benar untuk relasi di atas adalah...',
    options: [
      { id: 'A', text: '{(1, 1), (4, 2), (9, 3), (16, 4), (25, 5)}', isCorrect: true, feedback: 'Luar biasa! 1 kuadrat dari 1, 4 kuadrat dari 2 (2²=4), 9 kuadrat dari 3 (3²=9), 16 kuadrat dari 4 (4²=16), dan 25 kuadrat dari 5 (5²=25).' },
      { id: 'B', text: '{(1, 1), (2, 4), (3, 9), (4, 16), (5, 25)}', isCorrect: false, feedback: 'Perhatikan urutan himpunan! Relasinya dari K ke L, jadi bilangan besar K diletakkan di depan.' },
      { id: 'C', text: '{(1, 2), (4, 8), (9, 18), (16, 32)}', isCorrect: false, feedback: 'Ini relasi "dua kali dari", bukan kuadrat.' },
      { id: 'D', text: '{(4, 16), (9, 81), (16, 256)}', isCorrect: false, feedback: '81 dan 256 bukan anggota himpunan L.' },
      { id: 'E', text: '{(1, 1), (4, 16), (9, 81)}', isCorrect: false, feedback: 'Salah aturan dan salah anggota tujuan.' }
    ],
    caraNormal: {
      diketahui: 'K = {1, 4, 9, 16, 25}, L = {1, 2, 3, 4, 5}. Relasi dari K ke L: k adalah "kuadrat dari" l, artinya k = l².',
      ditanya: 'Himpunan pasangan berurutan (k, l).',
      konsep: 'Cari l di L sehingga l² = k di K.',
      langkah: [
        '1² = 1 -> (1, 1)',
        '2² = 4 -> (4, 2)',
        '3² = 9 -> (9, 3)',
        '4² = 16 -> (16, 4)',
        '5² = 25 -> (25, 5)'
      ],
      kesimpulan: 'Himpunan pasangan berurutan = {(1, 1), (4, 2), (9, 3), (16, 4), (25, 5)}.'
    },
    caraCepat: {
      trik: 'Cek Akar Kuadrat Anggota K',
      alasan: 'k kuadrat dari l berarti l = √k.',
      eksekusi: '√1=1, √4=2, √9=3, √16=4, √25=5. Pasangannya langsung (k, √k).'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['1', '4', '9', '16', '25'],
      kodomain: ['1', '2', '3', '4', '5'],
      arrows: [
        { from: '1', to: '1' },
        { from: '4', to: '2' },
        { from: '9', to: '3' },
        { from: '16', to: '4' },
        { from: '25', to: '5' }
      ],
      keterangan: 'Setiap panah menghubungkan bilangan kuadrat di sebelah kiri dengan nilai akarnya di sebelah kanan.'
    },
    ttsScript: 'Soal nomor lima. Relasi kuadrat dari dari himpunan K ke himpunan L menghasilkan pasangan berurutan: satu koma satu, empat koma dua, sembilan koma tiga, enam belas koma empat, dan dua puluh lima koma lima.',
    hint: 'Ingat bahwa k kuadrat dari l artinya k = l dikalikan l.'
  },
  {
    id: 6,
    category: 'relasi-konsep',
    difficulty: 'Mudah',
    stimulusType: 'teks',
    stimulusTitle: 'Contoh Non-Relasi Matematis',
    stimulusContent: 'Mister Jo meminta murid-muridnya membedakan antara hubungan matematis yang terdefinisi dengan baik dan kumpulan pernyataan biasa.',
    question: 'Manakah di antara pilihan berikut yang BUKAN merupakan relasi yang terdefinisi dengan baik dalam matematika?',
    options: [
      { id: 'A', text: 'Himpunan siswa dihubungkan dengan siswa yang "lebih pintar"', isCorrect: true, feedback: 'Tepat sekali! Kata "lebih pintar" bersifat relatif dan tidak memiliki kriteria objektif yang pasti dalam matematika.' },
      { id: 'B', text: 'Himpunan siswa dihubungkan dengan nomor sepatu resmi masing-masing', isCorrect: false, feedback: 'Ini relasi yang jelas karena ukuran sepatu terukur pasti dengan angka.' },
      { id: 'C', text: 'Himpunan bilangan asli dihubungkan dengan kuadratnya', isCorrect: false, feedback: 'Ini relasi matematis yang pasti dan objektif.' },
      { id: 'D', text: 'Himpunan kata dihubungkan dengan jumlah huruf pembentuknya', isCorrect: false, feedback: 'Jumlah huruf dapat dihitung dengan pasti.' },
      { id: 'E', text: 'Himpunan pulau di Indonesia dihubungkan dengan provinsi lokasinya', isCorrect: false, feedback: 'Ini hubungan geografis resmi dan terdefinisi pasti.' }
    ],
    caraNormal: {
      diketahui: 'Lima pilihan hubungan antar himpunan.',
      ditanya: 'Manakah yang bukan relasi matematis terdefinisi baik?',
      konsep: 'Relasi dalam matematika harus memiliki aturan yang terdefinisi dengan jelas (well-defined) tanpa ambiguitas subjektif.',
      langkah: [
        '"Lebih pintar" bersifat subjektif karena tidak ada patokan tunggal (apakah pintar musik, matematika, atau olahraga?).',
        'Pilihan lain memiliki kriteria objektif terukur.'
      ],
      kesimpulan: 'Pilihan A bukan relasi yang terdefinisi dengan baik.'
    },
    caraCepat: {
      trik: 'Cari Kata Kunci Subjektif',
      alasan: 'Istilah seperti "cantik", "ganteng", "pintar" tidak dapat didefinisikan secara matematis mutlak.',
      eksekusi: 'Pilihan A mengandung kata relatif "lebih pintar".'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['Siswa A', 'Siswa B'],
      kodomain: ['Pintar?', 'Bingung?'],
      arrows: [],
      keterangan: 'Tidak dapat ditarik panah pasti karena kriteria tidak terukur.'
    },
    ttsScript: 'Soal nomor enam. Manakah yang bukan relasi terdefinisi dengan baik? Jawabannya adalah A, karena kata lebih pintar bersifat subjektif dan relatif.',
    hint: 'Cari sifat yang tidak bisa diukur dengan standar angka atau definisi pasti.'
  },
  {
    id: 7,
    category: 'relasi-konsep',
    difficulty: 'Sedang',
    stimulusType: 'tabel',
    stimulusTitle: 'Pilihan Hobi Olahraga',
    stimulusContent: 'Berikut adalah data olahraga yang disukai sekelompok remaja:\n• Riko: Sepak Bola, Renang\n• Susi: Bulu Tangkis\n• Tono: Sepak Bola, Basket, Renang\n• Vina: Bulu Tangkis',
    question: 'Olahraga yang memiliki paling banyak peminat dari kelompok remaja di atas adalah...',
    options: [
      { id: 'A', text: 'Sepak Bola dan Renang', isCorrect: true, feedback: 'Benar! Sepak Bola dipilih oleh 2 orang (Riko, Tono) dan Renang juga dipilih oleh 2 orang (Riko, Tono).' },
      { id: 'B', text: 'Hanya Sepak Bola', isCorrect: false, feedback: 'Renang juga dipilih oleh jumlah siswa yang sama banyaknya (2 orang).' },
      { id: 'C', text: 'Hanya Basket', isCorrect: false, feedback: 'Basket hanya dipilih 1 orang (Tono).' },
      { id: 'D', text: 'Bulu Tangkis dan Basket', isCorrect: false, feedback: 'Bulu tangkis 2 orang, tapi basket hanya 1 orang.' },
      { id: 'E', text: 'Semua olahraga sama banyaknya', isCorrect: false, feedback: 'Jumlah peminat berbeda-beda untuk tiap cabang.' }
    ],
    caraNormal: {
      diketahui: 'Data peminat: Sepak Bola (Riko, Tono = 2), Renang (Riko, Tono = 2), Bulu Tangkis (Susi, Vina = 2), Basket (Tono = 1).',
      ditanya: 'Olahraga dengan peminat terbanyak.',
      konsep: 'Menghitung derajat masuk panah (in-degree) pada kodomain.',
      langkah: [
        'Sepak Bola: 2 peminat',
        'Renang: 2 peminat',
        'Bulu Tangkis: 2 peminat',
        'Basket: 1 peminat',
        'Peminat terbanyak adalah 2 peminat, yang diraih oleh Sepak Bola, Renang, dan Bulu Tangkis.'
      ],
      kesimpulan: 'Sepak Bola dan Renang sama-sama memiliki peminat terbanyak (2 orang).'
    },
    caraCepat: {
      trik: 'Tally Frekuensi',
      alasan: 'Hitung frekuensi nama cabang olahraga.',
      eksekusi: 'Sepak Bola = 2, Renang = 2, Basket = 1. Jawaban A tepat.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['Riko', 'Susi', 'Tono', 'Vina'],
      kodomain: ['Sepak Bola', 'Renang', 'Bulu Tangkis', 'Basket'],
      arrows: [
        { from: 'Riko', to: 'Sepak Bola' },
        { from: 'Riko', to: 'Renang' },
        { from: 'Susi', to: 'Bulu Tangkis' },
        { from: 'Tono', to: 'Sepak Bola' },
        { from: 'Tono', to: 'Basket' },
        { from: 'Tono', to: 'Renang' },
        { from: 'Vina', to: 'Bulu Tangkis' }
      ],
      keterangan: 'Sepak Bola dan Renang masing-masing menerima 2 anak panah.'
    },
    ttsScript: 'Soal nomor tujuh. Olahraga yang memiliki paling banyak peminat adalah Sepak Bola dan Renang dengan masing-masing dua peminat.',
    hint: 'Hitung berapa orang yang menyebutkan Sepak Bola dan Renang.'
  },
  {
    id: 8,
    category: 'relasi-konsep',
    difficulty: 'Sedang',
    stimulusType: 'diagram',
    stimulusTitle: 'Relasi Kelipatan Dari',
    stimulusContent: 'Himpunan A = {6, 8, 12} dan B = {2, 3, 4}. Relasi dari A ke B adalah "kelipatan dari".',
    question: 'Banyak pasangan berurutan yang dapat dibentuk dari relasi tersebut adalah...',
    options: [
      { id: 'A', text: '7 pasangan', isCorrect: true, feedback: 'Tepat sekali! 6->(2,3) ada 2 pasang. 8->(2,4) ada 2 pasang. 12->(2,3,4) ada 3 pasang. Total = 2 + 2 + 3 = 7 pasangan!' },
      { id: 'B', text: '6 pasangan', isCorrect: false, feedback: 'Kurang satu pasangan, 12 juga kelipatan dari 4.' },
      { id: 'C', text: '5 pasangan', isCorrect: false, feedback: 'Periksa kembali kelipatan dari masing-masing bilangan.' },
      { id: 'D', text: '8 pasangan', isCorrect: false, feedback: 'Terlalu banyak, 8 bukan kelipatan 3.' },
      { id: 'E', text: '9 pasangan', isCorrect: false, feedback: 'Tidak semua pasangan terhubung.' }
    ],
    caraNormal: {
      diketahui: 'A = {6, 8, 12}, B = {2, 3, 4}. Relasi: "kelipatan dari".',
      ditanya: 'Banyak pasangan berurutan yang terbentuk.',
      konsep: 'a kelipatan dari b jika a habis dibagi b.',
      langkah: [
        'Untuk 6: 6 habis dibagi 2 dan 3 -> (6, 2), (6, 3) = 2 pasangan',
        'Untuk 8: 8 habis dibagi 2 dan 4 -> (8, 2), (8, 4) = 2 pasangan',
        'Untuk 12: 12 habis dibagi 2, 3, dan 4 -> (12, 2), (12, 3), (12, 4) = 3 pasangan',
        'Total pasangan = 2 + 2 + 3 = 7 pasangan.'
      ],
      kesimpulan: 'Terdapat 7 pasangan berurutan.'
    },
    caraCepat: {
      trik: 'Hitung Cabang Tiap Anggota',
      alasan: 'Jumlahkan anak panah yang keluar dari 6, 8, dan 12.',
      eksekusi: 'Panah dari 6 (2) + Panah dari 8 (2) + Panah dari 12 (3) = 7.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['6', '8', '12'],
      kodomain: ['2', '3', '4'],
      arrows: [
        { from: '6', to: '2' },
        { from: '6', to: '3' },
        { from: '8', to: '2' },
        { from: '8', to: '4' },
        { from: '12', to: '2' },
        { from: '12', to: '3' },
        { from: '12', to: '4' }
      ],
      keterangan: 'Total terdapat 7 garis panah relasi.'
    },
    ttsScript: 'Soal nomor delapan. Himpunan A kelipatan dari B. Enam memiliki dua panah, delapan memiliki dua panah, dan dua belas memiliki tiga panah. Total ada tujuh pasangan.',
    hint: 'Daftar kelipatan untuk setiap angka: 6, 8, dan 12.'
  },
  {
    id: 9,
    category: 'relasi-konsep',
    difficulty: 'Mudah',
    stimulusType: 'teks',
    stimulusTitle: 'Relasi Kurang Dari',
    stimulusContent: 'Diberikan himpunan X = {2, 5} dan Y = {3, 6, 7}. Didefinisikan relasi dari X ke Y adalah "kurang dari".',
    question: 'Manakah pasangan berikut yang TIDAK termasuk dalam relasi tersebut?',
    options: [
      { id: 'A', text: '(5, 3)', isCorrect: true, feedback: 'Benar sekali! 5 TIDAK kurang dari 3 (5 > 3), jadi pasangan (5, 3) salah dan tidak termasuk relasi.' },
      { id: 'B', text: '(2, 3)', isCorrect: false, feedback: '2 kurang dari 3, ini pasangan yang benar.' },
      { id: 'C', text: '(2, 6)', isCorrect: false, feedback: '2 kurang dari 6, ini pasangan yang benar.' },
      { id: 'D', text: '(5, 6)', isCorrect: false, feedback: '5 kurang dari 6, ini pasangan yang benar.' },
      { id: 'E', text: '(5, 7)', isCorrect: false, feedback: '5 kurang dari 7, ini pasangan yang benar.' }
    ],
    caraNormal: {
      diketahui: 'X = {2, 5}, Y = {3, 6, 7}. Aturan: x < y.',
      ditanya: 'Pasangan yang tidak memenuhi aturan.',
      konsep: 'Periksa kebenaran pertidaksamaan x < y untuk setiap opsi.',
      langkah: [
        'Uji (2, 3): 2 < 3 (Benar)',
        'Uji (2, 6): 2 < 6 (Benar)',
        'Uji (5, 3): 5 < 3 (SALAH, karena 5 > 3)',
        'Uji (5, 6): 5 < 6 (Benar)',
        'Uji (5, 7): 5 < 7 (Benar)'
      ],
      kesimpulan: 'Pasangan (5, 3) tidak memenuhi relasi.'
    },
    caraCepat: {
      trik: 'Cek Angka Kiri Lebih Besar',
      alasan: 'Karena aturannya "kurang dari", angka kiri harus lebih kecil dari angka kanan.',
      eksekusi: 'Pada (5, 3), angka kiri (5) justru lebih besar dari angka kanan (3).'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['2', '5'],
      kodomain: ['3', '6', '7'],
      arrows: [
        { from: '2', to: '3' },
        { from: '2', to: '6' },
        { from: '2', to: '7' },
        { from: '5', to: '6' },
        { from: '5', to: '7' }
      ],
      keterangan: 'Tidak ada panah dari 5 ke 3 karena 5 tidak kurang dari 3.'
    },
    ttsScript: 'Soal nomor sembilan. Relasi kurang dari dari X ke Y. Pasangan yang tidak termasuk adalah lima koma tiga, karena lima lebih besar dari tiga.',
    hint: 'Apakah 5 kurang dari 3?'
  },
  {
    id: 10,
    category: 'relasi-konsep',
    difficulty: 'Sedang',
    stimulusType: 'pola',
    stimulusTitle: 'Relasi Tiga Kali Dari',
    stimulusContent: 'Suatu relasi dari himpunan M ke N dinyatakan dengan pasangan berurutan: {(3, 1), (6, 2), (9, 3), (12, 4)}.',
    question: 'Aturan relasi yang tepat dari himpunan M ke himpunan N adalah...',
    options: [
      { id: 'A', text: 'Tiga kali dari', isCorrect: true, feedback: 'Tepat sekali! 3 adalah tiga kali dari 1 (3 = 3 x 1), 6 adalah tiga kali dari 2 (6 = 3 x 2), dst.' },
      { id: 'B', text: 'Sepertiga dari', isCorrect: false, feedback: 'Terbalik! Jika sepertiga dari, pasangannya adalah (1, 3), (2, 6).' },
      { id: 'C', text: 'Tiga lebihnya dari', isCorrect: false, feedback: '3 bukan 3 lebihnya dari 1 (1 + 3 = 4, bukan 3).' },
      { id: 'D', text: 'Faktor prima dari', isCorrect: false, feedback: '1 bukan bilangan prima.' },
      { id: 'E', text: 'Pangkat tiga dari', isCorrect: false, feedback: '3 bukan 1 pangkat 3.' }
    ],
    caraNormal: {
      diketahui: 'Pasangan: (3, 1), (6, 2), (9, 3), (12, 4). Di mana m ∈ M dan n ∈ N.',
      ditanya: 'Aturan relasi dari M ke N.',
      konsep: 'Tentukan pola hubungan antara m dan n.',
      langkah: [
        '3 = 3 × 1',
        '6 = 3 × 2',
        '9 = 3 × 3',
        '12 = 3 × 4',
        'Dapat dilihat bahwa setiap anggota M nilainya sama dengan 3 kali anggota N.'
      ],
      kesimpulan: 'Relasinya adalah "tiga kali dari".'
    },
    caraCepat: {
      trik: 'Bandingkan Bilangan Pertama dan Kedua',
      alasan: '3 dibagi 1 = 3, 6 dibagi 2 = 3.',
      eksekusi: 'Rasio m/n = 3, jadi m adalah "tiga kali dari" n.'
    },
    buktiVisual: {
      type: 'tabel',
      tableData: [
        { x: 3, y: 1 },
        { x: 6, y: 2 },
        { x: 9, y: 3 },
        { x: 12, y: 4 }
      ],
      keterangan: 'Tabel membuktikan nilai x selalu tiga kali lipat nilai y.'
    },
    ttsScript: 'Soal nomor sepuluh. Pasangan berurutan {(3, 1), (6, 2), (9, 3), (12, 4)}. Aturan relasi dari M ke N adalah Tiga kali dari.',
    hint: 'Berapa hasil kali angka kedua jika dikalikan 3?'
  },
  {
    id: 11,
    category: 'relasi-konsep',
    difficulty: 'Sulit',
    stimulusType: 'diagram',
    stimulusTitle: 'Relasi Faktor Persekutuan',
    stimulusContent: 'Diberikan A = {4, 6} dan B = {6, 8, 9}. Relasi R dari A ke B adalah "memiliki faktor persekutuan selain 1".',
    question: 'Banyak pasangan berurutan yang memenuhi relasi R adalah...',
    options: [
      { id: 'A', text: '4 pasangan', isCorrect: false, feedback: 'Hitung kembali pasangan untuk 4 dan 6.' },
      { id: 'B', text: '5 pasangan', isCorrect: true, feedback: 'Hebat sekali! 4 bersekutu dengan 6 (faktor 2) dan 8 (faktor 2,4). 6 bersekutu dengan 6 (faktor 2,3,6), 8 (faktor 2), dan 9 (faktor 3). Total = 2 + 3 = 5 pasangan!' },
      { id: 'C', text: '6 pasangan', isCorrect: false, feedback: '4 dan 9 tidak memiliki faktor persekutuan selain 1 (FPB = 1).' },
      { id: 'D', text: '3 pasangan', isCorrect: false, feedback: 'Terlalu sedikit, periksa kembali faktor persekutuan.' },
      { id: 'E', text: '2 pasangan', isCorrect: false, feedback: 'Periksa faktor bersama antara kedua bilangan.' }
    ],
    caraNormal: {
      diketahui: 'A = {4, 6}, B = {6, 8, 9}. Aturan: FPB(a, b) > 1.',
      ditanya: 'Banyak pasangan berurutan.',
      konsep: 'Cari semua pasangan (a, b) yang memiliki FPB > 1.',
      langkah: [
        'Untuk a = 4: FPB(4, 6) = 2 > 1 -> (4, 6). FPB(4, 8) = 4 > 1 -> (4, 8). FPB(4, 9) = 1 (TIDAK). -> 2 pasangan.',
        'Untuk a = 6: FPB(6, 6) = 6 > 1 -> (6, 6). FPB(6, 8) = 2 > 1 -> (6, 8). FPB(6, 9) = 3 > 1 -> (6, 9). -> 3 pasangan.',
        'Total pasangan = 2 + 3 = 5 pasangan berurutan.'
      ],
      kesimpulan: 'Terdapat 5 pasangan berurutan.'
    },
    caraCepat: {
      trik: 'Eliminasi Pasangan Relatif Prima (FPB = 1)',
      alasan: 'Hanya (4, 9) yang FPB-nya = 1 dari total 2 x 3 = 6 kombinasi.',
      eksekusi: 'Total pasangan = 6 - 1 = 5 pasangan!'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['4', '6'],
      kodomain: ['6', '8', '9'],
      arrows: [
        { from: '4', to: '6' },
        { from: '4', to: '8' },
        { from: '6', to: '6' },
        { from: '6', to: '8' },
        { from: '6', to: '9' }
      ],
      keterangan: 'Semua terhubung kecuali 4 ke 9. Total 5 anak panah.'
    },
    ttsScript: 'Soal nomor sebelas. Relasi memiliki faktor persekutuan selain satu. Dari total enam kemungkinan pasangan, hanya pasangan 4 dengan 9 yang tidak memenuhi. Jadi ada lima pasangan.',
    hint: 'Cari pasangan mana yang FPB-nya lebih dari 1.'
  },
  {
    id: 12,
    category: 'relasi-konsep',
    difficulty: 'Sedang',
    stimulusType: 'teks',
    stimulusTitle: 'Relasi Bilangan Prima',
    stimulusContent: 'Himpunan S = {2, 3, 5, 7} dan T = {4, 6, 9, 15}. Relasi dari S ke T adalah "dapat membagi habis".',
    question: 'Anggota himpunan T yang dihubungkan dengan tepat dua anggota himpunan S adalah...',
    options: [
      { id: 'A', text: '15 saja', isCorrect: false, feedback: '15 memang dibagi 3 dan 5, tetapi 6 juga dibagi 2 dan 3.' },
      { id: 'B', text: '6 dan 15', isCorrect: true, feedback: 'Tepat sekali! 6 habis dibagi 2 dan 3 (2 anggota). 15 habis dibagi 3 dan 5 (2 anggota). Sedangkan 4 hanya habis dibagi 2 (1 anggota), dan 9 hanya habis dibagi 3 (1 anggota).' },
      { id: 'C', text: '4 dan 6', isCorrect: false, feedback: '4 hanya habis dibagi oleh 2 di himpunan S.' },
      { id: 'D', text: '6 dan 9', isCorrect: false, feedback: '9 hanya habis dibagi oleh 3 di himpunan S.' },
      { id: 'E', text: 'Hanya 6', isCorrect: false, feedback: '15 juga habis dibagi oleh 3 dan 5.' }
    ],
    caraNormal: {
      diketahui: 'S = {2, 3, 5, 7}, T = {4, 6, 9, 15}. Relasi: s membagi habis t.',
      ditanya: 'Anggota T yang memiliki tepat 2 pembagi di S.',
      konsep: 'Periksa faktor prima di S untuk setiap anggota T.',
      langkah: [
        '4: hanya dibagi 2 (1 pembagi)',
        '6: dibagi 2 dan 3 (2 pembagi) -> MEMENUHI',
        '9: hanya dibagi 3 (1 pembagi)',
        '15: dibagi 3 dan 5 (2 pembagi) -> MEMENUHI'
      ],
      kesimpulan: 'Anggota T tersebut adalah 6 dan 15.'
    },
    caraCepat: {
      trik: 'Faktorisasi Prima',
      alasan: '6 = 2 x 3 (dua prima di S), 15 = 3 x 5 (dua prima di S).',
      eksekusi: 'Hanya 6 dan 15 yang tersusun dari perkalian dua prima berbeda di S.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['2', '3', '5', '7'],
      kodomain: ['4', '6', '9', '15'],
      arrows: [
        { from: '2', to: '4' },
        { from: '2', to: '6' },
        { from: '3', to: '6' },
        { from: '3', to: '9' },
        { from: '3', to: '15' },
        { from: '5', to: '15' }
      ],
      keterangan: 'Tampak 6 dan 15 masing-masing menerima tepat 2 anak panah.'
    },
    ttsScript: 'Soal nomor dua belas. Anggota himpunan T yang dihubungkan dengan tepat dua anggota himpunan S adalah 6 dan 15.',
    hint: 'Cari bilangan di T yang memiliki 2 faktor prima berbeda dari {2, 3, 5, 7}.'
  },
  {
    id: 13,
    category: 'relasi-konsep',
    difficulty: 'Mudah',
    stimulusType: 'diagram',
    stimulusTitle: 'Membaca Diagram Panah',
    stimulusContent: 'Sebuah diagram panah menghubungkan A = {1, 2, 3} ke B = {1, 4, 9}. Panah mengarah dari 1 ke 1, 2 ke 4, dan 3 ke 9.',
    question: 'Nama relasi dari himpunan A ke himpunan B adalah...',
    options: [
      { id: 'A', text: 'Akar kuadrat dari', isCorrect: true, feedback: 'Tepat sekali! 1 adalah akar kuadrat dari 1, 2 akar kuadrat dari 4 (√4=2), dan 3 akar kuadrat dari 9 (√9=3).' },
      { id: 'B', text: 'Kuadrat dari', isCorrect: false, feedback: 'Terbalik! 1 bukan kuadrat dari 1 jika dibaca dari A ke B, 2 bukan kuadrat dari 4 melainkan 4 kuadrat dari 2.' },
      { id: 'C', text: 'Dua kali dari', isCorrect: false, feedback: '3 bukan dua kali dari 9.' },
      { id: 'D', text: 'Faktor dari', isCorrect: false, feedback: 'Terlalu umum, karena 1 juga faktor dari 4 dan 9 tapi tidak dipanah.' },
      { id: 'E', text: 'Kurang dari', isCorrect: false, feedback: '1 tidak dipanahkan ke 4 atau 9 padahal 1 kurang dari keduanya.' }
    ],
    caraNormal: {
      diketahui: 'Panah: 1 -> 1, 2 -> 4, 3 -> 9 dari A ke B.',
      ditanya: 'Nama relasi yang paling spesifik dan tepat.',
      konsep: 'Kalimat relasi: "a adalah [relasi] b".',
      langkah: [
        'Uji: 1 adalah akar kuadrat dari 1 (√1 = 1) -> Benar.',
        'Uji: 2 adalah akar kuadrat dari 4 (√4 = 2) -> Benar.',
        'Uji: 3 adalah akar kuadrat dari 9 (√9 = 3) -> Benar.'
      ],
      kesimpulan: 'Nama relasi adalah "akar kuadrat dari".'
    },
    caraCepat: {
      trik: 'Perhatikan Operasi Akar',
      alasan: 'a = √b untuk setiap pasangan.',
      eksekusi: 'Karena a = √b, maka relasi dari A ke B adalah "akar kuadrat dari".'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['1', '2', '3'],
      kodomain: ['1', '4', '9'],
      arrows: [
        { from: '1', to: '1' },
        { from: '2', to: '4' },
        { from: '3', to: '9' }
      ],
      keterangan: 'Setiap panah menghubungkan nilai x ke x kuadrat.'
    },
    ttsScript: 'Soal nomor tiga belas. Relasi yang menghubungkan satu ke satu, dua ke empat, dan tiga ke sembilan adalah akar kuadrat dari.',
    hint: 'Ingat hubungan antara 2 dengan 4 dan 3 dengan 9.'
  },
  {
    id: 14,
    category: 'relasi-konsep',
    difficulty: 'Sedang',
    stimulusType: 'teks',
    stimulusTitle: 'Relasi Selisih Bilangan',
    stimulusContent: 'Diketahui himpunan P = {10, 15, 20} dan Q = {5, 10}. Relasi dari P ke Q didefinisikan sebagai "kelipatan persekutuan terkecil".',
    question: 'Jika relasinya diubah menjadi "memiliki selisih 10 dengan", pasangan berurutan yang terbentuk adalah...',
    options: [
      { id: 'A', text: '{(15, 5), (20, 10)}', isCorrect: true, feedback: 'Benar sekali! 15 - 5 = 10, dan 20 - 10 = 10. Sedangkan 10 - 5 = 5 (bukan 10) dan 10 - 10 = 0.' },
      { id: 'B', text: '{(10, 10), (20, 10)}', isCorrect: false, feedback: 'Selisih 10 dan 10 adalah 0, bukan 10.' },
      { id: 'C', text: '{(10, 5), (15, 5)}', isCorrect: false, feedback: 'Selisih 10 dan 5 adalah 5.' },
      { id: 'D', text: '{(15, 10), (20, 5)}', isCorrect: false, feedback: 'Selisih 15 dan 10 adalah 5, selisih 20 dan 5 adalah 15.' },
      { id: 'E', text: '{(20, 5)}', isCorrect: false, feedback: 'Selisih 20 dan 5 adalah 15, bukan 10.' }
    ],
    caraNormal: {
      diketahui: 'P = {10, 15, 20}, Q = {5, 10}. Syarat: |p - q| = 10.',
      ditanya: 'Pasangan berurutan (p, q).',
      konsep: 'Hitung selisih mutlak |p - q| untuk setiap p ∈ P dan q ∈ Q.',
      langkah: [
        'p = 10: |10 - 5| = 5, |10 - 10| = 0 (Tidak ada)',
        'p = 15: |15 - 5| = 10 -> (15, 5)',
        'p = 20: |20 - 10| = 10 -> (20, 10)'
      ],
      kesimpulan: 'Pasangannya adalah {(15, 5), (20, 10)}.'
    },
    caraCepat: {
      trik: 'Cari Pasangan dengan Beda 10',
      alasan: '15 - 5 = 10 dan 20 - 10 = 10.',
      eksekusi: 'Langsung temukan (15, 5) dan (20, 10).'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['10', '15', '20'],
      kodomain: ['5', '10'],
      arrows: [
        { from: '15', to: '5' },
        { from: '20', to: '10' }
      ],
      keterangan: 'Hanya 15 dan 20 yang terhubung karena menghasilkan selisih 10.'
    },
    ttsScript: 'Soal nomor empat belas. Pasangan yang memiliki selisih sepuluh dari himpunan P ke himpunan Q adalah lima belas koma lima dan dua puluh koma sepuluh.',
    hint: 'Kurangkan elemen P dengan elemen Q dan cari yang hasilnya tepat 10.'
  },
  {
    id: 15,
    category: 'relasi-konsep',
    difficulty: 'Sulit',
    stimulusType: 'teks',
    stimulusTitle: 'Pernyataan Sifat Relasi',
    stimulusContent: 'Perhatikan tiga pernyataan tentang relasi berikut:\n(1) Setiap relasi pasti merupakan fungsi.\n(2) Anggota himpunan asal boleh tidak memiliki kawan pada relasi.\n(3) Suatu anggota himpunan asal boleh memiliki lebih dari satu kawan pada relasi.',
    question: 'Pernyataan yang BENAR tentang relasi adalah...',
    options: [
      { id: 'A', text: '(1) dan (2)', isCorrect: false, feedback: 'Pernyataan (1) salah karena tidak semua relasi adalah fungsi.' },
      { id: 'B', text: '(2) dan (3)', isCorrect: true, feedback: 'Hebat sekali! Relasi bersifat bebas: anggota asal boleh tidak punya kawan dan boleh punya banyak kawan. Sedangkan (1) salah karena kebalikannya yang benar (setiap fungsi adalah relasi).' },
      { id: 'C', text: '(1) dan (3)', isCorrect: false, feedback: 'Pernyataan (1) salah.' },
      { id: 'D', text: 'Hanya (2)', isCorrect: false, feedback: 'Pernyataan (3) juga benar.' },
      { id: 'E', text: 'Semua pernyataan benar', isCorrect: false, feedback: 'Pernyataan (1) salah.' }
    ],
    caraNormal: {
      diketahui: 'Tiga pernyataan tentang sifat relasi umum.',
      ditanya: 'Pernyataan mana saja yang benar.',
      konsep: 'Definisi relasi matematis.',
      langkah: [
        'Uji (1): Salah, fungsi adalah bagian khusus dari relasi. Contoh: {(1,a), (1,b)} adalah relasi tapi bukan fungsi.',
        'Uji (2): Benar, relasi tidak mewajibkan semua anggota domain memiliki pasangan.',
        'Uji (3): Benar, relasi membolehkan satu anggota domain memiliki banyak pasangan.'
      ],
      kesimpulan: 'Pernyataan yang benar adalah (2) dan (3).'
    },
    caraCepat: {
      trik: 'Ingat Rumus Emas Mister Jo',
      alasan: '"Semua fungsi adalah relasi, tapi tidak semua relasi adalah fungsi."',
      eksekusi: 'Pernyataan (1) otomatis gugur. Pilihan yang tidak memuat (1) adalah B.'
    },
    buktiVisual: {
      type: 'panah',
      domain: ['A1', 'A2', 'A3'],
      kodomain: ['B1', 'B2'],
      arrows: [
        { from: 'A1', to: 'B1' },
        { from: 'A1', to: 'B2' }
      ],
      keterangan: 'A1 memiliki 2 pasangan, A2 dan A3 kosong. Ini tetap sah sebagai relasi.'
    },
    ttsScript: 'Soal nomor lima belas. Pernyataan yang benar tentang relasi adalah nomor dua dan tiga. Relasi sangat fleksibel, anggota asal boleh tidak punya kawan dan boleh punya lebih dari satu kawan.',
    hint: 'Ingat bahwa relasi jauh lebih bebas daripada fungsi.'
  }
];
