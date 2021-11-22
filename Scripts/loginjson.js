// almacena las ID de todos los usuarios registrados
var loggedusers = [];

// el servidor debe manejar todos los datos a continuacion
// JSON: array de usuarios que contiene todos los usuarios del sistema por ahora
// en el lado del servidor por ejemplo, esto podría ser una matriz devuelta por una tabla de base de datos MySQL
var users = [{
    id: 1,
    username: 'user',
    password: 'user',
    type: 'user'
}, {
    id: 2,
    username: 'admin',
    password: 'admin',
    type: 'admin'
}, {
    id: 3,
    username: 'trainer',
    password: 'trainer',
    type: 'trainer'
}];

//Funcion muy importante que se utilizara para la busqueda de usuario en la base de dato
/**
 * null|Object getUserByProperty ( mixed key, mixed value [ , boolean strict = false, boolean multiple = false, boolean case_insensitive = false ] )
 *
 * Obtiene un usuario por una clave de propiedad, valor y varias configuraciones.
 *
 * @param mixed key: clave propiedad a buscar.
 * @param mixed value: valor propiedad a buscar.
 * @param boolean strict (opcional) ¿Si la comparación debe de ser tipo estricto?
 * @param boolean multiple (opcional) ¿Debe devolver todos los resultados, en lugar del primero?
 * @param boolean case_insensitive (opcional) ¿Debe ignorar el uso de mayúsculas?
 *
 * @return null|Object Devuelve el objeto de usuario, o nulo, si no se encuentra.
 */
function getUserByProperty(key, value, strict, multiple, case_insensitive) {
    // array a devolver
    var result = [];

    // recorrer todos los usuarios registrados
    for (var index in users) {
        // obtener el usuario que estamos iterando
        var user = users[index];

        // verifica si el usuario tiene la propiedad especificada
        if (typeof user[key] != 'undefined') {
            // obtener el valor de la propiedad
            var compare = user[key];

            // ignorar el uso de mayusculas
            if (case_insensitive) {
                // si el valor especificado es una string
                if (typeof compare == 'string')
                    // queremos convertirlo a minúsculas
                    compare = compare.toLowerCase();

                // si el valor especificado es una string
                if (typeof value == 'string')
                    // queremos convertirlo a minúsculas
                    value = value.toLowerCase();
            }

            // si el valor especificado no está definido o los valores coinciden
            if (typeof value == 'undefined' || ((strict && compare === value) || (!strict && compare == value))) {
                // y si queremos varios resultados
                if (multiple) {
                    // el resultado se añadirá al array de resultados
                    result.push(user);
                } else {
                    // de lo contrario, lo devolvemos
                    return user;
                }
            }
        }
    }

    // devuelve el resultado o nulo si no encontró nada
    return multiple ? result : null;
}

/**
 * null|Object getUserById ( number id )
 *
 * Obtiene un usuario con el ID especificado.
 *
 * @param number id: ID del usuario a obtener.
 *
 * @return null|Object Devuelve el objeto de usuario, o nulo si no lo encuentra.
 */
function getUserById(id) {
    return getUserByProperty('id', id);
}

/**
 * boolean|Object login ( string username, string password )
 *
 * Proporciona la funcionalidad de poder iniciar sesión como usuario.
 *
 * @param string username: Nombre de usuario del usuario para iniciar sesión.
 * @param string password: Contraseña del usuario para iniciar sesión.
 *
 * @return boolean|Object Devuelve el objeto de usuario, o falso, si el inicio de sesión no fue exitoso.
 */
function login(username, password) {
    // comprueba si se han introducido el nombre de usuario y la contraseña
    if (typeof username == 'string' && typeof password == 'string' && username.length > 0 && password.length > 0) {
        // prepara una variable para almacenar el objeto de usuario, si se recibe alguno
        var loggeduser;

        // el servidor debe manejar todos estos datos
        // iterar a través de todos los usuarios en la matriz 'users' (en el lado del servidor, cambiar por la tabla de la base de datos)
        for (var index in users) {
            // tomar el valor de la propiedad
            var user = users[index];

            // comprueba si el nombre de usuario y la contraseña coinciden
            if (username === user.username && password === user.password)
                // establecer el valor de 'loggeduser' al valor de la propiedad (user)
                loggeduser = user;
        }

        // verifica si el usuario ha iniciado sesion
        if (typeof loggeduser != 'undefined') {
            // guarda la ID del usuario en la matriz 'loggedusers'
            loggedusers[loggeduser.id] = true;

            // actualiza la lista de inicios de sesión
            updatelist();

            // devuelve el objeto de usuario recibido
            return loggeduser;
        }
    }

    return false;
}

