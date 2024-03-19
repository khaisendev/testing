var splide = new Splide( '.splide', {
  type: 'loop',
  perPage: 3,
  perMove: 1,
  gap: '20px',
  breakpoints: {
    1200: {
      perPage: 2,
    },
    700: {
      perPage: 1,
    },
  }
});
splide.mount();