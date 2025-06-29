const resultsDiv = document.getElementById("results");
const searchInput = document.getElementById("search");

function displayTerms(terms) {
  resultsDiv.innerHTML = "";
  terms.forEach(entry => {
    const div = document.createElement("div");
    div.className = "term";
    div.innerHTML = `
      <h3>${entry.term}</h3>
      <p>${entry.definition}</p>
    `;
    resultsDiv.appendChild(div);
  });
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = dictionary.filter(entry =>
    entry.term.toLowerCase().includes(keyword) ||
    entry.definition.toLowerCase().includes(keyword)
  );
  displayTerms(filtered);
});

// Show all terms by default on page load
displayTerms(dictionary);
