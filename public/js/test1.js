function sattoloCycle(items) {
  for(var i = items.length; i-- > 1; ) {
    var j = Math.floor(Math.random() * i);
    var tmp = items[i];
    items[i] = items[j];
    items[j] = tmp;
  }

  return items;
}

let btns = [//'b0',
            document.getElementById('b1'),
            document.getElementById('b2'),
            document.getElementById('b3'),
            document.getElementById('b4'),
            document.getElementById('b5'),
            document.getElementById('b6'),
            document.getElementById('b7'),
            document.getElementById('b8'),
            document.getElementById('b9'),
            document.getElementById('b10'),
            document.getElementById('b11'),
            document.getElementById('b12'),
            document.getElementById('b13'),
            document.getElementById('b14'),
            document.getElementById('b15'),
            document.getElementById('b16'),
            document.getElementById('b17'),
            document.getElementById('b18'),
            document.getElementById('b19'),
            document.getElementById('b20'),
            document.getElementById('b21'),
            document.getElementById('b22'),
            document.getElementById('b23'),
            document.getElementById('b24')]

btns_shuffled = sattoloCycle(btns)
btns_shuffled[0].style.backgroundColor = 'blue';
for (let i = 0; i < btns.length; i++){

  btns_shuffled[i].addEventListener('click', function onClick() {
    btns_shuffled[i].style.backgroundColor = 'green';
    if (i != btns.length - 1){
      btns_shuffled[i+1].style.backgroundColor = 'blue';
    }
  });
}
