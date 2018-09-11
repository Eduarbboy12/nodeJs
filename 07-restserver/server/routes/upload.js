const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const Usuario = require('../models/usuario');
const fs = require('fs');
const path = require('path');

app.use(fileUpload());

app.put('/upload/:tipo/:id', function(req, res) {

    let tipo = req.params.tipo;
    let id = req.params.id;

    if (!req.files) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'No se ha seleccionado ningun archivo'
            }
        });
    }

    let tiposValidos = ['productos', 'usuarios']
    if (tiposValidos.indexOf(tipo) < 0) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'Tipos validos son: ' + tiposValidos.join(', ')
            }
        });
    }

    let archivo = req.files.archivo;

    let nombreCortado = archivo.name.split('.');
    let extension = nombreCortado[nombreCortado.length - 1]

    //Extensiones permitidas
    let extensionesValidad = ['JPG', 'PNG', 'gif', 'jpeg'];

    if (extensionesValidad.indexOf(extension) < 0) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'Extensiones permitidas son: ' + extensionesValidad.join(', '),
                ext: extension
            }
        });
    }

    //cambiar nombre archivo
    let nombreArchivo = `${ id }-${ new Date().getMilliseconds() }.${ extension }`;

    archivo.mv(`uploads/${ tipo }/${nombreArchivo}`, (err) => {
        if (err) {
            return res.status(500)
                .json({
                    ok: false,
                    err
                });
        }

        imagenUsuario(id, res, nombreArchivo);
    });

});

function imagenUsuario(id, res, nombreArchivo) {
    Usuario.findById(id, (err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: 'Usuario no existe'
            });
        }

        let pathImagen = path.resolve(__dirname, `../../uploads/usuarios/${ usuarioDB.img }`);

        if (fs.existsSync(pathImagen)) {
            fs.unlinkSync(pathImagen);
        }



        usuarioDB.img = nombreArchivo;
        usuarioDB.save((err, usuaurioGuardado) => {
            res.json({
                ok: true,
                usuario: usuaurioGuardado,
                img: nombreArchivo
            });
        });

    });
}

module.exports = app;