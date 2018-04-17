var juega;
var JugadaMaestra = ["02,01,00","12,11,10","22,21,20","20,10,00","21,11,01","22,12,02","22,11,00","20,21,22"]
var GanaPartida = 0;

function PintarTablero()
{
	var table =  document.getElementById('tableroJuego');
	var tablero = document.getElementById("tablero");
	var col;
	var button;
	var y = 0;
	var x = 0;
	
	if (typeof(table) != 'undefined' && table != null)
	{
  		table.parentNode.removeChild(table);
	}

	table = document.createElement("table");
	table.id = "tableroJuego";

	
	for (x; x<3;x++)
	{
		col = document.createElement("tr")
		col.id = "col" + x;

		table.appendChild(col);

		for (y; y<3; y++ )
		{

			button = document.createElement("button")
			button.id ="b" + x + "" +y;
			button.className ="botonJuego"
			button.setAttribute("onclick","turno(this)");
			row = document.createElement("td")
			row.id = "row" + y;

			row.appendChild(button);
			col.appendChild(row);

			
		}

		y= 0;

	}


	tablero.appendChild(table);
	sorteo();
}

function sorteo()
{
	var num = Math.floor((Math.random() * 2) + 1);
	
	if (num == 1)
	{
		juega = "X"
		alert("Empieza X");

	}
	else 
	{
		juega = "Y"
		alert("Empieza O");
	}
}

function turno(boton)
{

	if (juega == "X" )
	{
		var text = document.createTextNode("X");
		
	}
	else if (juega =="Y")
	{
		var text = document.createTextNode("O");
	}
	boton.appendChild(text);

	verificaJuego();
	
	if (GanaPartida == 0)
	{
		cambiaTurno();
	}
	else{
		finJuego();
	}
	
}

function finJuego()
{
	alert("Fin del Juego, ganó " + juega);
	PintarTablero();
}

function verificaJuego()
{
	var posiciones = "";
	var x= 0;
	var y=0;
	var button;
	var text;
	

	for (x; x<3;x++)
	{
		for (y; y<3; y++ )
		{
			button = document.getElementById("b" + x + "" +y);
			text = button.innerText;

			if(text == "X")
			{
				if (juega == "X")
				{
					posiciones = x+''+y +','+ posiciones;
				}
				
			}
			else if (text == "O")
			{
				if (juega == "Y")
				{

					//alert("juega O")
					posiciones = x+''+y +','+ posiciones;
				}
				
			}
		} 
		y= 0;
	}
	
	x = 0;
	
	if (posiciones.length >= 7){
		for (x; x<JugadaMaestra.length-1;x++)
		{
			var pos = "/" + posiciones.substring(0,posiciones.length-1)+"/"
			var res = pos.match(JugadaMaestra[x])
			
			if (res != null)
			{
				if (res.length > 0)
				{
					finJuego();
					return;
				}
				else
				{
					alert("no ha ganado")
				
				}
			}
		}
	}
}

function cambiaTurno()
{
	if (juega == "Y")
	{
		juega ="X"
	}
	else
	{
		juega = "Y"
	}
}




