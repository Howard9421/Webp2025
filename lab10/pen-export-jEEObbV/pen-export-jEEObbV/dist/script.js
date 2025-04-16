let currentPage = 1;
const perPage = 20;

function buildImageUrl(photo) {
  return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`;
}

function loadImages(reset = true) {
  if (reset) {
    currentPage = 1;
    document.getElementById("gallery").innerHTML = "Loading...";
  }

  const apiKey = "ca370d51a054836007519a00ff4ce59e";
  const recentUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=${perPage}&page=${currentPage}&format=json&nojsoncallback=1`;

  fetch(recentUrl)
    .then(response => response.json())
    .then(data => {
      const photos = data.photos.photo;
      const gallery = document.getElementById("gallery");

      if (reset) gallery.innerHTML = "";

      photos.forEach(photo => {
        const imgSrc = buildImageUrl(photo);
        const a = document.createElement("a");
        a.href = imgSrc;
        a.setAttribute("data-lightbox", "gallery");
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = photo.title;
        a.appendChild(img);
        gallery.appendChild(a);
      });
    })
    .catch(err => {
      console.error("Error loading images:", err);
    });
}

function loadMoreImages() {
  currentPage++;
  loadImages(false);
}