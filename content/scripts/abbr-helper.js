(() => {
  const expanded = [];
  const abbrs = document.querySelectorAll("abbr[title]");
  for (let i = 0; i < abbrs.length; i++) {
    const abbr = abbrs[i];
    const tag = abbr.innerHTML;
    if (!expanded.includes(tag)) {
      const exp = document.createElement("span");
      exp.innerHTML = ` (${abbr.getAttribute("title")})`;
      exp.className = "abbr-expansion";
      abbr.appendChild(exp);
      expanded.push(tag);
    }
  }
})();
