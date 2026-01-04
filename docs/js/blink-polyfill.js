// Make all <blink> elements blink forever
window.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes blink {
      0%   { opacity: 1; }
      50%  { opacity: 0; }
      100% { opacity: 1; }
    }

    blink {
      animation: blink 1s step-start infinite;
    }
  `;
  document.head.appendChild(style);
});
