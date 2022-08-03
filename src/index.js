import './styles.scss';
import gif from './assets/uf.gif';
import ic from './assets/rubik-3.png';

import { addInter, getCreateElement } from "./components/createElement/createElement";
import { render } from "./components/filter/filterCubes";

const wrapper = document.querySelector('.wrapper');
const icon = document.querySelector('.icon');

icon.href = ic;

export const firstRender = () => {
   wrapper.innerHTML = `
      <div class="count">
        <div class="count_online">0</div>&nbsp;|&nbsp;
        <div class="local_count"></div>
      </div>
      <div class="end">
        <h2>the end</h2>
        <div><span class="record">рекорд&nbsp;</span><span class="record_num"></span></div>
        <div><span class="your_record">ваш рекорд&nbsp;</span><span class="your_record_num"></span></div>
        <button>новая игра</button>
      </div>
      <div class="general_block">
        <div id="0" class="blocks_container">
          <div id="0" class="cube num5">5</div>
          <div id="1" class="empty"></div>
          <div id="2" class="empty"></div>
          <div id="3" class="empty"></div>
          <div id="4" class="empty"></div>
          <div id="5" class="empty"></div>
          <div id="6" class="empty"></div>
          <div id="7" class="empty"></div>
        </div>
        <div id="1" class="blocks_container">
          <div id="0" class="cube num10">10</div>
          <div id="1" class="empty"></div>
          <div id="2" class="empty"></div>
          <div id="3" class="empty"></div>
          <div id="4" class="empty"></div>
          <div id="5" class="empty"></div>
          <div id="6" class="empty"></div>
          <div id="7" class="empty"></div>
        </div>
        <div id="2" class="blocks_container">
          <div id="0" class="cube num20">20</div>
          <div id="1" class="empty"></div>
          <div id="2" class="empty"></div>
          <div id="3" class="empty"></div>
          <div id="4" class="empty"></div>
          <div id="5" class="empty"></div>
          <div id="6" class="empty"></div>
          <div id="7" class="empty"></div>
        </div>
        <div id="3" class="blocks_container">
          <div id="0" class="cube num40">40</div>
          <div id="1" class="empty"></div>
          <div id="2" class="empty"></div>
          <div id="3" class="empty"></div>
          <div id="4" class="empty"></div>
          <div id="5" class="empty"></div>
          <div id="6" class="empty"></div>
          <div id="7" class="empty"></div>
        </div>
        <div id="4" class="blocks_container">
          <div id="0" class="cube num80">80</div>
          <div id="1" class="empty"></div>
          <div id="2" class="empty"></div>
          <div id="3" class="empty"></div>
          <div id="4" class="empty"></div>
          <div id="5" class="empty"></div>
          <div id="6" class="empty"></div>
          <div id="7" class="empty"></div>
        </div>
        <div id="5" class="blocks_container">
          <div id="0" class="cube num160">160</div>
          <div id="1" class="empty"></div>
          <div id="2" class="empty"></div>
          <div id="3" class="empty"></div>
          <div id="4" class="empty"></div>
          <div id="5" class="empty"></div>
          <div id="6" class="empty"></div>
          <div id="7" class="empty"></div>
        </div>
      </div>
      <div class="newCubeBlock">
        <div class='newCube'>
          <img class="gifka" src=${gif} alt="errorImg"/>
        </div>
      </div>
   `
}

const index = () => {
  const countOnline = document.querySelector('.count_online');
  const recordNum = document.querySelector('.record_num');
  const yourRecordNum = document.querySelector('.your_record_num')
  const count = document.querySelector('.local_count')
  if(localStorage.getItem('sum')) {
      count.innerHTML = localStorage.getItem('sum');
      recordNum.innerHTML = localStorage.getItem('sum');
      yourRecordNum.innerHTML = countOnline.innerHTML
  } else {
    recordNum.innerHTML = 0;
    count.innerHTML = 0;
  }
  render()
  getCreateElement()
  const button = document.querySelector('button');

  button.onclick = () => {
    addInter()
    const end = document.querySelector('.end');
    const general = document.querySelector('.general_block');
    end.style.display = 'none';
    general.style.display = 'flex';
    firstRender();
    index();
  }
};

firstRender();
index();

