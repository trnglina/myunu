(() => {
  const body = document.querySelector("body");

  const listPaint = (b) => {
    const fg = b.getAttribute("data-accent-fg");
    const bg = b.getAttribute("data-accent-bg");

    if (fg) {
      body.style.setProperty("--accent-fg", fg);
    }

    if (bg) {
      if (!body.classList.contains("list-accent")) {
        body.classList.add("list-accent");
      }
      body.style.setProperty("--accent-bg", bg);
      body.style.background = bg;
    }
  };

  const listClear = () => {
    body.style.removeProperty("--accent-fg");
    body.style.removeProperty("--accent-bg");
    body.style.background = "";
    if (body.classList.contains("list-accent")) {
      body.classList.remove("list-accent");
    }
  };

  const cards = document.querySelectorAll(".list-view-card");

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseenter", (e) => {
      listPaint(e.target);
    });
    cards[i].addEventListener("mouseleave", listClear);
  }
})();
