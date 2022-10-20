function ir(){
    let usuario = document.getElementById('user').value;
    let password = document.getElementById('pass').value;

    //USUARIOS//
    let user1 = 'Alexander';
    let user2 = 'Alexis';
    let user3 = 'Dilan';
    let user4 = 'Anhyly';
    let user5 = 'Mariana';
    let user6 = 'Leidy';
    let user7 = 'Catherine';

    //CLAVES//
    let pass1 = 1238;
    let pass2 = 3213;
    let pass3 = 1122;
    let pass4 = 1111;
    let pass5 = 9911;
    let pass6 = 8794;
    let pass7 = 9823;


    if 
    (
        usuario == user1 && password == pass1 ||
        usuario == user2 && password == pass2 ||
        usuario == user3 && password == pass3 ||
        usuario == user4 && password == pass4 ||
        usuario == user5 && password == pass5 ||
        usuario == user6 && password == pass6 ||
        usuario == user7 && password == pass7
    )
    {

        alert ('Correcto');
        location.href = 'inicio.html';

    }else{
        alert ('Incorrecto');
    }
}

const creador = {
    titulo: 'autodoxeandome',
    Nombre: 'Alexander',
    Apellidos: 'Borja',
    Edad: 19,
    DNI: 71865497,
    Vivienda: '2Etp las Delicias',
    Estado: 'Solteron',
    Creencia: 'Evangelico',
    Altura: '1.73',
    Peso: '80Kg',
}

console.log(creador)