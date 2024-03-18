
const bgBtn = '#27a844'
const bgBtnHover = '#22913b'

const menuContainer = document.querySelector('.btn-group-vertical');
const btnsMenu = menuContainer.querySelectorAll('.btn');

menuContainer.style.flexDirection = 'row-reverse';
menuContainer.style.gap = '.25rem';

btnsMenu.forEach(botao => {
  botao.style.borderRadius = '.25rem';
  botao.style.width = 'auto';
});

const headerContainer = document.querySelector('.jumbotron');
headerContainer.style.textAlign = 'end';
headerContainer.style.background = '#6b757e';
headerContainer.style.color = '#fff';

const btnHeader = headerContainer.querySelector('.btn');
changeColor(btnHeader, bgBtn, bgBtnHover);

const listCards = document.querySelectorAll('.card');
const newOrder = [1, 3, 2, 0];

listCards.forEach((card, index) => {
  card.parentNode.style.order = newOrder[index];

  if (index === 0) {
    const btn = card.querySelector('.btn');
    changeColor(btn, bgBtn, bgBtnHover);
  }
})

function changeColor(element, color, colorHover) {
  element.style.background = color;
  element.style.borderColor = color;

  element.addEventListener('mouseenter', () => {
    element.style.background = colorHover;
    element.style.borderColor = colorHover;
  })

  element.addEventListener('mouseleave', function () {
    element.style.background = color;
    element.style.borderColor = color;
  });
}

const list = document.querySelector('.list-group');

const item = document.createElement('li');
item.classList.add('list-group-item');

const newItensText = [
  'Quarto Item',
  'Quinto Item',
]

newItensText.forEach(text => {
  const item = document.createElement('li');
  item.classList.add('list-group-item');
  item.textContent = text
  list.appendChild(item);
})

const listItens = list.querySelectorAll('li');

listItens.forEach(item => {
  item.classList.contains('active') ? item.classList.remove('active') : ''
  item.textContent === 'Quarto Item' ? item.classList.add('active') : ''
})
