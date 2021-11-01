let nav = 0;
let events = localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")) : [];

const calendar = document.getElementById("dani");
const weekdays = ["понедељак", "уторак", "среда", "четвртак", "петак", "субота", "недеља"]; //moraju hr nazivi jer ih stringujem preko hr-sr, na sr-sr je ćirilica........ ili sam samo sve prebaciju u ćirilicu bem ti ćirilicu
const allMonths = [
    "Januar",
    "Februar",
    "Mart",
    "April",
    "Maj",
    "Jun",
    "Jul",
    "Avgust",
    "Septembar",
    "Oktobar",
    "Novembar",
    "Decembar",
];
const dezuran = ["Mlađo", "Stefi", "Nidža", "Tamara", "Mirka", "Andrea", "Taša", "Mara", "Mlađo", "Stefi", "Nidža", "Tamara", "Mirka", "Andrea", "Taša", "Mara", "Mlađo", "Stefi", "Nidža", "Tamara", "Mirka", "Andrea", "Taša", "Mara", "Mlađo", "Stefi", "Nidža", "Tamara", "Mirka", "Andrea", "Taša", "Mara", "Mlađo", "Stefi", "Nidža", "Tamara", "Mirka", "Andrea", "Taša", "Mara"];

/////////////// Učitavanje kalendara //////////////////

function load() {
    const datum = new Date();

    if (nav !==0) {
        datum.setMonth(new Date().getMonth() + nav);
    }

    const day = datum.getDate();
    const month = datum.getMonth();
    const year = datum.getFullYear();

    const firstDayOfMonth = new Date (year, month, 1);
    const daysInMonth = new Date (year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleString ("sr-SR", {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric"
    });
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    
    document.getElementById("monthDisplay").innerText = `${allMonths [month]}`; 
    document.getElementById("yearDisplay").innerText = `${year}`;

    calendar.innerHTML = ""; //svaki put kada se učitavaju dani mora da se isprazni .dani kako se ne bi stackovali dani iz sledećeg meseca jedan na drugi

    for ( let i=1; i <= paddingDays + daysInMonth; i++) {
        const daySquare = document.createElement("div");
        daySquare.classList.add("dan");
        if (i>paddingDays) {
            daySquare.innerText = i - paddingDays;
            daySquare.addEventListener ("click", () => console.log("click"))
            daySquare.innerHTML = '<p>'+ (i - paddingDays) +'</p>'+'<div class="oglasnik">'+ dezuran [i] +'</div>';
        } else {
            daySquare.classList.add ("padding");
        }

        calendar.appendChild (daySquare);

        console.log(paddingDays);
    }
}

///////////////// Kontrole ///////////////////////

function controlBtns() {
    document.getElementById("nextBtn").addEventListener ("click", () => {
        nav++;
        load ();
    })

    document.getElementById("prevBtn").addEventListener ("click", () => {
        nav--;
        load ();
    })

    document.getElementById("refresh").addEventListener ("click", () => {
        nav = 0;
        load ();
    })
}

controlBtns();
load();
