let score = -1;

//HTMLからidとclassを取得
const start = document.getElementById('start');
const minbtn = document.getElementById('minbtn');
const count = document.getElementById('count');
const wrap = document.getElementById('wrap');
const gametext = document.getElementById('gametext');
const gametext1 = document.getElementById('gametext1');
const timeup = document.getElementById('timeup')
const btnfield = document.getElementsByClassName('btn');
const btnsuccess = document.getElementById('btn_success');
const btnmistake = document.getElementById('btn_mistake');
const scorecount = document.getElementById('scorecount');

//確認用
console.log(btnfield);



//ゲーム根本
function gameContinue() {

  for( let i = 0 ; i < btnfield.length ; i ++ ) {
    btnfield[i].removeEventListener('click', gameContinue);
  };

  

  /*for( let i = 0 ; i < btnfield.length ; i ++ ) {
    btnfield[i].removeEventListener('click', music);
  }*/

  
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

  for( let i = 0 ; i < btnfield.length ; i ++ ) {
    if(r[i] === minnum){  
      btnfield[i].addEventListener('click', gameContinue)
    };
  };

  function music() {
    if(r[0] === minnum){
    //連続クリックに対応
    btnsuccess.currentTime = 0;
    //クリックしたら音を再生
    btnsuccess.play();
    }
    if(r[0] != minnum){
    btnmistake.currentTime = 0;
    btnmistake.play();
    }
  }
  
  btnfield[0].addEventListener('click', music);
  //btnfield[0].removeEventListener('click', music);


  score++;
  scorecount.textContent = score;
  console.log(score)
}


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

  //タイムアップ
  setTimeout (() => {
    //timeup.textContent = 'タイムアップ！';
    minbtn.textContent = 'タイムアップ！';
  },60000);
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
  gametext1.style.display = 'none';

  //ゲーム関数
  gameContinue();
  
  //スコア表示
  scorecount.textContent = 'スコア';
});



gametext.textContent = 'スタートボタンで開始';
gametext1.textContent = '最小値をクリック！';





