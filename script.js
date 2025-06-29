// Ensure a global array to collect all terms
window.dictionary = window.dictionary || [];

const resultsDiv = document.getElementById("results");
const searchInput = document.getElementById("search");

function displayTerms(terms) {
  resultsDiv.innerHTML = "";

  if (terms.length === 0) {
    resultsDiv.innerHTML = "<p>No matching terms found.</p>";
    return;
  }

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
  const keyword = searchInput.value.trim().toLowerCase();

  const filtered = window.dictionary.filter(entry =>
    entry.term.toLowerCase().includes(keyword) ||
    entry.definition.toLowerCase().includes(keyword)
  );

  displayTerms(filtered);
});

// Show all terms on page load
window.addEventListener("DOMContentLoaded", () => {
  displayTerms(window.dictionary);
});
