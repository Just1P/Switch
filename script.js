const buttons = Array.from(document.querySelectorAll(".button"));
const playground = document.querySelector(".playground");
const actionsBar = document.querySelector(".actions-bar");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;
    const value = button.dataset.value;
    console.log(type);
    console.log(value);
    updateCss(type, value);
  });
});

const updateCss = (type, value) => {
  switch (type) {
    case "color":
      playground.style.color = `var(--color-${value}-text)`;
      playground.style.backgroundColor = `var(--color-${value})`;
      actionsBar.style.backgroundColor = `var(--color-${value}-actions-bar)`;
      break;
    case "size":
      title.style.fontSize = `var(--size-${value}-title)`;
      subtitle.style.fontSize = `var(--size-${value}-subtitle)`;
      break;
  }
};
