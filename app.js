const btnDay = document.querySelectorAll('.btn__day');
const btnChoice = document.querySelectorAll('.btn__choice');
const btnAll = document.querySelector('.alldays__choice')
const btn = document.querySelectorAll('.btn');
const btnWeekday = document.querySelector('.weekday__choice');
const btnWeekend = document.querySelector('.weekend__choice');
let weekendsCount;
let weekdaysCount;
let isActive = false;

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
        if (item.classList.contains('active')) {
            if (item.classList.contains('weekday')) weekdaysCount++;
            if (item.classList.contains('weekend')) weekendsCount++;
        }
    });
    if (weekdaysCount === 5 && weekendsCount === 0) btnWeekday.classList.add('active');
    if (weekendsCount === 2 && weekdaysCount === 0) btnWeekend.classList.add('active');
    if (weekendsCount === 2 && weekdaysCount === 5) btn.forEach(item => item.classList.add('active'))
}



function reset () {
    btn.forEach(item => {
       item.classList.remove('active')
    })
}


function selectDays () {
    if (this.dataset.type === 'weekday') {
       reset()
            this.classList.add('active');
            document.querySelectorAll('.weekday').forEach(item => item.classList.add('active'))
    }
    if (this.dataset.type === 'weekend') {
        reset()
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            document.querySelectorAll('.weekend').forEach(item => item.classList.remove('active'))
        }
        else {
            this.classList.add('active');
            document.querySelectorAll('.weekend').forEach(item => item.classList.add('active'))
        }
    }
    if (this.dataset.type === 'alldays') {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            btn.forEach(item => item.classList.remove('active'))
        }
        else {
            this.classList.add('active');
            btn.forEach(item => item.classList.add('active'))
        }
    }
}



btnChoice.forEach((items)=> {
    items.addEventListener('click', selectDays)
})
