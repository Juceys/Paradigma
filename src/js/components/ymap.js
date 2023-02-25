//Yandex map

function init() {
  let map = new ymaps.Map('map-test', {
    center: [59.9, 30.28],
    zoom: 10
  });
}

ymaps.ready(init);

//Full map

document.getElementById('fullmap').addEventListener('click', () => {
  document.querySelector(".ymaps-2-1-79-controls__toolbar_right .ymaps-2-1-79-controls__control_toolbar:nth-of-type(3)").click();
})
