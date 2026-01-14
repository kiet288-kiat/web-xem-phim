const movieData = {
   // --- Thêm phim mới ---
  "Oppenheimer": {
  fullTitle: "Oppenheimer (2023)",
  rating: "8.6",
  country: "Mỹ",
  year: "2023",
  genre: "Lịch sử",
  type: "Phim Lẻ",
  description: "Câu chuyện về nhà vật lý J. Robert Oppenheimer...",
  poster: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
  watchLink: "https://www.youtube.com/watch?v=uYPbbksJxIg"
},
"John Wick: Chapter 4": {
  fullTitle: "John Wick: Chapter 4 (2023)",
  rating: "8.0",
  country: "Mỹ",
  year: "2023",
  genre: "Hành động",
  type: "Phim Lẻ",
  description: "John Wick đối đầu với tổ chức High Table...",
  poster: "https://image.tmdb.org/t/p/original/dCuJH7UsWOzNrXUzPiGwmcwT8sk.jpg",
  watchLink: "https://www.youtube.com/watch?v=qEVUtrk8_B4"
},


  "The Marvels": {
    fullTitle: "The Marvels (2023)",
    rating: "6.2",
    country: "Mỹ",
    year: "2023",
    genre: "Hành động",
    type: "Phim Lẻ",
    description: "Carol Danvers hợp tác cùng Kamala Khan và Monica Rambeau trong một nhiệm vụ xuyên không gian đầy nguy hiểm.",
    poster: "https://image.tmdb.org/t/p/w342/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
    watchLink: "https://www.youtube.com/watch?v=iuk77TjvfmE"
  },

  "Dune: Part Two": {
    fullTitle: "Dune: Part Two (2024)",
    rating: "8.4",
    country: "Mỹ",
    year: "2024",
    genre: "Khoa học viễn tưởng",
    type: "Phim Lẻ",
    description: "Paul Atreides hợp nhất các bộ tộc Fremen để trả thù cho gia đình và ngăn chặn một tương lai bi thảm.",
    poster: "https://image.tmdb.org/t/p/w342/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",
    watchLink: "https://www.youtube.com/watch?v=Way9Dexny3w"
  },

  //kinh dị
   "Hereditary": {
    fullTitle: "Hereditary (2018)",
    rating: "7.3",
    country: "Mỹ",
    year: "2018",
    genre: "Kinh dị",
    type: "Phim Lẻ",
    description: "Một gia đình bị ám bởi linh hồn của tổ tiên.",
    poster: "https://image.tmdb.org/t/p/w342/4GFPuL14eXi66V96xBWY73Y9PfR.jpg",
    watchLink: "https://www.youtube.com/watch?v=V6wWKNij_1M"
  },

  "The Conjuring 2": {
  fullTitle: "The Conjuring 2 (2016)",
  rating: "7.3",
  country: "Mỹ",
  year: "2016",
  genre: "Kinh dị",
  type: "Phim Lẻ",
  description: "Cặp đôi trừ tà Ed và Lorraine Warren điều tra một ngôi nhà bị ma ám ở Enfield, Anh.",
  poster: "https://image.tmdb.org/t/p/w500/zEqyD0SBt6HL7W9JQoWwtd5Do1T.jpg",
  watchLink: "https://www.youtube.com/watch?v=VFsmuRPClr4"
},


"A Quiet Place": {
  fullTitle: "A Quiet Place (2018)",
  rating: "7.5",
  country: "Mỹ",
  year: "2018",
  genre: "Kinh dị",
  type: "Phim Lẻ",
  description: "Một gia đình sống trong im lặng để tránh bị săn lùng bởi những sinh vật săn theo âm thanh.",
  poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
  watchLink: "https://www.youtube.com/watch?v=WR7cc5t7tv8"
},

"It: Chapter One": {
  fullTitle: "It: Chapter One (2017)",
  rating: "7.2",
  country: "Mỹ",
  year: "2017",
  genre: "Kinh dị",
  type: "Phim Lẻ",
  description: "Một nhóm trẻ em đối đầu với thực thể ma quái có hình dạng chú hề Pennywise.",
  poster: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
  watchLink: "https://www.youtube.com/watch?v=xKJmEC5ieOk"
},

"Get Out": {
  fullTitle: "Get Out (2017)",
  rating: "7.7",
  country: "Mỹ",
  year: "2017",
  genre: "Kinh dị",
  type: "Phim Lẻ",
  description: "Một chàng trai da màu phát hiện bí mật kinh hoàng tại nhà bạn gái da trắng trong kỳ nghỉ cuối tuần.",
  poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
  watchLink: "https://www.youtube.com/watch?v=DzfpyUB60YY"
},

"Midsommar": {
  fullTitle: "Midsommar (2019)",
  rating: "7.1",
  country: "Mỹ",
  year: "2019",
  genre: "Kinh dị",
  type: "Phim Lẻ",
  description: "Một nhóm bạn tham dự lễ hội mùa hè Thụy Điển và bị cuốn vào nghi thức kỳ lạ, đầy ám ảnh.",
  poster: "https://image.tmdb.org/t/p/w500/lHe8iwM4Cdm6RSEiara4PN8ZcBd.jpg",
  watchLink: "https://www.youtube.com/watch?v=1Vnghdsjmd0"
},

"The Invisible Man": {
  fullTitle: "The Invisible Man (2020)",
  rating: "7.1",
  country: "Mỹ",
  year: "2020",
  genre: "Kinh dị",
  type: "Phim Lẻ",
  description: "Một người phụ nữ bị rình rập bởi bạn trai cũ tưởng đã chết – và dường như trở nên vô hình.",
  poster: "https://image.tmdb.org/t/p/w500/5EufsDwXdY2CVttYOk2WtYhgKpa.jpg",
  watchLink: "https://www.youtube.com/watch?v=dSBsNeYqh-k"
},


  // Phiêu lưu
  "Indiana Jones and the Dial of Destiny": {
    fullTitle: "Indiana Jones 5 (2023)",
    rating: "6.7",
    country: "Mỹ",
    year: "2023",
    genre: "Phiêu lưu",
    type: "Phim Lẻ",
    description: "Indiana Jones khám phá một cổ vật có thể thay đổi lịch sử.",
    poster: "https://image.tmdb.org/t/p/w500/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
    watchLink: "https://www.youtube.com/watch?v=eQfMbSe7F2g"
  },
  "Jungle Cruise": {
    fullTitle: "Jungle Cruise (2021)",
    rating: "6.6",
    country: "Mỹ",
    year: "2021",
    genre: "Phiêu lưu",
    type: "Phim Lẻ",
    description: "Cuộc hành trình qua sông Amazon với nhiều nguy hiểm rình rập.",
    poster: "https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
    watchLink: "https://www.youtube.com/watch?v=f_HvoipFcA8"
  },


"Uncharted": {
  fullTitle: "Uncharted (2022)",
  rating: "6.5",
  country: "Mỹ",
  year: "2022",
  genre: "Phiêu lưu",
  type: "Phim Lẻ",
  description: "Thợ săn kho báu Nathan Drake bắt đầu hành trình truy tìm kho báu đã mất của Ferdinand Magellan.",
  poster: "https://image.tmdb.org/t/p/w500/rJHC1RUORuUhtfNb4Npclx0xnOf.jpg",
  watchLink: "https://www.youtube.com/watch?v=eHp3MbsCbMg"
},



"Jumanji: Welcome to the Jungle": {
  fullTitle: "Jumanji: Welcome to the Jungle (2017)",
  rating: "6.9",
  country: "Mỹ",
  year: "2017",
  genre: "Phiêu lưu",
  type: "Phim Lẻ",
  description: "Bốn học sinh bị hút vào trò chơi Jumanji và phải vượt qua các thử thách để sống sót và trở lại thế giới thực.",
  poster: "https://image.tmdb.org/t/p/w500/pSgXKPU5h6U89ipF7HBYajvYt7j.jpg",
  watchLink: "https://www.youtube.com/watch?v=2QKg5SZ_35I"
},

"Love and Monsters": {
  fullTitle: "Love and Monsters (2020)",
  rating: "7.0",
  country: "Mỹ",
  year: "2020",
  genre: "Phiêu lưu",
  type: "Phim Lẻ",
  description: "Một chàng trai vượt quãng đường dài qua vùng đất quái vật để tìm lại người yêu trong tận thế.",
  poster: "https://image.tmdb.org/t/p/w500/r4Lm1XKP0VsTgHX4LG4syAwYA2I.jpg",
  watchLink: "https://www.youtube.com/watch?v=-19tBHrZwOM"
},


"Peter Rabbit 2: The Runaway": {
  fullTitle: "Peter Rabbit 2: The Runaway (2021)",
  rating: "6.4",
  country: "Anh",
  year: "2021",
  genre: "Phiêu lưu",
  type: "Phim Lẻ",
  description: "Peter khám phá thế giới bên ngoài khu vườn trong khi gia đình tìm cách mang cậu trở lại.",
  poster: "https://image.tmdb.org/t/p/w342/cycDz68DtTjJrDJ1fV8EBq2Xdpb.jpg",
  watchLink: "https://www.youtube.com/watch?v=euGHcnyUo84"
},


  // Hoạt hình
  "Coco": {
    fullTitle: "Coco (2017)",
    rating: "8.4",
    country: "Mỹ",
    year: "2017",
    genre: "Hoạt hình",
    type: "Phim Lẻ",
    description: "Một cậu bé mê âm nhạc bị lạc vào thế giới người chết.",
    poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    watchLink: "https://www.youtube.com/watch?v=Ga6RYejo6Hk"
  },
  "Inside Out": {
    fullTitle: "Inside Out (2015)",
    rating: "8.1",
    country: "Mỹ",
    year: "2015",
    genre: "Hoạt hình",
    type: "Phim Lẻ",
    description: "Bên trong tâm trí của một cô bé là những cảm xúc có nhân cách riêng.",
    poster: "https://image.tmdb.org/t/p/w342/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
    watchLink: "https://www.youtube.com/watch?v=seMwpP0yeu4"
  },
  "Moana": {
  fullTitle: "Moana (2016)",
  rating: "7.6",
  country: "Mỹ",
  year: "2016",
  genre: "Hoạt hình",
  type: "Phim Lẻ",
  description: "Một cô gái trẻ dũng cảm lên đường ra khơi để giải cứu hòn đảo của mình, cùng á thần Maui.",
  poster: "https://image.tmdb.org/t/p/w342/9tzN8sPbyod2dsa0lwuvrwBDWra.jpg",
  watchLink: "https://www.youtube.com/watch?v=LKFuXETZUsI"
},



"Zootopia": {
  fullTitle: "Zootopia (2016)",
  rating: "8.0",
  country: "Mỹ",
  year: "2016",
  genre: "Hoạt hình",
  type: "Phim Lẻ",
  description: "Một thỏ cảnh sát và một cáo lừa đảo cùng hợp tác phá vụ án mất tích trong thành phố động vật.",
  poster: "https://image.tmdb.org/t/p/w500/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg",
  watchLink: "https://www.youtube.com/watch?v=jWM0ct-OLsM"
},



"Encanto": {
  fullTitle: "Encanto (2021)",
  rating: "7.2",
  country: "Mỹ",
  year: "2021",
  genre: "Hoạt hình",
  type: "Phim Lẻ",
  description: "Một gia đình ở Colombia có phép thuật — ngoại trừ cô bé Mirabel — người sau đó khám phá vai trò thực sự của mình.",
  poster: "https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
  watchLink: "https://www.youtube.com/watch?v=CaimKeDcudo"
},

"Turning Red": {
  fullTitle: "Turning Red (2022)",
  rating: "7.4",
  country: "Mỹ",
  year: "2022",
  genre: "Hoạt hình",
  type: "Phim Lẻ",
  description: "Một cô bé tuổi teen biến thành gấu trúc đỏ khổng lồ mỗi khi quá xúc động.",
  poster: "https://image.tmdb.org/t/p/w500/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
  watchLink: "https://www.youtube.com/watch?v=XdKzUbAiswE"
},

"Puss in Boots: The Last Wish": {
  fullTitle: "Puss in Boots: The Last Wish (2022)",
  rating: "7.9",
  country: "Mỹ",
  year: "2022",
  genre: "Hoạt hình",
  type: "Phim Lẻ",
  description: "Chú mèo Puss nhận ra mình chỉ còn một mạng sống và lên đường tìm ngôi sao ước để khôi phục lại tất cả.",
  poster: "https://image.tmdb.org/t/p/w500/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
  watchLink: "https://www.youtube.com/watch?v=tHb7WlgyaUc"
},

"Spider-Man: Into the Spider-Verse": {
  fullTitle: "Spider-Man: Into the Spider-Verse (2018)",
  rating: "8.4",
  country: "Mỹ",
  year: "2018",
  genre: "Hoạt hình",
  type: "Phim Lẻ",
  description: "Miles Morales gặp các Spider-Man từ vũ trụ khác và học cách trở thành người hùng xứng đáng.",
  poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
  watchLink: "https://www.youtube.com/watch?v=g4Hbz2jLxvQ"
},


  // Tài liệu
  "The Social Dilemma": {
    fullTitle: "The Social Dilemma (2020)",
    rating: "7.6",
    country: "Mỹ",
    year: "2020",
    genre: "Tài liệu",
    type: "Phim Lẻ",
    description: "Khám phá tác động của mạng xã hội đến con người.",
    poster: "https://image.tmdb.org/t/p/w342/jdmagxKK7g2rPkdltC7Kga2MBbp.jpg",
    watchLink: "https://www.youtube.com/watch?v=uaaC57tcci0"
  },
  "My Octopus Teacher": {
    fullTitle: "My Octopus Teacher (2020)",
    rating: "8.1",
    country: "Nam Phi",
    year: "2020",
    genre: "Tài liệu",
    type: "Phim Lẻ",
    description: "Tình bạn giữa một nhà làm phim và bạch tuộc hoang dã.",
    poster: "https://image.tmdb.org/t/p/w342/hvTVZb7hBC8tZAGoEhH5eiMJu2B.jpg",
    watchLink: "https://www.youtube.com/watch?v=3s0LTDhqe5A"
  },

  //Hài
  "Free Guy": {
  fullTitle: "Free Guy (2021)",
  rating: "7.1",
  country: "Mỹ",
  year: "2021",
  genre: "Hài",
  type: "Phim Lẻ",
  description: "Một nhân vật trong game phát hiện ra thế giới của mình là giả lập và quyết định trở thành anh hùng.",
  poster: "https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
  watchLink: "https://www.youtube.com/watch?v=X2m-08cOAbc"
},

"The Intern": {
  fullTitle: "The Intern (2015)",
  rating: "7.1",
  country: "Mỹ",
  year: "2015",
  genre: "Hài",
  type: "Phim Lẻ",
  description: "Một ông cụ nghỉ hưu làm thực tập sinh tại một công ty startup do một nữ CEO trẻ tuổi điều hành.",
  poster: "https://image.tmdb.org/t/p/w342/9UoAC9tu8kIyRy8AcJnGhnH0gOH.jpg",
  watchLink: "https://www.youtube.com/watch?v=ZU3Xban0Y6A"
},

//hành dộng
"Mad Max: Fury Road": {
  fullTitle: "Mad Max: Fury Road (2015)",
  rating: "8.1",
  country: "Úc",
  year: "2015",
  genre: "Hành động",
  type: "Phim Lẻ",
  description: "Trong một thế giới hậu tận thế, Max hợp tác với Furiosa để chạy trốn khỏi bạo chúa Immortan Joe.",
  poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
  watchLink: "https://www.youtube.com/watch?v=hEJnMQG9ev8"
},

"Captain America: Civil War": {
  fullTitle: "Captain America: Civil War (2016)",
  rating: "7.8",
  country: "Mỹ",
  year: "2016",
  genre: "Hành động",
  type: "Phim Lẻ",
  description: "Mâu thuẫn về trách nhiệm và quyền lực khiến các siêu anh hùng chia phe đối đầu.",
  poster: "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
  watchLink: "https://www.youtube.com/watch?v=dKrVegVI0Us"
},

"Tenet": {
  fullTitle: "Tenet (2020)",
  rating: "7.4",
  country: "Mỹ",
  year: "2020",
  genre: "Hành động",
  type: "Phim Lẻ",
  description: "Một điệp viên học cách điều khiển thời gian đảo ngược để ngăn chặn Thế chiến thứ ba.",
  poster: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
  watchLink: "https://www.youtube.com/watch?v=L3pk_TBkihU"
},

"Extraction": {
  fullTitle: "Extraction (2020)",
  rating: "6.8",
  country: "Mỹ",
  year: "2020",
  genre: "Hành động",
  type: "Phim Lẻ",
  description: "Một lính đánh thuê được thuê để cứu con trai của một trùm ma túy ở Ấn Độ.",
  poster: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
  watchLink: "https://www.youtube.com/watch?v=L6P3nI6VnlY"
},

"No Time to Die": {
  fullTitle: "No Time to Die (2021)",
  rating: "7.3",
  country: "Anh",
  year: "2021",
  genre: "Hành động",
  type: "Phim Lẻ",
  description: "James Bond trở lại để đối đầu với một ác nhân sở hữu công nghệ nguy hiểm toàn cầu.",
  poster: "https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
  watchLink: "https://www.youtube.com/watch?v=BIhNsAtPbPI"
},

//tình cảm
"La La Land": {
  fullTitle: "La La Land (2016)",
  rating: "8.0",
  country: "Mỹ",
  year: "2016",
  genre: "Tình cảm",
  type: "Phim Lẻ",
  description: "Chuyện tình giữa một nhạc sĩ jazz và một nữ diễn viên đang chật vật theo đuổi ước mơ ở Los Angeles.",
  poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
  watchLink: "https://www.youtube.com/watch?v=0pdqf4P9MB8"
},

"Call Me by Your Name": {
  fullTitle: "Call Me by Your Name (2017)",
  rating: "8.1",
  country: "Ý",
  year: "2017",
  genre: "Tình cảm",
  type: "Phim Lẻ",
  description: "Một chàng trai trẻ phải lòng một học giả đến sống cùng gia đình mình vào mùa hè ở nước Ý.",
  poster: "https://image.tmdb.org/t/p/w342/gXiE0WveDnT0n5J4sW9TMxXF4oT.jpg",
  watchLink: "https://www.youtube.com/watch?v=Z9AYPxH5NTM"
},

"About Time": {
  fullTitle: "About Time (2013)",
  rating: "7.8",
  country: "Anh",
  year: "2013",
  genre: "Tình cảm",
  type: "Phim Lẻ",
  description: "Một chàng trai phát hiện mình có thể du hành thời gian và dùng năng lực đó để tìm kiếm tình yêu đích thực.",
  poster: "https://image.tmdb.org/t/p/w342/iR1bVfURbN7r1C46WHFbwCkVve.jpg",
  watchLink: "https://www.youtube.com/watch?v=T7A810duHvw"
},

"Me Before You": {
  fullTitle: "Me Before You (2016)",
  rating: "7.4",
  country: "Anh",
  year: "2016",
  genre: "Tình cảm",
  type: "Phim Lẻ",
  description: "Một cô gái lạc quan chăm sóc một người đàn ông bị liệt, và dần dần giữa họ nảy sinh một tình cảm sâu sắc.",
  poster: "https://image.tmdb.org/t/p/w342/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg",
  watchLink: "https://www.youtube.com/watch?v=Eh993__rOxA"
},

"Your Name": {
  fullTitle: "Your Name (2016)",
  rating: "8.4",
  country: "Nhật Bản",
  year: "2016",
  genre: "Tình cảm",
  type: "Phim Lẻ",
  description: "Hai thiếu niên sống ở hai nơi khác nhau hoán đổi thân xác bí ẩn và dần nảy sinh tình cảm.",
  poster: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
  watchLink: "https://www.youtube.com/watch?v=xU47nhruN-Q"
},

//khoa học viễn tưởng
"Interstellar": {
  fullTitle: "Interstellar (2014)", // ngoài mốc 2015 nhưng cực kỳ nổi bật, bạn nên cân nhắc giữ
  rating: "8.6",
  country: "Mỹ",
  year: "2014",
  genre: "Khoa học viễn tưởng",
  type: "Phim Lẻ",
  description: "Một nhóm phi hành gia du hành qua hố đen để tìm kiếm hành tinh mới cho nhân loại.",
  poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  watchLink: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
},

"The Martian": {
  fullTitle: "The Martian (2015)",
  rating: "8.0",
  country: "Mỹ",
  year: "2015",
  genre: "Khoa học viễn tưởng",
  type: "Phim Lẻ",
  description: "Một phi hành gia bị bỏ lại trên sao Hỏa và phải tìm cách sống sót trong khi chờ giải cứu.",
  poster: "https://image.tmdb.org/t/p/w342/3ndAx3weG6KDkJIRMCi5vXX6Dyb.jpg",
  watchLink: "https://www.youtube.com/watch?v=ej3ioOneTy8"
},

"Arrival": {
  fullTitle: "Arrival (2016)",
  rating: "7.9",
  country: "Mỹ",
  year: "2016",
  genre: "Khoa học viễn tưởng",
  type: "Phim Lẻ",
  description: "Một nhà ngôn ngữ học được mời dịch ngôn ngữ của người ngoài hành tinh vừa đến Trái đất.",
  poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
  watchLink: "https://www.youtube.com/watch?v=tFMo3UJ4B4g"
},

"Tenet": {
  fullTitle: "Tenet (2020)",
  rating: "7.4",
  country: "Mỹ",
  year: "2020",
  genre: "Khoa học viễn tưởng",
  type: "Phim Lẻ",
  description: "Một điệp viên khám phá ra công nghệ đảo ngược thời gian và phải ngăn chặn thảm họa toàn cầu.",
  poster: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
  watchLink: "https://www.youtube.com/watch?v=L3pk_TBkihU"
},

"Dune: Part One": {
  fullTitle: "Dune: Part One (2021)",
  rating: "8.1",
  country: "Mỹ",
  year: "2021",
  genre: "Khoa học viễn tưởng",
  type: "Phim Lẻ",
  description: "Paul Atreides bước vào cuộc chiến chính trị và định mệnh để cứu hành tinh sa mạc Arrakis.",
  poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  watchLink: "https://www.youtube.com/watch?v=n9xhJrPXop4"
},

//lịch sử
"Napoleon": {
  fullTitle: "Napoleon (2023)",
  rating: "6.5",
  country: "Mỹ",
  year: "2023",
  genre: "Lịch sử",
  type: "Phim Lẻ",
  description: "Khắc họa cuộc đời đầy biến động của hoàng đế Pháp Napoleon Bonaparte và tình yêu đầy rối ren với Josephine.",
  poster: "https://image.tmdb.org/t/p/w342/ytFOXyghxLzAM4KZyazDdEkM66q.jpg",
  watchLink: "https://www.youtube.com/watch?v=OAZWXUkrjPc"
},

"The Last Duel": {
  fullTitle: "The Last Duel (2021)",
  rating: "7.4",
  country: "Mỹ",
  year: "2021",
  genre: "Lịch sử",
  type: "Phim Lẻ",
  description: "Dựa trên sự kiện lịch sử về vụ đấu tay đôi cuối cùng được pháp luật công nhận ở Pháp thời trung cổ.",
  poster: "https://image.tmdb.org/t/p/w342/zjrJE0fpzPvX8saJXj8VNfcjBoU.jpg",
  watchLink: "https://www.youtube.com/watch?v=mgygUwPJvYk"
},

"Emancipation": {
  fullTitle: "Emancipation (2022)",
  rating: "6.8",
  country: "Mỹ",
  year: "2022",
  genre: "Lịch sử",
  type: "Phim Lẻ",
  description: "Một người nô lệ chạy trốn khỏi đồn điền ở miền Nam nước Mỹ để tìm tự do và trở thành biểu tượng lịch sử.",
  poster: "https://image.tmdb.org/t/p/w500/s9sUK1vAaOcxJfKzNTszrNkPhkH.jpg",
  watchLink: "https://www.youtube.com/watch?v=5d5nMkmY3K0"
},


"The Zookeeper's Wife": {
  fullTitle: "The Zookeeper's Wife (2017)",
  rating: "7.1",
  country: "Anh",
  year: "2017",
  genre: "Lịch sử",
  type: "Phim Lẻ",
  description: "Một cặp vợ chồng ở Warsaw bí mật cứu hơn 300 người Do Thái trong Thế chiến II qua sở thú của họ.",
  poster: "https://image.tmdb.org/t/p/w342/5TVBtMhwOldZW82g1Ka11IE86wC.jpg",
  watchLink: "https://www.youtube.com/watch?v=rJNFeHHGGN4"
},

"1917": {
  fullTitle: "1917 (2019)",
  rating: "8.3",
  country: "Anh",
  year: "2019",
  genre: "Lịch sử",
  type: "Phim Lẻ",
  description: "Hai binh sĩ Anh nhận nhiệm vụ nguy hiểm trong Thế chiến thứ nhất để cứu hàng trăm mạng sống.",
  poster: "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
  watchLink: "https://www.youtube.com/watch?v=YqNYrYUiMfg"
},






  // ---------------- Hàn Quốc ----------------
  "Train to Busan": {
    fullTitle: "Train to Busan (2016)",
    rating: "7.6",
    country: "Hàn Quốc",
    year: "2016",
    genre: "Kinh dị",
    type: "Phim Lẻ",
    description: "Chuyến tàu chở đầy zombie, cuộc chiến sinh tồn nghẹt thở.",
    poster: "https://image.tmdb.org/t/p/w342/vNVFt6dtcqnI7hqa6LFBUibuFiw.jpg",
    watchLink: "https://www.youtube.com/watch?v=pyWuHv2-Abk"
  },
  "Along with the Gods: The Two Worlds": {
    fullTitle: "Along with the Gods: The Two Worlds (2017)",
    rating: "7.8",
    country: "Hàn Quốc",
    year: "2017",
    genre: "Phiêu lưu",
    type: "Phim Lẻ",
    description: "Một lính cứu hỏa quá cố trải qua 7 kỳ xét xử ở địa ngục.",
    poster: "https://image.tmdb.org/t/p/w342/gJSvIsI6oQfFim0PGyuuiCYfqKs.jpg",
    watchLink: "https://www.youtube.com/watch?v=9AC3lsN_3uw"
  },
  "Parasite": {
    fullTitle: "Parasite (2019)",
    rating: "8.5",
    country: "Hàn Quốc",
    year: "2019",
    genre: "Tình cảm",
    type: "Phim Lẻ",
    description: "Gia đình nghèo trà trộn vào nhà giàu và bi kịch bắt đầu.",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    watchLink: "https://www.youtube.com/watch?v=5xH0HfJHsaY"
  },
  "Peninsula": {
    fullTitle: "Peninsula (2020)",
    rating: "5.8",
    country: "Hàn Quốc",
    year: "2020",
    genre: "Kinh dị",
    type: "Phim Lẻ",
    description: "Phần tiếp theo của Train to Busan, hậu tận thế zombie.",
    poster: "https://image.tmdb.org/t/p/w500/sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",
    watchLink: "https://www.youtube.com/watch?v=dw3QGJupE9g"
  },
  "Space Sweepers": {
    fullTitle: "Space Sweepers (2021)",
    rating: "6.7",
    country: "Hàn Quốc",
    year: "2021",
    genre: "Khoa học viễn tưởng",
    type: "Phim Lẻ",
    description: "Đội thu gom rác vũ trụ tìm thấy robot bí ẩn.",
    poster: "https://image.tmdb.org/t/p/w500/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg",
    watchLink: "https://www.youtube.com/watch?v=ZN9xntBPeuA"
  },
  "Mouse": {
  fullTitle: "Mouse (2021)",
  rating: "8.2",
  country: "Hàn Quốc",
  year: "2021",
  genre: "Hình sự",
  type: "Phim Bộ",
  description: "Một cảnh sát trẻ phát hiện ra mình có liên quan đến kẻ giết người hàng loạt, làm đảo lộn toàn bộ cuộc đời và đẩy anh vào cuộc săn lùng nguy hiểm.",
  poster: "https://image.tmdb.org/t/p/w342/gp1sa8IV0Tm83cQg7j2E1vpmwkP.jpg",
  watchLink: "https://www.youtube.com/watch?v=MHltvU9l28M"
},


  // ---------------- Nhật Bản ----------------
 
  "Weathering With You": {
    fullTitle: "Weathering With You (2019)",
    rating: "7.5",
    country: "Nhật Bản",
    year: "2019",
    genre: "Tình cảm",
    type: "Phim Lẻ",
    description: "Cô gái có khả năng điều khiển thời tiết.",
    poster: "https://image.tmdb.org/t/p/w500/qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg",
    watchLink: "https://www.youtube.com/watch?v=Q6iK6DjV_iE"
  },
  "Shin Godzilla": {
    fullTitle: "Shin Godzilla (2016)",
    rating: "7.0",
    country: "Nhật Bản",
    year: "2016",
    genre: "Khoa học viễn tưởng",
    type: "Phim Lẻ",
    description: "Godzilla tái xuất phá hủy Tokyo.",
    poster: "https://image.tmdb.org/t/p/w342/jPNShaWZMpVF0iQ7j1dvTuZLD20.jpg",
    watchLink: "https://www.youtube.com/watch?v=ysRIwlEBjuw"
  },
  "Suzume": {
    fullTitle: "Suzume (2022)",
    rating: "7.7",
    country: "Nhật Bản",
    year: "2022",
    genre: "Tình cảm",
    type: "Phim Lẻ",
    description: "Cô gái đóng các cánh cửa ngăn chặn thảm họa.",
    poster: "https://image.tmdb.org/t/p/w500/vIeu8WysZrTSFb2uhPViKjX9EcC.jpg",
    watchLink: "https://www.youtube.com/watch?v=5p7fm4YH9YI"
  },
  "The Third Murder": {
    fullTitle: "The Third Murder (2017)",
    rating: "6.7",
    country: "Nhật Bản",
    year: "2017",
    genre: "Hình sự",
    type: "Phim Lẻ",
    description: "Luật sư điều tra vụ án giết người phức tạp.",
    poster: "https://image.tmdb.org/t/p/w342/xENc6UYviC3JfFqKA6kReHfT2Zt.jpg",
    watchLink: "https://www.youtube.com/watch?v=YOZpe4sFZac"
  },



};

