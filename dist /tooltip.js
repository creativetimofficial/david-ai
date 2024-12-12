// Dynamically load Popper.js for Dropdowns, Popovers, and Tooltips
function loadPopperJs(callback) {
  const script = document.createElement("script");
  script.src = "https://unpkg.com/@popperjs/core@2";
  script.defer = true;
  script.onload = callback; // Callback function after script is loaded
  document.head.appendChild(script);
}

// Tooltip component
function initTooltips() {
  const tooltipTriggers = document.querySelectorAll("[data-dui-toggle='tooltip']");

  tooltipTriggers.forEach(trigger => {
    const title = trigger.getAttribute("data-dui-title");
    const placement = trigger.getAttribute("data-dui-placement");
    const tooltipClasses = trigger.getAttribute("data-dui-tooltip-class");

    let tooltipInstance = null;
    let tooltipElement = null;

    function showTooltip() {
      // If tooltip is already visible, do nothing
      if (tooltipElement) return;

      // Create tooltip element
      tooltipElement = document.createElement("div");
      tooltipElement.className = tooltipClasses;
      tooltipElement.textContent = title;
      document.body.appendChild(tooltipElement);

      // Create Popper.js instance
      tooltipInstance = Popper.createPopper(trigger, tooltipElement, {
        placement: placement,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 8],
            },
          },
        ],
      });
    }

    function hideTooltip() {
      if (tooltipElement && !trigger.classList.contains('static-tooltip')) {
        tooltipInstance.destroy();
        tooltipInstance = null;
        tooltipElement.remove();
        tooltipElement = null;
      }
    }

    trigger.addEventListener("mouseenter", showTooltip);
    trigger.addEventListener("mouseleave", hideTooltip);

    trigger.addEventListener("click", () => {
      if (trigger.classList.contains("static-tooltip")) {
        trigger.classList.remove("static-tooltip");
        hideTooltip();
      } else {
        trigger.classList.add("static-tooltip");
        showTooltip();
      }
    });
  });
}

// Initialize components that depend on Popper.js after it is loaded
loadPopperJs(() => {
  initTooltips();
});