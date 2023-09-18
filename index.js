let exploreBtn = document.querySelector('#explore');

exploreBtn.addEventListener('click', function() {
  window.location.href = "chatbot.html";
})

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    for(let faqItem of faqs) {
      if(faqItem == faq){
        faqItem.classList.toggle("active");
      }else{
        faqItem.classList.remove("active");
      }
    }
  })
})

let instagramLink = document.querySelector(".bxl-instagram");

instagramLink.addEventListener("click", function() {
  window.location.href = "https://www.instagram.com/minofpower/";
})

let twitterLink = document.querySelector(".bxl-twitter");

twitterLink.addEventListener("click", function() {
  window.location.href = "https://twitter.com/MinOfPower";
})

let whatsappLink = document.querySelector(".bxl-whatsapp");

whatsappLink.addEventListener("click", function() {
  window.location.href = "https://www.instagram.com/minofpower/";
})

let facebookLink = document.querySelector(".bxl-facebook");

facebookLink.addEventListener("click", function() {
  window.location.href = "https://www.facebook.com/PowerMinistryIndia";
})