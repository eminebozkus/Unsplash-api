const images = document.getElementById("images");
searchTerm = document.getElementById("search-term");

async function getImagesPage() {
  const resp = await fetch(
    "https://api.unsplash.com/photos?client_id=;page=10"
  );
  const respData = await resp.json();
  addImagesPage(respData);
}
function addImagesPage(imgData) {
  if (images.lastChild != null) {
    images.removeChild(images.lastChild);
  }
  const imgDivContainer = document.createElement("div");
  for (let i = 0; i < 10; i++) {
    let image = imgData[i];
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("image-div");
    imgDiv.innerHTML = `
  <a target="_blank" href="${image.urls.full}"  width="600" height="400">
   <img src="${image.urls.full}" >
   </a>
  <div class="desc" > ${image.alt_description}
  <a href="${image.links.download}"><i class="fas fa-download"></i></a>
  </div>
  `;
    imgDivContainer.appendChild(imgDiv);
  }
  images.appendChild(imgDivContainer);
}
//////////////////////////////////////////////////////////////
async function getImageBySearch(query) {
  const resp = await fetch(
    "https://api.unsplash.com/search/photos?client_id=;query=" +
      query
  );
  const respData = await resp.json();
  return respData;
}
searchTerm.addEventListener("input", async () => {
  // clean container
  searchTerm.innerHTML = "";
  const search = searchTerm.value;
  const deneme = await getImageBySearch(search);
  addImagesSearch(deneme);
});
function addImagesSearch(imgData) {
  if (images.lastChild != null) {
    images.removeChild(images.lastChild);
  }
  const imgDivContainer = document.createElement("div");
  for (let i = 0; i < Object.keys(imgData.results).length; i++) {
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("image-div");
    imgDiv.innerHTML = `
    <a target="_blank" href="${imgData.results[i].urls.full}"  width="600" height="400">
     <img src="${imgData.results[i].urls.full}" >
     </a>
    <div class="desc" > ${imgData.results[i].alt_description}  <a href="${imgData.results[i].links.download}"><i class="fas fa-download"></i></a>
    </div>
    `;
    imgDivContainer.appendChild(imgDiv);
  }
  images.appendChild(imgDivContainer);
}
///////////////////////////////////////////////////
async function getRandomImageBundle() {
  const resp = await fetch(
    "https://api.unsplash.com/photos/random?client_id=;count=10"
  );
  const respData = await resp.json();
  addImagesCount(respData);
}
function addImagesCount(imgData) {
  if (images.lastChild != null) {
    images.removeChild(images.lastChild);
  }
  const imgDivContainer = document.createElement("div");
  for (let i = 0; i < 10; i++) {
    let image = imgData[i];
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("image-div");
    imgDiv.innerHTML = `
  <a target="_blank" href="${image.urls.full}"  width="600" height="400">
   <img src="${image.urls.full}" >
   </a>
  <div class="desc" > ${image.alt_description}  <a href="${image.links.download}"><i class="fas fa-download"></i></a>
  </div>
  `;
    imgDivContainer.appendChild(imgDiv);
  }
  images.appendChild(imgDivContainer);
}
///////////////////////////////////////
getImages();
async function getImages() {
  const resp = await fetch(
    "https://api.unsplash.com/photos?client_id="
  );
  const respData = await resp.json();
  addImages(respData);
}
function addImages(imgData) {
  if (images.lastChild != null) {
    images.removeChild(images.lastChild);
  }
  const imgDivContainer = document.createElement("div");
  for (let i = 0; i < 10; i++) {
    let image = imgData[i];

    const imgDiv = document.createElement("div");

    imgDiv.classList.add("image-div");

    imgDiv.innerHTML = `
  <a target="_blank" href="${image.urls.full}"  width="600" height="400">
   <img src="${image.urls.full}" >
   </a>
  <div class="desc" > ${image.alt_description}  <a href="${image.links.download}"><i class="fas fa-download"></i></a>
  </div>
  `;
    imgDivContainer.appendChild(imgDiv);
  }
  images.appendChild(imgDivContainer);
}
