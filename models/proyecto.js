const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const contenidoSchema = new Schema({
  
//   seccion: String,
//   contenido: [
//     {
      
//       titulo: String,
//       descripcion: [
//         {
          
//           isBoolean: Boolean,
//           texto: String,
//           subTexto: String,
//           respuesta: String,
//         }
//       ],
//     }
//   ],
// });

// const proyectoSchema = new Schema({
 
//   nombreProyecto: String,
//   idUsuario: String,
//   contenido: [contenidoSchema],
//   fechaCreacion: String,
// });

const proyectoSchema = new mongoose.Schema({
  nombreProyecto: String,
  idUsuario: String,
  contenido: [
      {
          id: mongoose.Types.ObjectId,
          seccion: String,
          contenidoSeccion: [
              {
                  subSeccion: String,
                  titulo: [
                      {
                          texto: String
                      }
                  ],
                  preguntas: [
                      {
                          idPregunta: String,
                          isBoolean: Boolean,
                          texto: String,
                          subTexto: String,
                          respuesta: String
                      }
                  ]
              }
          ]
      }
  ],
  fechaCreacion: String
});

const Proyecto = mongoose.model('Proyecto', proyectoSchema);

module.exports = Proyecto;
