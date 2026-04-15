if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/kss-website/service-worker.js")
            .then(reg => console.log("SW registered", reg))
            .catch(err => console.log("SW failed", err));
    });
}