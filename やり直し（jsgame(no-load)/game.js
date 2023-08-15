let score = 0;

//HTMLからidとclassを取得
const start = document.getElementById('start');
const minbtn = document.getElementById('minbtn');
const count = document.getElementById('count');
const wrap = document.getElementById('wrap');
const gametext = document.getElementById('gametext');
const gametext1 = document.getElementById('gametext1');
const timeup = document.getElementById('timeup')
const btnsuccess = document.getElementById('btn_success');
const btnmistake = document.getElementById('btn_mistake');
const scorecount = document.getElementById('scorecount');


//ゲーム根本
function gameContinue() {
  let r = get_10random();
  console.log( r )
  let min_idx = check_min(r)

  //子要素を全て削除
  while (minbtn.firstChild) {
    minbtn.removeChild(minbtn.firstChild);
  }

  //乱数の数だけ、子要素を生成、イベントを割り当てる
  let num = 0;
  r.forEach(function (val) {
    let new_div = document.createElement("button");
    new_div.classList.add("btn_circle");
    if (num == min_idx) {
      new_div.addEventListener('click', success, false);
    } else {
      new_div.addEventListener('click', mistake, false);
    }
    new_div.textContent = val;
    minbtn.appendChild(new_div);
    num++;
  });

  scorecount.textContent = score;
}
  
//成功イベント
function success() {
  //連続クリックに対応
  btnsuccess.currentTime = 0;
  //クリックしたら音を再生
  btnsuccess.play();
  score++;
  gameContinue();
}

//失敗イベント
function mistake() {
  btnmistake.currentTime = 0;
  btnmistake.play();
}

//ランダムな数字を１０個抽出
//乱数生成
function get_random(){
  return Math.floor(Math.random() * (51));
};
  
//乱数の配列生成
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

//最小値のインデックス番号を返す
function check_min(numbers) {
  //ありえない大きな数字をセットしておく
  let ini_num = 1000;
  let ini_index = 0;
  let n = 0;
  numbers.forEach(function (num) {
    if(ini_num > num) {
      ini_num = num;
      ini_index = n;
    }
    n++;
  });
  return ini_index; 
}


//リトライのダイアログ
const retry = '【OK】リトライ / 【キャンセル】修了';

const gameOver = id => {
  clearInterval(id);
  const result = confirm(retry);

  //OKボタンをクリックされたらリロード
  if(result == true) {
    window.location.reload();
  }

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

  //タイムアップ
  setTimeout (() => {
    //timeup.textContent = 'タイムアップ！';
    minbtn.textContent = 'タイムアップ！';
    gameOver(id);
  },60020);
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
console.log(score)



