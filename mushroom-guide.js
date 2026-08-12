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

addCaardViewTransitionNames();

enableFiltering();

function updateFilter(event) {
  const filterType = event.target.name;
  currentFilter[filterType] = event.target.value;

  if (!document.startViewTransition) {
    filterCards();
    return;
  }

  document.startViewTransition(() => {
    filterCards();
  });
}

function filterCards() {
  let availableFilterCards = false;
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
      availableFilterCards = true;
    } else {
      card.hidden = true;
    }

    if (availableFilterCards) {
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

function addCaardViewTransitionNames() {
  cards.forEach((card, index) => {
    mushroomId = `mushroom-${index + 1}`
    card.style.viewTransitionName = `card-${mushroomId}`;
  });
}
