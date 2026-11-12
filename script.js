const revealButton = document.getElementById("reveal-button");
const surprise = document.getElementById("surprise");

revealButton.addEventListener("click", () => {
  const isHidden = surprise.hidden;
  surprise.hidden = !isHidden;
  revealButton.setAttribute("aria-expanded", String(isHidden));
  revealButton.querySelector("span:first-child").textContent =
    isHidden ? "Hide appreciation note" : "Send a little appreciation";
});