const images = [
    { src: "carrusel-img/1.jpeg" },
    { src: "carrusel-img/2.jpeg" },
    { src: "carrusel-img/3.jpeg" },
    { src: "carrusel-img/4.jpeg" },
    { src: "carrusel-img/5.jpeg" },
    { src: "carrusel-img/6.jpeg" },
    { src: "carrusel-img/7.jpeg" },
    { src: "carrusel-img/8.jpeg" },
    { src: "carrusel-img/9.jpeg" },
    { src: "carrusel-img/10.jpeg" },
    { src: "carrusel-img/11.jpeg" },
    { src: "carrusel-img/12.jpeg" },
    { src: "carrusel-img/13.jpeg" },
    { src: "carrusel-img/14.jpeg" },
    { src: "carrusel-img/15.jpeg" },
    { src: "carrusel-img/16.jpeg" },
    { src: "carrusel-img/17.jpeg" },
    { src: "carrusel-img/18.jpeg" },
    { src: "carrusel-img/19.jpeg" },
    { src: "carrusel-img/20.jpeg" },
    { src: "carrusel-img/21.jpeg" },
    { src: "carrusel-img/22.jpeg" },
    { src: "carrusel-img/23.jpeg" },
    { src: "carrusel-img/24.jpeg" },
    { src: "carrusel-img/25.jpeg" },
    { src: "carrusel-img/26.jpeg" },
    { src: "carrusel-img/27.jpeg" },
    { src: "carrusel-img/28.jpeg" },
    { src: "carrusel-img/29.jpeg" },
    { src: "carrusel-img/30.jpeg" },
    { src: "carrusel-img/31.jpeg" },
    { src: "carrusel-img/32.jpeg" },
    { src: "carrusel-img/33.jpeg" },
    { src: "carrusel-img/34.jpeg" },
    { src: "carrusel-img/35.jpeg" },
    { src: "carrusel-img/36.jpeg" },
    { src: "carrusel-img/37.jpeg" },
    { src: "carrusel-img/38.jpeg" },
    { src: "carrusel-img/39.jpeg" },
    { src: "carrusel-img/40.jpeg" },
    { src: "carrusel-img/41.jpeg" },
    { src: "carrusel-img/42.jpeg" },
    { src: "carrusel-img/43.jpeg" },
    { src: "carrusel-img/44.jpeg" },
    { src: "carrusel-img/45.jpeg" },
   
  ];
  
  const carouselInner = document.querySelector(".carousel-inner");
  const carouselIndicators = document.querySelector(".carousel-indicators");
  
  // Establecer la misma altura para todas las imágenes
  const imageHeight = 300;
  
  images.forEach((image, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.className = "d-block w-40 mx-auto";
    
    // Establecer la misma altura para todas las imágenes
    imgElement.style.height = `${imageHeight}px`;
  
    const itemElement = document.createElement("div");
    itemElement.className = `carousel-item ${index === 0 ? "active" : ""}`;
    itemElement.appendChild(imgElement);
    
    carouselInner.appendChild(itemElement);
    
    const indicatorElement = document.createElement("li");
    indicatorElement.setAttribute("data-target", "#myCarousel");
    indicatorElement.setAttribute("data-slide-to", index.toString());
    if (index === 0) {
      indicatorElement.className = "active";
    }
    
    carouselIndicators.appendChild(indicatorElement);
  });

  // Prevenir el comportamiento por defecto de los enlaces de cambio de imagen
const carouselLinks = document.querySelectorAll('[data-slide="prev"], [data-slide="next"]');
carouselLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    carouselInner.carousel(link.getAttribute('data-slide'));
  });
});
  

  const prevButton = document.querySelector(".carousel-control-prev");
    const nextButton = document.querySelector(".carousel-control-next");
    const carouselItems = document.querySelectorAll(".carousel-item");

    let currentIndex = 0;

    prevButton.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = carouselItems.length - 1;
    }
    updateCarousel();
    });

    nextButton.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
    }
    updateCarousel();
    });

    function updateCarousel() {
    carouselItems.forEach((item, index) => {
        if (index === currentIndex) {
        item.classList.add("active");
        } else {
        item.classList.remove("active");
        }
    });
    }




//intervalos
    $('.carousel').carousel({
        interval: 3000
      });