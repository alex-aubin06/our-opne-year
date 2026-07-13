const photos = [
  ['zoo1.jpg', 'zoo2.jpg', 'zoo3.jpg'],

  ['camping1.jpg', 'camping2.jpg', 'camping3.jpg'],

  ['feq1.jpg', 'feq2.jpg', 'feq3.jpg'],

  ['gym1.jpg', 'gym2.jpg', 'gym3.jpg'],

  ['halloween1.jpg', 'halloween2.jpg', 'halloween3.jpg'],

  ['noel1.jpg', 'noel2.jpg', 'noel3.jpg'],

  ['mexique1.jpg', 'mexique2.jpg', 'mexique3.jpg'],

  ['bailey1.jpg', 'bailey2.jpg', 'bailey3.jpg'],

  ['gaspesie1.jpg', 'gaspesie2.jpg', 'gaspesie3.jpg'],
];

let index = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function changePhoto(album, direction) {
  index[album] += direction;

  if (index[album] > 2) index[album] = 0;

  if (index[album] < 0) index[album] = 2;

  document.getElementById('photo' + album).src =
    'images/' + photos[album][index[album]];
}
function updateCounter() {
  const startDate = new Date('2025-07-21T00:00:00');

  const now = new Date();

  const difference = now - startDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById('days').textContent = days;

  document.getElementById('hours').textContent = hours;

  document.getElementById('minutes').textContent = minutes;

  document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCounter, 1000);

updateCounter();

function moveButton() {
  const button = document.getElementById('noButton');

  const maxX = window.innerWidth / 2 - 80;
  const maxY = window.innerHeight / 2 - 80;

  const x = Math.random() * maxX * 2 - maxX;
  const y = Math.random() * maxY * 2 - maxY;

  button.style.transform = `translate(${x}px, ${y}px)`;
}

function showForm() {
  document.getElementById('question').style.display = 'none';

  document.getElementById('form').style.display = 'block';
}

function finishDate() {
  let resto = document.getElementById('restaurant').value;

  let activite = document.getElementById('activite').value;

  alert(
    'Parfait mon minou ❤️\n\nNotre date :\n' +
      resto +
      '\n\nAprès :\n' +
      activite +
      "\n\nJ'ai hâte 😍",
  );
}
// TRANSITION ENTRE LES PAGES

document.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // seulement pour les pages du site
    if (href && href.includes('.html')) {
      e.preventDefault();

      document.body.classList.add('fade-out');

      setTimeout(() => {
        window.location.href = href;
      }, 500);
    }
  });
});
