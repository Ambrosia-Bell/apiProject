let baseURL='https://cat-fact.herokuapp.com/facts';

let factContainer = document.querySelector('.factContainer');
let image = document.getElementById('catPhoto');
image.addEventListener('click', fetchFact);

function fetchFact() {
    fetch(baseURL)
        .then(response => response.json())
        .then(json => displayFact(json))

    let catContainer = document.getElementById('catContainer');
   
    catContainer.removeChild(image);
}

function displayFact(data) {
    console.log(data);
    let random = Math.floor(Math.random() * 5);
    let fact = document.createElement('h1');
    fact.className ='fact';
    fact.innerText = data[random].text;
    fact.style = 'font-family: milkyNice; color: #110c53';
    // console.log(fact);

    factContainer.appendChild(fact);
}


//  DRAG/DROP EVENT CODE
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
fill.addEventListener('dragend', fetchFact)

// loop through empties and call drag events
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// drag functions
function dragStart() {
    // console.log('start');
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    // console.log('end');
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
    // console.log('over');
}

function dragEnter(e) {
    e.preventDefault();
    // console.log('enter');
    this.className += ' hovered';
}

function dragLeave() {
    // console.log('leave');
    this.className = ' empty';
}

function dragDrop () {
    // console.log('drop');
    this.className = ' empty';
    this.append(fill);
}
