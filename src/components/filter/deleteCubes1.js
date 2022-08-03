import { addNewEmpty, adNewId, counter, insertColor } from "../../root";

export const deleteHandler = async (right = null, top = null, bottomel = null, left = null, fixed = null, parent1 = null, parent2 = null, parent3 = null, nofix) => {
    const num1 = Number(fixed.innerHTML)
    const num2 = top ? Number(top.innerHTML) : 0
    const num3 = left ? Number(left.innerHTML) : 0
    const num4 = right ? Number(right.innerHTML) : 0
    const num5 = bottomel ? Number(bottomel.innerHTML) : 0
    return new Promise((res, rej) => {
        setTimeout(() => {
            right && right.classList.add('right');
            top && top.classList.add('top');
            left && left.classList.add('left');
            bottomel && bottomel.classList.add('fixed');
            if(nofix) {
                fixed.classList.add('fixed');
            }
            res({bottomel: bottomel ? bottomel : null, right: right ? right : null, top: top ? top : null, left: left ? left : null, fixed: fixed ? fixed : null})
        },0)
    }).then(({bottomel, right, top, left, fixed}) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const sum = num1 + num2 + num3 + num4 + num5
                fixed.innerHTML = sum;
                counter(sum)
                resolve({bottomel: bottomel ? bottomel : null, right: right ? right : null, top: top ? top : null, left: left ? left : null, fixed: fixed ? fixed : null})
            },600)
        })
    }).then(({bottomel, right, top, left, fixed}) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                right?.remove()
                top?.remove()
                bottomel?.remove()
                left?.remove()
                fixed?.classList.remove('fixed');
                parent1 && adNewId(parent1);
                parent2 && adNewId(parent2);
                parent3 && adNewId(parent3);
                parent1 && addNewEmpty(parent1);
                parent2 && addNewEmpty(parent2);
                parent3 && addNewEmpty(parent3);
                fixed && insertColor(fixed)
                resolve()
            },0)
        })
    })
}


export const deleteCubes = ({el1, el2 = null, nextElement = null, el3 = null, prevEl = null, parent1, parent2, parent3 = null}) => {
    if(((prevEl?.innerHTML == el2.innerHTML) && (prevEl && el2 && el3) && (!nextElement))) {
        return deleteHandler(el1, prevEl, null, el3, el2, parent1, parent2, parent3, true);
    } else if(el2 && el3 && el1  && !nextElement) {
        return deleteHandler(el1, null, null, el3, el2, parent1, parent2, parent3, false);
    } else if(el2 && el3 && el1  && nextElement && prevEl) {
        return deleteHandler(el1, prevEl, nextElement, el3, el2, parent1, parent2, parent3, true);
    } else if(el2 && el3 && el1  && nextElement && !prevEl) {
        return deleteHandler(el1, null, nextElement, el3, el2, parent1, parent2, parent3, false);
    } else if((el2 && !el3 && el1  && nextElement && prevEl) && (nextElement.innerHTML === el1.nextElementSibling.innerHTML)) {
        return deleteHandler(null, prevEl, nextElement, el2, el1, parent1, parent2, parent3, true);
    } else if((el2 && !el3 && el1  && nextElement && prevEl) && (nextElement.innerHTML !== el1.nextElementSibling.innerHTML)) {
        return deleteHandler(el1, prevEl, nextElement, null, el2, parent1, parent2, parent3, true);
    }
};