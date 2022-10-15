// Functions for replacing text in the default container from form input

function mainNumFunc(element) {
  let cardNum = document.querySelector(".main__number");

  if (cardNum.innerHTML = element.value) {
    cardNum.innerHTML = element.value;
  } else {
    cardNum.innerHTML = "0000 0000 0000 0000";
  }
}

function mainNameFunc(element) {
  let nameCont = document.querySelector(".main__name");

  if (nameCont.innerHTML = element.value) {
    nameCont.innerHTML = element.value;
  } else {
    nameCont.innerHTML = "Jane Appleseed";
  }
}

function mainDateFunc1(element) {
  let dateCont1 = document.querySelector(".main__date__firsthalf");
  
  if (dateCont1.innerHTML = element.value) {
    dateCont1.innerHTML = element.value;
  } else {
    dateCont1.innerHTML = "00";
  }
}

function mainDateFunc2(element) {
  let dateCont2 = document.querySelector(".main__date__secondhalf");
  
  if (dateCont2.innerHTML = element.value) {
    dateCont2.innerHTML = element.value;
  } else {
    dateCont2.innerHTML = "00";
  }
}

function mainCvcFunc(element) {
  let cvcCont = document.querySelector(".main__cvc");
  
  if (cvcCont.innerHTML = element.value) {
    cvcCont.innerHTML = element.value;
  } else {
    cvcCont.innerHTML = "000";
  }
}

// End of functions for replacing text in the default container from form input

// Making a space after every 4 numbers in the ""card number input""

document.getElementById('num__input').addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
});

// End of making a space after every 4 numbers in the ""card number input""

// Making the ""name input"" only accept letters 

function alphaOnly(event) {
  let key = event.keyCode;
  return ((key >= 65 && key <= 90) || key == 8);
};

// end of making the ""name input"" only accept letters 

// Making month, year and cvc number only inputs 

document.querySelectorAll("input.exp__date__cvc__input").forEach(el => {
    el.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').trim();
  })
});

// End of making month, year and cvc number only inputs