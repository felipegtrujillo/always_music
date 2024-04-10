import { pool } from "./db.js";

 const nuevoEstudiante = async (rut, nombre, curso, nivel) => {
    const text = `INSERT INTO estudiantes(rut, nombre, curso, nivel) VALUES ($1, $2, $3, $4)`;
    const values = [rut, nombre, curso, nivel];
    try {
      const result = await pool.query(text, values);
      console.log("Estudiante insertado:", result);
      return result;
    } catch (error) {
      console.error("Error al insertar estudiante:", error);
    }
  };
  
 const consultaRut = async (rut) => {
    const text = `SELECT * FROM estudiantes WHERE (rut = $1)`;
    const values = [rut];
    try {
      const result = await pool.query(text, values);
      console.log("Rut consultado:", result.rows[0]);
      return result.rows[0];
    } catch (error) {
      console.error("Error al consultar Rut:", error);
    }
  };
  
const consultaEstudiantes = async () => {
    const text = `SELECT * FROM estudiantes`;
    try {
      const result = await pool.query(text);
      console.log("Tabla estudiantes contiene:", result.rows);
      return result.rows;
    } catch (error) {
      console.error("Error al consultar estudiantes:", error);
    }
  };
  
const editarEstudiante = async (rut, nombre, curso, nivel) => {
    const text = `UPDATE estudiantes SET nombre = $2, curso = $3, nivel = $4  WHERE RUT = $1`;
    const values = [rut, nombre, curso, nivel];
    try {
      const result = await pool.query(text, values);
      console.log(`Estudiante con rut ${rut} editado correctamente`);
      return result;
    } catch (error) {
      console.error("Error al editar el estudiante:", error);
    }
  };
  
 const eliminaRut = async (rut) => {
    const text = `DELETE FROM estudiantes WHERE rut = $1`;
    const values = [rut];
    try {
      const result = await pool.query(text, values);
      console.log("Rut eliminado correctamente");
      return result;
    } catch (error) {
      console.error("Error al eliminar Rut:", error);
    }
  };
  
  export async function conectar() {
    try {
      /*      await pool.connect(); // Conectar a la base de datos 
       console.log("Conexión establecida correctamente");  */
  
      // Procesar argumentos desde la línea de comandos
      const [, , command, ...args] = process.argv;
  
      switch (command) {
        case "nuevoEstudiante":
          if (args.length !== 4) {
            console.error(
              "Número incorrecto de argumentos para nuevoEstudiante."
            );
            break;
          }
          const [rut, nombre, curso, nivel] = args;
          await nuevoEstudiante(rut, nombre, curso, nivel);
          break;
        case "editarEstudiante":
          if (args.length !== 4) {
            console.error(
              "Número incorrecto de argumentos para nuevoEstudiante."
            );
            break;
          }
          const [rutEdit, nombreEdit, cursoEdit, nivelEdit] = args;
          await editarEstudiante(rutEdit, nombreEdit, cursoEdit, nivelEdit);
          break;
        case "consultaRut":
          if (args.length !== 1) {
            console.error("Número incorrecto de argumentos para consultaRut.");
            break;
          }
          const [rutConsultado] = args;
          await consultaRut(rutConsultado);
          break;
        case "consultaEstudiantes":
          if (args.length !== 0) {
            console.error("Consulta estudiante no recibe parametros.");
            break;
          }
          await consultaEstudiantes();
          break;
        case "eliminaRut":
          if (args.length !== 1) {
            console.error("Número incorrecto de argumentos para eliminarRut");
            break;
          }
          const [rutEliminado] = args;
          await eliminaRut(rutEliminado);
          break;
        default:
          console.error("Comando no reconocido:", command);
          break;
      }
  
      await cerrarConexion();
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error);
    }
  }
  
 async function cerrarConexion() {
    try {
      pool.end(); // Cerrar la piscina de conexiones */
      console.log("Conexión cerrada correctamente");
    } catch (error) {
      console.error("Error al cerrar la conexión:", error);
    }
  }