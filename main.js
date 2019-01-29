let bits = [0, 0, 0, 0];
let bitVals = [8, 4, 2, 1];
let boxes = bitVals.map((d) => document.querySelector(`#box${d}`));

let binary = document.querySelector("#binary");
let base10 = document.querySelector("#base10");
let hex = document.querySelector("#hex");

function handleBitClick(index) {
    console.log("index: " + index)
    bits[index] = (bits[index] + 1) & 1;
    updateBits();
}
function updateBits() {
    boxes.forEach((box, i) => {
        console.log(bits[i] + ' ' + i)
        if (bits[i] == 1) {
            if (!box.classList.contains('bit-on')) {
                box.classList.add('bit-on');
            }
        } else {
            box.classList.remove('bit-on');
        }
    })
    binary.innerText = bits.join('');
    let base10Val = bits.map((d,i) => d * bitVals[i])
                           .reduce((a,b) => a + b);
    base10.innerText = base10Val;
    hex.innerText = base10Val.toString(16); 
}

boxes.forEach((d, i) => d.addEventListener('click', () => handleBitClick(i)));