/**
 * boolean logout ( number userid )
 *
 * Proporciona la funcionalidad para poder cerrar la sesión de un usuario.
 *
 * @param number userid: ID del usuario para cerrar sesión..
 *
 * @return boolean Devuelve un booleano que representa si el cierre de sesión fue exitoso o no.
 */
function logout(userid) {
    // verifica si la ID está realmente iniciada
    if (loggedusers[userid]) {
        // matriz temporal, que estaremos llenando
        var temporary = [];

        // recorramos los usuarios que han iniciado sesion
        for (var id in loggedusers)
            // ignorar nuestro usuario para cerrar su sesion
            if (id != userid)
                // ponemos este usuario en la matriz
                temporary[id] = true;

        // reemplazamos la matriz 'loggedusers' con nuestra nueva matriz
        loggedusers = temporary;

        // actualiza la lista de usuarios que han iniciado sesion
        updatelist();

        // hemos cerrado la sesión con éxito
        return true;
    }

    // false si no hemos cerrado la sesión correctamente
    return false;
}

/**
 * boolean updatelist ( void )
 *
 * Proporciona la funcionalidad para actualizar el elemento #logged-in-list
 * con los nombres de los usuarios iniciados y los enlaces de cierre de sesión.
 *
 * @return boolean Devuelve un valor booleano que representa si la actualización fue exitosa o no.
 */
function updatelist() {
    // obtiene el elemento #logged-in-list
    var list_element = document.getElementById('logged-in-list');

    // comprueba que el elemento existe
    if (list_element) {
        // obtiene el elemento #logged-in
        var list_container_element = document.getElementById('logged-in');

        // comprobar que el elemento existe y si fuera asi cambiar su visibility
        if (list_container_element)
            // si no hay usuarios iniciados, "ocultar" el elemento, de lo contrario "mostrarlo"
            list_container_element.style.visibility = loggedusers.length === 0 ? 'hidden' : 'visible';

        // tomamos el primer nodo hijo con un bucle while
        while (list_element.firstChild)
            // elimina el primer elemento, y lo repetirá hasta que no quede ningún primer hijo nodo para list_element
            list_element.removeChild(list_element.firstChild);

        // recorremos cada usuario que ha iniciado sesión
        for (var id in loggedusers) {
            // obtener el usuario por ID
            var user = getUserById(id);

            // comprueba si realmente es un usuario
            if (user) {
                // creamos los elementos necesarios para la funcionalidad de cierre de sesión (link)
                var p = document.createElement('P');
                p.innerText = user.username;
                var a = document.createElement('A');
                a.userid = id;
                a.href = '#';
                a.innerHTML = '(logout)';

                // añadamos un onclick event listener al link
                a.addEventListener('click', function(e) {
                    e.preventDefault();

                    // ejecutemos la función de cierre de sesión para este ID de usuario
                    logout(e.target.userid);
                });

                // adjuntamos el enlace al elemento p
                p.appendChild(a);

                // agregamos el párrafo p al elemento de la lista
                list_element.appendChild(p);
            }
        }
        return true;
    }

    return false;
}

// añade un event listener onsubmit al boton
document.querySelector("button").addEventListener('click', function(e) {
    e.preventDefault();

    // encuentra inputs de nombre de usuario y contraseña
    var username_element = document.getElementById("Uname");
    var password_element = document.getElementById("Pass");

    // verifica si estos elementos devuelven cosas correctas
    if (username_element && password_element) {
        // obtiene los valores de nombre de usuario y contraseña
        username = username_element.value;
        password = password_element.value;

        // ejecuta la función 'login' con el nombre de usuario y la contraseña del cliente
        var user = login(username, password);

        // verifica si el inicio de sesión fue exitoso
        if (user !== false) {
            // restablece el campo de entrada del nombre de usuario
            username_element.value = '';

            // restablece el campo de entrada de contraseña
            password_element.value = '';

            // envia un mensaje al cliente de que el inicio de sesión fue exitoso
            alert('Ha iniciado sesion como ' + user.username + '.');
        } else {
            // en caso contrario solo restablece el campo de entrada de contraseña
            password_element.value = '';

            // envia un mensaje al cliente de que el inicio de sesión no fue exitoso
            alert('Usuario o contrasena invalido.');
        }
    }
});