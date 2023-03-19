AOS.init();

const text = document.querySelector(".header");
const capa1 = document.querySelector(".capa1");
const capa2 = document.querySelector(".capa2");
const seccionProyectos = document.querySelector(".proyectosBackground")
const seccionContacto = document.querySelector(".contactoBackground")
const cometa1 = document.querySelector(".cometa-1");
const cometa2 = document.querySelector(".cometa-2");
const cometa3 = document.querySelector(".cometa-3");
const cometa4 = document.querySelector(".cometa-4");
const cometa5 = document.querySelector(".cometa-5");
const cometa6 = document.querySelector(".cometa-6");

function parallaxVertical(ele, multiplicador, puntoDeArranque) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= puntoDeArranque) {
        let value = window.scrollY;
        ele.style.marginTop = (value -  puntoDeArranque) * multiplicador + "px";
    }
  });
}
function parallaxMixto(ele, multiplicador, puntoDeArranque) {
  window.addEventListener("scroll", () => {
      if (window.scrollY >= puntoDeArranque) {
        let value = window.scrollY;
      ele.style.marginTop = (value - puntoDeArranque) * multiplicador + "px";
      ele.style.marginLeft = (value - puntoDeArranque) * multiplicador + "px";
      }
  });
}

parallaxVertical(text, 1.3, 0);
parallaxVertical(capa1, 0.7, 0);
parallaxVertical(capa2, 0.5, 0);
parallaxVertical(seccionProyectos, 0.7, 780)
parallaxVertical(seccionContacto, 1.4, 2560)
parallaxMixto(cometa1, 0.6, 900);
parallaxMixto(cometa2, 0.3, 1050);
parallaxMixto(cometa3, 0.6, 900);
parallaxMixto(cometa4, 0.2, 1150);
parallaxMixto(cometa5, 0.8, 900);
parallaxMixto(cometa6, 0.1, 950);


