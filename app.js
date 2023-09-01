const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const Proyecto = require('./models/proyecto');

const mongoose = require('mongoose');
const  template  = require('./models/template');

app.use(bodyParser.json());
app.use(express.static('public'))

app.use(cors({ origin: 'http://localhost:3000' }));

// app.get('*', (req, res) => {
//     res.redirect('/');
// });

  app.get('/api/v1/proyectos', async (req, res) => {
    try {
      console.log(req.body);
      const proyectos = await Proyecto.find( { "idUsuario" : req.body.idUsuario } );
      console.log(proyectos);
      let proyectosResponse = [];
      proyectos.map((proyecto) => {
        let item ={
          nombreProyecto: proyecto.nombreProyecto,
          fecha: proyecto.fechaCreacion,
          id: proyecto._id
        };
        proyectosResponse.push(item);

      });
      res.status(200).json({ message: proyectosResponse });
    } catch (error) {
      res.status(500).json({ message: error });
    }

  });
  app.get('/api/v1/proyectos/proyecto', async (req, res) => {
    try {
      
      const proyectos = await Proyecto.find({"_id":req.body.id});
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
      console.log(template);
      template.nombreProyecto = req.body.nombreProyecto;
      template.idUsuario = req.body.idUsuario;
      
      const ejemploProyecto = template;

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