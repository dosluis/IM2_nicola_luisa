async function loadPersons(gender) {
  const url = `https://randomuser.me/api/?gender=${gender}`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
    return false;
  }
}

// index.html → home.html
const yesBtn = document.getElementById("yesBtn");

if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    window.location.href = "home.html";
  });
}

// home.html → gender.html
const startBtn = document.getElementById("startBtn");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    window.location.href = "gender.html";
  });
}

// Gender-Seite
const genderButtons = document.querySelectorAll(".gender-btn");
const figureWrapper = document.getElementById("figureWrapper");

const genderContent = document.querySelector(".gender-content");
const header = document.querySelector("header");
const backBtn = document.querySelector(".back-btn");

const transitionText = document.getElementById("transitionText");
const resultContent = document.getElementById("resultContent");

const backgroundVideo = document.querySelector(".background-video");
const darkOverlay = document.querySelector(".dark-overlay");

genderButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    genderButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const selectedGender = button.dataset.gender;
    console.log("Selected gender:", selectedGender);

    // API-Daten passend zum gewählten Gender laden
    const data = await loadPersons(selectedGender);

    if (data && data.results && data.results.length > 0) {
      const person = data.results[0];

      // Daten von API für card.html speichern
      localStorage.setItem("personData", JSON.stringify(person));

      console.log("Loaded person:", person);
    }
    // figur bewegt
    if (figureWrapper) {
      figureWrapper.classList.remove("figure-animation");
      void figureWrapper.offsetWidth;
      figureWrapper.classList.add("figure-animation");
    }
    //hintergrund video
    if (backgroundVideo) {
      backgroundVideo.classList.add("background-disappear");
    }

    //overlay
    if (darkOverlay) {
      darkOverlay.classList.add("background-disappear");
    }
    // transition text "data loading"
    if (transitionText) {
      transitionText.classList.add("transition-text-show");
    }

    if (resultContent) {
      setTimeout(() => {
        resultContent.classList.add("result-show");
      }, 4200);
    }
    //alles verschwindet
    if (genderContent) {
      genderContent.classList.add("content-disappear");
    }

    if (header) {
      header.classList.add("content-disappear");
    }

    if (backBtn) {
      backBtn.classList.add("content-disappear");
    }
  });
});

// gender.html → card.html
const resultsBtn = document.getElementById("resultsBtn");

if (resultsBtn) {
  resultsBtn.addEventListener("click", () => {
    window.location.href = "card.html";
  });
}

// Daten aus storage holen
const savedPerson = JSON.parse(localStorage.getItem("personData"));
if (savedPerson) {
  console.log('daten sind da', savedPerson);

  //NAME
  const name_container = document.querySelector('#name');
  name_container.innerText = `${savedPerson.name.title} ${savedPerson.name.first} ${savedPerson.name.last}`;

  // Geburtsdatum
  const birth_container = document.querySelector('#birthdate');
  birth_container.innerText = `${savedPerson.dob.date}`;

  // AGE age
  const age_container = document.querySelector('#age');
  age_container.innerText = `${savedPerson.dob.age}`;

  // ADDRESS address
  const address_container = document.querySelector('#address');
  address_container.innerText = `${savedPerson.location.street.name} ${savedPerson.location.street.number} ${savedPerson.location.postcode} ${savedPerson.location.city}`;

  // STADT
  const country_container = document.querySelector('#country');
  country_container.innerText = `${savedPerson.location.country}`;

  // Geschlecht
  const sex_container = document.querySelector('#sex');
  sex_container.innerText = `${savedPerson.gender}`;
  
  //TELE
  const tele_container = document.querySelector('#phone');
  tele_container.innerText = `${savedPerson.phone}`;

  //NATIONALITÄT
  const nat_container = document.querySelector('#nationality');
  nationality_container.innerText = `${savedPerson.nat}`;

  

}

// Daten auf card.html anzeigen

//NAME
if (savedPerson && document.querySelector("name")) {
  document.querySelector("name").textContent =
    `${savedPerson.name.title} ${savedPerson.name.first} ${savedPerson.name.last}`.toLowerCase();
}

//DATE OF BIRTH
if (savedPerson && document.querySelector("birthdate")) {
  document.querySelector("birthdate").textContent = `${savedPerson.dob.date}`.toLowerCase();
}
//AGE
if (savedPerson && document.querySelector("age")) {
  document.querySelector("age").textContent = `${savedPerson.dob.age}`.toLowerCase();
}

//ADDRESS
if (savedPerson && document.querySelector("address")) {
  document.querySelector("address").textContent = `${savedPerson.location.street.name} ${savedPerson.location.street.number} ${savedPerson.location.postcode} ${savedPerson.location.city}`.toLowerCase();
}

// STADT
if( savedPerson && document.querySelector("country")) {
  document.querySelector("country").textContent = `${savedPerson.location.country}`.toLowerCase();
}

// GESCHLECHT
if( savedPerson && document.querySelector("sex")) {
  document.querySelector("sex").textContent = `${savedPerson.gender}`.toLowerCase();
}

//TELE
if( savedPerson && document.querySelector("phone")) {
  document.querySelector("phone").textContent = `${savedPerson.phone}`.toLowerCase();
}

//NAT
if( savedPerson && document.querySelector("nationality")) {
  document.querySelector("nationality").textContent = `${savedPerson.nat}`.toLowerCase();
}






// DAS MÖCHTE ICH ALLES ANZEIGEN

//gender
//name.titel
//name.first
//name.last

//dob.date
//dob.age

//location.street.name
//location.street.number
//location.postcode
//location.city

//location.country

//phone

//nationality (nat)

//email



