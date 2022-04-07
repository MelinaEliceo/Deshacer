let curso = 'Git basico';
let dia = 'Jueves';
let horario = '10 a 13 hs';
let plataforma = 'Zoom'; 

console.log('curso = ' + curso);
console.log('dia = ' + dia);
console.log('horario = ' + horario);
console.log('plataforma = ' + plataforma);

document.writeln('curso = ' + curso+'<br>');
document.writeln('dia = ' + dia +'<br>');
document.writeln('horario = ' + horario +'<br>');
document.writeln('plataforma = ' + plataforma +'<br>');

document.getElementById('contenido').innerHTML = 'curso = ' + curso+'<br>';
document.getElementById('contenido').innerHTML += 'dia = ' + dia +'<br>';
document.getElementById('contenido').innerHTML += 'horario = ' + horario +'<br>';
document.getElementById('contenido').innerHTML += 'plataforma = ' + plataforma +'<br>';