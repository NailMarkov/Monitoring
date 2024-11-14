const linkPagesElement = document.querySelector('.list-pages__link');
const sublistPagesElement = document.querySelector('.sublist-pages');
const buttonUserElement = document.querySelector('.user__btn');
const listUserElement = document.querySelector('.list-user');

const showMenu = () => {
  linkPagesElement.addEventListener('click', () => {
    isClass(listUserElement);
    sublistPagesElement.classList.toggle('hidden');
  });
  skipMenu(sublistPagesElement);
};

const showUserMenu = () => {
  buttonUserElement.addEventListener('click', () => {
    isClass(sublistPagesElement);
    listUserElement.classList.toggle('hidden');
  });
  skipMenu(listUserElement);
};

const skipMenu = (menu) => {
  document.addEventListener('keydown', (e) => {
    if (`${e.key}` === 'Escape') {
      menu.classList.add('hidden');
    }
  });
};

const isClass = (elclass) => {
  const availability = elclass.classList.contains('hidden');
  if (!availability) {
    elclass.classList.add('hidden');
  }
};

showMenu();
showUserMenu();
