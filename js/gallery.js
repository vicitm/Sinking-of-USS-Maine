// gallery.js
$(document).ready(function () {
  const assetDirectory = "assets/gallery/";

  for (let i = 1; i <= 15; i++) {
    $("#lightgallery").append(`
          <a href="${assetDirectory}/${i}.jpg">
              <img src="${assetDirectory}/${i}.jpg" alt="Image ${i}">
          </a>
      `);
  }

  $("#lightgallery").lightGallery({});
});
