const inpsSearch = document.querySelectorAll('.inp_search');
const inpsClearSearch = document.querySelectorAll('.search_clear');

for (let i = 0; i < inpsClearSearch.length; i++) {
  let clearSearch = inpsClearSearch[i];
  let inpSearch = inpsSearch[i];
  if (inpSearch.value.length > 0) {
    let clearBtn = inpSearch
      .closest('.search_wrap')
      .querySelector('.search_clear');

    clearBtn.classList.add('active');
  }
  clearSearch.addEventListener('click', (e) => {
    e.preventDefault();
    let inp = e.target.closest('.search_wrap').querySelector('.inp_search');
    inp.value = '';
    clearSearch.classList.remove('active');
  });
  inpSearch.addEventListener('input', (e) => {
    if (e.target.value.length > 0) {
      let clearBtn = inpSearch
        .closest('.search_wrap')
        .querySelector('.search_clear');

      clearBtn.classList.add('active');
    } else {
      let clearBtn = inpSearch
        .closest('.search_wrap')
        .querySelector('.search_clear');

      clearBtn.classList.remove('active');
    }
  });
}