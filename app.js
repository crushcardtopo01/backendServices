const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;
const bodyParser = require('body-parser');
const Proyecto = require('./models/proyecto');

const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(express.static('public'))

// app.get('*', (req, res) => {
//     res.redirect('/');
// });

app.get('/dummyResponse', (req, res) => {
    let dumyRes = [{"project":"name1","date":"02/02/2023"},{"project":"name2","date":"02/02/2023"},{"project":"name3","date":"02/02/2023"},{"project":"name3","date":"02/02/2023"},{"project":"name3","date":"02/02/2023"}]
    res.json({ message: dumyRes });
  });

  app.get('/api/v1/proyectos', async (req, res) => {
    try {
      const proyectos = await Proyecto.find();
      res.status(200).json({ message: proyectos });
    } catch (error) {
      res.status(500).json({ message: error });
    }

  });

  app.get('/api/v1/proyectos/proyecto/idPregunta', async (req, res) => {
    try {
      
      const proyectos = await Proyecto.findOne({"contenido.contenido.descripcion._id":req.body.id});
      res.status(200).json({ message: proyectos });
    } catch (error) {
      res.status(500).json({ message: error });
    }

  });

  app.post('/api/v1/proyectos/create', async (req, res)=>{

    try {
      const ejemploProyecto = new Proyecto({
        id: new mongoose.Types.ObjectId(),
        nombreProyecto: req.body.nombreProyecto,
        idUsuario: req.body.idUsuario,
        contenido: [
          {
            
            seccion: 'seccion preparatoria',
            contenido: [
              {
                
                titulo: 'Antes de estructurar integralmente el Proyecto de investigación...',
                descripcion: [
                  {
                    _id: new mongoose.Types.ObjectId(),
                    isBoolean: false,
                    texto: '¿Qué problema (situación en un estado actual) he observado en mi ámbito de estudio y deseo investigar?',
                    subTexto: '',
                    respuesta: '',
                  },
                  {
                    _id: new mongoose.Types.ObjectId(),
                    isBoolean: false,
                    texto: '¿Qué espero conocer o resolver con respecto al problema observado?',
                    subTexto: '',
                    respuesta: '',
                  },
                  {
                    _id: new mongoose.Types.ObjectId(),
                    isBoolean: false,
                    texto: '¿Cuáles considero son las posibles soluciones (para alcanzar la situación deseada) al problema de estudio?',
                    subTexto: '',
                    respuesta: '',
                  },
                ],
              },
            ],
          },
        ],
        fechaCreacion: '2019-05-05',
      });

      const saved = await ejemploProyecto.save();
      console.log(saved);
      res.status(200).json({ message: saved });
    }
    catch (err) {
      console.log(err);
      res.status(500).json({ message: err });
    }


  });

  mongoose.connect('mongodb://guia2:dzj8vaU4BqmY4s0X4w2JlKOSbgeboC2H4hAuqM7Baz81fNtbgqYHv7FDzibBFjHFpgDWbj1IGnLWACDbnM2GKw==@guia2.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@guia2@',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'+ err));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})