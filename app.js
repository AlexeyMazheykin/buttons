const btnDay = document.querySelectorAll('.btn__day');
const btnChoice = document.querySelectorAll('.btn__choice');
const btn = document.querySelectorAll('.btn');
const btnWeekday = document.querySelector('.weekday__choice');
const btnWeekend = document.querySelector('.weekend__choice');
const btnAll = document.querySelector('.alldays__choice')
let weekendsCount;
let weekdaysCount;
let isActive = false;
btnDay.forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('active');
        check();
    })
})
function check() {
    btnChoice.forEach(item => item.classList.remove('active'))
    weekendsCount = 0;
    weekdaysCount = 0;
    btnDay.forEach(item => {
        if (item.classList.contains('active')) {
            if (item.classList.contains('weekday')) weekdaysCount++;
            if (item.classList.contains('weekend')) weekendsCount++;
        }
    });
    if (weekdaysCount === 5 && weekendsCount === 0) btnWeekday.classList.add('active');
    if (weekendsCount === 2 && weekdaysCount === 0) btnWeekend.classList.add('active');
    if (weekendsCount === 2 && weekdaysCount === 5) btn.forEach(item => item.classList.add('active'))
}

function reset() {
    btn.forEach(item => {
        item.classList.remove('active')
    })

}
function addActive (type) {
    this.classList.add('active')
    document.querySelectorAll(`.${type}`).forEach(i => {
        i.classList.add('active')
    })
}
function selectDays() {
    let type = this.dataset.type;
        if (!isActive) {
            addActive.call(this, type)
            isActive = !isActive
        } else if (isActive && !this.classList.contains('active') || btnAll.classList.contains('active')) {
            reset()
            addActive.call(this, type)
        } else {
            reset()
            isActive = !isActive
        }
}
btnChoice.forEach((items) => {
    items.addEventListener('click', selectDays)
})
