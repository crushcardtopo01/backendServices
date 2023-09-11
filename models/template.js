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
                },
                {
                    subSeccion:"Antecedentes del problema de investigación",
                    titulo: [
                        {
                            texto:"La reflexión llevada a cabo durante la Etapa preparatoria con respecto al Problema de investigación que deseas abordar, así como el conocimiento que sobre este tienes, constituyen la base para presentar los antecedentes teóricos e históricos. Por tanto, describe la situación actual del Problema de investigación y lo que sabes acerca de cómo se llegó a ella, así como la situación deseada"
                        },
                        {
                            texto:"Para realizar esta descripción no es necesario llevar a cabo, por el momento, una búsqueda documental exhaustiva o profunda; la mayoría de las veces será suficiente el conocimiento previo sobre el problema de estudio; sin embargo, dado que abordas un problema sobre el que tienes mucho por aprender, lo más recomendable es buscar en la bibliografía especializada información para describir los antecedentes que te ayuden a contar con una base de conocimiento adecuada y suficiente para desarrollar tu investigación. Además, recuerda la conveniencia de evitar que la revisión bibliográfica influya directamente en el desarrollo del Proyecto de investigación y en el enfoque determinado para esta, a fin de no afectar el enfoque novedoso que has propuesto"
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p58",
                            isBoolean: false,
                            texto: "Redacta a continuación los Antecedentes del Problema de investigación",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p59",
                            isBoolean: true,
                            texto: "¿Describen con claridad la situación actual del Problema de investigación?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p60",
                            isBoolean: true,
                            texto: "¿Consideran la evolución que ha llevado al problema a su actual situación y hace necesario su estudio?",
                            subTexto:"¿En qué te basaste para describirla?  ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p61",
                            isBoolean: true,
                            texto: "¿Toman en cuenta los aspectos teóricos relacionados con el problema de investigación?",
                            subTexto:"¿Qué teorías incluiste? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p62",
                            isBoolean: true,
                            texto: "¿Aportan los elementos necesarios para guiar el estudio de acuerdo con las variables, o supuestos, especificados en la Pregunta, Hipótesis o Supuesto y Objetivo de investigación",
                            subTexto:"¿Cuáles son? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p63",
                            isBoolean: true,
                            texto: "¿Se mencionan las aportaciones de trabajos similares?",
                            subTexto:"¿A qué fuentes recurriste para identificarlas ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p64",
                            isBoolean: true,
                            texto: "¿Incluiste las referencias correspondientes a cada una de las fuentes citadas en tus antecedentes respetando el formato APA?",
                            subTexto:"¿Cómo te aseguraste de su corrección? ",
                            respuesta: ""
                        },

                        

                    ]
                },
                {
                    subSeccion:"Pregunta de investigación",
                    titulo: [
                        {
                            texto:"La Pregunta de investigación ya fue formulada durante la Etapa preparatoria; ahora, para asegurarte de que no ha habido modificaciones responde"
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p65",
                            isBoolean: true,
                            texto: "¿Plantea con claridad el Problema de investigación?",
                            subTexto:"¿Cuál es el problema planteado?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p66",
                            isBoolean: true,
                            texto: "¿El enfoque propuesto es el mismo que te interesa abordar durante la investigación",
                            subTexto:"¿Cuál es ese aspecto novedoso? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p67",
                            isBoolean: true,
                            texto: "¿Corresponde a un problema viable de atenderse?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p68",
                            isBoolean: true,
                            texto: "¿Considera con precisión el contexto donde se desarrollará el estudio?",
                            subTexto:"¿Cuál es el contexto mencionado?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p69",
                            isBoolean: false,
                            texto: "Si tus respuestas son afirmativas y todo se mantiene como lo planteaste en la Etapa preparatoria, a continuación transcribe la Pregunta de investigación anteriormente propuesta y continúa con la siguiente etapa. Si ya no corresponde a tu interés de estudio, reformula y presenta la pregunta que guiará tu investigación",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p70",
                            isBoolean: true,
                            texto: "¿Describe concretamente el problema de investigación seleccionado?",
                            subTexto:"¿Qué problema incluye? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p71",
                            isBoolean: true,
                            texto: "¿Se entiende con claridad lo que deseo investigar?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p72",
                            isBoolean: true,
                            texto: "¿Especifica el contexto de estudio?",
                            subTexto:"¿Cuál es el contexto señalado?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p73",
                            isBoolean: true,
                            texto: "¿Orienta hacia lo que deseo realizar?",
                            subTexto:"¿Qué Variables, o Categorías, indican esa orientación?",
                            respuesta: ""
                        },

                    ]
                },
                {
                    subSeccion:"Preguntas complementarias",
                    titulo: [],
                    preguntas:[
                        {
                            idPregunta:"p74",
                            isBoolean: false,
                            texto: "Una vez que todas las respuestas son afirmativas cuentas con las bases para evaluar y desarrollar las siguientes etapas, pero, antes de continuar, analiza tu Pregunta de investigación e identifica qué requieres saber y hacer para darle respuesta. A partir de este análisis determina otras preguntas que te ayudarán a aprender lo necesario, a entender el problema, a identificar alternativas de solución…",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p75",
                            isBoolean: true,
                            texto:"Estas preguntas contribuyen:  ¿A dar respuesta a la Pregunta de investigación?",
                            subTexto:"¿Cómo contribuyen?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p76",
                            isBoolean: true,
                            texto:"¿A mantener la investigación dentro de los límites teórico-contextuales especificados previamente?",
                            subTexto:"¿Cómo te aseguraste de esto?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p77",
                            isBoolean: true,
                            texto:"¿A adquirir el conocimiento necesario para realizar la investigación?",
                            subTexto:"¿Cómo te ayudarán a lograrlo? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p78",
                            isBoolean: true,
                            texto:"¿A identificar todo lo que requieres hacer durante la investigación?",
                            subTexto:"¿Cómo te aseguraste de que te ayudan en esta línea?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p78",
                            isBoolean: true,
                            texto:"¿A identificar las posibles soluciones al problema de estudio?",
                            subTexto:"¿Qué posibles soluciones identificaste",
                            respuesta: ""
                        }
                    ]
                },
                {
                    subSeccion:"Hipótesis (o Supuestos)",
                    titulo: [
                        {
                            texto:"La Hipótesis (o los Supuestos) fue otro de los elementos elaborados durante la Etapa preparatoria y, como en los puntos anteriores, si el enfoque original del estudio se mantiene sin modificaciones, solamente tendrás que transcribirla aquí; pero, si decidiste ajustar o adecuar el enfoque del estudio, deberás realizar los ajustes pertinentes para mantener la congruencia con los demás elementos del Proyecto de investigación."
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p79",
                            isBoolean: false,
                            texto:"Transcribe la Hipótesis, o los Supuestos, (Según corresponda si se trata de una investigación cuantitativa o cualitativa).",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p80",
                            isBoolean: true,
                            texto:"¿Da respuesta provisoria y directamente a la Pregunta de investigación definitiva?",
                            subTexto:"¿Cuáles son los elementos que vinculan a la Pregunta de investigación con la respuesta propuesta",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p81",
                            isBoolean: true,
                            texto:"¿Respeta las Variables (o las Categorías) especificadas en la Pregunta de investigación?",
                            subTexto:"¿Cuáles son las Variables (o Categorías) indicadas?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p82",
                            isBoolean: true,
                            texto:"¿Orienta hacia el objetivo propuesto anteriormente?",
                            subTexto:"¿Qué acción lo determina?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p83",
                            isBoolean: true,
                            texto:"¿Se mantiene dentro de los límites y el contexto propuestos para el estudio?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p84",
                            isBoolean: true,
                            texto:"¿Especifica el contexto donde se desarrolla el estudio?",
                            subTexto:"¿Cuál es? ",
                            respuesta: ""
                        },
                    ]
                },
                {
                    subSeccion:"Variables",
                    titulo: [],
                    preguntas:[
                        {
                            idPregunta:"p85",
                            isBoolean: false,
                            texto:"Analiza la Hipótesis propuesta y especifica claramente las Variables",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p86",
                            isBoolean: false,
                            texto:"Variable independiente",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p87",
                            isBoolean: true,
                            texto:"En la Variable independiente presentada: ¿El texto especifica el elemento de la Hipótesis que se desea manipular intencionalmente?",
                            subTexto:"¿Cuál es? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p88",
                            isBoolean: true,
                            texto:"•	¿El elemento manipulable es susceptible de ser medido?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p89",
                            isBoolean: true,
                            texto:"¿Su redacción es correspondiente con lo propuesto en la Hipótesis?",
                            subTexto:"¿Qué elementos son comunes entre Hipótesis y Variable independiente? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p89",
                            isBoolean: true,
                            texto:"¿La Variable independiente propuesta orienta hacia la atención de la situación deseada?",
                            subTexto:"¿En qué se identifica esta orientación?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p90",
                            isBoolean: false,
                            texto:"Variable dependiente",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p91",
                            isBoolean: true,
                            texto:"¿La Variable dependiente indica qué se espera como resultado después de manipular la Variable independiente?",
                            subTexto:"¿Cuál es el resultado esperado?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p92",
                            isBoolean: true,
                            texto:"¿Ese resultado es medible?",
                            subTexto:"¿Cómo se medirá?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p93",
                            isBoolean: true,
                            texto:"¿Lo propuesto como Variable dependiente se apega a lo indicado en la Hipótesis?",
                            subTexto:"¿Qué elementos lo indican? ",
                            respuesta: ""
                        },
                    ]
                },
                {
                    subSeccion:"Indicadores",
                    titulo: [
                        {
                            texto:"Aprovechando el análisis de la Hipótesis, o de los Supuestos, identifica los indicadores conceptuales y busca en la bibliografía especializada su definición. Transcribe a continuación las definiciones, empleando los formatos de citas textuales correspondientes e incluye su referencia."
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p94",
                            isBoolean: false,
                            texto:"Indicadores conceptuales",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p95",
                            isBoolean: true,
                            texto:"Para presentar los indicadores conceptuales: ¿Las definiciones se tomaron de fuentes especializadas?",
                            subTexto:"¿Cómo te aseguraste de esto?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p96",
                            isBoolean: true,
                            texto:"Si las definiciones de las fuentes especializadas no son adecuadas para los fines de la investigación, ¿se propone una que sí contribuya a la unidad conceptual?",
                            subTexto:"¿En qué te basaste para proponerla?  ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p96",
                            isBoolean: true,
                            texto:"•	¿Se respetan los formatos de citas textuales mayores o menores de cuarenta palabras, según los lineamientos del formato APA?",
                            subTexto:"¿Cómo verificaste la corrección de los formatos? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p97",
                            isBoolean: true,
                            texto:"¿Se incluyen las referencias en formato APA?",
                            subTexto:"¿Cómo verificaste los formatos?",
                            respuesta: ""
                        },
                    ]
                },
                {
                    subSeccion:"Indicadores operacionales",
                    titulo: [],
                    preguntas:[
                        {
                            idPregunta:"p98",
                            isBoolean: false,
                            texto:"Indicadores operacionales",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p99",
                            isBoolean: true,
                            texto:"¿Son todas las que se necesitan para el correcto desarrollo de lo propuesto en la Hipótesis, o los Supuestos?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p100",
                            isBoolean: true,
                            texto:"¿Confirman la posibilidad de medir las Variables, o los Supuestos?",
                            subTexto:"¿Cómo las medirás? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p101",
                            isBoolean: true,
                            texto:"¿Encausan hacia el logro del objetivo?",
                            subTexto:"¿Cómo contribuyen a lograrlo? ",
                            respuesta: ""
                        },
                    ]
                },
                {
                    subSeccion:"Objetivos",
                    titulo: [
                        {
                            texto:"El Objetivo general también se estableció durante la Etapa preparatoria; si todo se mantiene con la misma línea propuesta, solamente requieres transcribirlo aquí. Pero si ha habido algún cambio y este se ha reflejado en la Pregunta de investigación, deberás realizar los ajustes pertinentes para mantener el mismo enfoque de investigación y responder de manera afirmativa a las preguntas presentadas en dicha Etapa para confirmar la adecuada formulación de los objetivos."
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p102",
                            isBoolean: false,
                            texto:"Transcribe aquí: Objetivo general",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p103",
                            isBoolean: true,
                            texto:"Confirma, antes de continuar, si el Objetivo general propuesto: •	¿Encauza el estudio hacia el logro del producto final pretendido con esta investigación?",
                            subTexto:"¿Cuál es el producto final pretendido? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p104",
                            isBoolean: true,
                            texto:"¿Encausa hacia la respuesta a la Pregunta de investigación?",
                            subTexto:"¿Cuál es el elemento común entre respuesta y Objetivo de investigación? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p105",
                            isBoolean: true,
                            texto:"¿Es adecuado y suficiente para culminar exitosamente la investigación y abarca lo establecido como situación deseada?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p106",
                            isBoolean: true,
                            texto:"¿Plantea una acción concreta, realizable y evaluable?",
                            subTexto:"¿Cuál es la acción por realizar? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p107",
                            isBoolean: true,
                            texto:"¿Se mantiene dentro de la delimitación y el contexto propuestos para el estudio?",
                            subTexto:"¿Con qué límites, y en qué contexto, se trabajará la investigación?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p108",
                            isBoolean: true,
                            texto:"¿Es correspondiente con lo planteado en la Pregunta de investigación y la Hipótesis, o los Supuestos?",
                            subTexto:"¿Qué elementos en común los vinculan?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p109",
                            isBoolean: true,
                            texto:"¿Es correspondiente con lo planteado en la Pregunta de investigación y la Hipótesis, o los Supuestos?",
                            subTexto:"¿Qué elementos en común los vinculan?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p110",
                            isBoolean: true,
                            texto:"¿Se mantiene en correspondencia con las Variables, o Categorías, especificadas en la Pregunta e Hipótesis, o Supuestos, de investigación?",
                            subTexto:"¿Cuáles son las Variables, o Categorías, en común? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p111",
                            isBoolean: true,
                            texto:"¿Determina un compromiso del investigador y no de terceras personas?",
                            subTexto:"¿Cómo te aseguraste de que esté a tu alcance?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p112",
                            isBoolean: true,
                            texto:"¿Emplea un verbo en infinitivo para indicar la acción por realizar?",
                            subTexto:"¿Cuál es el verbo empleado por alcanzar?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p113",
                            isBoolean: true,
                            texto:"¿Emplea un verbo en infinitivo para indicar la acción por realizar?",
                            subTexto:"¿Cuál es el verbo empleado por alcanzar?",
                            respuesta: ""
                        },
                        
                    ]
                },
                {
                    subSeccion:"Objetivos Particulares",
                    titulo: [],
                    preguntas:[
                        {
                            idPregunta:"p114",
                            isBoolean: false,
                            texto:"Objetivos particulares",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p115",
                            isBoolean: true,
                            texto:"¿Describen con claridad acciones concretas que contribuirán al logro del Objetivo general?",
                            subTexto:"¿Qué acciones determinaste?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p116",
                            isBoolean: true,
                            texto:"¿Encauzan el estudio hacia la respuesta a la Pregunta de investigación?",
                            subTexto:"¿Cómo ayudan a lograrlo?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p117",
                            isBoolean: true,
                            texto:"¿Indican una acción concreta, realizable y evaluable?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p118",
                            isBoolean: true,
                            texto:"¿Especifican el contexto donde se desarrollará la investigación?",
                            subTexto:"¿Cuál es el contexto señalado?  ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p119",
                            isBoolean: true,
                            texto:"¿Incluyen la revisión bibliográfica para identificar los antecedentes del Problema de investigación, qué se ha estudiado acerca de él, así como el sustento teórico necesario para desarrollar la investigación?",
                            subTexto:"¿Cómo te aseguraste de abarcar todo lo que requiere tu estudio?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p120",
                            isBoolean: true,
                            texto:"¿Consideran el estudio de alternativas de solución propuestas para problemas similares?",
                            subTexto:"¿A qué fuentes te acercarás para identificarlas? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p121",
                            isBoolean: true,
                            texto:"¿Especifican el trabajo de campo necesario para lograr el Objetivo general?",
                            subTexto:"¿Cómo te aseguraste de no omitir nada necesario? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p122",
                            isBoolean: true,
                            texto:"¿Son suficientes para alcanzar el Objetivo general?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p123",
                            isBoolean: true,
                            texto:"¿Emplean un verbo en infinitivo en la redacción de la acción por lograr?",
                            subTexto:"¿Qué verbos utilizaste? ",
                            respuesta: ""
                        },
                    ]
                },
                {
                    subSeccion:"Justificación",
                    titulo: [
                        {
                            texto:"Durante la Etapa preparatoria llenaste una matriz. Emplea los argumentos incluidos en esta para redactar la Justificación de tu Proyecto de investigación"
                        },
                        {
                            texto:"Recuerda, la solidez de la justificación está en relación directa con lo adecuado de los argumentos presentados para manifestar por qué vale la pena llevar a cabo la investigación."
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p124",
                            isBoolean: false,
                            texto:"Redacta la Justificación.",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p125",
                            isBoolean: true,
                            texto:"¿Explica claramente por qué vale la pena realizar esta investigación desde la perspectiva de los diferentes ámbitos y factores involucrados?",
                            subTexto:"¿Cuál es la razón principal que hace que valga la pena realizar tu investigación?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p126",
                            isBoolean: true,
                            texto:"¿Aprovecha todos los argumentos encontrados al llenar la matriz de la Etapa preparatoria?",
                            subTexto:"¿Cuántos argumentos has incluido en tu justificación?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p127",
                            isBoolean: true,
                            texto:"¿Permite identificar cuál es la situación deseada?",
                            subTexto:"¿A qué situación deseada se alude en la justificación? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p128",
                            isBoolean: true,
                            texto:"¿Especifica a quién o quiénes se beneficiará y cómo?",
                            subTexto:"¿Quiénes son los destinatarios y qué beneficio les aportará esta investigación? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p129",
                            isBoolean: true,
                            texto:"•	¿Evita presentar como “un listado” los argumentos de justificación",
                            subTexto:"¿Cómo lograste esto? ",
                            respuesta: ""
                        },
                    ]
                },
                {
                    subSeccion:"Alcance o Delimitación de la investigación",
                    titulo: [
                        {
                            texto:"Durante el desarrollo del proceso te has esforzado por determinar y mantener con precisión el ámbito de estudio de tu investigación, marcando así los límites o el alcance del estudio. En particular, durante la Etapa preparatoria analizaste los aspectos vinculados con el Problema de investigación y elegiste el que abordarás y aquellos que desechaste"
                        },
                        {
                            texto:"Con base en dicho análisis, describe los aspectos por abordar en tu investigación, sin omitir aquellos que, aunque están estrechamente vinculados con el problema de estudio, no serán abordados, y explica los motivos de esto"
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p130",
                            isBoolean: false,
                            texto:"Como se mencionó en los puntos precedentes, si efectuaste algún cambio al enfoque del estudio, no olvides realizar los ajustes necesarios al análisis realizado durante la Etapa preparatoria, para que la delimitación también conserve la adecuada relación con el resto de los elementos del Proyecto",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p131",
                            isBoolean: false,
                            texto:"Menciona también el Alcance de la investigación. Si desarrollarás un estudio cuantitativo, indica hasta dónde abarcará: Exploratorio, Descriptivo, Correlacional o Explicativo. O, en caso de una investigación cualitativa: Exploratorio, Descriptivo, Relacional o Comprensivo. No olvides mencionar, en función de tu investigación, cuál será el proceso que se seguirá en cada uno de los niveles previos necesarios para llegar al alcance determinado",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p132",
                            isBoolean: true,
                            texto:"¿Describe con claridad qué se pretende lograr con esta investigación?",
                            subTexto:"Sintéticamente, ¿qué pretendes lograr?  ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p133",
                            isBoolean: true,
                            texto:"¿Señala los aspectos que no serán considerados en el estudio y explica los motivos por los cuales se omitirán?",
                            subTexto:"Sintéticamente, ¿qué aspectos no se abordarán y por qué? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p134",
                            isBoolean: true,
                            texto:"¿Especifica el alcance propuesto para esta investigación",
                            subTexto:"¿Cuál es el alcance indicado? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p135",
                            isBoolean: true,
                            texto:"¿El alcance especificado es correspondiente con la situación deseada previamente establecida?",
                            subTexto:"¿A qué situación deseada corresponde este texto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p136",
                            isBoolean: true,
                            texto:"¿Describe el proceso por seguir en cada uno de los niveles necesarios para lograr el alcance propuesto?",
                            subTexto:"Sintéticamente, ¿cuáles son los pasos necesarios?  ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p137",
                            isBoolean: true,
                            texto:"•	¿Establece con claridad el contexto donde se realizará el estudio?",
                            subTexto:"¿Cuál es el contexto mencionado? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p138",
                            isBoolean: true,
                            texto:"¿Indica el tiempo que abarcará la investigación?",
                            subTexto:"¿Cuánto tiempo requerirá la investigación?  ",
                            respuesta: ""
                        },
                    ]
                },
                {
                    subSeccion:"Limitaciones o posibles contratiempos para concluir la investigación",
                    titulo: [
                        {
                            texto:"También, durante la Etapa preparatoria, se realizó un análisis con respecto a los factores que podrían interferir para el adecuado logro del Objetivo general. Revisa ahora si dicho análisis es completo y adecuado para desarrollar la investigación. Considera la posibilidad de que algún cambio en el enfoque del estudio demande también un cambio en el análisis de los factores que pueden constituir un contratiempo al momento de realizar la investigación"
                        },
                        {
                            texto:"Redacta el apartado considerando los recursos necesarios para realizar la investigación, así como los posibles contratiempos y la manera de enfrentarlos, para contar con un plan de contingencia que te permita prever la eventual presentación de alguno de estos. El siguiente listado te servirá de guía para indicar qué necesitas, si cuentas con esto y, en caso contrario, cómo lograrás subsanar su carencia"
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p139",
                            isBoolean: false,
                            texto:"Información",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p140",
                            isBoolean: false,
                            texto:"Tiempo",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p141",
                            isBoolean: false,
                            texto:"Recursos económicos",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p142",
                            isBoolean: false,
                            texto:"Materiales",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p143",
                            isBoolean: false,
                            texto:"Recursos humanos",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p144",
                            isBoolean: false,
                            texto:"Recursos tecnológicos",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p145",
                            isBoolean: false,
                            texto:"Permisos, autorizaciones o acuerdos",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p146",
                            isBoolean: false,
                            texto:"Conocimientos",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p147",
                            isBoolean: false,
                            texto:"Habilidades",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p148",
                            isBoolean: false,
                            texto:"Actitudes",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p149",
                            isBoolean: true,
                            texto:"La disponibilidad de información suficiente para alcanzar el Objetivo general",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p150",
                            isBoolean: true,
                            texto:"Si se cuenta con el tiempo suficiente para concluir la investigación adecuadamente",
                            subTexto:"¿Qué factores tomaste en cuenta para contar con el tiempo suficiente?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p151",
                            isBoolean: true,
                            texto:"La suficiencia de los recursos materiales y económicos necesarios para concluir el estudio",
                            subTexto:"¿Cómo te aseguraste de contar con lo necesario?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p152",
                            isBoolean: true,
                            texto:"La manera de enfrentar cada uno de los posibles contratiempos",
                            subTexto:"¿Cómo sortearás los aspectos con los que tienes potenciales dificultades?",
                            respuesta: ""
                        },
                    ]
                },
                {
                    subSeccion:"Definición de conceptos",
                    titulo: [
                        {
                            texto:"Es necesario que todos los involucrados con el desarrollo de la investigación cuenten con una base conceptual común, por tanto, realiza una lista de todos los conceptos relacionados con el Problema de investigación y busca en la bibliografía especializada sus definiciones."
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p153",
                            isBoolean: false,
                            texto:"A continuación, elige y transcribe tres de las definiciones encontradas de cada uno de los conceptos identificados como indispensables para que todos reconozcan la manera como se considerarán en la investigación. Presenta las definiciones seleccionadas respetando las características estipuladas por el formato APA tanto para las citas textuales como para sus referencias",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p154",
                            isBoolean: true,
                            texto:"¿Son los indispensables para la adecuada comprensión del problema por abordar?",
                            subTexto:"¿Cómo te aseguraste de que has incluido todos?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p155",
                            isBoolean: true,
                            texto:"¿Se presentan tres definiciones adecuadas y útiles de cada concepto para el estudio por realizar?",
                            subTexto:"¿Por qué serán útiles? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p156",
                            isBoolean: true,
                            texto:"Si las definiciones encontradas no son adecuadas para el estudio por realizar, ¿se aprovechan estas para definir el concepto?",
                            subTexto:"¿Qué elementos has considerado como necesarios y útiles para incluirlos en la definición propuesta y por qué? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p157",
                            isBoolean: true,
                            texto:"¿Las definiciones presentadas abarcan todos los puntos especificados en el Esquema provisional de trabajo?",
                            subTexto:"¿Cómo te aseguraste de esto?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p158",
                            isBoolean: true,
                            texto:"¿Se presentan con el formato APA de cita textual adecuado?",
                            subTexto:"¿Cómo te aseguraste de que son los formatos correctos?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p159",
                            isBoolean: true,
                            texto:"¿Incluyen su referencia correspondiente respetando el formato APA?",
                            subTexto:"¿Cómo te aseguraste de que empleaste los datos correctos con el formato adecuado?",
                            respuesta: ""
                        },
                    ]
                },
            ]
        },
        {
            id: new mongoose.Types.ObjectId(),
            seccion:"MetodosRecopilacion",
            contenidoSeccion:[
                {
                    subSeccion:"Métodos de recopilación y de procesamiento de información",
                    titulo: [
                        {
                            texto:"Todo lo hasta aquí desarrollado constituye la base y, en gran medida, orienta las actividades que deberán realizarse en la investigación, sin embargo, algunos pasos indispensables para lograr el Objetivo general todavía no han sido definidos con claridad, como podría ser el trabajo de campo"
                        },
                        {
                            texto:"En primer lugar, describe, paso a paso, todas las actividades necesarias para desarrollar el Proceso de investigación. Considera: el contexto y la población involucrados con el estudio, el diseño del proyecto, el acopio de información documental y de campo, los instrumentos requeridos para realizar el acopio, las técnicas necesarias para la adecuada aplicación de los instrumentos, los métodos que se emplearán para procesar la información recopilada y la elaboración del Informe de investigación"
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p160",
                            isBoolean: false,
                            texto:"Descripción del proceso de investigación",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p161",
                            isBoolean: true,
                            texto:"¿El proceso propuesto es claro y completo?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p162",
                            isBoolean: true,
                            texto:"¿Se toma en cuenta el contexto?",
                            subTexto:"¿Cuál es el contexto descrito? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p163",
                            isBoolean: true,
                            texto:"¿Se especifican los instrumentos por utilizar?",
                            subTexto:"¿	Qué instrumentos se emplearán? ",
                            respuesta: ""
                        },
                    ]
                },
                {
                    subSeccion:"Diseño de la investigación",
                    titulo: [
                        {
                            texto:"Una vez definido el proceso, analiza y compara los tipos de investigación documentados en la bibliografía metodológica especializada con los descritos por ti líneas arriba, para identificar y seleccionar aquellos que coincidan con lo propuesto para llevar a cabo la investigación y contribuyan a su buen desarrollo. Toma en cuenta que la investigación no necesariamente será de un tipo determinado y empleará un solo método; en la práctica, dependiendo de su naturaleza y del objetivo, estos podrán combinarse o adaptarse a las necesidades del estudio"
                        },
                        {
                            texto:"Complementa la descripción del proceso de investigación propuesto al principio de este apartado con el Diseño de la investigación: No experimental, Preexperimental, Cuasiexperimental o Experimental, para una investigación cuantitativa; o Etnográfico, Etnometodológico, Fenomenológico, Biográfico, etcétera, para una investigación cualitativa, explicando, en función de tu propio trabajo, por qué se trata de un tipo u otro, e incluye la fuente que lo avala."
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p164",
                            isBoolean: true,
                            texto:"El diseño propuesto:	¿Es adecuado para la investigación por desarrollar?",
                            subTexto:"¿Por qué lo consideras así?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p165",
                            isBoolean: true,
                            texto:"•	¿Se justifica el tipo de estudio propuesto con el trabajo requerido para lograr el objetivo, en lugar de en la teoría encontrada en los textos metodológicos especializados?",
                            subTexto:"¿Qué parte del trabajo lo justifica? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p166",
                            isBoolean: true,
                            texto:"¿Se incluye la referencia correspondiente a la fuente metodológica empleada para identificar el Diseño de la investigación?",
                            subTexto:"¿Por qué seleccionaste esta fuente? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p167",
                            isBoolean: true,
                            texto:"•	¿Se respeta el formato APA al presentar la referencia?",
                            subTexto:"¿Cómo te aseguraste de esto?  ",
                            respuesta: ""
                        },
                        
                        
                    ]
                },
                {
                    subSeccion:"Métodos e instrumentos",
                    titulo: [
                        {
                            texto:"Complementa este apartado señalando a quién o quiénes se aplicará cada instrumento y si se realizará el acopio con toda la población o solo con una muestra"
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p168",
                            isBoolean: false,
                            texto:"Métodos e instrumentos",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p168",
                            isBoolean: true,
                            texto:"La explicación de los métodos de recopilación de información:  ¿Es clara y precisa?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p169",
                            isBoolean: true,
                            texto:"¿Considera el proceso completo?",
                            subTexto:"¿En qué te basaste para no omitir nada? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p170",
                            isBoolean: true,
                            texto:"¿Considera, cuando están disponibles, los métodos e instrumentos especializados de la disciplina correspondiente al Problema de investigación?",
                            subTexto:"¿A qué fuentes recurriste para identificarlos? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p171",
                            isBoolean: true,
                            texto:"¿Menciona cuál será la población de estudio?",
                            subTexto:"¿Cuál es la población mencionada? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p172",
                            isBoolean: true,
                            texto:"¿Especifica si el estudio se desarrollará con la población completa o se seleccionará una muestra y por qué?",
                            subTexto:"¿Qué población o muestra se especifica? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p173",
                            isBoolean: true,
                            texto:"En caso de trabajarse con una muestra, ¿indica cómo se seleccionará?",
                            subTexto:"¿Por qué seleccionaste este tipo de muestra?  ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p174",
                            isBoolean: true,
                            texto:"En caso de trabajarse con una muestra, ¿indica cómo se seleccionará?",
                            subTexto:"¿Por qué seleccionaste este tipo de muestra?  ",
                            respuesta: ""
                        },

                    ]
                },
                {
                    subSeccion:"Instrumentos",
                    titulo: [
                        {
                            texto:"A partir de lo anteriormente determinado, “prediseña” tus instrumentos de acopio de información"
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p175",
                            isBoolean: false,
                            texto:"Instrumentos",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p176",
                            isBoolean: true,
                            texto:"De acuerdo con la disciplina de estudio, ¿son adecuados para el tipo de información necesaria para lograr el objetivo?",
                            subTexto:"¿En qué te basaste para estar seguro de esto?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p177",
                            isBoolean: true,
                            texto:"¿Cubren todo el proceso de investigación anteriormente propuesto?",
                            subTexto:"¿Qué etapas abarca? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p178",
                            isBoolean: true,
                            texto:"¿Toman en cuenta a la población o muestra por atender y su número?",
                            subTexto:"¿Cuál es la población, o muestra, por estudiar? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p179",
                            isBoolean: true,
                            texto:"¿Toman en cuenta a la población o muestra por atender y su número?",
                            subTexto:"¿Cuál es la población, o muestra, por estudiar? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p180",
                            isBoolean: true,
                            texto:"¿Respetan las características técnicas especificadas?",
                            subTexto:"¿Con qué fuentes especializadas respaldaste estas características?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p181",
                            isBoolean: true,
                            texto:"¿Se han desarrollado con buena redacción, ortografía y presentación?",
                            subTexto:"¿Cómo te aseguraste de su corrección? ",
                            respuesta: ""
                        },
                    ]

                },
                {
                    subSeccion:"Técnicas",
                    titulo: [
                        {
                            texto:"Ahora, sabiendo qué instrumentos necesitas para realizar el acopio de información para tu investigación, consulta la bibliografía especializada (metodológica en general o especializada de la disciplina de estudio en particular) y describe la técnica por seguir para la adecuada aplicación de cada uno de estos. Incluye la referencia de la fuente que avala la técnica descrita"
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p182",
                            isBoolean: false,
                            texto:"Técnica para aplicar los instrumentos diseñados",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p183",
                            isBoolean: true,
                            texto:"¿Incluye el detalle de los pasos que se seguirán para recopilar la información?",
                            subTexto:"¿Qué elementos incluye esta técnica?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p184",
                            isBoolean: true,
                            texto:"¿Considera la disciplina de estudio relacionada con el Problema de investigación?",
                            subTexto:"¿Qué aspectos técnicos especializados incluye? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p185",
                            isBoolean: true,
                            texto:"•	¿Prevé las condiciones necesarias para aplicar los instrumentos, tales como materiales, permisos, acondicionamiento de instalaciones, etcétera?",
                            subTexto:"¿Qué previsiones deberás tomar? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p186",
                            isBoolean: true,
                            texto:"¿Incluye la referencia de la fuente especializada con que se respalda la técnica propuesta?",
                            subTexto:"¿Qué fuente metodológica has utilizado? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p187",
                            isBoolean: true,
                            texto:"•	¿Se respeta el formato APA en las referencias presentadas?",
                            subTexto:"¿Cómo te aseguraste de esto?",
                            respuesta: ""
                        },
                    ]
                },
                {
                    subSeccion:"Tamaño de la muestra",
                    titulo: [
                        {
                            texto:"A partir del diseño de los instrumentos, de su técnica de aplicación y de la definición de los participantes, indica cómo se determinará el tamaño de la muestra: fórmula, teorema de tendencia central… o si se empleará el número de participantes especificados por la técnica especializada de la disciplina de estudio; asimismo, si la investigación será cuantitativa, indica si la muestra será probabilística o no probabilística. Justifica por qué se ha decidido trabajar con este tipo y tamaño de muestra. Incluye la referencia de la fuente que lo avala"
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p188",
                            isBoolean: false,
                            texto:"Tamaño de la muestra",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p189",
                            isBoolean: true,
                            texto:"•	¿Es suficiente para el tipo de estudio por realizar?",
                            subTexto:"¿Cómo justificas esta decisión? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p190",
                            isBoolean: true,
                            texto:"¿Es suficiente para el tipo de estudio por realizar?",
                            subTexto:"¿Cómo justificas esta decisión? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p191",
                            isBoolean: true,
                            texto:"¿Es accesible para el investigador?",
                            subTexto:"¿Cómo te has asegurado de no tener problemas de acceso?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p192",
                            isBoolean: true,
                            texto:"¿Considera si se requiere información de más de un grupo de estudio?",
                            subTexto:"¿Cómo determinaste cuántos grupos se requieren para este estudio?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p193",
                            isBoolean: true,
                            texto:"•	En caso de requerir más de un grupo, ¿has tomado las previsiones de acceso necesarias?",
                            subTexto:"¿Qué previsiones tomarás? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p194",
                            isBoolean: true,
                            texto:"•	¿Incluye el respaldo en una fuente metodológica?",
                            subTexto:"En qué fuente metodológica te apoyaste? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p195",
                            isBoolean: true,
                            texto:"¿La referencia respeta el formato APA?",
                            subTexto:"¿Cómo te aseguraste de esto?",
                            respuesta: ""
                        },

                    ]
                },
                {
                    subSeccion:"Criterios",
                    titulo: [
                        {
                            texto:"El siguiente paso es determinar las características que deben cubrir los participantes en el estudio, esto es, los Criterios de Inclusión, Exclusión y Eliminación."
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p196",
                            isBoolean: false,
                            texto:"Criterios de inclusión",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p197",
                            isBoolean: false,
                            texto:"Criterios de exclusión",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p198",
                            isBoolean: false,
                            texto:"Criterios de eliminación",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p199",
                            isBoolean: true,
                            texto:"¿Corresponden a sujetos partícipes del fenómeno de estudio?",
                            subTexto:"¿En qué te basaste para determinar estas características?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p200",
                            isBoolean: true,
                            texto:"¿Son adecuadas y suficientes para que los participantes aporten la información necesaria para la investigación?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p201",
                            isBoolean: true,
                            texto:"¿Los Criterios de Exclusión son los opuestos, o fuera de rango, a los señalados como de Inclusión?",
                            subTexto:"¿Cuántos Criterios de Inclusión y de Exclusión estableciste? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p202",
                            isBoolean: true,
                            texto:"¿Los criterios de eliminación son características o situaciones que pueden presentarse al momento de participar en el estudio o identificables en sus respuestas?",
                            subTexto:"¿Cómo identificaste estas posibles situaciones? ",
                            respuesta: ""
                        },

                    ]
                },
                {
                    subSeccion:"Métodos de procesamiento de información",
                    titulo: [
                        {
                            texto:"Para finalizar este apartado, revisa la bibliografía especializada y explica cómo vas a procesar la información recopilada. Toma en cuenta que los procedimientos deben corresponder con el tipo de información, con los objetivos y con el tipo de investigación por desarrollar"
                        }
                    ],
                    preguntas:[
                        {
                            idPregunta:"p203",
                            isBoolean: false,
                            texto:"Métodos de procesamiento de información",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p204",
                            isBoolean: true,
                            texto:"Los procedimientos propuestos:¿Establecen claramente qué se hará con la información?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p205",
                            isBoolean: true,
                            texto:"¿Corresponden con la investigación por desarrollar?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p206",
                            isBoolean: true,
                            texto:"¿Son los adecuados para la información recopilada?",
                            subTexto:"¿En qué te basaste para determinarlo? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p207",
                            isBoolean: true,
                            texto:"¿Contribuyen al logro de los objetivos?",
                            subTexto:"¿De qué manera? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p208",
                            isBoolean: true,
                            texto:"¿Incluyen la fuente metodológica que los respalda?",
                            subTexto:"¿Qué fuente metodológica respalda lo adecuado de los métodos?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p209",
                            isBoolean: true,
                            texto:"¿Presentan la referencia correspondiente con las características correctas y adecuadas según el formato APA?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },
                    ]
                },
            ]
        },
        {
            id: new mongoose.Types.ObjectId(),
            seccion:"Cronograma",
            contenidoSeccion:[
                {
                    subSeccion:"Cronograma de actividades",
                    titulo: [
                        {
                            texto:"De acuerdo con el Proceso de investigación descrito en el punto anterior, elabora la programación de las actividades, distribuyéndolas adecuadamente para que no solo te sirvan como guía del trabajo por desarrollar sino te aseguren la terminación de la investigación dentro del plazo disponible para esto"
                        },
                        {
                            texto:"Emplea el siguiente formato para realizar tu programación y mantener el control del avance de las actividades. Sustituye los números indicados en la fila superior por las fechas correspondientes a las semanas de que dispones para realizar tu investigación y adecua las columnas al número de semanas disponibles, indicando en la marcada como “n” la fecha límite para concluir el trabajo. Toma en cuenta que lo más conveniente es programar la culminación de tu trabajo en una fecha anterior al plazo máximo con que cuentas para entregar tu informe"
                        },
                        {
                            texto:"Incorpora en la primera columna, de manera pormenorizada, todas las actividades necesarias para concluir la investigación, considerando las subetapas o actividades secundarias requeridas para concluir las actividades principales"
                        },
                    ],
                    preguntas:[
                        {
                            idPregunta:"p210",
                            isBoolean: true,
                            texto:"¿Incluye todas las actividades necesarias para concluir la investigación?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p211",
                            isBoolean: true,
                            texto:"¿Distribuye adecuadamente los tiempos para asegurar la conclusión del proyecto dentro del plazo disponible?",
                            subTexto:"¿En qué te basaste para distribuir los tiempos? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p212",
                            isBoolean: true,
                            texto:"•	¿Considera holgura o tolerancia en los tiempos programados de manera que posibles eventualidades no pongan en riesgo su culminación en la fecha límite establecida?",
                            subTexto:"¿De cuánto tiempo es la holgura programada? ",
                            respuesta: ""
                        },
                    ],
                },
            ]
        },{
            id: new mongoose.Types.ObjectId(),
            seccion:"Bibliografía provisional",
            contenidoSeccion:[
                {
                    subSeccion:"Bibliografía provisional",
                    titulo: [
                        {
                            texto:"Elabora un listado con las referencias bibliográficas de aquellas fuentes documentales que consideres útiles para llevar a cabo tu investigación"
                        },
                        {
                            texto:"Incluye los datos completos de todas las referencias, de acuerdo con lo establecido por el formato APA. Recuerda presentar la Bibliografía provisional ordenada alfabéticamente y con sangría francesa"
                        },
                        {
                            texto:"Puedes considerar, como punto de partida, los textos empleados al definir conceptos en el Planteamiento del problema; adicionalmente, realiza una revisión tanto de libros como de revistas y páginas electrónicas especializados para conformar esta bibliografía"
                        },
                        {
                            texto:"Con respecto a las páginas electrónicas, no olvides la importancia de recurrir a bases de datos y fuentes arbitradas a fin de asegurar su confiabilidad"
                        }
                        
                    ],
                    preguntas:[
                        {
                            idPregunta:"p213",
                            isBoolean: false,
                            texto:"Bibliografía provisional",
                            subTexto:"",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p214",
                            isBoolean: true,
                            texto:"¿Es suficiente para emprender el trabajo de investigación?",
                            subTexto:"¿En qué te basas para considerarla suficiente? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p215",
                            isBoolean: true,
                            texto:"¿Aporta información pertinente y relevante con respecto al problema de investigación?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p216",
                            isBoolean: true,
                            texto:"¿Toma en cuenta a los clásicos de la disciplina relacionada con el Problema de investigación?",
                            subTexto:"¿A qué clásicos recurriste? ",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p217",
                            isBoolean: true,
                            texto:"¿Considera, dependiendo del Problema y el Objetivo de la investigación, fuentes actualizadas?",
                            subTexto:"¿A qué fuentes actualizadas recurriste?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p218",
                            isBoolean: true,
                            texto:"¿Toma en cuenta solamente fuentes confiables?",
                            subTexto:"¿Cómo seleccionaste las fuentes propuestas?",
                            respuesta: ""
                        },
                        {
                            idPregunta:"p219",
                            isBoolean: true,
                            texto:"¿Respeta el formato APA?",
                            subTexto:"¿Cómo te aseguraste de esto? ",
                            respuesta: ""
                        },

                    ],
                },
            ],

        }
    ],
    fechaCreacion: fechaActual.getDate() + "/" + (fechaActual.getMonth() +1) + "/" + fechaActual.getFullYear()


});

module.exports = ejemploProyecto;