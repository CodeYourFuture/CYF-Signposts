function signpostFilter() {
  const form = document.querySelector("form");
  const regionInput = document.getElementById("region");
  const topicInput = document.getElementById("topic");
  const article = document.getElementById("signposts-by-region");
  const sections = article.querySelectorAll("section[data-regions]");
  const entries = article.querySelectorAll("details");

  const normalise = (value) =>
    value ? value.toLowerCase().replace(/ /g, "-") : "";
  const hideAll = () => {
    sections.forEach((section) => (section.hidden = true));
    entries.forEach((entry) => (entry.hidden = true));
  };

  const filter = () => {
    hideAll();
    const selectedRegion = normalise(regionInput.value) || false;
    const selectedTopic = normalise(topicInput.value) || false;

    // If no region selected, do nothing
    if (!selectedRegion) return;

    // When I select a region, then show that datalist (by choosing the list in the html, go look)
    topicInput.setAttribute("list", selectedRegion);

    if (selectedRegion) {
      // Find and show the current section
      const currentSection = [...sections].find(
        (section) => normalise(section.dataset.regions) === selectedRegion
      );
      currentSection.hidden = false;

      // Handle entries within the current section
      const sectionEntries = currentSection.querySelectorAll("details");
      sectionEntries.forEach((detail) => {
        detail.hidden =
          selectedTopic && normalise(detail.dataset.topics) !== selectedTopic;
      });
    }
  };

  hideAll();

  regionInput.addEventListener("input", filter);
  topicInput.addEventListener("input", filter);
  form.addEventListener("reset", () => {
    hideAll();
    topicInput.setAttribute("list", " ");
  });
}

document.addEventListener("DOMContentLoaded", signpostFilter);
