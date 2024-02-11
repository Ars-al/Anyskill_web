const IncreamentEl = document.getElementById("increament");
var PlusbtnEl = document.getElementById("plus");
var MinusbtnEl = document.getElementById("minus");

  count = 0;
  PlusbtnEl.onclick = function() {
  count += 1;
  IncreamentEl.innerHTML =  count;
};
  count = 0;
  MinusbtnEl.onclick = function() {
  count -= 1;
  if(count <= 0){
    count = 0;
  }
  IncreamentEl.innerHTML =  count;
};



