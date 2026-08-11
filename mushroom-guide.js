const cards = document.querySelectorAll(".mushroom-guide .card");

const seasonFilter = document.querySelector("#season");
const edibleFilter = document.querySelector("#edible");
const noMatchResults = document.querySelector(".no-match");

seasonFilter.addEventListener("change", updateFilter);
edibleFilter.addEventListener("change", updateFilter);

const currentFilter = {
  season: "all",
  edible: "all",
};

function updateFilter(event) {
  const filterType = event.target.name;
  currentFilter[filterType] = event.target.value;
  filterCards();
}

function filterCards() {
    let availabeFilterCards = false;
  cards.forEach((card) => {
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;

    const matchesSeason = currentFilter.season === season;
    const matchesEdible = currentFilter.edible === edible;

    if (
      (matchesSeason || currentFilter.season === "all") &&
      (matchesEdible || currentFilter.edible === "all")
    ) {
      card.hidden = false;
      availabeFilterCards = true;
    } else {
      card.hidden = true;
    }

    if (availabeFilterCards) {
        noMatchResults.hidden = true;
    } else {
        noMatchResults.hidden = false;
    }
  });
}


function enableFiltering() {
  seasonFilter.hidden = false;
  edibleFilter.hidden = false;
}

enableFiltering();