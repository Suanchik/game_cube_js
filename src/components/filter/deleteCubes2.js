import { addNewEmpty, adNewId, counter, insertColor } from "../../root";
import { deleteHandler } from "./deleteCubes1";

export const deleteHandlerWithNext = async (head = null, right = null, left = null, fixed = null, parent1 = null, parent2 = null, parent3 = null) => {
    const num0 = head ? Number(head.innerHTML) : 0
    const num2 = left ? Number(left.innerHTML) : 0
    const num3 = right ? Number(right.innerHTML) : 0
    const num4 = fixed ? Number(fixed.innerHTML) : 0
    return new Promise((res, rej) => {
        setTimeout(() => {
            fixed && fixed.classList.add('fixed');
            left && left.classList.add('left');
            right && right.classList.add('right');
            res({head: head, left : left, fixed: fixed})
        },0)
    }).then(({head, left, fixed}) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const sum = num0 + num2 + num3 + num4
                head.innerHTML = sum;
                counter(sum)
                resolve({head: head, left : left, fixed: fixed})
            },600)
        })
    }).then(({head, left, fixed}) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                head.style.zIndex = 1;
                left?.remove();
                right?.remove()
                fixed?.remove();
                insertColor(head);
                adNewId(parent1);
                adNewId(parent2);
                addNewEmpty(parent1);
                addNewEmpty(parent2);
                resolve()
            },0)
        })
    })
}

export const deleteCubes2 = ({el1, el2, prevEl = null, parent1, parent2, next = null}) => {
    if(prevEl) {
        if(prevEl.innerHTML !== el2.previousElementSibling.innerHTML && !next) {
            // снизу 2 элемента сверху один слево
            return deleteHandler(null, prevEl, null, el2, el1, parent1, parent2, null, true)
       } else if(prevEl.innerHTML === el2.previousElementSibling.innerHTML && !next){
        // снизу 2 элемента сверху один справо
        return deleteHandler(el1, prevEl, null, null, el2, parent1, parent2, null, true)
       }
    } else if(!prevEl  && !next){
        // снизу 2 элемента сверху ноль
        return deleteHandler(el1, null, null, null, el2, parent1, null, null, false)
    } else if(next) {
        if(next.parentElement === el1.parentElement) {
            return deleteHandlerWithNext(el1, null, el2, next, parent1, parent2, null)
        } else {
            return deleteHandlerWithNext(el2, el1, null, next, parent1, parent2, null)
        }
    }
};