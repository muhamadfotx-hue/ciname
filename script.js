// =================================
// CINEMA — HERO SLIDESHOW
// =================================

const hero = document.querySelector(".hero");

const heroImages = [
  "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920",
  "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920",
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920",
];

let currentSlide = 0;

if (hero) {
  heroImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  setInterval(() => {
    const nextSlide = (currentSlide + 1) % heroImages.length;
    const nextImage = new Image();

    nextImage.src = heroImages[nextSlide];

    nextImage.onload = () => {
      hero.classList.add("changing");

      setTimeout(() => {
        currentSlide = nextSlide;
        hero.style.backgroundImage = `url("${heroImages[currentSlide]}")`;

        setTimeout(() => {
          hero.classList.remove("changing");
        }, 100);
      }, 500);
    };
  }, 5000);
}

// =================================
// CINEMA — 3 TILLI TARJIMA
// =================================

const translations = {
  uz: {
    home: "Bosh sahifa",
    movies: "Kinolar",
    series: "Seriallar",
    genres: "Janrlar",
    search: "Kino qidirish...",
    login: "Kirish",
    original: "CINEMA ORIGINAL",
    weekly: "BU HAFTANING ENG YAXSHI FILMI",
    watch: "▶ TOMOSHA QILISH",
    details: "ⓘ Batafsil",
    trending: "Trenddagi",
    films: "kinolar",
    all: "Barchasini ko'rish ↗",
    selected: "SIZ UCHUN TANLANDI",
    genreTitle: "Kino",
    genreSubtitle: "janrlari",
    choose: "O'ZINGIZGA MOSINI TANLANG",
    popular: "Mashhur",
    serials: "seriallar",
    serialLabel: "DAVOMIY HAYAJON",
    duration: "2 soat 49 daqiqa",
    next: "KEYINGI FILM →",
    description:
      "Insoniyat kelajagi xavf ostida. Bir guruh tadqiqotchilar yangi dunyoni izlash uchun koinotga yo'l olishadi. Ularning sayohati insoniyat taqdirini o'zgartirishi mumkin.",
    action: "Jangari",
    fantasy: "Fantastika",
    thriller: "Triller",
    comedy: "Komediya",
    horror: "Horror",
    romance: "Romantika",
    mystery: "Detektiv",
    drama: "Drama",
    notFound: "Bu nomdagi kino topilmadi 😔",
    footer: "© 2026 CINEMA. Barcha huquqlar himoyalangan.",
  },

  ru: {
    home: "Главная",
    movies: "Фильмы",
    series: "Сериалы",
    genres: "Жанры",
    search: "Поиск фильма...",
    login: "Войти",
    original: "CINEMA ORIGINAL",
    weekly: "ЛУЧШИЙ ФИЛЬМ НЕДЕЛИ",
    watch: "▶ СМОТРЕТЬ",
    details: "ⓘ Подробнее",
    trending: "Популярные",
    films: "фильмы",
    all: "Смотреть все ↗",
    selected: "ВЫБРАНО ДЛЯ ВАС",
    genreTitle: "Кино",
    genreSubtitle: "жанры",
    choose: "ВЫБЕРИТЕ СВОЙ ЖАНР",
    popular: "Популярные",
    serials: "сериалы",
    serialLabel: "НЕПРЕРЫВНОЕ ВОЛНЕНИЕ",
    duration: "2 часа 49 минут",
    next: "СЛЕДУЮЩИЙ ФИЛЬМ →",
    description:
      "Будущее человечества под угрозой. Группа исследователей отправляется в космос на поиски нового мира. Их путешествие может изменить судьбу всего человечества.",
    action: "Боевик",
    fantasy: "Фантастика",
    thriller: "Триллер",
    comedy: "Комедия",
    horror: "Ужасы",
    romance: "Романтика",
    mystery: "Детектив",
    drama: "Драма",
    notFound: "Фильм не найден 😔",
    footer: "© 2026 CINEMA. Все права защищены.",
  },

  en: {
    home: "Home",
    movies: "Movies",
    series: "Series",
    genres: "Genres",
    search: "Search movies...",
    login: "Sign in",
    original: "CINEMA ORIGINAL",
    weekly: "BEST MOVIE OF THE WEEK",
    watch: "▶ WATCH NOW",
    details: "ⓘ Details",
    trending: "Trending",
    films: "movies",
    all: "View all ↗",
    selected: "SELECTED FOR YOU",
    genreTitle: "Movie",
    genreSubtitle: "genres",
    choose: "CHOOSE YOUR GENRE",
    popular: "Popular",
    serials: "series",
    serialLabel: "ENDLESS EXCITEMENT",
    duration: "2 hours 49 minutes",
    next: "NEXT MOVIE →",
    description:
      "The future of humanity is in danger. A group of researchers travels into space in search of a new world. Their journey could change the fate of humanity.",
    action: "Action",
    fantasy: "Sci-Fi",
    thriller: "Thriller",
    comedy: "Comedy",
    horror: "Horror",
    romance: "Romance",
    mystery: "Mystery",
    drama: "Drama",
    notFound: "No movie found 😔",
    footer: "© 2026 CINEMA. All rights reserved.",
  },
};

