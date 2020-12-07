(function () {
  const cards = document.getElementsByClassName("list-view-card");
  const body = document.body;

  const paint = function (basis) {
    let fg = basis.dataset.accentFg;
    let bg = basis.dataset.accentBg;
    if (fg) {
      body.style.setProperty("--accent-fg", fg);
    }
    if (bg) {
      if (!body.classList.contains("has-accent")) {
        body.classList.add("has-accent");
      }
      body.style.setProperty("--accent-bg", bg);
      body.style.background = bg;
    }
  };

  const clear = function () {
    body.style.removeProperty("--accent-fg");
    body.style.removeProperty("--accent-bg");
    body.style.background = "";
    if (body.classList.contains("has-accent")) {
      body.classList.remove("has-accent");
    }
  };

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseenter", function (e) {
      paint(cards[i]);
    });
    cards[i].addEventListener("mouseleave", clear);
  }
})();
