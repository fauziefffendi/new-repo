// local reviews data
const reviews = [
    {
        id: 1,
        name: "Susan smith",
        job: "web develover",
        img: "",
        text: "selamat pagi itu good morning. Kalau orang suka bangun bagi tu namanya morning person"
    },
    {
        id: 2,
        name: "Susan",
        job: "develover",
        img: "person-1.jpeg",
        text: "Siang ini panas, matahari seperti ingin memperlihatkan powernya. Petani menjemur padi lebih cepat kering dan tidak terlalu lama menjemur padi."
    },
    {
        id: 3,
        name: "smith",
        job: "App dev",
        img: "",
        text: "Baru belajar pemograman; HTML, CSS, dan Java script. Ini akan jadi modal awal supaya mahir bikin web sendiri. mau kerja remote soalnya."
    },
    {
        id: 4,
        name: "Alfian",
        job: "Data Analyst",
        img: "",
        text: "pertama belaraj Bahasa pemograman aku belajat Python karena tertarik belajar data. soalnya pernah punya pengalam jadi harvest plenner kerja ngolah data juga tapi pakai Excel. asik sih bisa bantu memberi perspektif dari sisi data sehingga bisa membatu mengambil keputusan lebih baik."
    },
    {
        id: 5,
        name: "Bardago",
        job: "Data Scienctist",
        img: "",
        text: "Jadi data science suit juga ternyata selain itu sekarang saingan juga dah banyak. kalo skill masih basic susah buat dapat kerja. supaya skill mantap caranya juga diimplementasiin di pekerjaan gak sih. Ini ngasih kesempatan kerja aja gak mau. hadehh"
    }
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const preBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
});

// show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

// show next person
nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length -1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show previous person
preBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
});
