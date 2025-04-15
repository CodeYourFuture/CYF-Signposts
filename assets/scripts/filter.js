function signpostFilter() {
  const form = document.querySelector("form");
  const regionInput = document.getElementById("region");
  const topicInput = document.getElementById("topic");
  const article = document.getElementById("signposts-by-region");
  const sections = article.querySelectorAll("section[data-regions]");

  const normalise = (value) =>
    value ? value.toLowerCase().replace(/ /g, "-") : "";

  const filter = () => {
    const selectedRegion = normalise(regionInput.value);
    const selectedTopic = normalise(topicInput.value);

    // all the topic lists are already in the html
    topicInput.setAttribute("list", selectedRegion);

    sections.forEach((section) => {
      // hide the regions that don't match
      const regionMatch = normalise(section.dataset.regions) === selectedRegion;
      section.hidden = !regionMatch;
      // within, hide the entries that don't match the topic
      // we've limited the top level topic to 1 in config.yml
      if (regionMatch) {
        section.querySelectorAll("details").forEach((detail) => {
          detail.hidden =
            selectedTopic && normalise(detail.dataset.topics) !== selectedTopic;
        });
      }
    });
  };

  sections.forEach((section) => (section.hidden = true));

  regionInput.addEventListener("input", filter);
  topicInput.addEventListener("input", filter);
  form.addEventListener("reset", () => {
    sections.forEach((section) => (section.hidden = true));
    topicInput.setAttribute("list", " ");
  });
}

document.addEventListener("DOMContentLoaded", signpostFilter);