// =================================
// TILNI ALMASHTIRISH
// =================================

function changeLanguage(lang) {
  const t = translations[lang];

  if (!t) return;

  document.documentElement.lang = lang;

  const navLinks = document.querySelectorAll(".nav-links a");

  if (navLinks.length >= 4) {
    navLinks[0].textContent = t.home;
    navLinks[1].textContent = t.movies;
    navLinks[2].textContent = t.series;
    navLinks[3].textContent = t.genres;
  }

  const searchInput = document.querySelector(".search-box input");
  if (searchInput) {
    searchInput.placeholder = t.search;
  }

  const loginButton = document.querySelector(".login-btn");
  if (loginButton) {
    loginButton.innerHTML = t.login + " <span>↗</span>";
  }

  const heroSmall = document.querySelector(".hero-small");
  if (heroSmall) heroSmall.textContent = t.weekly;

  const heroLabel = document.querySelector(".hero-label");
  if (heroLabel) {
    heroLabel.innerHTML = '<span class="gold-dot"></span>' + t.original;
  }

  const watchButton = document.querySelector(".watch-btn");
  if (watchButton) watchButton.textContent = t.watch;

  const infoButton = document.querySelector(".info-btn");
  if (infoButton) infoButton.textContent = t.details;

  const heroDescription = document.querySelector(".hero-description");
  if (heroDescription) heroDescription.textContent = t.description;

  const duration = document.querySelector(".movie-info span:nth-child(3)");
  if (duration) duration.textContent = t.duration;

  const nextSlide = document.querySelector(".next-slide");
  if (nextSlide) nextSlide.textContent = t.next;

  const headings = document.querySelectorAll(".section-heading");

  if (headings[0]) {
    const label = headings[0].querySelector(".section-label");
    const heading = headings[0].querySelector("h2");
    const link = headings[0].querySelector("a");

    if (label) label.textContent = t.selected;
    if (heading) {
      heading.innerHTML = t.trending + " <span>" + t.films + "</span>";
    }
    if (link) link.textContent = t.all;
  }

  if (headings[1]) {
    const label = headings[1].querySelector(".section-label");
    const heading = headings[1].querySelector("h2");

    if (label) label.textContent = t.choose;
    if (heading) {
      heading.innerHTML =
        t.genreTitle + " <span>" + t.genreSubtitle + "</span>";
    }
  }

  if (headings[2]) {
    const label = headings[2].querySelector(".section-label");
    const heading = headings[2].querySelector("h2");
    const link = headings[2].querySelector("a");

    if (label) label.textContent = t.serialLabel;
    if (heading) {
      heading.innerHTML = t.popular + " <span>" + t.serials + "</span>";
    }
    if (link) link.textContent = t.all;
  }

  const genreNames = [
    t.action,
    t.fantasy,
    t.comedy,
    t.horror,
    t.romance,
    t.mystery,
  ];

  document.querySelectorAll(".genre-card span").forEach((genre, index) => {
    if (genreNames[index]) {
      genre.textContent = genreNames[index];
    }
  });

  const movieGenres = [t.fantasy, t.thriller, t.action, t.fantasy, t.drama];

  document.querySelectorAll(".movie-card p").forEach((item, index) => {
    const year = item.textContent.match(/\d{4}/);

    if (year && movieGenres[index]) {
      item.innerHTML = year[0] + " <span>•</span> " + movieGenres[index];
    }
  });

  const footerText = document.querySelector(".footer p");
  if (footerText) footerText.textContent = t.footer;

  const searchMessage = document.getElementById("searchMessage");
  if (searchMessage) {
    searchMessage.textContent = t.notFound;
  }
}

// =================================
// PREMIUM TIL MENYUSI
// =================================

const languageDropdown = document.querySelector(".language-dropdown");
const languageToggle = document.querySelector(".language-toggle");
const currentLanguage = document.querySelector(".current-language");
const languageOptions = document.querySelectorAll(".language-option");

const languageLabels = {
  uz: "🇺🇿 UZ",
  ru: "🇷🇺 RU",
  en: "🇬🇧 EN",
};

if (languageDropdown && languageToggle) {
  languageToggle.addEventListener("click", () => {
    languageDropdown.classList.toggle("open");
  });

  languageOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const lang = option.dataset.lang;

      if (!translations[lang]) return;

      if (currentLanguage) {
        currentLanguage.textContent = languageLabels[lang];
      }

      languageOptions.forEach((item) => {
        item.classList.remove("active");

        const check = item.querySelector(".language-check");
        if (check) check.textContent = "";
      });

      option.classList.add("active");

      const selectedCheck = option.querySelector(".language-check");
      if (selectedCheck) selectedCheck.textContent = "✓";

      languageDropdown.classList.remove("open");

      changeLanguage(lang);
    });
  });

  document.addEventListener("click", (event) => {
    if (!languageDropdown.contains(event.target)) {
      languageDropdown.classList.remove("open");
    }
  });
}

