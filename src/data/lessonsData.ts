/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LessonUnit } from '../types';

export const LESSON_UNITS: LessonUnit[] = [
  {
    id: 'unit-a',
    number: '01',
    title: 'Mengenal Relasi',
    subtitle: 'Menghubungkan Dua Dunia dengan Aturan Manis',
    description: 'Pahami apa itu relasi, bagaimana menghubungkan dua himpunan, cara penyajiannya, dan temukan domain, kodomain, serta range dengan cara paling santai dan seru!',
    iconName: 'HeartHandshake',
    accentColor: 'from-pink-400 to-rose-400',
    sections: [
      {
        id: 'a1',
        title: 'Apa Sih Relasi Itu?',
        badge: 'Konsep Dasar',
        intro: 'Halo, Sobat Imut! Pernahkah kamu memikirkan apa hubungan antara kamu dan makanan favoritmu? Yuk, kita bedah bersama Mister Jo!',
        content: [
          'Dalam matematika, **Relasi** dari himpunan A ke himpunan B adalah suatu aturan yang menghubungkan anggota-anggota himpunan A dengan anggota-anggota himpunan B.',
          'Kata kuncinya sangat ramah: **ATURAN PENGHUBUNG**. Jadi, selama ada aturan yang masuk akal dan jelas (seperti "gemar makan", "berteman dengan", "kelipatan dari", atau "faktor dari"), hubungan itu sah disebut relasi!',
          'Kabar gembiranya: Relasi sangat fleksibel! Anggota himpunan asal boleh punya satu pasangan, boleh punya banyak pasangan, dan bahkan boleh tidak punya pasangan sama sekali.'
        ],
        realWorldExample: {
          title: 'Contoh Nyata: Siswa dan Makanan Favorit',
          description: 'Bayangkan ada 3 sahabat imut: {Kiko, Mimi, Bubu}. Mereka memilih makanan kantin: {Bakso, Mie Ayam, Donat, Es Krim}.',
          setA: ['Kiko', 'Mimi', 'Bubu'],
          setB: ['Bakso', 'Mie Ayam', 'Donat', 'Es Krim'],
          pairs: [
            ['Kiko', 'Bakso'],
            ['Kiko', 'Donat'],
            ['Mimi', 'Mie Ayam'],
            ['Bubu', 'Es Krim']
          ]
        },
        keyTakeaway: 'Relasi adalah jembatan persahabatan antara dua himpunan. Tidak ada aturan kaku di sini: boleh pilih banyak, boleh pilih satu, atau santai tidak memilih!',
        misconceptions: [
          {
            wrong: 'Mengira semua relasi harus memiliki rumus hitungan angka yang rumit.',
            right: 'Relasi bisa berupa hubungan kualitatif seperti makanan favorit, warna kesukaan, atau kota kelahiran!',
            explanation: 'Matematika tidak hanya tentang angka, tapi juga tentang logika struktur hubungan.'
          },
          {
            wrong: 'Mengira setiap anggota himpunan A wajib punya pasangan dalam relasi.',
            right: 'Dalam relasi biasa, anggota himpunan A boleh saja tidak memiliki pasangan sama sekali.',
            explanation: 'Kewajiban memiliki pasangan hanya berlaku nanti pada "Fungsi", bukan pada relasi umum.'
          }
        ],
        interactiveCheck: {
          question: 'Manakah di bawah ini yang merupakan contoh relasi dalam matematika?',
          options: [
            { text: 'Setiap bilangan bulat dihubungkan dengan faktor primanya', correct: true, explanation: 'Tepat sekali! "Faktor prima dari" adalah aturan relasi yang jelas antara dua himpunan bilangan.' },
            { text: 'Kucing melompat ke atas pagar tanpa tujuan', correct: false, explanation: 'Ini adalah peristiwa atau kejadian acak, bukan aturan yang menghubungkan dua himpunan.' },
            { text: 'Kertas putih ditaruh di atas meja kayu', correct: false, explanation: 'Ini posisi fisik benda, bukan aturan hubungan matematis antar anggota himpunan.' }
          ]
        },
        audioScript: 'Halo, Sobat Imut! Mister Jo di sini. Mari kita pahami relasi. Relasi adalah aturan yang menghubungkan anggota himpunan asal dengan himpunan kawan. Contohnya, Kiko suka makan bakso dan donat. Sangat sederhana dan santai!'
      },
      {
        id: 'a2',
        title: 'Domain, Kodomain, dan Range',
        badge: 'Tiga Wilayah Ajaib',
        intro: 'Mister Jo punya trik jitu menghafal tiga istilah penting ini: Rumah Asal, Rumah Idaman, dan Sasaran Tembak!',
        content: [
          'Dalam mempelajari relasi dari himpunan A ke himpunan B, terdapat 3 daerah penting:',
          '1. **Domain (Daerah Asal)**: Seluruh anggota himpunan A tempat panah bermula.',
          '2. **Kodomain (Daerah Kawan)**: Seluruh anggota himpunan B yang disediakan untuk dipilih.',
          '3. **Range (Daerah Hasil)**: Anggota himpunan B yang BENAR-BENAR TERPILIH atau terkena anak panah!'
        ],
        realWorldExample: {
          title: 'Ilustrasi Target Memanah Mister Jo',
          description: 'Himpunan A = {1, 2, 3}. Himpunan B = {2, 4, 6, 8}. Hubungan: "setengah dari". 1 berpasangan dengan 2, 2 dengan 4, 3 dengan 6.',
          setA: ['1', '2', '3'],
          setB: ['2', '4', '6', '8'],
          pairs: [['1', '2'], ['2', '4'], ['3', '6']]
        },
        keyTakeaway: 'Domain = Siapa yang memulai (A). Kodomain = Siapa saja calonnya (B). Range = Siapa saja yang terpilih jadi pemenang di B!',
        misconceptions: [
          {
            wrong: 'Mengira Range selalu sama persis dengan Kodomain.',
            right: 'Range adalah himpunan bagian dari Kodomain. Anggota Kodomain yang tidak dipilih tidak masuk ke Range!',
            explanation: 'Pada contoh di atas, 8 ada di Kodomain tetapi bukan anggota Range karena tidak ada yang berpasangan dengannya.'
          }
        ],
        interactiveCheck: {
          question: 'Jika himpunan A = {1, 2} dan B = {3, 4, 5}, lalu relasinya memasangkan (1,3) dan (2,4). Apakah 5 termasuk Range?',
          options: [
            { text: 'Tidak, 5 hanya anggota Kodomain karena tidak ada panah yang menunjuknya.', correct: true, explanation: 'Hebat! 5 adalah cadangan di kodomain yang tidak terpilih, jadi bukan anggota range.' },
            { text: 'Ya, semua anggota B otomatis jadi Range.', correct: false, explanation: 'Ingat ya Sobat Imut, Range HANYA anggota B yang mendapatkan panah.' }
          ]
        },
        audioScript: 'Ayo kenali tiga wilayah penting: Domain adalah daerah asal, Kodomain adalah daerah kawan, dan Range adalah daerah hasil yang benar-benar terkena panah relasi.'
      },
      {
        id: 'a3',
        title: '3 Cara Menyatakan Relasi',
        badge: 'Representasi Visual',
        intro: 'Mister Jo paling suka menggambar! Ada 3 cara kece untuk memperlihatkan sebuah relasi kepada teman-temanmu.',
        content: [
          '**1. Diagram Panah**: Menggambar dua kurva tertutup (elips) lalu menarik panah dari anggota A ke pasangan di B. Ini cara paling intuitif dan disukai pemula!',
          '**2. Himpunan Pasangan Berurutan**: Menuliskan pasangan dalam tanda kurung kurawal, format {(x, y), ...} di mana x berasal dari A dan y dari B. Contoh: {(2, 4), (3, 6), (4, 8)}.',
          '**3. Diagram Kartesius**: Menempatkan anggota A pada sumbu mendatar (horizontal/X) dan anggota B pada sumbu tegak (vertikal/Y), lalu menandai titik pertemuannya dengan noktah titik hitam manis.'
        ],
        keyTakeaway: 'Ketiga bentuk ini menyampaikan pesan matematika yang sama persis, hanya bajunya saja yang berbeda gaya!',
        misconceptions: [
          {
            wrong: 'Menulis pasangan berurutan terbalik menjadi (y, x).',
            right: 'Urutan SANGAT penting! Pasangan berurutan selalu (Asal, Tujuan) alias (Domain, Pasangannya).',
            explanation: '(2, 4) berbeda makna dengan (4, 2).'
          }
        ],
        interactiveCheck: {
          question: 'Jika relasinya memasangkan x ke dua kalinya x untuk A = {2, 3}, penulisan himpunan pasangan berurutan yang benar adalah...',
          options: [
            { text: '{(2, 4), (3, 6)}', correct: true, explanation: 'Benar sekali! 2 berpasangan dengan 4, dan 3 berpasangan dengan 6.' },
            { text: '{(4, 2), (6, 3)}', correct: false, explanation: 'Terbalik ya, domain asal harus diletakkan di posisi pertama (kiri).' }
          ]
        },
        audioScript: 'Ada tiga cara manis menyatakan relasi: diagram panah, himpunan pasangan berurutan, dan diagram kartesius. Ingat, domain selalu di sebelah kiri atau sumbu mendatar!'
      }
    ],
    summaryPoints: [
      'Relasi adalah aturan pengait antara anggota himpunan A dan himpunan B.',
      'Domain = Daerah Asal (A), Kodomain = Daerah Kawan (B), Range = Daerah Hasil (bagian B yang terpilih).',
      'Tiga cara menyatakan relasi: Diagram Panah, Pasangan Berurutan, dan Diagram Kartesius.',
      'Relasi tidak membatasi jumlah panah: boleh bercabang, boleh satu-satu, boleh kosong.'
    ]
  },
  {
    id: 'unit-b',
    number: '02',
    title: 'Mengenal Fungsi (Pemetaan)',
    subtitle: 'Aturan Disiplin yang Bikin Tertib dan Rapi',
    description: 'Apa bedanya relasi santai dengan fungsi yang tertib? Pelajari 2 syarat emas fungsi, uji diagram panah, dan kenali berbagai jenis pemetaan!',
    iconName: 'Sparkles',
    accentColor: 'from-fuchsia-400 to-pink-500',
    sections: [
      {
        id: 'b1',
        title: 'Apa Itu Fungsi & Syarat Emasnya?',
        badge: 'Hukum Mutlak Fungsi',
        intro: 'Jika relasi adalah pertemanan bebas, maka FUNGSI adalah perkumpulan super disiplin! Mister Jo punya rumus rahasianya.',
        content: [
          '**Fungsi (Pemetaan)** dari himpunan A ke himpunan B adalah relasi KHUSUS yang memasangkan **SETIAP** anggota A dengan **TEPAT SATU** anggota B.',
          'Mister Jo menyebutnya **2 ATURAN EMAS DOMAIN**:',
          '1. **TIDAK BOLEH JOMBLO**: Semua anggota A wajib punya pasangan (wajib memanah). Tidak boleh ada anggota domain yang tertinggal!',
          '2. **TIDAK BOLEH SELINGKUH**: Setiap anggota A hanya boleh punya SATU pasangan (anak panahnya hanya tepat 1 cabang).',
          'Bagaimana dengan Kodomain (B)? Kodomain sangat santai! Anggota B boleh dipanah oleh banyak anggota A, boleh satu, dan boleh tidak dipanah sama sekali!'
        ],
        realWorldExample: {
          title: 'Analogi Mister Jo: Siswa dan Nomor Absen',
          description: 'Setiap siswa di kelas pasti punya tepat satu nomor absen unik. Tidak ada siswa yang tidak punya nomor absen, dan tidak ada siswa yang punya dua nomor absen sekaligus!',
          setA: ['Andi', 'Citra', 'Doni'],
          setB: ['Absen 1', 'Absen 2', 'Absen 3', 'Absen 4'],
          pairs: [['Andi', 'Absen 1'], ['Citra', 'Absen 2'], ['Doni', 'Absen 3']]
        },
        keyTakeaway: 'Semua fungsi adalah relasi, tetapi tidak semua relasi adalah fungsi! Kuncinya: periksa apakah anggota Domain setia dan bertanggung jawab.',
        misconceptions: [
          {
            wrong: 'Mengira anggota Kodomain (B) juga tidak boleh menerima dua panah.',
            right: 'Kodomain BEBAS! Dua anggota domain boleh memilih tujuan yang sama di kodomain (disebut fungsi banyak-ke-satu).',
            explanation: 'Misalnya dua siswa boleh sama-sama memiliki tanggal lahir atau hobi yang sama di kodomain.'
          },
          {
            wrong: 'Melihat kodomain untuk menentukan apakah suatu relasi adalah fungsi.',
            right: 'FOKUS HANYA PADA DOMAIN (A). Cek apakah setiap anggota A memanah tepat satu kali.',
            explanation: 'Kunci penentu fungsi ada 100% pada tingkah laku domain.'
          }
        ],
        interactiveCheck: {
          question: 'Relasi R = {(1, a), (2, b), (1, c)} dari A={1, 2} ke B={a, b, c}. Apakah R merupakan fungsi?',
          options: [
            { text: 'Bukan fungsi, karena angka 1 berpasangan dengan a dan juga c (mendua).', correct: true, explanation: 'Luar biasa tepat! Angka 1 bercabang dua kali, sehingga melanggar syarat kedua fungsi.' },
            { text: 'Ya fungsi, karena semua anggota B punya pasangan.', correct: false, explanation: 'Ingat, fokus kita adalah pada anggota domain di kiri (1 mendua).' }
          ]
        },
        audioScript: 'Ingat dua syarat emas fungsi dari Mister Jo: domain tidak boleh kosong, dan domain tidak boleh bercabang! Kodomain di sebelah kanan boleh bebas.'
      },
      {
        id: 'b2',
        title: 'Banyak Pemetaan yang Mungkin',
        badge: 'Rumus Kilat Eksponen',
        intro: 'Berapa banyak cara memasangkan dua himpunan agar menjadi fungsi yang sah? Ada rumus saktinya!',
        content: [
          'Jika himpunan A memiliki n(A) = a anggota, dan himpunan B memiliki n(B) = b anggota:',
          'Maka banyak pemetaan yang mungkin dari **A ke B** adalah:',
          '**Banyak Pemetaan = b^a (b pangkat a)**',
          'Trik hafalan Mister Jo: **TUJUAN DIPANGKATKAN ASAL** (Belakang pangkat Depan)!',
          'Sebaliknya, jika pemetaan dari B ke A, rumusnya adalah **a^b (a pangkat b)**.'
        ],
        realWorldExample: {
          title: 'Contoh Hitungan Kilat',
          description: 'Himpunan A = {Merah, Kuning} -> n(A) = 2. Himpunan B = {1, 2, 3} -> n(B) = 3. Banyak pemetaan dari A ke B = 3^2 = 9 cara!',
          setA: ['Merah', 'Kuning'],
          setB: ['1', '2', '3'],
          pairs: [['Merah', '1'], ['Kuning', '2']]
        },
        keyTakeaway: 'Banyak fungsi A ke B = n(B)^n(A). Ingat kata kuncinya: BELAKANG PANGKAT DEPAN!',
        misconceptions: [
          {
            wrong: 'Menghitung pemetaan dari A ke B dengan mengalikan a x b.',
            right: 'Bukan dikali, melainkan dipangkatkan: b^a.',
            explanation: 'Karena setiap anggota A memiliki b pilihan kemungkinan independen.'
          }
        ],
        interactiveCheck: {
          question: 'Jika n(A) = 3 dan n(B) = 2, berapa banyak pemetaan dari A ke B?',
          options: [
            { text: '2^3 = 8 cara', correct: true, explanation: 'Tepat sekali! n(B)^n(A) = 2^3 = 8.' },
            { text: '3^2 = 9 cara', correct: false, explanation: 'Hati-hati terbalik ya, yang dipangkatkan adalah anggota himpunan tujuan (B).' },
            { text: '3 x 2 = 6 cara', correct: false, explanation: 'Rumusnya bukan perkalian, melainkan pemangkatan.' }
          ]
        },
        audioScript: 'Untuk menghitung banyaknya pemetaan dari A ke B, gunakan rumus sakti Mister Jo: belakang pangkat depan, yaitu n B dipangkatkan n A.'
      },
      {
        id: 'b3',
        title: 'Korespondensi Satu-Satu',
        badge: 'Pasangan Sejati',
        intro: 'Tingkatan fungsi yang paling sempurna di mana domain dan kodomain saling setia satu lawan satu!',
        content: [
          'Suatu fungsi disebut **Korespondensi Satu-Satu** (bijektif) jika:',
          '1. Setiap anggota A dipasangkan dengan tepat satu anggota B.',
          '2. Setiap anggota B dipasangkan dengan tepat satu anggota A.',
          'Syarat mutlak: **Jumlah anggota A HARUS SAMA PERSIS dengan jumlah anggota B**, yaitu n(A) = n(B) = n.',
          'Banyaknya korespondensi satu-satu yang mungkin dihitung dengan faktorial: **n! = n x (n-1) x (n-2) x ... x 1**.'
        ],
        keyTakeaway: 'Korespondensi satu-satu adalah pasangan sempurna: tidak ada yang jomblo dan tidak ada yang mendua di kedua belah pihak!',
        misconceptions: [
          {
            wrong: 'Mengira korespondensi satu-satu bisa terjadi jika jumlah anggota A dan B berbeda.',
            right: 'Pasti mustahil! Jika jumlahnya beda, pasti ada anggota yang jomblo atau mendua.',
            explanation: 'Syarat wajib pertama adalah n(A) = n(B).'
          }
        ],
        interactiveCheck: {
          question: 'Berapa banyak korespondensi satu-satu dari himpunan A = {p, q, r} ke B = {1, 2, 3}?',
          options: [
            { text: '3! = 3 x 2 x 1 = 6 cara', correct: true, explanation: 'Mantap betul! Faktorial dari 3 adalah 6 cara korespondensi.' },
            { text: '3^3 = 27 cara', correct: false, explanation: '27 adalah semua kemungkinan pemetaan umum, bukan korespondensi satu-satu.' }
          ]
        },
        audioScript: 'Korespondensi satu-satu mengharuskan jumlah anggota kedua himpunan sama persis, dan rumusnya adalah faktorial n kali n kurang satu.'
      }
    ],
    summaryPoints: [
      'Fungsi adalah relasi khusus di mana SETIAP anggota domain memiliki TEPAT SATU kawan di kodomain.',
      'Dua pantangan domain: Tidak boleh kosong (jomblo) & Tidak boleh bercabang (mendua).',
      'Banyak pemetaan A ke B = n(B)^n(A).',
      'Korespondensi satu-satu terjadi jika n(A) = n(B) dan dihitung dengan n!.'
    ]
  },
  {
    id: 'unit-c',
    number: '03',
    title: 'Menentukan Nilai Fungsi',
    subtitle: 'Mesin Hitung Matematika yang Bekerja Ajaib',
    description: 'Kenali notasi f(x), bayangkan fungsi sebagai mesin pengolah angka yang presisi, dan temukan rumus tersembunyi dari tabel nilai!',
    iconName: 'Calculator',
    accentColor: 'from-pink-500 to-purple-500',
    sections: [
      {
        id: 'c1',
        title: 'Notasi dan Mesin Fungsi',
        badge: 'Input -> Mesin -> Output',
        intro: 'Pernah melihat mesin jus buah? Masukkan jeruk, diproses pisau pemutar, keluarlah jus jeruk segar! Begitulah cara kerja fungsi!',
        content: [
          'Fungsi dinotasikan dengan: **f : x -> ax + b** (dibaca: fungsi f memetakan x ke ax + b).',
          'Rumus fungsinya ditulis: **f(x) = ax + b**.',
          '• **x** adalah input (nilai masukan dari daerah asal).',
          '• **f(x)** adalah output / bayangan (nilai hasil di daerah hasil).',
          'Jika fungsinya f(x) = 2x + 3, maka untuk input x = 4:',
          'f(4) = 2(4) + 3 = 8 + 3 = **11**.'
        ],
        realWorldExample: {
          title: 'Simulasi Mesin Pabrik Donat Mister Jo',
          description: 'Mesin donat punya aturan f(x) = 5000x + 2000, di mana x adalah jumlah donat dan 2000 adalah biaya kotak kemasan cantik.',
          setA: ['1 donat', '2 donat', '5 donat'],
          setB: ['Rp7.000', 'Rp12.000', 'Rp27.000'],
          pairs: [['1 donat', 'Rp7.000'], ['2 donat', 'Rp12.000'], ['5 donat', 'Rp27.000']]
        },
        keyTakeaway: 'Nilai fungsi f(a) didapatkan dengan menggantikan (substitusi) setiap huruf x pada rumus dengan angka a.',
        misconceptions: [
          {
            wrong: 'Mengira f(x) artinya huruf f dikalikan huruf x.',
            right: 'f(x) adalah satu kesatuan lambang notasi yang dibaca "f dari x" atau "nilai fungsi f pada saat masukan x".',
            explanation: 'Bukan perkalian dua variabel terpisah.'
          },
          {
            wrong: 'Salah tanda saat memasukkan bilangan negatif, misal f(-2) pada rumus 3 - 2x.',
            right: 'Gunakan kurung! f(-2) = 3 - 2(-2) = 3 + 4 = 7.',
            explanation: 'Negatif dikali negatif menjadi positif.'
          }
        ],
        interactiveCheck: {
          question: 'Jika g(x) = 5 - 3x, berapakah nilai g(-2)?',
          options: [
            { text: '11', correct: true, explanation: 'Cerdas! g(-2) = 5 - 3(-2) = 5 - (-6) = 5 + 6 = 11.' },
            { text: '-1', correct: false, explanation: 'Hati-hati dengan tanda minus: -3 dikali -2 menghasilkan +6.' },
            { text: '1', correct: false, explanation: 'Periksa kembali perhitungan perkalian bilangan negatifnya ya.' }
          ]
        },
        audioScript: 'Bayangkan fungsi sebagai mesin pembuat jus. Angka masukan x dimasukkan, mesin menghitung sesuai rumus, dan mengeluarkan hasil yang disebut f dari x.'
      },
      {
        id: 'c2',
        title: 'Mencari Rumus dari Pasangan Nilai',
        badge: 'Metode Detektif Eliminasi',
        intro: 'Bagaimana jika rumusnya masih rahasia f(x) = ax + b, tapi kita tahu dua pasang nilainya? Ayo kita bongkar rahasianya!',
        content: [
          'Langkah detektif ala Mister Jo:',
          '1. Buat dua persamaan dengan memasukkan nilai x ke rumus f(x) = ax + b.',
          '2. Lakukan **eliminasi** dengan mengurangkan kedua persamaan untuk menemukan nilai **a**.',
          '3. Masukkan nilai a ke salah satu persamaan (**substitusi**) untuk menemukan nilai **b**.',
          'Contoh: Diketahui f(2) = 7 dan f(5) = 16.',
          '• Persamaan 1: 2a + b = 7',
          '• Persamaan 2: 5a + b = 16',
          'Kurangkan: (5a - 2a) = (16 - 7) -> 3a = 9 -> **a = 3**.',
          'Cari b: 2(3) + b = 7 -> 6 + b = 7 -> **b = 1**.',
          'Jadi rumus fungsinya adalah **f(x) = 3x + 1**!'
        ],
        keyTakeaway: 'Nilai a adalah laju perubahan (gradien) = (selisih f) dibagi (selisih x). Nilai b adalah nilai konstanta saat x = 0.',
        misconceptions: [
          {
            wrong: 'Mengira tanda nilai b selalu positif.',
            right: 'Konstanta b bisa bernilai negatif tergantung hasil perhitungannya.',
            explanation: 'Misalnya f(x) = 4x - 5, b bernilai -5.'
          }
        ],
        interactiveCheck: {
          question: 'Jika f(1) = 5 dan f(3) = 11 dengan f(x) = ax + b, berapa nilai a?',
          options: [
            { text: 'a = (11 - 5) / (3 - 1) = 6 / 2 = 3', correct: true, explanation: 'Sangat jitu! Selisih bayangan dibagi selisih input langsung menghasilkan koefisien a.' },
            { text: 'a = 11 - 5 = 6', correct: false, explanation: 'Jangan lupa membaginya dengan selisih x yaitu (3 - 1) = 2.' }
          ]
        },
        audioScript: 'Untuk menemukan rumus fungsi f dari x sama dengan ax ditambah b, cukup kurangkan kedua persamaan untuk mendapatkan a, lalu substitusikan untuk mendapatkan b.'
      }
    ],
    summaryPoints: [
      'f(x) menyatakan nilai keluaran fungsi f untuk masukan x.',
      'Menghitung nilai fungsi dilakukan dengan substitusi langsung.',
      'Hati-hati saat mensubstitusikan bilangan negatif: selalu gunakan tanda kurung.',
      'Rumus f(x) = ax + b dapat dipecahkan dengan metode eliminasi dan substitusi.'
    ]
  },
  {
    id: 'unit-d',
    number: '04',
    title: 'Penerapan & Penalaran HOTS',
    subtitle: 'Matematika di Dunia Nyata yang Mengagumkan',
    description: 'Gunakan kekuatan relasi dan fungsi untuk memecahkan tarif transportasi, grafik kenaikan produksi, pola bertingkat, dan tantangan logika kelas tinggi!',
    iconName: 'Award',
    accentColor: 'from-purple-500 to-indigo-500',
    sections: [
      {
        id: 'd1',
        title: 'Model Tarif Transportasi & Bisnis',
        badge: 'Dunia Nyata',
        intro: 'Saat kamu memesan taksi online atau mencetak foto polaroid, aplikasi menggunakan rumus fungsi linier persis seperti yang kita pelajari!',
        content: [
          'Banyak biaya di kehidupan nyata mengikuti pola tarif dasar ditambah tarif per satuan:',
          '**Total Biaya = Biaya Buka Pintu / Tetap + (Tarif per km x Jarak)**',
          'Dalam bahasa matematika: **f(x) = b + ax** atau **f(x) = ax + b**.',
          '• **b** adalah tarif buka pintu (biaya awal meski jarak 0 km).',
          '• **a** adalah tarif per kilometer.',
          '• **x** adalah jarak tempuh dalam kilometer.'
        ],
        realWorldExample: {
          title: 'Studi Kasus: Taksi Ceria Mister Jo',
          description: 'Tarif buka pintu Rp10.000, lalu tiap km berikutnya Rp4.000. Rumus: B(x) = 4000x + 10000. Untuk perjalanan 8 km: B(8) = 4000(8) + 10000 = Rp42.000.',
          setA: ['0 km', '5 km', '8 km', '10 km'],
          setB: ['Rp10.000', 'Rp30.000', 'Rp42.000', 'Rp50.000'],
          pairs: [['0 km', 'Rp10.000'], ['5 km', 'Rp30.000'], ['8 km', 'Rp42.000'], ['10 km', 'Rp50.000']]
        },
        keyTakeaway: 'Fungsi linier membantu kita memprediksi biaya, keuntungan usaha, dan membuat keputusan belanja yang paling cerdas.',
        misconceptions: [
          {
            wrong: 'Langsung mengalikan tarif per km dengan jarak tanpa menambah biaya awal.',
            right: 'Biaya tetap atau tarif dasar wajib ditambahkan di awal.',
            explanation: 'Kecuali dinyatakan secara eksplisit bahwa tidak ada biaya buka pintu.'
          }
        ],
        interactiveCheck: {
          question: 'Sebuah rental sepeda mematok sewa awal Rp15.000 plus Rp8.000 per jam. Jika Kiko menyewa selama 3 jam, berapa biayanya?',
          options: [
            { text: 'Rp39.000', correct: true, explanation: 'Tepat sekali! Biaya = 15.000 + (8.000 x 3) = 15.000 + 24.000 = Rp39.000.' },
            { text: 'Rp24.000', correct: false, explanation: 'Jangan lupa biaya sewa awal sebesar Rp15.000 ya.' },
            { text: 'Rp69.000', correct: false, explanation: 'Periksa kembali perhitungan perkalian jamnya.' }
          ]
        },
        audioScript: 'Di dunia nyata, tarif ojek online dan rental mobil dihitung menggunakan rumus fungsi linier. Biaya tetap ditambah tarif per kilometer dikali jarak tempuh.'
      },
      {
        id: 'd2',
        title: 'Menganalisis Grafik & Jebakan HOTS',
        badge: 'Uji Garis Vertikal',
        intro: 'Bagaimana cara menentukan apakah suatu grafik kurva pada koordinat kartesius merupakan fungsi atau bukan hanya dalam 2 detik?',
        content: [
          'Gunakan **UJI GARIS VERTIKAL (Vertical Line Test)**:',
          'Tarik garis tegak (vertikal lurus ke atas dan bawah) di mana pun melintasi grafik.',
          '• Jika garis tegak HANYA memotong grafik di **maksimal SATU titik**, maka grafik tersebut adalah **FUNGSI**.',
          '• Jika garis tegak memotong grafik di **DUA TITIK ATAU LEBIH**, maka grafik tersebut **BUKAN FUNGSI** (karena satu nilai x memiliki dua nilai y yang berbeda!).',
          'Contoh: Lingkaran sempurna BUKAN fungsi, tetapi garis lurus miring adalah FUNGSI.'
        ],
        keyTakeaway: 'Uji garis vertikal membuktikan secara visual apakah ada anggota x di domain yang mendua atau bercabang.',
        misconceptions: [
          {
            wrong: 'Menarik garis mendatar (horizontal) untuk menguji apakah suatu kurva adalah fungsi.',
            right: 'Garis yang ditarik harus TEGAK (VERTIKAL), sejajar sumbu Y!',
            explanation: 'Garis horizontal digunakan untuk menguji fungsi satu-satu, bukan untuk menguji fungsi secara umum.'
          }
        ],
        interactiveCheck: {
          question: 'Sebuah lingkaran berpusat di (0,0) digambar pada diagram kartesius. Apakah grafik lingkaran itu merupakan fungsi y = f(x)?',
          options: [
            { text: 'Bukan fungsi, karena garis tegak memotong lingkaran di 2 titik (atas dan bawah).', correct: true, explanation: 'Keren! Satu nilai x punya dua nilai y, sehingga gagal menjadi fungsi.' },
            { text: 'Ya fungsi, karena bentuknya simetris dan rapi.', correct: false, explanation: 'Kerapian bentuk tidak menjamin syarat fungsi; lingkaran melanggar aturan satu kawan.' }
          ]
        },
        audioScript: 'Untuk mengetahui apakah sebuah grafik merupakan fungsi, gunakan uji garis vertikal. Tarik garis tegak, dan pastikan hanya memotong di satu titik.'
      }
    ],
    summaryPoints: [
      'Model linier f(x) = ax + b sangat luas dipakai dalam ekonomi, sains, dan teknologi.',
      'Gunakan Uji Garis Vertikal untuk mendeteksi grafik fungsi dengan cepat.',
      'Soal HOTS menuntut pemahaman mendalam tentang input, proses, dan interpretasi makna konstanta.'
    ]
  }
];
