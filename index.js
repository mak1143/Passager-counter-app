
       
let countEl = document.getElementById("count-el");
let savedEl = document.getElementById("saved-el");
let count = 0 



// error code here because the save


function increment(){
  count += 1;
  countEl.textContent = count;
  console.log(count)
}
// for spacing use textContent
function save(){
    let countStr = count + " - ";
    savedEl.textContent += countStr;
    console.log(count)
    countEl.textContent = 0
    // count = 0 <== still works why is that

    
}


// save then reset to zero 
// if save is press console(count)
// or if increase is press then reset it to zero again