// =================================
// CINEMA — LIVE MOVIE SEARCH
// =================================

const movieSearch = document.getElementById("movieSearch");
const movieCards = document.querySelectorAll(".movie-card");
const searchMessage = document.getElementById("searchMessage");

if (movieSearch) {
  movieSearch.addEventListener("input", () => {
    const searchValue = movieSearch.value.trim().toLocaleLowerCase();

    let foundMovies = 0;

    movieCards.forEach((card) => {
      const titleElement = card.querySelector("h3");
      const genreElement = card.querySelector("p");

      const title = titleElement
        ? titleElement.textContent.toLocaleLowerCase()
        : "";

      const genre = genreElement
        ? genreElement.textContent.toLocaleLowerCase()
        : "";

      const matches =
        title.includes(searchValue) || genre.includes(searchValue);

      card.style.display = matches ? "" : "none";

      if (matches) {
        foundMovies++;
      }
    });

    if (searchMessage) {
      searchMessage.style.display = foundMovies === 0 ? "block" : "none";
    }
  });
}

// =================================
// BOSHLANG'ICH TIL
// =================================

changeLanguage("uz");

// =================================
// CINEMA — MOVIE DETAILS
// =================================

const movieModal = document.getElementById("movieModal");
const modalClose = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalRating = document.getElementById("modalRating");
const modalYear = document.getElementById("modalYear");
const modalGenre = document.getElementById("modalGenre");
const modalDescription = document.getElementById("modalDescription");

const movieCardsForModal = document.querySelectorAll(".movie-card");

const movieDescriptions = {
  Interstellar:
    "Insoniyat kelajagi xavf ostida. Bir guruh tadqiqotchilar yangi dunyoni izlash uchun koinotga yo'l olishadi.",
  Inception:
    "Tushlar ichiga kirish va inson ongiga g'oya joylashtirish haqida hayajonli fantastik triller.",
  "The Dark Knight":
    "Betmen Gotham shahrini xavfli jinoyatchidan himoya qilishga urinadi.",
  Dune: "Pol Atreydes oilasi va xalqining kelajagi uchun sirli cho'l sayyorasiga yo'l oladi.",
  Joker: "Artur Flekning hayoti va Jokerga aylanishi haqida dramatik hikoya.",
};

movieCardsForModal.forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3")?.textContent.trim() || "Kino";
    const image = card.querySelector("img")?.src || "";
    const genreText = card.querySelector("p")?.textContent || "";
    const rating = card.querySelector(".poster-rating")?.textContent || "★ --";

    const year = genreText.match(/\d{4}/)?.[0] || "";
    const genre = genreText.replace(/\d{4}/, "").replace("•", "").trim();

    modalImage.src = image;
    modalTitle.textContent = title;
    modalRating.textContent = rating;
    modalYear.textContent = year;
    modalGenre.textContent = genre;
    modalDescription.textContent =
      movieDescriptions[title] ||
      "Bu kino haqida ma'lumot hozircha mavjud emas.";

    movieModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

function closeMovieModal() {
  movieModal.classList.remove("active");
  document.body.style.overflow = "";
}

if (modalClose) {
  modalClose.addEventListener("click", closeMovieModal);
}

if (movieModal) {
  movieModal.addEventListener("click", (event) => {
    if (event.target === movieModal) {
      closeMovieModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && movieModal?.classList.contains("active")) {
    closeMovieModal();
  }
});

// =================================
// CINEMA — OFFICIAL MOVIE TRAILERS
// =================================

const trailerModal = document.getElementById("trailerModal");
const trailerFrame = document.getElementById("trailerFrame");
const trailerTitle = document.getElementById("trailerTitle");
const trailerClose = document.getElementById("trailerClose");
const watchFullBtn = document.getElementById("watchFullBtn");

const modalWatchBtn = document.querySelector(".modal-watch-btn");

const movieTrailers = {
  Interstellar: "zSWdZVtXT7E",
  Inception: "YoHD9XEInc0",
  "The Dark Knight": "EXeTwQWrcwY",
  Dune: "8g18jFHCLXk",
  Joker: "t433PEQGErc",
};

if (modalWatchBtn) {
  modalWatchBtn.addEventListener("click", () => {
    const title = modalTitle.textContent.trim();
    const videoId = movieTrailers[title];

    if (!videoId) {
      alert("Bu kino uchun treyler topilmadi.");
      return;
    }

    trailerTitle.textContent = title + " — TREYLER";
    trailerFrame.src =
      "https://www.youtube.com/embed/" + videoId + "?autoplay=1&rel=0";

    trailerModal.classList.add("active");
  });
}

function closeTrailer() {
  trailerModal.classList.remove("active");
  trailerFrame.src = "";
}

trailerClose.addEventListener("click", closeTrailer);

trailerModal.addEventListener("click", (event) => {
  if (event.target === trailerModal) {
    closeTrailer();
  }
});
