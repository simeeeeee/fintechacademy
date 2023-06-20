import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let post = "강남 우동 맛집"
  let [글제목, b] = useState(['남자 코트 추천','맛집 추천','파이썬 독학']); //배열형태로 만들어도 ok
  let [날짜, c] = useState(['2월17일 발행','2월18일 발행','2월19일 발행']);
  // let [따봉] = useState(0);
  let [따봉, 따봉변경] = useState(0);

  let [modal, setModal] = useState(false); //ui의 상태를 state에 저장 '닫힘'가능
  
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>simeeeBlog</h4>
      </div>
      <button onClick={()=>{
        // 글제목[0] = '여자 코트 추천'; -> array 영구변화 copy본 만들어써라
        // b(글제목); 
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        b(copy);
      }}>수정</button>

      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        b(copy);
      }}>정렬</button>
      {/* //글제목->['여자 코트 추천','맛집 추천','파이썬 독학'] */}
      {/* <h4>{post}</h4> 변수를 중괄호안에 넣으면 됑*/} 
      <div className='list'>
         <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4> {/*구글url에 우클릭 그림이모티콘 */}
        <p>{날짜[0]}</p>
      </div>


      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>{날짜[1]}</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{
          modal == true ? setModal(false) : setModal(true)
        }}>{글제목[2]}</h4>
        <p>{날짜[2]}</p>
      </div>
      
      {/* <Modal2></Modal2> */}
      {//자바스크립트를 넣어야해서 중괄호쓴것 -> 조건문 if불가/ html영역이라 ->삼항연산자쓰기
          modal == true ? <Modal></Modal> : null
      }
    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>

      </div>
  )
}

let Modal2 = ()=>{
  let [name, rename] = useState('홍길동');
  let nick = ['뿡뿡이','춘식이']
  return(
    <>
    <h4>회원정보</h4>
    <p>{name}<span onClick={()=>{
      rename(nick[1]);
    }}>🤡</span></p>
    </>
  )
}

export default App;
