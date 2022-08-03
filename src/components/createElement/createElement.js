import { findOutCubes } from "../filter/getHorizontales";
import gifka from './../../assets/uf.gif'

export const createElement = () => {
   const newCobe = document.querySelector('.newCube');
   const cubes = [
      {name: 'num5', inner: 5},
      {name: 'num10', inner: 10},
      {name: 'num20', inner: 20},
      {name: 'num40', inner: 40},
      {name: 'num80', inner: 80},
      {name: 'num160', inner: 160}
   ];
    setTimeout(() => {
      const findedCube = cubes[Math.floor(Math.random() * cubes.length)];
      if(document.querySelector('.newCube .gifka')) {
         newCobe.innerHTML = `<div id="0" class="cube ${findedCube.name}">${findedCube.inner}</div>`
     }
    }, 0);
 };

let inter = 2;

 export const addInter = () => {
   inter = 2;
 }

 setInterval(() => {
   if(inter !== 0) {
      inter--
   } else if(inter == 0){
      createElement();
   }
 },600)

 const addListenerToContainers = () => {
   const general = document.querySelector('.general_block');
   const newCobe = document.querySelector('.newCube');
   general.addEventListener('click', (e) => {
      if(newCobe.querySelector('.cube')) {
         if(e.target.closest('.blocks_container')) {
            const event = e.target.closest('.blocks_container');
            const newEl = document.querySelector('.newCube .cube');
                newEl.classList.add('AddingCube');
                const findedEmpty = Array.from(event.children).find(el => el.className === 'empty');
                addInter()
                if(findedEmpty) {
                  const newId = findedEmpty.id;
                  findedEmpty.remove();
                  const findedEmpty2 = Array.from(event.children).find(el => el.className === 'empty');
                  newEl.id = newId;
                  event.insertBefore(newEl, findedEmpty2);
                  newEl.id = newId;
                  newCobe.innerHTML = `<img class="gifka" src=${gifka} alt="errorImg"/>`;
                  const prom = new Promise((res, rej) => {
                     setTimeout(() => {
                        newEl.classList.add('AddingCube2')
                        res()
                     },0);
                  })
                  prom.then(() => {
                     return new Promise((res, rej) => {
                        setTimeout(() => {
                           newEl.classList.remove('AddingCube2')
                           newEl.classList.remove('AddingCube')
                           res()
                        },600)
                     })
                  }).then(() => {
                     findOutCubes()
                  })
                } else {
                  inter = -1;
                  newCobe.innerHTML = `<img class="gifka" src=${gifka} alt="errorImg"/>`;
                  const end = document.querySelector('.end');
                  const countonline = document.querySelector('.count_online');
                  const general = document.querySelector('.general_block');
                  const yourrecordnum = document.querySelector('.your_record_num');
                  yourrecordnum.innerHTML = countonline.innerHTML
                  general.style.display = 'none';
                  end.style.display = 'flex' 
                }
         }
      }
    })
};

 export const getCreateElement = () => {
    createElement();
    addListenerToContainers();
 }