function renderMovieList(data) {
  const container = document.getElementById("movie-list");
  container.innerHTML = "";

  for (const [title, movie] of Object.entries(data)) {
    const col = document.createElement("div");
    col.className = "col-6 col-md-3 movie-item";
    col.setAttribute("data-type", movie.type);
    col.setAttribute("data-genre", movie.genre);
    col.setAttribute("data-country", movie.country);
    col.setAttribute("data-year", movie.year);

    col.innerHTML = `
      <div class="movie-poster" onclick="openModal('${title}')">
        <img src="${movie.poster}" alt="poster">
      </div>
      <div class="movie-title">${title}</div>
      <div class="text-muted small">${movie.country}</div>
    `;
    container.appendChild(col);
  }
}

function openModal(title) {
  const data = movieData[title];
  if (!data) return;

  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalFullTitle').innerText = data.fullTitle;
  document.getElementById('modalRating').innerText = data.rating;
  document.getElementById('modalCountry').innerText = data.country;
  document.getElementById('modalYear').innerText = data.year;
  document.getElementById('modalGenre').innerText = data.genre;
  document.getElementById('modalType').innerText = data.type;
  document.getElementById('modalDescription').innerText = data.description;
  document.getElementById('modalPoster').src = data.poster;
  document.getElementById('modalWatchLink').href = data.watchLink;

  new bootstrap.Modal(document.getElementById('movieModal')).show();
}



