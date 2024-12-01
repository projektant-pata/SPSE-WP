window.addEventListener('scroll', function() {
  var hiddenTextElements = document.querySelectorAll('.hiddenText');
  
  hiddenTextElements.forEach(function(hiddenText) {
    var position = hiddenText.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    
    if (position < windowHeight) {
      hiddenText.style.opacity = 1; // Zobrazíme text
      hiddenText.style.transform = 'translateY(0)'; // Zrušíme posunutí dolů
    }
  });
});