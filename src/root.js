export const adNewId = (parent) => {
    let finded;
    Array.from(parent.children).some(el => {
        if(el.innerHTML.length === 0) {
            finded = el
            return el
        }
    } )
    const newel = document.createElement('div');
    newel.classList.add('empty')
    parent.insertBefore(newel, finded)
};

export const addNewEmpty = (parent) => {
    let idadded = 0;
    Array.from(parent.children).forEach(el => {
        el.id = idadded;
        idadded++
    })
}

export const insertColor = (el) => {
    const addingClass = Array.from(el.classList.entries())[1][1] === 'cube' ? Array.from(el.classList.entries())[0][1] : Array.from(el.classList.entries())[1][1]
    el.classList.remove(addingClass)
    el.classList.add(`num${el.innerHTML}`)
}

export const counterLocal = (sum, online, local) => {
        if(!!localStorage.getItem('sum')) {
            let newsum = localStorage.getItem('sum');
            const result = JSON.parse(newsum) + sum
            localStorage.setItem('sum', JSON.stringify(result));
            local.innerHTML = online.innerHTML
        } else {
            localStorage.setItem('sum', sum)
        }

};

export const counter = (sum) => {
    const online = document.querySelector('.count_online');
    const local = document.querySelector('.local_count');
    online.innerHTML = +online.innerHTML + +sum;
    if(+online.innerHTML >= +local.innerHTML) {
        counterLocal(sum,online, local)
    }
}