// Khởi tạo danh sách phim
renderMovieList(movieData);


// Lọc và tìm kiếm
const filters = ['type', 'genre', 'country', 'year'];
filters.forEach(f => {
  document.getElementById(`filter-${f}`).addEventListener('change', applyFilters);
});

document.getElementById('searchInput').addEventListener('input', applyFilters);

function applyFilters() {
  const values = {
    type: document.getElementById('filter-type').value,
    genre: document.getElementById('filter-genre').value,
    country: document.getElementById('filter-country').value,
    year: document.getElementById('filter-year').value,
    search: document.getElementById('searchInput').value.trim().toLowerCase()
  };

  document.querySelectorAll('.movie-item').forEach(item => {
    const title = item.querySelector('.movie-title').innerText.toLowerCase();
    const matchesSearch = title.includes(values.search);
    const matchesFilters =
      (!values.type || item.dataset.type === values.type) &&
      (!values.genre || item.dataset.genre === values.genre) &&
      (!values.country || item.dataset.country === values.country) &&
      (!values.year || item.dataset.year === values.year);

    item.style.display = (matchesSearch && matchesFilters) ? 'block' : 'none';
  });
}

// Xử lý form đăng ký
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const password = this.querySelector('input[type="password"]').value.trim();

  if (!username || !email || !password) {
    alert('Vui lòng nhập đầy đủ thông tin!');
    return;
  }

  // Lưu vào localStorage
  const user = { username, email, password };
  localStorage.setItem('user', JSON.stringify(user));

  alert('Đăng ký thành công!');
  bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
  this.reset();
});

// Xử lý form đăng nhập
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = this.querySelector('input[type="text"]').value.trim();
  const password = this.querySelector('input[type="password"]').value.trim();

  const savedUser = JSON.parse(localStorage.getItem('user'));

  if (!savedUser) {
    alert('Chưa có tài khoản! Vui lòng đăng ký trước.');
    return;
  }

  if (username === savedUser.username && password === savedUser.password) {
    alert('Đăng nhập thành công!');
    bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
    this.reset();
    window.location.href = '/';
  } else {
    alert('Sai tên đăng nhập hoặc mật khẩu!');
  }
});

