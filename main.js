let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  <!-- Lo quenos define --!>.
  .typeString('Soy estudiante de Ingenieria en Gestion Empresarial y programadora PRO.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
