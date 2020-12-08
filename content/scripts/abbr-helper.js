(() => {
  const expanded = [];
  const abbrs = document.querySelectorAll("abbr[title]");
  for (let i = 0; i < abbrs.length; i++) {
    const abbr = abbrs[i];
    if (!expanded.includes(abbr.innerHTML)) {
      const exp = document.createElement("span");
      exp.innerHTML = ` (${abbr.getAttribute("title")})`;
      exp.className = "abbr-expansion";
      abbr.appendChild(exp);
      expanded.push(abbr.innerHTML);
    }
  }
})();
