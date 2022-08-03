import { filterCubes } from "./filterCubes";

let idFind = 0;
export let verticelElementsArrs;
let blocC;

export const findOutCubes = (newblocC = null) => {
    blocC = document.querySelectorAll('.blocks_container');
    const blickContainer = newblocC ? newblocC: blocC
    verticelElementsArrs = [[],[],[],[],[],[],[],[]];
    for(;verticelElementsArrs.length > idFind; idFind++) {
        blickContainer.forEach(element => {
            element.querySelectorAll('.cube, .empty').forEach(element2 => {
                if(+element2.id === idFind) {
                    verticelElementsArrs[idFind].push(element2);
                }
                if(+element2.className === 'empty') {
                    verticelElementsArrs[idFind].push(element2);
                }
            })
        });
    };
    idFind = 0;
    return new Promise((res, rej) => {
        setTimeout(() => {
            filterCubes()
            res()
        },300)
    })
};