const btnDay = document.querySelectorAll('.btn__day');
const btnDayArray = Array.from(btnDay);
const btnChoice = document.querySelectorAll('.btn__choice');
const btnAll = document.querySelector('.alldays__choice')
const btn = document.querySelectorAll('.btn');


function reset () {
    btn.forEach(item => {
       item.classList.remove('active')
    })
}

function selectDays () {
    reset()
    btnDay.forEach((item) => {
        if (this.dataset.type === 'alldays') {
            btn.forEach(item => {
                item.classList.add('active')
            })
        }
        if (item.classList.contains(this.dataset.type)) {
            item.classList.toggle('active')
        }
    })
}

btnChoice.forEach((items)=> {
    items.addEventListener('click', selectDays )
})
