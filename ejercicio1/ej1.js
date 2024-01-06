/*Definición de variables */
const correctUser = "user123";
const correctPassword = "passwd123";
let balance = 2000;
let decision = 0;
let datos = [];

/*Comienza el programa */
login();

/*Funciones realizadas */
function login() {
  let user = prompt("Ingrese el usuario:");
  let passwd = prompt("Ingrese la contraseña:");
  if (user === correctUser && passwd === correctPassword) {
    menu();
  } else {
    window.alert("Datos erróneos, te quedan 2 intentos");
    user = prompt("Ingrese el usuario:");
    passwd = prompt("Ingrese la contraseña:");
    if (user === correctUser && passwd === correctPassword) {
      menu();
    } else {
      window.alert("Datos erróneos, te queda 1 intento");
      user = prompt("Ingrese el usuario:");
      passwd = prompt("Ingrese la contraseña:");
      if (user === correctUser && passwd === correctPassword) {
        menu();
      } else {
        window.alert("Cuenta bloqueada");
      }
    }
  }
}

function deposit() {
  let deposit = Number(prompt("Cantidad a ingresar:"));
  datos.push(`Ingreso: +${deposit}€`);
  balance += deposit;
}
function view() {
  alert(`Últimos movimientos: \n`);

  const iterator = datos.keys();
  for (const key of iterator) {
    console.log(`${key + 1}: ${datos[key]}`);
  }
  console.log("Balance final: " + balance);
}
function withdraw() {
  let retirar = Number(prompt("Cuanto desea retirar: "));
  if (balance >= retirar) {
    balance -= retirar;
    datos.push(`Retiro: -${retirar}€`);
  } else {
    alert("Saldo insuficiente");
  }
}
function transferMoney() {
  let transfer = Number(prompt("Cantidad a transferir: "));
  if (balance >= transfer) {
    balance -= transfer;
    datos.push(`Transferencia: -${transfer}€`);
  } else {
    alert("Saldo insuficiente");
  }
}
function menu() {
  do {
    decision = Number(
      prompt(`Que desea hacer: \n
  1. Realizar deposito \n
  2. Retirar dinero \n
  3. Mostrar balance \n
  4. Transferir dinero \n
  5. Salir`)
    );

    switch (decision) {
      case 1:
        deposit();
        break;
      case 2:
        withdraw();
        break;
      case 3:
        view();
        break;
      case 4:
        transferMoney();
        break;
      case 5:
        alert("Hasta luego");
        break;
    }
  } while (decision != 5);
}
