let event = false;

export default function (selectors, addEvents = true) {

  if (!event && addEvents) addTriger(selectors);

  const dropItems = document.querySelectorAll(selectors);

  for (let i = 0; i < dropItems.length; i++) {
    const el = dropItems[i];
    el.addEventListener('click', (e) => {
      if (!el.classList.contains('active') && addEvents)
        resetDropItem(selectors);
      el.classList.toggle('active');
    });
  }
}

function resetDropItem(selectors) {
  const elActive = document.querySelector(`${selectors}.active`);
  if (elActive) elActive.classList.remove('active');
}

function addTriger(selectors) {
  event = true;
  document.body.addEventListener('click', (e) => {
    if (!e.target.closest(`${selectors}`)) {
      const el = document.querySelector(`${selectors}.active`);
      if (el) el.classList.remove('active');
    }
  });
}
