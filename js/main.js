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

let numberInput = document.getElementById('num__input');
let cardNumber = document.querySelector(".main__number")

numberInput.addEventListener("keyup", () => {
  cardNumber.innerHTML = numberInput.value;
  if (numberInput.value.length > 0) {
    if (
      numberInput.value.length === 4 ||
      numberInput.value.length === 9 ||
      numberInput.value.length === 14
    ) {
      numberInput.value += " ";
    }
  } else {
    cardNumber.innerHTML = "0000 0000 0000 0000";
  }
});

// End of making a space after every 4 numbers in the ""card number input""

// Success for submitting Cont

let form = document.querySelector('.main__form');
let chName = document.getElementById('name__input').value == 0 ? true : false;
let cNum = document.getElementById('num__input').value == 0 ? true : false;
let cardDate = document.getElementById('month__input').value == 0 ? true : false;
let cardYear = document.getElementById('year__input').value == 0 ? true : false;
let cardCVC = document.getElementById('cvc__input').value == 0 ? true : false;

// combined whole form into one (output is 5 if all is empty) // (output is 0 if all is filled)
let formValue = chName + cNum + cardDate + cardYear + cardCVC;
// default output is 5 if true and will substract -1 if false

// grabbing form container & thank you section container
const formCont = document.getElementById('form__cont');
const successCont = document.getElementById('btn__active__cont');
let confirtmBtn = document.querySelector('.confirm__input');
let successBtn = document.querySelector('.btn__active');


confirtmBtn.onclick = function() {
  if (formValue == 0) {
    formCont.style.display="none";
    successCont.style.display="block";
    console.log("empty");
  } else { 
    formCont.style.display="block";
    successCont.style.display="none";
    console.log("full");
  }
}

successBtn.onclick = function() {
  successCont.style.display="none";
  formCont.style.display="block"; 
}

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
});

// End of success for submitting Cont

// Making month, year and cvc number only inputs 

document.querySelectorAll("input.exp__date__cvc__input").forEach(el => {
    el.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').trim();
  })
});

// End of making month, year and cvc number only inputs

// Form error event on submit

  let formName = document.getElementById('name__input');
  let cardNum = document.getElementById('num__input');
  let month = document.getElementById('month__input');
  let year = document.getElementById('year__input');
  let cvc = document.getElementById('cvc__input');

function checkInputs() {
  const nameValue = formName.value.trim();
  const cardNumValue = cardNum.value.trim();
  const monthValue = month.value.trim();
  const yearValue = year.value.trim();
  const cvcValue = cvc.value.trim();

  if (nameValue === '') {
    setErrorFor(formName, 'Name can\'t be blank')
  } else {
    setSuccessFor(formName);
  }

  if (cardNumValue === '') {
    setErrorFor(cardNum, 'Card Number can\'t be blank');
  } else if (cardNum.value.match(/[^0-9\s]/)) {
    setErrorFor(cardNum, 'Wrong format, numbers only');
  } else {
    setSuccessFor(cardNum);
  }

  if (monthValue === '') {
    setErrorFor(month, 'Can\'t be blank');
  } else if (yearValue === '') {
    setErrorFor(month, 'Can\'t be blank');
  } else {
    setSuccessFor(month);
  }
  
  if (yearValue === '') {
    setErrorFor(year, '');
  } else {
    setSuccessFor(year);
  }

  if (cvcValue === '') {
    setErrorFor(cvc, 'Can\'t be blank')
  } else {
    setSuccessFor(cvc);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('.small');
  small.innerText = message;
  formControl.className = 'form__control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form__control success';
}
  
// End of form error event on submit