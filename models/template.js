const Proyecto = require('./proyecto');
const mongoose = require('mongoose');
var fechaActual = new Date();

const ejemploProyecto = new Proyecto( {
    nombreProyecto: "",
    idUsuario:"",
    contenido:[
        {
             id: new mongoose.Types.ObjectId(),
            seccion:"preparatoria",
            contenidoSeccion: [
                {
                    subSeccion:"nombre subSeccion",
                    titulo: [
                        {
                            texto: "Antes de estructurar integralmente el Proyecto de investigación es recomendable dedicar el tiempo necesario para pensar y determinar los siguientes elementos; por tanto, tomando en cuenta tu experiencia, lo que has observado y aprendido acerca de tu disciplina de estudio, responde las siguientes preguntas"
                        }
                    ],
                    preguntas: [
                        {
                            idPregunta:"p1",
                            isBoolean: false,
                            texto: "¿Qué problema (situación en un estado actual) he observado en mi ámbito de estudio y deseo investigar?",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p2",
                            isBoolean: false,
                            texto: "¿Qué espero conocer o resolver con respecto al problema observado?",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p3",
                            isBoolean: false,
                            texto: "¿Cuáles considero son las posibles soluciones (para alcanzar la situación deseada) al problema de estudio?",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p4",
                            isBoolean: false,
                            texto: "¿Por qué me interesa realizar esta investigación y no otra?",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p5",
                            isBoolean: false,
                            texto: "Considerando mi situación actual, ¿tengo posibilidades reales de concluir la investigación? ¿Por qué?",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p6",
                            isBoolean: false,
                            texto: "¿A quién o quiénes, en concreto, beneficia esta investigación?",
                            subTexto:"",
                            respuesta: ""
                        }
                        
                    ]
                },
                {
                    subSeccion:"nombre subSeccion2",
                    titulo: [
                        {
                            texto: "Estas preguntas representan tu primer acercamiento al Problema de investigación, por tanto, las respuestas deben surgir de tu observación y reflexión, y manifestar la situación como la ves, como desearías o debería ser. Conforme vayas avanzando en el desarrollo del proyecto se irá clarificando y concretando cada vez más, sin embargo, asegúrate, antes de continuar con el desarrollo de tu trabajo, contestando si en tus respuestas anteriores"
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p7",
                            isBoolean: true,
                            texto: "¿Has elegido un problema realmente de tu interés?",
                            subTexto:"¿Qué es lo que te interesa de este problema?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p8",
                            isBoolean: true,
                            texto: "¿Describes un Problema de investigación y no uno de sus síntomas?",
                            subTexto:"¿Cómo lo identificaste? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p9",
                            isBoolean: true,
                            texto: "¿Hay una aportación a tu desarrollo personal en lo que esperas conocer o resolver? ",
                            subTexto:"¿Cuál es?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p10",
                            isBoolean: true,
                            texto: "¿Los argumentos que te han llevado a seleccionar este Problema de investigación son sólidos?",
                            subTexto:"¿Por qué? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p11",
                            isBoolean: true,
                            texto: "¿Hay beneficios específicos en esta investigación para los potenciales destinatarios?",
                            subTexto:"¿Cuáles son?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p12",
                            isBoolean: true,
                            texto: "¿Las posibles soluciones al Problema de investigación están a tu alcance?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p13",
                            isBoolean: true,
                            texto: "¿Has considerados todos los aspectos y ámbitos para determinar tus posibilidades de concluir la investigación?",
                            subTexto:"¿Cuáles son? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p14",
                            isBoolean: true,
                            texto: "¿Los argumentos incluidos en la matriz corresponden al factor o ámbito respectivo? Esto es que, si abordas el factor de interés, las respuestas realmente correspondan a aspectos de interés y no de su importancia, beneficio o novedad; que si estás trabajando el ámbito para mí, tus respuestas estén en función de tu aprendizaje, tu desarrollo y crecimiento personal, y no en función de la disciplina o los destinatarios, etcétera",
                            subTexto:"¿Con qué elementos los diferencias? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p15",
                            isBoolean: true,
                            texto: "¿Has incluido por lo menos un argumento para cada ámbito en relación con el factor analizado?",
                            subTexto:"¿Cuántos argumentos diferentes identificaste? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p16",
                            isBoolean: true,
                            texto: "¿Evitaste emplear el mismo argumento dándole un enfoque diferente a la redacción según el ámbito o factor desarrollado?",
                            subTexto:"¿Cómo identificaste los argumentos similares? ",
                            respuesta: ""
                        }           
                    ]
                },
                {
                    subSeccion:"nombre subSeccion3",
                    titulo:[
                        {
                            texto:"Tomando como base las consideraciones hechas hasta este momento sobre el Problema de investigación, describe su situación actual y la situación deseada"
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p17",
                            isBoolean: false,
                            texto: "Situación actual: ",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p18",
                            isBoolean: false,
                            texto: "Situación deseada: ",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p19",
                            isBoolean: true,
                            texto: "¿Permite identificar claramente el problema por atender y hacia dónde se desea llevar la investigación?",
                            subTexto:"¿Cuál es, sintéticamente, el problema y lo que deseas realizar?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p20",
                            isBoolean: true,
                            texto: "¿Se centra en el problema y, por tanto, no se desvía hacia los síntomas?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        }
                    ]
                },
                {
                    subSeccion:"Pregunta de investigación",
                    titulo:[
                        {
                            texto:"Ahora, al considerar aquello que se analizó y determinó sobre el problema, formula la Pregunta de investigación. Si tienes dificultades para lograrlo, ensaya formulando varias preguntas y, a partir de su análisis y evaluación, ve descartando o integrando elementos hasta concretar una (Incluye las preguntas que te ayudaron a determinar la Pregunta de investigación)."
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p21",
                            isBoolean: false,
                            texto: "Pregunta de investigación: ",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p22",
                            isBoolean: true,
                            texto: "¿Describe concretamente el problema seleccionado?",
                            subTexto:"¿Qué problema por investigar incluiste en la pregunta? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p23",
                            isBoolean: true,
                            texto: "¿Se entiende con claridad qué deseas investigar?",
                            subTexto:"¿Cómo te aseguraste de expresarlo con claridad? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p24",
                            isBoolean: true,
                            texto: "¿Especifica el contexto de estudio?",
                            subTexto:"¿Cuál es el contexto indicado en la pregunta?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p25",
                            isBoolean: true,
                            texto: "¿La redacción y los términos empleados orientan hacia lo que deseas realizar?",
                            subTexto:"¿Qué términos (de las Variables, o Categorías) indican esa orientación? ",
                            respuesta: ""
                        }
                    ]
                },
                {
                    subSeccion:"La Hipótesis, o los Supuestos",
                    titulo:[],
                    preguntas:[
                        {
                            idPregunta:"p26",
                            isBoolean: true,
                            texto: "¿Da respuesta provisional y directamente a la Pregunta de investigación en función de la situación deseada?",
                            subTexto:"¿Qué elementos vinculan a la Pregunta de investigación con la respuesta provisional?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p27",
                            isBoolean: true,
                            texto: "¿Se apega a las mismas Variables, o Categorías, especificadas en la Pregunta de investigación?",
                            subTexto:"¿Cuáles son las Variables, o Categorías?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p28",
                            isBoolean: true,
                            texto: "¿Orienta hacia el logro del objetivo?",
                            subTexto:"¿Qué acción se indica en la respuesta provisional?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p29",
                            isBoolean: true,
                            texto: "¿Especifica el contexto de estudio?",
                            subTexto:"¿Cuál es el contexto mencionado? ",
                            respuesta: ""
                        }
                    ]
                },
                {
                    subSeccion:"Objetivos",
                    titulo:[],
                    preguntas:[
                        {  
                            idPregunta:"p30",
                            isBoolean: false,
                            texto: "Ahora, tomando como base para qué realizas esta investigación (lo planteado en la respuesta provisional, encaminado hacia la situación deseada), plantea el Objetivo general:",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p31",
                            isBoolean: true,
                            texto: "¿Describe con claridad la acción concreta que tú desarrollarás como producto final de la investigación?",
                            subTexto:"¿Cuál es el producto final señalado? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p32",
                            isBoolean: true,
                            texto: "¿Encauza el estudio hacia la respuesta a la Pregunta de investigación?",
                            subTexto:"¿Cuál es el elemento común entre la Pregunta, la Respuesta y el Objetivo planteado?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p33",
                            isBoolean: true,
                            texto: "¿Abarca lo establecido como situación deseada?",
                            subTexto:"¿Cómo lo mencionas en el objetivo?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p34",
                            isBoolean: true,
                            texto: "¿La acción determinada es correspondiente con las Variables, o Categorías, especificadas en la Pregunta de investigación y la Hipótesis, o los Supuestos?",
                            subTexto:"¿Cuáles son las Variables, o Categorías, por estudiar?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p35",
                            isBoolean: true,
                            texto: "¿Indica una acción realizable y evaluable?",
                            subTexto:"¿Por qué?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p36",
                            isBoolean: true,
                            texto: "¿Especifica el contexto donde se desarrollará la investigación?",
                            subTexto:"¿Cuál es el contexto mencionado? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p37",
                            isBoolean: true,
                            texto: "¿La acción determinada no depende de terceros?",
                            subTexto:"¿Cómo te aseguraste de que está a tu alcance?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p38",
                            isBoolean: true,
                            texto: "¿Emplea un verbo en infinitivo para especificar la acción por lograr?",
                            subTexto:"¿Cuál es el verbo empleado?",
                            respuesta: ""
                        }
                    ]
                },
                {
                    subSeccion:"Problema de investigación",
                    titulo:[
                        {
                            texto:"Complementa la elección de tu Problema de investigación profundizando el análisis de las posibilidades de concluir el trabajo adecuada y completamente. Responde las siguientes preguntas:"
                        }
                    ],
                    preguntas:[
                       {
                            idPregunta:"p39",
                            isBoolean: true,
                            texto: "¿El problema de investigación corresponde a mi área de conocimiento o experiencia?",
                            subTexto:"¿Por qué? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p40",
                            isBoolean: true,
                            texto: "Si respondiste que no lo es, ¿esta carencia será un impedimento para lograr el objetivo?",
                            subTexto:"¿Por qué?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p41",
                            isBoolean: true,
                            texto: "¿Tengo opciones para subsanar dicha carencia?",
                            subTexto:"¿Cuáles son?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p42",
                            isBoolean: true,
                            texto: "¿Hay otros aspectos relacionados con el problema por abordar?",
                            subTexto:"Cuáles son?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p43",
                            isBoolean: true,
                            texto: "¿Está definido a cuál o cuáles de estos aspectos se enfocará la investigación?",
                            subTexto:"¿Cuál o cuáles son? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p44",
                            isBoolean: true,
                            texto: "¿Has analizado y determinado cuánto tiempo se necesita para lograr el objetivo?",
                            subTexto:"¿Cuánto tiempo es?  ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p45",
                            isBoolean: true,
                            texto: "¿Cuento con ese tiempo?",
                            subTexto:"¿Cómo te has asegurado de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p46",
                            isBoolean: true,
                            texto: "Si no cuento con el tiempo necesario, ¿he identificado qué necesito hacer para lograr concluir la investigación?",
                            subTexto:"¿Qué haré? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p47",
                            isBoolean: true,
                            texto: "¿Hay información suficiente y disponible para sustentar mi investigación?",
                            subTexto:"¿Cómo me aseguré? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p48",
                            isBoolean: true,
                            texto: "Si no la hay, ¿hay alternativas para contar con la información necesaria?",
                            subTexto:"¿Cuáles son? ",
                            respuesta:""
                        },
                        {
                            idPregunta:"p49",
                            isBoolean: true,
                            texto: "¿Identifiqué qué recursos económicos o materiales necesito para cumplir con las actividades que demanda el logro del objetivo?",
                            subTexto:"¿Cuáles son?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p50",
                            isBoolean: true,
                            texto: "¿Cuento con dichos recursos?",
                            subTexto:"¿Cómo me aseguré de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p51",
                            isBoolean: true,
                            texto: "¿Identifiqué cuál será el enfoque distintivo de esta investigación (lo novedoso) que la diferenciará de otros estudios sobre el mismo problema?",
                            subTexto:"¿Cuál es? ",
                            respuesta: ""
                        }
                        
                    ]
                }
            
            ]
        },
        {
             id: new mongoose.Types.ObjectId(),
            seccion:"Planteamientoproblema",
            contenidoSeccion:[
                {
                    subSeccion:"introducción planteamiento problema",
                    titulo: [
                        {
                            texto: ""
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p52",
                            isBoolean: false,
                            texto: "Al concluir este apartado, incluye aquí un texto introductorio en el que presentes lo que en este se aborda",
                            subTexto:"",
                            respuesta: ""
                        }
                    ]
                },
                {
                    subSeccion:"título y subtítulo ",
                    titulo: [
                        {
                            texto: "Es probable que en este momento todavía tengas dudas con respecto al enfoque final de la investigación y esto dificulte la decisión de cómo intitularla. Si es tu situación, déjalo pendiente y continúa con el Planteamiento del problema y, después, con el panorama más claro, regresa a este punto e incorpora el título (y subtítulo, en caso de ser necesario)."
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p53",
                            isBoolean: true,
                            texto: "¿Describe claramente lo que se va a realizar como producto final de esta investigación?",
                            subTexto:"¿Qué expresión la describe? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p54",
                            isBoolean: true,
                            texto: "¿Incluye las mismas Variables, o Categorías, de la Pregunta, la Hipótesis o Supuesto y el Objetivo de investigación anteriormente determinados?",
                            subTexto:"¿Cuáles son? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p55",
                            isBoolean: true,
                            texto: "¿Señala concretamente el contexto donde se desarrollará la investigación?",
                            subTexto:"¿Cuál es el contexto señalado? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p56",
                            isBoolean: true,
                            texto: "¿Se mantiene dentro de la delimitación dada al problema de estudio?",
                            subTexto:"¿Qué elemento del Título la determina? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p57",
                            isBoolean: true,
                            texto: "¿Permite identificar cuál es la situación deseada?",
                            subTexto:"¿Cómo la mencionaste? ",
                            respuesta: ""
                        }
                    ]
                }
            ]
        }
    ],
    fechaCreacion: fechaActual.getDate() + "/" + (fechaActual.getMonth() +1) + "/" + fechaActual.getFullYear()


});

module.exports = ejemploProyecto;