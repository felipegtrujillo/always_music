BDD always_music

create table estudiantes(
rut varchar(12) unique not null PRIMARY KEY,
nombre varchar(40) not null,
curso varchar(50) not null,
nivel INT CHECK (nivel >= 1 AND nivel <= 6));

comandos a consultar y ejemplos

node index.js comando

comandos 

nuevoEstudiante '16.680.798-9' 'Felipe Garcia' 'guitarra' 3

editarEstudiante '16.680.798-9' 'Felipe Garcia' 'guitarra' 5

consultaEstudiantes ( no recibe parametros)

consultaRut '16.680.798-0'

eliminaRut '16.680.798-0'

