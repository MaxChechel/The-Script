function initFloatingCards() {
  document.querySelectorAll(".floating_cards_row").forEach((row) => {
    const cards = Array.from(row.querySelectorAll(".floating_card"));
    const remClasses = ["is-sm", "is-lg"];

    cards.forEach((card) => {
      const spacer = document.createElement("div");
      spacer.classList.add("floating_cards_spacer");

      // Add random size class
      const randomClass =
        remClasses[Math.floor(Math.random() * remClasses.length)];
      spacer.classList.add(randomClass);

      // Insert spacer before each card
      card.parentNode.insertBefore(spacer, card);
    });
  });

  document
    .querySelectorAll(".floating_cards_cms_wrap")
    .forEach((originalWrap) => {
      const clone = originalWrap.cloneNode(true); // deep clone
      originalWrap.parentNode.insertBefore(clone, originalWrap.nextSibling);
    });
}

export { initFloatingCards };
