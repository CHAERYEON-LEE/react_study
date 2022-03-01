/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목 , 글제목변경] = useState(['남자 코트 추천', '감자수제비 맛집', '리액스스터디']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';

  let [modal, modal변경] = useState(false);


  // map() 함수
  // var 어레이 = [2,3,4];

  // var 뉴어레이 = 어레이.map(function(a){
  //   return a * 2
  // });



  // function 제목바꾸기(){
  //   var newArray = [...글제목];
  //   newArray = newArray.sort((a,b)=>{ return (a<b)?-1:(a==b)?0:1;});
  //   글제목변경(newArray);
  // }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h3> { 글제목[0] } <span onClick={()=>{따봉변경(따봉 + 1)}}>👍</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      {
        글제목.map(function (a) {
          return (
            <div className='list'>
              <h3> {a} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span>{따봉}</h3>
              <p>2월 17일 발행</p>
              <hr />
            </div>
          )
        })
      }
      <button onClick={()=>{modal변경(!modal)}}>버튼</button>

      {
        modal === true
        ? <Modal/>
        : null
      }


    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
