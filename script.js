function showOS(id) {
  document.querySelectorAll(".os-card").forEach(card => {
    card.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

function toggleKernel() {
  document.getElementById("kernelInfo").classList.toggle("hidden");
}

const canvas = document.getElementById("osChart");
const ctx = canvas.getContext("2d");

const data = [
  { name: "Windows", value: 70 },
  { name: "Linux", value: 20 },
  { name: "macOS", value: 30 }
];

const barWidth = 80;
const gap = 50;
const startX = 60;
const maxHeight = 150;

ctx.fillStyle = "#4a63e7";

data.forEach((os, i) => {
  const x = startX + i * (barWidth + gap);
  const height = (os.value / 100) * maxHeight;
  const y = canvas.height - height - 40;

  ctx.fillRect(x, y, barWidth, height);
  ctx.fillText(os.name, x, canvas.height - 15);
  ctx.fillText(os.value + "%", x + 20, y - 8);
});

const range = document.getElementById("securityRange");
const text = document.getElementById("securityText");

range.addEventListener("input", () => {
  if (range.value <= 3) text.textContent = "Security Level: Low";
  else if (range.value <= 7) text.textContent = "Security Level: Medium";
  else text.textContent = "Security Level: High";
});
