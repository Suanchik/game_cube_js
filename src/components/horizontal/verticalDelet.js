import { addNewEmpty, adNewId, counter, insertColor } from "../../root";
import { addInter } from "../createElement/createElement";
import { findOutCubes } from "../filter/getHorizontales";

const deletHorizontal = async (prev = null, element, element2) => {
    return new Promise((res, rej) => {
        if(!prev) {
                element2.classList.add('bot')
                element.style.zIndex = '5';
                const sum = +element2.innerHTML + +element.innerHTML;
                element.innerHTML = sum;
                counter(sum)
            setTimeout(() => {
                element.style.zIndex = '1'
                element2.remove();
                insertColor(element)
                adNewId(element.parentElement)
                addNewEmpty(element.parentElement)
            },300)
            res()
        } else {
                prev.classList.add('top')
                element2.classList.add('bot')
                element.classList.add('fixed')
                element.style.zIndex = '5'
                const sum = +element2.innerHTML + +element.innerHTML + +prev.innerHTML;
                element.innerHTML = sum;
                counter(sum)
            setTimeout(() => {
                element.classList.remove('fixed')
                element.style.zIndex = '1'
                prev.remove();
                element2.remove();
                insertColor(element)
                adNewId(element.parentElement)
                addNewEmpty(element.parentElement)
            },300)
            res()
        }
    })
}


export const deleteCubesVertical = () => {
    const blocksRows = document.querySelectorAll('.blocks_container');
        blocksRows.forEach(event => {
        const cubes = event.querySelectorAll('.cube');
        cubes.forEach((element, index) => {
            const prev = element.previousElementSibling ? element.previousElementSibling : null
            if((prev?.innerHTML === element.innerHTML) && (element.innerHTML == (cubes[index + 1] ? cubes[index + 1].innerHTML: 0))) {    // cравниваем элемент первый и следующий
                deletHorizontal(prev, element, cubes[index + 1]).then(() => {
                    addInter()
                    setTimeout(() => {
                        findOutCubes()
                    })
                })
            } else if((cubes[index + 1]?.nextElementSibling?.innerHTML.length === 0 || cubes[index + 1]?.nextElementSibling?.innerHTML !== cubes[index + 1]?.innerHTML) && (prev?.innerHTML !== element.innerHTML) && (element.innerHTML == (cubes[index + 1] ? cubes[index + 1].innerHTML: 0))){
                deletHorizontal(null, element, cubes[index + 1]).then(() => {
                    addInter()
                    setTimeout(() => {
                        findOutCubes()
                    }, 300)
                })
            }
        })
    });
};