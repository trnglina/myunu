(() => {
  const listPaint = (b) => {
    const fg = b.getAttribute("data-accent-fg");
    const bg = b.getAttribute("data-accent-bg");

    if (fg) {
      document.body.style.setProperty("--accent-fg", fg);
    }

    if (bg) {
      if (!document.body.classList.contains("list-accent")) {
        document.body.classList.add("list-accent");
      }
      document.body.style.setProperty("--accent-bg", bg);
      document.body.style.background = bg;
    }
  };

  const listClear = () => {
    document.body.style.removeProperty("--accent-fg");
    document.body.style.removeProperty("--accent-bg");
    document.body.style.background = "";
    if (document.body.classList.contains("list-accent")) {
      document.body.classList.remove("list-accent");
    }
  };

  for (const card of document.querySelectorAll(".list-view-card")) {
    card.addEventListener("mouseenter", (e) => {
      listPaint(e.target);
    });
    card.addEventListener("focusin", (e) => {
      listPaint(e.target.closest(".list-view-card"));
    });
    card.addEventListener("mouseleave", listClear);
    card.addEventListener("focusout", listClear);
  }
})();
