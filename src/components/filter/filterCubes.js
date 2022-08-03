import { addInter } from "../createElement/createElement";
import { deleteCubesVertical } from "../horizontal/verticalDelet";
import { deleteCubes } from "./deleteCubes1";
import { deleteCubes2 } from "./deleteCubes2";
import { findOutCubes, verticelElementsArrs } from "./getHorizontales";


const getNearElement = (num, newel) => {
    const lblocksRow = [...Array.from(document.querySelectorAll('.blocks_container'))].filter(el => +el.id == +newel[num].parentElement.id + 1);
    let element = null;
    Array.from(lblocksRow[0].children).forEach(el => {
        if(el.id === newel[num].id) {
            element = el
        }
    });
    return element;
}

export let ourLength;

export const filterCubes = async () => {
    ourLength = 0;
    const prom = new Promise((res, rej) => {
        setTimeout(() => {
            verticelElementsArrs.map((el) => {
                const newel = el.filter((element, index) => {
                    if(element.innerHTML === el[index + 1]?.innerHTML && element.className !== 'empty') {
                        return element
                    }
                })
                if(newel.length === 0) {ourLength++}
                if(newel.length) {
                    if(newel.length === 2) {
                        const el3 = getNearElement(1, newel);
                        addInter()
                        const nextElement = newel[1].nextElementSibling?.innerHTML === newel[1]?.innerHTML ? newel[1]?.nextElementSibling : null;
                        const prevElement = newel[1].previousElementSibling?.innerHTML === newel[1]?.innerHTML ? newel[1]?.previousElementSibling : null;

                        if(nextElement && prevElement && newel[1] && newel[0] && el3) {
                            deleteCubes({el1: newel[0], el2: newel[1], nextElement: nextElement, el3: el3, prevEl: newel[1].previousElementSibling, parent1: newel[0].parentElement, parent2: newel[1].parentElement, parent3: el3.parentElement}).then(() => {
                                findOutCubes().then(() => {
                                    
                                    res()
                                })
                            })
                        } else if(nextElement && prevElement){
                            deleteCubes({el1: newel[0], el2: newel[1], nextElement: null, el3: el3, prevEl: newel[1].previousElementSibling, parent1: newel[0].parentElement, parent2: newel[1].parentElement, parent3: el3.parentElement}).then(() => {
                                findOutCubes().then(() => {
                                    
                                    res()
                                })
                            });
                        } else if(nextElement && !prevElement) {
                            deleteCubes({el1: newel[0], el2: newel[1], nextElement: nextElement, el3: el3, prevEl: null, parent1: newel[0].parentElement, parent2: newel[1].parentElement, parent3: el3.parentElement}).then(() => {
                                findOutCubes().then(() => {
                                    
                                    res()
                                })
                            });
                        } else if(!nextElement && !prevElement) {
                            deleteCubes({el1: newel[0], el2: newel[1], nextElement: null, el3: el3, prevEl: null, parent1: newel[0].parentElement, parent2: newel[1].parentElement, parent3: el3.parentElement}).then(() => {
                                findOutCubes().then(() => {
                                    
                                    res()
                                })
                            });
                        } else if(!nextElement && prevElement) {
                            deleteCubes({el1: newel[0], el2: newel[1], nextElement: null, el3: el3, prevEl: prevElement, parent1: newel[0].parentElement, parent2: newel[1].parentElement, parent3: el3.parentElement}).then(() => {
                                findOutCubes().then(() => {
                                    
                                    res()
                                })
                            });
                        }
                    } else if(newel.length === 1) {
                        addInter()
                        const el2 = getNearElement(0, newel)
                        const next = newel[0].nextElementSibling?.innerHTML === newel[0].innerHTML ? 

                        newel[0].nextElementSibling : 
                        el2.nextElementSibling?.innerHTML === el2.innerHTML ? 
                        el2.nextElementSibling :
                        null;

                        if(newel[0].previousElementSibling?.innerHTML === newel[0]?.innerHTML && !next) {
                            deleteCubes2({el1: newel[0], el2: el2, prevEl: newel[0].previousElementSibling, parent1: newel[0].parentElement, parent2: el2.parentElement}).then(() => {
                                findOutCubes().then(() => {
                                    
                                    res()
                                })
                            })
                        } else if(el2?.previousElementSibling?.innerHTML === el2?.innerHTML && !next) {
                            deleteCubes2({el1: newel[0], el2: el2, prevEl: el2.previousElementSibling, parent1: newel[0].parentElement, parent2: el2.parentElement}).then(() => {
                                findOutCubes().then(() => {
                                    
                                    res()
                                })
                            })
                        } else if((newel[0].previousElementSibling?.innerHTML !== newel[0]?.innerHTML) && (el2.previousElementSibling?.innerHTML !== el2?.innerHTML)  && (!next)){
                            deleteCubes2({el1: newel[0], el2: el2, prevEl: null, parent1: newel[0].parentElement, parent2: el2.parentElement}).then(() => {
                                findOutCubes().then(() => {
                                    
                                    res()
                                })
                            })
                        } else if(newel[0].innerHTML === next?.innerHTML && newel[0].previousElementSibling?.innerHTML !== newel[0].innerHTML && newel[0].previousElementSibling?.innerHTML !== next?.innerHTML) {
                            if(newel[0].innerHTML !== el2.nextElementSibling.innerHTML) {
                                deleteCubes2({el1: newel[0], el2: el2, next: next, parent1: newel[0].parentElement, parent2: el2.parentElement}).then(() => {
                                    findOutCubes().then(() => {
                                        
                                        res()
                                    })
                                })
                            } else if(newel[0].innerHTML === el2.nextElementSibling.innerHTML){
                
                                deleteCubes2({el1: newel[0], el2: el2, next: next, parent1: newel[0].parentElement, parent2: el2.parentElement}).then(() => {
                                    findOutCubes().then(() => {
                                        
                                        res()
                                    })
                                })
                            }
                        } else if(newel[0].nextElementSibling.innerHTML === newel[0].innerHTML && newel[0].previousElementSibling.innerHTML === newel[0].innerHTML) {
                            deleteCubes({el1: newel[0], el2: el2, nextElement: next, el3: null, prevEl: newel[0].previousElementSibling, parent1: newel[0].parentElement, parent2: el2.parentElement, parent3: null}).then(() => {
                                findOutCubes().then(() => {
                                    
                                    res()
                                })
                            })
                        } else if(el2.nextElementSibling.innerHTML === el2.innerHTML && el2.previousElementSibling.innerHTML === el2.innerHTML) {
                            deleteCubes({el1: newel[0], el2: el2, nextElement: el2.nextElementSibling, el3: null, prevEl: el2.previousElementSibling, parent1: newel[0].parentElement, parent2: el2.parentElement, parent3: null}).then(() => {
                                findOutCubes().then(() => {
                                    res()
                                })
                            })
                        }
                    } 
                } else {
                    res()
                }
            }) 

        }, 0)
    })
    prom.then(() => {
        if(ourLength === 8) {
            deleteCubesVertical();
        }
    })
};

export const render = () => {
    findOutCubes(document.querySelectorAll('.blocks_container'));
}