function validar()
{
	if (Number.isNaN(numero()))
	{
		rellenar("Error");
		return false;
	}
	return true;
}

function numero()
{
	return Number(document.getElementById("pantalla").value);
}

function vaciar()
{
	rellenar("");
}
function rellenar(v)
{
	document.getElementById("pantalla").value = v;
}
//funcion de informacion
function rellenar_info()
{
	var n = numero();
	validar(n);
	if (Number.isNaN(n))
	{
		document.getElementById("info").innerHTML = "error 404 number not found";
	}
	else
	{
		if(n < 100)
			document.getElementById("info").innerHTML = "Info: El resultado es menor que 100";
		else if (n > 200)
			document.getElementById("info").innerHTML = "Info: El resultado es superior a 200";
		else
			document.getElementById("info").innerHTML = "Info: El resultado está entre 100 y 200";
	}	
}

//operaciones unitarias
function sq()
{
	if (!validar())
		return;
	var num = numero();
	rellenar(num * num);
	rellenar_info();
}
function fact()
{
	if (!validar())
		return;
	var i = numero();
	var res = 1;

	for(var x = 2; x <= i; x++)
		res *= x;
	rellenar(res);
	rellenar_info();
}
//operaciones binarias
var acumulador = 0;
var operador = "";
function add()
{	
	if (!validar())
		return;
	acumula(numero());
	operador = "+";
	vaciar();
	rellenar_info();
}
function sub()
{
	if (!validar())
		return;
	acumula(numero());
	operador = "-";
	vaciar();
	rellenar_info();
}
function div()
{
	acumula(numero());
	operador = "/";
	vaciar();
	rellenar_info();
}
function mult()
{
	if (!validar())
		return;
	acumula(numero());
	operador = "*";
	vaciar();
	rellenar_info();
}
function eq()
{
	if (!validar())
		return;
	acumula(numero());
	operador = "";

	rellenar(acumulador);
	rellenar_info();
}
function acumula(n)
{
	switch(operador)
	{
		case "":
			acumulador = n;
			break;
		case "+":
			acumulador += n;
			break;
		case "-":
			acumulador -= n;
			break;
		case "*":
			acumulador *= n;
			break;
		case "/":
			acumulador /= n;
			break;
	}
	rellenar_info();
}