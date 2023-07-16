
let buttons = document.querySelectorAll('.where');
let pricingButtons = document.querySelectorAll('.pricing-button');
let navBtn = document.querySelectorAll(".nav-link");

let handleChange = (navNumber) => {
  navBtn.forEach(button => {
    button.classList.remove('active');
  });

  let clickedNavBtn = document.getElementById(`nav${navNumber}`);
  clickedNavBtn.classList.add('active');
};

let handlePricing = (pricingNumber) => {
  pricingButtons.forEach(button => {
    button.classList.remove('active');
  });

  let clickedButton = document.getElementById(`pricing${pricingNumber}`);
  clickedButton.classList.add('active');
};



let handleClick = (buttonNumber) => {
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  
  let clickedButton = document.getElementById(`button${buttonNumber}`);
  clickedButton.classList.add('active');
}
