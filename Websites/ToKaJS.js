document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    const flkty = new Flickity(carousel, {
      autoPlay: true,
      wrapAround: true,
      pauseAutoPlayOnHover: true
    });
  }
});

