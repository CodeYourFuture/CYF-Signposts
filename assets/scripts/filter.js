function signpostFilter(topicsByRegion) {
  const form = document.querySelector("form");
  const regionInput = document.getElementById("region");
  const topicInput = document.getElementById("topic");
  const sections = document.querySelectorAll("section[data-regions]");
  const accordionItems = document.querySelectorAll("details");

  const updateVisibility = (element, isVisible) =>
    element.toggleAttribute("hidden", !isVisible);

  const hideAll = () => {
    sections.forEach((section) => updateVisibility(section, false));
    accordionItems.forEach((item) => updateVisibility(item, false));
  };

  const filterSectionsAndAccordionItems = (selectedRegion, selectedTopic) => {
    sections.forEach((section) => {
      const sectionRegions = section.dataset.regions
        .split(" | ")
        .map((region) => region.toLowerCase().replace(/ /g, "-"));

      const isVisible = sectionRegions.includes(selectedRegion);
      updateVisibility(section, isVisible);

      if (isVisible) {
        const items = section.querySelectorAll("details");
        items.forEach((item) => {
          const itemTopics = item.dataset.topics.split(" | ");
          const itemVisible = itemTopics.includes(selectedTopic);
          updateVisibility(item, itemVisible);
        });
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedRegion = regionInput.value.toLowerCase().replace(/ /g, "-");
    const selectedTopic = topicInput.value;

    filterSectionsAndAccordionItems(selectedRegion, selectedTopic);
  };

  const handleRegionChange = () => {
    const selectedRegion = regionInput.value.toLowerCase().replace(" ", "-");
    topicInput.setAttribute("list", `${selectedRegion}`);
  };

  hideAll();
  regionInput.addEventListener("input", handleRegionChange);
  form.addEventListener("submit", handleSubmit);
}

document.addEventListener("DOMContentLoaded", signpostFilter);
