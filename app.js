const btnDay = document.querySelectorAll('.btn__day');
const btnChoice = document.querySelectorAll('.btn__choice');
const btnAll = document.querySelector('.alldays__choice')
const btn = document.querySelectorAll('.btn');
const btnWeekday = document.querySelector('.weekday__choice');
const btnWeekend = document.querySelector('.weekend__choice');
let weekendsCount;
let weekdaysCount;

function reset () {
    btn.forEach(item => {
        item.classList.remove('active')
    })
}

btnDay.forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('active');
        check();
    })
})


function check () {
    btnChoice.forEach(item => item.classList.remove('active'))
    weekendsCount = 0;
    weekdaysCount = 0;
    btnDay.forEach(item => {
        if (item.classList.contains('active') && item.classList.contains('weekday')) weekdaysCount++;
        if (item.classList.contains('active') && item.classList.contains('weekend')) weekendsCount++;
    });
    if (weekdaysCount === 5) btnWeekday.classList.add('active');
    if (weekendsCount === 2) btnWeekend.classList.add('active');
    if (weekendsCount === 2 && weekdaysCount === 5) btnAll.classList.add('active')
}




function reset () {
    btn.forEach(item => {
       item.classList.remove('active')
    })
}


function selectDays () {
    if (this.dataset.type === 'weekday') {
        reset()
        if (!this.classList.contains('active')) this.classList.add('active');
        else (this.classList.remove('active'))
        document.querySelectorAll('.weekday').forEach(item => item.classList.toggle('active'))
    }
    if (this.dataset.type === 'weekend') {
        reset()
        if (!this.classList.contains('active')) this.classList.add('active');
        else (this.classList.remove('active'))
        document.querySelectorAll('.weekend').forEach(item => item.classList.toggle('active'))
    }
    if (this.dataset.type === 'alldays') {
        btn.forEach(item => item.classList.toggle('active'))
    }
}



btnChoice.forEach((items)=> {
    items.addEventListener('click', selectDays)
})
