// import './accordion.js';
import './clearInp.js';
import './PhoneForm.js';
import client from '../modules/client.js';

// import Mask from '../libs/maska/dist/maska';
// import mask from 'maska';

// ====menu==== \\

const toggleMenuBtns = document.querySelectorAll('.menu-toggle-item');
const menuList = document.querySelectorAll('.menu_body');

window.addEventListener('click', function (e) {
  for (let i = 0; i < menuList.length; i++) {
    const menu = menuList[i];
    if (e.target.closest('.menu_body') != menu) {
      if (e.target.closest('.menu-toggle-item')) {
        const btnLink = e.target.closest('.menu-toggle-item').dataset.link;
        if (!menu.classList.contains(btnLink)) {
          menu.classList.remove('active');
        }
      } else {
        menu.classList.remove('active');
      }
    }
  }
});

for (let i = 0; i < toggleMenuBtns.length; i++) {
  const btn = toggleMenuBtns[i];
  const btnLink = btn.dataset.link;

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    for (let i = 0; i < menuList.length; i++) {
      const menu = menuList[i];
      if (menu.classList.contains(btnLink)) {
        menu.classList.toggle('active');
      } else {
        menu.classList.remove('active');
      }
    }
  });
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    for (let i = 0; i < menuList.length; i++) {
      const menu = menuList[i];
      menu.classList.remove('active');
    }
  }
});

// ===========setHeader=========== \\

const header = document.querySelector('.header');
let prevPosition = window.pageYOffset;
const windowHiegiht = window.innerHeight;

function setHeader() {
  let scrollY = window.pageYOffset;

  if (prevPosition > windowHiegiht / 4 && prevPosition <= scrollY && 650 < scrollY) {
    prevPosition = window.pageYOffset;
    header.classList.add('hidden');
  } else {
    prevPosition = window.pageYOffset;
    header.classList.remove('hidden');
  }
}

setHeader();
window.onscroll = setHeader;

// ===========AsideBlock=========== \\

const sidebarTitles = document.querySelectorAll('.AsideBlock__title');

for (let i = 0; i < sidebarTitles.length; i++) {
  const title = sidebarTitles[i];
  title.addEventListener('click', (e) => {
    title.classList.toggle('is-active');
  });
}

// =============search_prompt============= \\

const searchForm = document.getElementById('header_search');
const searchInp = searchForm.querySelector('.inp_search');
const prompt = document.querySelector('.header .search_prompt');
let ajax;
// let searchLock = true

searchInp.addEventListener('input', getPrompt);
searchForm.addEventListener('click', getPrompt);

searchForm.addEventListener('submit', (e) => {
  if (searchInp.value.length == 0) {
    e.preventDefault();
    prompt.innerHTML =
      '<div class="search_fail">Запрос не должен быть пустым</div>';
  }
});

function getPrompt() {
  if (searchInp.value.length > 2) {
    clearTimeout(ajax);
    ajax = setTimeout(() => {
      client(`/catalog/?isNaked=1&nc_ctpl=229&find=${searchInp.value.trim()}`)
        .then((res) => {
          prompt.innerHTML = res;
        })
        .finally(() => {
          // add search histori========
          // const links = prompt.querySelectorAll('.search_link');
          // localStorage.removeItem('productLink');
          // for (let i = 0; i < links.length; i++) {
          //   const link = links[i];
          //   link.addEventListener('click', (e) => {
          //     // console.log(localStorage);
          //     e.preventDefault();
          //     // let itemsLengiht
          //     let items;
          //     let text = link.textContent;
          //     if (localStorage.getItem('productLink')) {
          //       items = JSON.parse(localStorage.getItem('productLink'));
          //       items[link.toString()] = text;
          //     } else {
          //       items = {
          //         [link.toString()]: text,
          //       };
          //     }
          //     console.log(items);
          //     localStorage.setItem('productLink', JSON.stringify(items));
          //   });
          // }
          // search histori ====/
        });
    }, 600);
  } else {
    clearTimeout(ajax);
    prompt.innerHTML = '';
  }
}

// function addPromptEvent() {
window.addEventListener('click', (e) => {
  if (
    !e.target.closest('.search_wrap') &&
    !e.target.closest('.search_prompt')
  ) {
    prompt.innerHTML = '';
  }
});
// }
