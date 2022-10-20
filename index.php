<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
  <link rel="stylesheet" href="css/style.css">
  <title>Frontend Mentor | Interactive card details form</title>
</head>
<body>
  <div class="main__cont">
    <div class="display__cont">
      <div class="display__cont__nobg">
        <div class="backcard__img__cont">
          <img src="images/bg-card-back.png" class="backcard__img" alt="an image of the backside of a credit card">
          <p class="main__cvc">000</p>
        </div>
        <div class="frontcard__img__cont">
          <img src="images/bg-card-front.png" class="frontcard__img" alt="an image of the frontside of a credit card">
          <div class="circles__img__cont">
            <img src="images/card-logo.svg" class="circles__img" alt="" role="presentation">
          </div>
          <div class="frontcard__content">
            <p class="main__number">0000 0000 0000 0000</p>
            <div class="date__name__output__cont">
              <p class="main__name" >Jane Appleseed</p>
              <p class="main__date__firsthalf">00</p>
              <p class="main__date__slash">/</p>
              <p class="main__date__secondhalf">00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="form__cont">
      <form class="main__form" action="">
        <label for="name__input">Cardholder Name</label>
        <input type="text" maxlength="25" id="name__input" placeholder="e.g. Jane Appleseed" onkeyup="mainNameFunc(this)" onkeydown="return /[a-z]/i.test(event.key)" onpaste="return false;" ondrop="return false;" required>
        <label for="num__input">Card Number</label>
        <input type="text" maxlength="19" id="num__input" placeholder="e.g. 1234 5678 9123 0000" onkeyup="mainNumFunc(this)" name="num__input" required>
        <div class="date__cvc__text__cont">
          <p class="date__label">Exp. Date (MM/YY)</p>
          <p class="cvc__label">CVC</p>
        </div>
        <div class="exp__date__cvc__cont">
          <input type="text" id="month__input" class="exp__date__cvc__input" placeholder="MM" onkeyup="mainDateFunc1(this)" maxlength="2" required>
          <input type="text" id="year__input" class="exp__date__cvc__input" placeholder="YY" onkeyup="mainDateFunc2(this)" maxlength="2" required>
          <input type="text" id="cvc__input" class="exp__date__cvc__input" placeholder="e.g. 123" onkeyup="mainCvcFunc(this)" maxlength="3" required>  
        </div>
        <button class="confirm__btn">Confirm</button>
      </form>
    </div>
  </div>
  <!-- Completed state start -->
  <div class="btn__active__cont">
    <img src="images/icon-complete.svg" class="complete-img" alt="" role="presentation">
    <h2>Thank you!</h2>
    <p class="btn__active__p">We've added your card details</p>
    <button class="btn__active">Continue</button>
  </div>
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Yousef Khalid</a>.
  </div>
  <script src="js/main.js">
  </script>
</body>
</html>