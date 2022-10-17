const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.svg');
  
      if (entry.isIntersecting) {
        square.classList.add('pic_animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('pic_animation');
    });
  });
  
  observer.observe(document.querySelector('.animation-wrapper'));
  observer.observe(document.querySelector('.animation-wrapper1'));
  observer.observe(document.querySelector('.animation-wrapper2'));

  