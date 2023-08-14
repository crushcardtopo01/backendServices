const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contenidoSchema = new Schema({
  
  seccion: String,
  contenido: [
    {
      
      titulo: String,
      descripcion: [
        {
          
          isBoolean: Boolean,
          texto: String,
          subTexto: String,
          respuesta: String,
        }
      ],
    }
  ],
});

const proyectoSchema = new Schema({
 
  nombreProyecto: String,
  idUsuario: String,
  contenido: [contenidoSchema],
  fechaCreacion: Date,
});

const Proyecto = mongoose.model('Proyecto', proyectoSchema);

module.exports = Proyecto;
