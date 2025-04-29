(function () {
  const customerId = document.currentScript.getAttribute("data-customer-id");

  const widgetRoot = document.createElement("div");
  widgetRoot.id = "toolbox-widget-root";
  document.body.appendChild(widgetRoot);

  const shadow = widgetRoot.attachShadow({ mode: "open" });
   // Inject CSS into Shadow DOM
   const cssLink = document.createElement("link");
   cssLink.rel = "stylesheet";
   cssLink.type = "text/css";
   // cssLink.href = "https://willowy-cuchufli-cb1231.netlify.app/react-toolbox-widget.bundle.css";
   cssLink.href = "https://rictestapp.netlify.app/react-toolbox-widget.bundle.css";
   shadow.appendChild(cssLink);

  // Container to hold the app
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.bottom = "20px";
  // container.style.right = "20px";
  container.style.top = "5px";
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.zIndex = "99999";
  shadow.appendChild(container);

  

  // Create container for React app
  const appContainer = document.createElement("div");
  appContainer.id = "toolbox-app";
  appContainer.style.backgroundColor = "white";
  appContainer.style.width = "100%";
  container.appendChild(appContainer);

  // Load React widget script immediately
  const script = document.createElement("script");
  // script.src = "https://willowy-cuchufli-cb1231.netlify.app/react-toolbox-widget.bundle.iife.js";
  script.src = "https://rictestapp.netlify.app/react-toolbox-widget.bundle.iife.js";
  script.onload = () => {
    console.log("Widget script loaded");
    if (typeof window.renderToolboxWidget === "function") {
      window.renderToolboxWidget(appContainer, { customerId });
    } else {
      console.error("renderToolboxWidget not available on window.");
    }
  };
  script.onerror = (err) => {
    console.error("Failed to load widget script", err);
  };
  container.appendChild(script);
})();
