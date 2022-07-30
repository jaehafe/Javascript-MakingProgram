function timer(time) {
  return new Promise(function(reslove) {
    setTimeout(function(){
      reslove(time);
    }, time)
  });
}

async function run() {
  console.log('start');
  var time = await timer(1000);
  console.log('time:'+time);
  time = await timer(time+1000);
  console.log('time:'+time);
  time = await timer(time+1000);
  console.log('time:'+time);
  console.log('end');
}
run();