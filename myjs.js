    var x = document.getElementById("p1");
    var y = document.getElementById("p2");
    var z = document.getElementById("p3");
    var a = document.getElementById("p4");
    var k = document.getElementById("p5");
    
    function myfunc1($btn){
      if($btn==btn1){
        x.style.display="block";
        a.style.display="none";
        k.style.display="none";
        y.style.display="none";
        z.style.display="none";
      }
      else if($btn==btn2){
        y.style.display="block";
        x.style.display="none";
        a.style.display="none";
        k.style.display="none";
        z.style.display="none";
      }
      else if($btn==btn3){
        z.style.display="block";
        y.style.display="none";
        k.style.display="none";
        x.style.display="none";
        a.style.display="none";
      }
      else if($btn==btn4){
        a.style.display="block";
      y.style.display="none";
      x.style.display="none";
      k.style.display="none";
      z.style.display="none";
      }
      else if($btn==btn5){
        k.style.display="block";
      y.style.display="none";
      x.style.display="none";
      a.style.display="none";
      z.style.display="none";
      }
      
    }

    function startTime() {
      const today = new Date();
      document.getElementById('txt').innerHTML = today;
      setTimeout(startTime, 1000);
    }


    const navToggler = document.querySelector(".nav-b");
    navToggler.addEventListener("click",navToggle);
    function navToggle(){
      navToggler.classList.toggle("active");
      const nav_lis = document.querySelector(".ulu");
      nav_lis.classList.toggle("open");       
    }
