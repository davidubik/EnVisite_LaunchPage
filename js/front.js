window.onload = function(){

  const notes = document.querySelectorAll('.ani-boxes > div')
  let isScrolled = false;
  for(var i=0;i<notes.length;i++){

    notes[i].addEventListener('wheel',function(e){
        if(isScrolled === false){
           isScrolled = true;
          const ani = e.target.dataset.ani;
          e.target.classList.add('animated', ani);
          // const timeOut = setTimeout(function(){
          //   e.target.classList.remove('animated', ani);
          // }, 3000);
        }
    });
  }


}
