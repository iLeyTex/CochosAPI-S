const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const personas = [
    {
        "nombre": "Gustavo Fernando",
        "apellido": "Leyte Texis",
        "edad": 23,
        "matricula": "202026028",
        "red_social": "https://www.facebook.com/gustavo.leyte.7",
        "foto": "https://scontent.fmex34-1.fna.fbcdn.net/v/t39.30808-6/311353961_1316738749135553_8077978431690959388_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=OrUZphzTyHIAX8-E5_D&_nc_ht=scontent.fmex34-1.fna&oh=00_AfCxgVCs3zUt-mHEjLtqfZbMkMvvPNbRGYylVudS5NqBTw&oe=65A40E91"
    },
    {
        "nombre": "Dayana Jazmin",
        "apellido": "Laureano Mendoza",
        "edad": 27,
        "matricula": "202026027",
        "red_social": "https://www.facebook.com/yazdita",
        "foto": "https://scontent.fmex34-1.fna.fbcdn.net/v/t39.30808-6/361638445_7016603051686334_6690183734623376759_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=bIujqmxud2oAX_qx5hC&_nc_ht=scontent.fmex34-1.fna&oh=00_AfC68kalWPGqhkspVLsrW1g3zvGovMFdKiFQC3IRc_XtBQ&oe=65A2737F"
    },
    {
        "nombre": "Jesus",
        "apellido": "Apale Castillo",
        "edad": 22,
        "matricula": "202026025",
        "red_social": "https://www.facebook.com/jesus.ac.7773",
        "foto": "https://gcdn.lanetaneta.com/wp-content/uploads/2019/08/Harry-Potter-10-hechos-que-no-sab%C3%ADas-sobre-Dobby-The.jpg"
    },
    {
        "nombre": "Ernesto",
        "apellido": "Molina Benitez",
        "edad": 22,
        "matricula": "202026030",
        "red_social": "https://www.facebook.com/ernesto.molinabenitez",
        "foto": "https://scontent.fmex34-1.fna.fbcdn.net/v/t39.30808-6/400101823_1530546887694608_1104559996911248528_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=tSsk1jxIYS4AX93hHap&_nc_oc=AQknGfJ7HaRvzjYbJ9SgpfKzzeIhXGSl_7LwC--S5eQ7hALtq4AfiJgpiU5lxK_QG2utVawPCd48S7Lz6GEF5x43&_nc_ht=scontent.fmex34-1.fna&oh=00_AfBgt9z_cbWR1l-3TG1weJHJc5z5jUqnbcPgVVQ87XNl6g&oe=65A346AE"
    },
    {
        "nombre": "Mauricio Ivan",
        "apellido": "De la Rosa Villa",
        "edad": 23,
        "matricula": "201925011",
        "red_social": "https://www.facebook.com/profile.php?id=100009725252412",
        "foto": "https://scontent.fmex34-1.fna.fbcdn.net/v/t31.18172-8/17637033_439684963032342_7887828596986031215_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=be3454&_nc_ohc=jhgzsJFshvcAX8S6pcZ&_nc_ht=scontent.fmex34-1.fna&oh=00_AfAswrupfyJ8bDj417icXSczLUEu3RsX-gLah-xxVvzySQ&oe=65C5AF85"
    },
    {
        "nombre": "Joaquin",
        "apellido": "Juzman Loera",
        "edad": 66,
        "matricula": "JGLCJNG",
        "red_social": "https://es.wikipedia.org/wiki/Joaqu%C3%ADn_Guzm%C3%A1n_Loera#Biograf%C3%ADa",
        "foto": "https://es.wikipedia.org/wiki/Joaqu%C3%ADn_Guzm%C3%A1n_Loera#/media/Archivo:Booking_photo_of_Joaquin_%E2%80%9CEl_Chapo%E2%80%9C_Guzman_(front).jpg"
    },
];

app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi API!');
});

app.get('/api/personas', (req, res) => {
    res.json(personas);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
