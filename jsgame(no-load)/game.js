//HTMLからidとclassを取得
const start = document.getElementById('start');
const minbtn = document.getElementById('minbtn');
const count = document.getElementById('count');
const wrap = document.getElementById('wrap');
const gametext = document.getElementById('gametext');
const btnfield = document.getElementsByClassName('btn');

//確認用
console.log(btnfield);

//ゲーム根本
function gameContinue() {
  //ランダムな数字を１０個抽出
  let r = get_random(50);
  r = get_10random();
  console.log( r )

  function get_random(){
    return Math.floor(Math.random() * (51));
  };

  function get_10random(){
    let array = [];
      while(array.length<10){
        let r = get_random();
        if (array.indexOf(r) == -1){
        array.push(r);
        };
      };
    return array;
  };

  //classボタンの中にランダムな数字を出力
  let numbtn = [
  btnfield[0].textContent = r[0] ,
  btnfield[1].textContent = r[1] ,
  btnfield[2].textContent = r[2] ,
  btnfield[3].textContent = r[3] ,
  btnfield[4].textContent = r[4] ,
  btnfield[5].textContent = r[5] ,
  btnfield[6].textContent = r[6] ,
  btnfield[7].textContent = r[7] ,
  btnfield[8].textContent = r[8] ,
  btnfield[9].textContent = r[9] ,
  ];

  console.log(numbtn);
  console.log(btnfield[0].textContent)

  //最小値の数字に変数を
  let minnum = Math.min(...numbtn);  
  console.log(minnum);

  //0
  if(r[0] === minnum){
    btnfield[0].addEventListener('click', e => {
      gameContinue();
    });
  };

  //1
  if(r[1] === minnum){  
    btnfield[1].addEventListener('click', e => {    
      gameContinue();
    });
  };

  //2
  if(r[2] === minnum){
    btnfield[2].addEventListener('click', e => {
      gameContinue();
    });
  };

  //3
  if(r[3] === minnum){
    btnfield[3].addEventListener('click', e => {
      gameContinue();
    });
  };

  //4
  if(r[4] === minnum){
    btnfield[4].addEventListener('click', e => {
      gameContinue();
    });
  };

  //5
  if(r[5] === minnum){
    btnfield[5].addEventListener('click', e => {
      gameContinue();
    });
  };

  //6
  if(r[6] === minnum){
    btnfield[6].addEventListener('click', e => {
      gameContinue();
    });
  };

  //7
  if(r[7] === minnum){
    btnfield[7].addEventListener('click', e => {
      gameContinue();
    });
  };

  //8
  if(r[8] === minnum){
    btnfield[8].addEventListener('click', e => {
      gameContinue();
    });
  };

  //9
  if(r[9] === minnum){
    btnfield[9].addEventListener('click', e => {
      gameContinue();
    });
  };


};

//カウントダウンタイマー
const timer = () => {
  //タイマー部分のHTML要素（p要素）を取得
  let time = count.textContent;

  const id = setInterval(() => {
    //カウントダウン
    time--;
    count.textContent = time;
    //カウントが0になったらタイマーを停止する
    if(time <= 0) {
      clearInterval(id);
    }
  },1000);
};

//ボタンをスタートボタン押すまで非表示
let changeElement = (el)=> {
  el.classList.toggle('active');
};

//ゲームスタート
start.addEventListener('click', () => {
  //カウントダウンタイマーを開始する
  timer();
  //ゲーム画面表示
  changeElement(minbtn);
  //スタートを非表示
  start.style.display = 'none';
  //スタートボタンで開始も非表示
  gametext.style.display = 'none';

  //ゲーム関数
  gameContinue();
  
  
});

gametext.textContent = 'スタートボタンで開始';





