function generateGradient(startingAngle = 0, rotation = 90, s = 1, l = 0.5) {
  const stepCount = 360;
  const steps = [];
  for (let i = 0; i < stepCount; ++i) {
    steps.push(startingAngle + rotation * (i / stepCount));
  }
  return `linear-gradient(to bottom right, ${steps
    .map((i) => `hsl(${i}deg, ${s * 100}%, ${l * 100}%)`)
    .join(", ")})`;
}

// document.querySelector(".standard").style.backgroundImage = generateGradient(
//   20,
//   -30
// );

document.querySelectorAll("div[data-starting-hue]").forEach((i) => {
  const startingHue = parseInt(i.getAttribute("data-starting-hue") ?? "0");
  const rotation = parseInt(i.getAttribute("data-rotation") ?? "0");
  const s = parseFloat(i.getAttribute("data-saturation") ?? "1");
  const l = parseFloat(i.getAttribute("data-lightness") ?? "0.5");
  i.style.backgroundImage = generateGradient(startingHue, rotation, s, l);
});

console.log(generateGradient(0, 25));
