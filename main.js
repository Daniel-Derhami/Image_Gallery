const imagesList = [
  {
    thumbUrl: "images/001-thmb.jpg",
    imageUrl: "images/001.jpg",
    title: "The First Title",
  },

  {
    thumbUrl: "images/002-thmb.jpg",
    imageUrl: "images/002.jpg",
    title: "The Second Title",
  },

      {
    thumbUrl: "images/003-thmb.jpg",
    imageUrl: "images/003.jpg",
    title: "The Third Title",
  },

  {
    thumbUrl: "images/004-thmb.jpg",
    imageUrl: "images/004.jpg",
    title: "The Fourth Title",
  },

      {
    thumbUrl: "images/005-thmb.jpg",
    imageUrl: "images/005.jpg",
    title: "The Fifth Title",
  },

  {
    thumbUrl: "images/006-thmb.jpg",
    imageUrl: "images/006.jpg",
    title: "The Sixth Title",
  },
];

const imageGrid = document.querySelector(".image-grid");


const populateImages = () => {
  imagesList.forEach((i) => {
    const image = document.createElement("div");
    image.classList.add("image");
    image.addEventListener("click", () => {
      showLightbox(i);
    });
    const img = document.createElement("img");
    img.src = i.thumbUrl;
    img.alt = i.title;

    image.appendChild(img);
    imageGrid.appendChild(image);
  });
};
