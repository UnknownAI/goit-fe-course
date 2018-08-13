const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];



function createMarkup(laptops) {
  let main = document.querySelector('.gallery-content');
  let source = document.querySelector("#entry-template").innerHTML.trim();
  let template = Handlebars.compile(source);
  const markup = laptops.reduce((acc, item) => acc + template(item), '');
  main.innerHTML = markup;
}

function createFilter() {
  const filterArray = { size: [], color: [], release_date: [] };
  let checkbox = document.querySelectorAll('input[type=checkbox]');
  let checkboxArray = Array.from(checkbox).filter(item => item.checked);
  for (let key in filterArray) {
    for (let item of checkboxArray) {
      if (key === item.name)
        filterArray[key].push(item.value);
    }
  }
  return filterArray;
}

function applyFilter(filter, laptop) {
  const sizeFilter = filter.size;
  const colorFilter = filter.color;
  const releaseDateFilter = filter.release_date;

  if (sizeFilter.length !== 0 && !sizeFilter.some(element => +element === laptop.size))
    return false;

  if (colorFilter.length !== 0 && !colorFilter.some(element => element === laptop.color))
    return false;

  if (releaseDateFilter.length !== 0 && !releaseDateFilter.some(element => +element === laptop.release_date))
    return false;

  return true;
}

function onFilter(event) {
  event.preventDefault()
  const filter = createFilter();
  const filteredEntities = laptops.filter(laptop => {
    if (applyFilter(filter, laptop)) return laptop;
  });
  createMarkup(filteredEntities);
}

function onClear() {
  createMarkup(laptops);
}

createMarkup(laptops);
let filterButton = document.querySelector('button[type=submit]');
let clearButton = document.querySelector('button[type=reset]');
filterButton.addEventListener('click', onFilter);
clearButton.addEventListener('click', onClear);