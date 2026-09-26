let currentIndex = 0;

function getVisibleCount() {
  const w = window.innerWidth;
  if (w < 768) return 1;
  if (w < 992) return 2;
  return 3;
}

function moveSlide(direction) {
  const track = document.getElementById('sliderTrack');
  const cards = track.children;
  const visible = getVisibleCount();
  const maxIndex = cards.length - visible;

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  const cardWidth = cards[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

setInterval(() => {
  const track = document.getElementById('sliderTrack');
  const cards = track.children;
  const visible = getVisibleCount();
  const maxIndex = cards.length - visible;

  if (currentIndex >= maxIndex) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  const cardWidth = cards[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}, 4000);

window.addEventListener('resize', () => {
  currentIndex = 0;
  document.getElementById('sliderTrack').style.transform = 'translateX(0)';
});