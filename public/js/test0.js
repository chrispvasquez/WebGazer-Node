let btns = [//'b0',
            document.getElementById('b1'),
            document.getElementById('b2'),
            document.getElementById('b3'),
            document.getElementById('b4'),
            document.getElementById('b5'),
            document.getElementById('b6'),
            document.getElementById('b7'),
            document.getElementById('b8')]

let cnt = [// 0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0]

for (let i = 0; i < btns.length; i++){
  btns[i].style.backgroundColor = 'blue';
  btns[i].addEventListener('click', function onClick() {
    cnt[i] = cnt[i] + 1;
    if(cnt[i] >= 5){
      btns[i].style.backgroundColor = 'green';
    }
  });
}
