self.addEventListener("install", () => {
  console.log("installed");
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
