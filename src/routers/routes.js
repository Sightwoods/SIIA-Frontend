export const routes = {
    "consultas": {
        "id": 1,
        "name": "Consultas",
        "path": "/consultas",
        "routes": [
            {
                "id": 1000,
                "name": "Estudiante",
                "sub_path": "/estudiante",
                "paths": [
                    {
                        "id": 10000,
                        "name": "Datos generales",
                        "path": "/datos-generales"
                    },
                    {
                        "id": 10001,
                        "name": "Credencial digital de estudios",
                        "path": "/credencial"
                    },
                    {
                        "id": 10002,
                        "name": "Carga académica",
                        "path": "/carga-academica"
                    },
                    {
                        "id": 10003,
                        "name": "Horario de clases",
                        "path": "/horario-clases"
                    },
                    {
                        "id": 10004,
                        "name": "Historial académico",
                        "path": "/historial-academico"
                    }
                ]
            },
            {
                "id": 1001,
                "name": "Movimientos",
                "sub_path": "/movimientos",
                "paths": [
                    {
                        "id": 10010,
                        "name": "Imprimir solicitud de examen",
                        "path": "/impresion-solicitud-examen"
                    },
                    {
                        "id": 10011,
                        "name": "Correción de calificación",
                        "path": "/correccion-calificacion"
                    },
                    {
                        "id": 10013,
                        "name": "Constancia de kardex",
                        "path": "/kardex"
                    }
                ]
            }
        ]
    },
    "tramites": {
        "id": 2,
        "name": "Tramites",
        "path": "/tramites",
        "routes": [
            {
                "id": 2000,
                "name": "Movimientos",
                "sub_path": "/movimientos",
                "paths": [
                    {
                        "id": 20000,
                        "name": "Generar formato de pago",
                        "path": "/generar-pago"
                    },
                    {
                        "id": 20001,
                        "name": "Estado de tramites",
                        "path": "/estado-tramites"
                    },
                    {
                        "id": 20002,
                        "name": "Pago en línea",
                        "path": "/pagar"
                    }
                ]
            },
            {
                "id": 2001,
                "name": "Solicitudes",
                "sub_path": "/solicitud",
                "paths": [
                    {
                        "id": 20010,
                        "name": "Solicitud de certificado",
                        "path": "/certificado"
                    },
                    {
                        "id": 20011,
                        "name": "Solicitud de título",
                        "path": "/titulo"
                    },
                    {
                        "id": 20013,
                        "name": "Solicitud de cambio de unidad académica",
                        "path": "/cambio-unidad"
                    }
                ]
            }
        ]
    },
    "reinscripcion": {
        "id": 3,
        "name": "Reinscripciones",
        "path": "/reinscripcion",
        "routes": [
            {
                "id": 3000,
                "paths": [
                    {
                        "id": 30001,
                        "name": "Imprimir formatos",
                        "path": "/formatos"
                    },
                    {
                        "id": 30002,
                        "name": "Carta autorización",
                        "path": "/carta-autorizacion"
                    },
                    {
                        "id": 30003,
                        "name": "Datos de contacto",
                        "path": "/contacto"
                    },
                    {
                        "id": 30004,
                        "name": "Actualizar fotografía",
                        "path": "/fotografia"
                    },
                    {
                        "id": 30005,
                        "name": "Certificado médico",
                        "path": "/certificado-medico"
                    }
                ]
            }
        ]
    },
    "examenes": {
        "id": 4,
        "name": "Exámenes",
        "path": "/examenes",
        "routes": [
            {
                "id": 4000,
                "paths": [
                    {
                        "id": 40000,
                        "name": "Solicitar examen",
                        "path": "/solicitud"
                    },
                    {
                        "id": 40001,
                        "name": "Imprimir hoja de pago",
                        "path": "/hoja-pago"
                    },
                    {
                        "id": 40002,
                        "name": "Imprimir materias solicitadas",
                        "path": "/materias-solicitadas"
                    },
                    {
                        "id": 40003,
                        "name": "Pagos",
                        "path": "/pagos"
                    }
                ]
            }
        ]
    },
    "idiomas": {
        "id": 5,
        "name": "Idiomas",
        "path": "/idiomas",
        "routes": [
            {
                "id": 5000,
                "name": "Reinscripcion",
                "sub_path": "/reinscripcion",
                "paths": [
                    {
                        "id": 50000,
                        "name": "Solicitar hoja de pago de reinscripción",
                        "path": "/hoja-pago"
                    },
                    {
                        "id": 50001,
                        "name": "Asignar grupo y aula de clases",
                        "path": "/asignacion"
                    },
                    {
                        "id": 50002,
                        "name": "Estado de tu reinscripción",
                        "path": "/estado"
                    }
                ]
            },
            {
                "id": 5001,
                "name": "Documentos",
                "sub_path": "/documento",
                "paths": [
                    {
                        "id": 50010,
                        "name": "Imprimir hoja de pago",
                        "path": "/hoja-pago"
                    },
                    {
                        "id": 50011,
                        "name": "Imprimir de constancia de reinscripción",
                        "path": "/constancia"
                    },
                    {
                        "id": 50013,
                        "name": "Imprimir constancia de pago de reinscripción",
                        "path": "/constancia-pago"
                    }
                ]
            }
        ]
    },
    "encuestas": {
        "id": 6,
        "name": "Encuestas",
        "path": "/encuestas",
        "routes": [
            {
                "id": 6000,
                "paths": [
                    {
                        "id": 60000,
                        "name": "Evaluación docente",
                        "path": "/docente"
                    },
                    {
                        "id": 60001,
                        "name": "EDAOM",
                        "path": "/edaom"
                    }
                ]
            }
        ]
    }
}