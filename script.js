//overskrift på de elementer jeg er med mit arbejde//
document.addEventListener("DOMContentLoaded", () => {

const text = document.querySelector(".sec-text");

  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "Web Developer";
    }, 0);

    setTimeout(() => {
      text.textContent = "Software Developer";
    }, 4000);

    setTimeout(() => {
      text.textContent = "Freelancer Developer";
    }, 8000);
  };

  textLoad();
  setInterval(textLoad, 12000);

//åbner mine tabs//
  const tabLinks = document.querySelectorAll(".tab-links");
  const tabContents = document.querySelectorAll(".tab-contents");

    tabLinks.forEach(link => {
     link.addEventListener("click", (e) => {
      const tabName = link.dataset.tab;

      // Fjern alle aktive klasser
      tabLinks.forEach(l => l.classList.remove("active-link"));
      tabContents.forEach(c => c.classList.remove("active-tab"));

      // Tilføj aktive klasser
      link.classList.add("active-link");
      document.getElementById(tabName).classList.add("active-tab");
    });
  });
});
