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

// Making month, year and cvc number only inputs 

document.querySelectorAll("input.exp__date__cvc__input").forEach(el => {
    el.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').trim();
  })
});

// End of making month, year and cvc number only inputs

let form = document.querySelector('.main__form');

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
});

// Success for submitting Cont

const success = document.querySelector(".btn__active__cont");
const btn = document.querySelector(".confirm__input");
const formCont = document.querySelector(".form__cont");
const btnSuccess = document.querySelector(".btn__active");

let btnClicked = btn.onclick = function() {
  if (btnClicked = true) {
    formCont.style.display="none";
    success.style.display="block";
  } else {
    formCont.style.display="block";
    success.style.display="none";
  }
}

btnClicked = btnSuccess.onclick = function() {
  if (btnClicked = true) {
    formCont.style.display="block";
    success.style.display="none";
  } else {
    formCont.style.display="none";
    success.style.display="block";
  }
}
// End of success for submitting Cont

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
  }
}

// function setErrorFor(input, message) {
//   const formControl = input;
//   const s
// }

// End of form error event on submit