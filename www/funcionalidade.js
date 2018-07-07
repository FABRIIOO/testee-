
//função para conversão de temperatura
function calcular_temperatura(){

	var temp1 = document.getElementById('temperatura1').value;
	var temp2 = document.getElementById('temperatura2').value;
    var texto = Number(document.getElementById('entrada').value);
    var calculo;

    //operação de validação dos campos
    if(temp1 == '' || temp2=='' || texto == ''){
    	res = ("Preencha os campos!");
    }
    //celsius
	if(temp1 == 'c' && temp2 == 'k'){//celsius for kelvin
		 calculo = texto + 273.15;
		res = ("O resultado de "+texto+" Celsius para Kelvin é "+calculo);

	}
	if(temp1 == 'c' && temp2 == 'f'){//celsius para fahrenheit
		 calculo = (texto*1.8)+32;
		res = ("O resultado de "+texto+" Celsius para Fahrenheit é "+calculo);
	}
	if(temp1 == 'c' && temp2 == 'r'){//celsius para rankine
   		 calculo = (texto+273.15)*1.8;
   		res = ("O resultado de "+texto+" Celsius para Rankine é "+calculo);
	}

	//kelvin
	if(temp1 == 'k' && temp2 == 'c'){//kelvin for celsius
		 calculo = (texto-273.15);
		 res = ("O resultado de "+texto+" Kelvin para Celsius é "+calculo);
	}
	if(temp1 == 'k' && temp2 == 'f'){//kelvin for fahrenheit
		 calculo = (texto*1.8)-459.67;
		 res = ("O resultado de "+texto+" Kelvin para Fahrenheit é "+calculo);
	}
	if(temp1 == 'k' && temp2 == 'r'){//kelvin for rankine
		 calculo = (texto*1.8);
		 res = ("O resultado de "+texto+" Kelvin para Rankine é "+calculo);
	}

	//fahrenheit
	if(temp1 == 'f' && temp2 == 'c'){//fahrenheit for celsius
		 calculo = (texto-32)/1.8;
		 res = ("O resultado de "+texto+" Fahrenheit para Celsius é "+calculo);
	}
	if(temp1 == 'f' && temp2=='k'){//fahrenheit for kelvin
		 calculo = (texto+459.67)/1.8;
		 res = ("O resultado de "+texto+" Fahrenheit para Kelvin é "+calculo);
	}
	if(temp1 == 'f' && temp2 == 'r'){//fahrenheit for rankine
		calculo = (texto+459.67);
		res = ("O resultado de "+texto+" Fahrenheit para Rankine é "+calculo);
	}

	//Rankine
	if(temp1 == 'r' && temp2=='c'){//Rankine for celsius
		calculo = (texto-32-459.67)/1.8;
		res = ("O resultado de "+texto+" Rankine para Celsius é "+calculo);
	}
	if(temp1 == 'r' && temp2=='k'){//Rankine for kelvin
		calculo = (texto/1.8);
		res = ("O resultado de "+texto+" Rankine para Kelvin é "+calculo);
	}
	if(temp1 == 'r' && temp2 == 'f'){//Rankine for fahrenheit
		calculo = (texto-459.67);
		res = ("O resultado de "+texto+" Rankine para Fahrenheit é "+calculo);
	}

	//escolhas == iguais de unidade
	if(temp1 == temp2){
		res = "Provavelmente você digitou duas unidades iguais ";
	}
	document.getElementById('resultado_calculo').innerHTML = '<div class="uk-alert-primary" uk-alert><a class="uk-alert-close" uk-close></a><p>'+res+'</p></div>';

}

//////////////////////////////funcao para a conversao de unidades de pressão/////////////////////////////////////
function calcula_pressao(){
	var pres1 = document.getElementById('pressao1').value;
	var pres2 = document.getElementById('pressao2').value;
	var entrada = Number(document.getElementById('entrada_pressao').value);
	var calculo;
	var res;
	if(entrada == ''){
	res = 'Preencha os campos!';
	}

	//linha de conversão da linha pascal
	if(pres1 == 'pa' && pres2 == 'kpa'){ //de pascal para kpa
		 calculo = (entrada*0.001)/1;
		 res = "O resultado de "+entrada+" Pa para Kpa é "+calculo+" Kpa";
	}

	if(pres1 == 'pa' && pres2 == 'mca'){ //de pascal para mca
		calculo = (entrada*(1.01972*0.0001))/1;
		 res = "O resultado de "+entrada+" Pa para mca é "+calculo+" mca";
	}

	if(pres1 == 'pa' && pres2 == 'mmca'){ //de pascal para mmca
		calculo = (entrada*0.101972)/1;
		 res = "O resultado de "+entrada+" Pa para mmca é "+calculo+" mmca";
	}

	if(pres1 == 'pa' && pres2 == 'inca'){ // de pascal para Inca
		calculo = (entrada*(4.01463*0.001))/1;
		 res = "O resultado de "+entrada+" Pa para inca é "+calculo+" inca";
	}

	if(pres1 == 'pa' && pres2 == 'bar'){ //de pascal para Bar
		calculo = (entrada*0.00001)/1;
		res = "O resultado de "+entrada+" Pa para Bar é "+calculo+" Bar";
	}

	if(pres1 == 'pa' && pres2 == 'mmhg'){ //de pascal para mmhg
		calculo = (entrada*(7.50063*0.001))/1;
		res = "O resultado de "+entrada+" Pa para mmHg é "+calculo+" mmHg";
	}

	if(pres1 == 'pa' && pres2 == 'inhg'){ //de pascal para inhg
		calculo = (entrada*(2.953*0.0001))/1;
		res = "O resultado de "+entrada+" Pa para InHg é "+calculo+" InHg";
	}

	if(pres1 == 'pa' && pres2 == 'atm'){ //de pascal para atm
		calculo = (entrada*(9.86923*0.000001))/1;
		res = "O resultado de "+entrada+" Pa para Atm é "+calculo+" Atm";
	}

	if(pres1 == 'pa' && pres2 == 'psi'){ // de pascal para psi
		calculo = (entrada*(1.45038*0.0001))/1;
		res = "O resultado de "+entrada+" Pa para psi é "+calculo+" psi";
	}

	if(pres1 == 'pa' && pres2 == 'kgf'){ //de pascal para kgf/cm^2
		calculo = (entrada*(1.01972*0.00001))/1;
		res = "O resultado de "+entrada+" Pa para Kgf/cm^2 é "+calculo+" Kgf/cm^2";
	}

	if(pres1 == 'pa' && pres2 == 'pa'){ //pascal para pascal
		res = "O resultado de "+entrada+" Pa para pa é "+entrada+" pa";
	}

	//linha de conversao de kpa
	function formatarValor(valor) {
  	  return valor.toLocaleString('pt-BR');
    }
	if(pres1 == 'kpa' && pres2 == 'pa'){ //de kpa para pascal
		calculo = (entrada*1000)/1;
		res = "O resultado de "+entrada+" Kpa para pa é "+formatarValor(calculo)+" pa";
	}

	if(pres1 == 'kpa' && pres2 == 'mca'){ //de kpa para mca
		calculo = (entrada*0.101972)/1;
		res = "O resultado de "+entrada+" Kpa para mca é "+calculo+" mca";
	}

	if(pres1 == 'kpa' && pres2 == 'mmca'){ //de kpa para mmca
		calculo = (entrada*101.972)/1;
		res = "O resultado de "+entrada+" Kpa para mmca é "+calculo+" mmca";
	}

	if(pres1 == 'kpa' && pres2 == 'inca'){ //de kpa para inca
		calculo = (entrada*4.01864)/1;
		res = "O resultado de "+entrada+" Kpa para inca é "+calculo+" inca";
	}

	if(pres1 == 'kpa' && pres2 == 'bar'){ //de kpa para bar
		calculo = (entrada*0.01)/1;
		res = "O resultado de "+entrada+" Kpa para Bar é "+calculo+" Bar";
	}

	if(pres1 == 'kpa' && pres2 == 'mmhg'){ //de kpa para mmhg
		calculo = (entrada*7.50063)/1;
		res = "O resultado de "+entrada+" Kpa para mmHg é "+calculo+" mmHg";
	}

	if(pres1 == 'kpa' && pres2 == 'inhg'){ // de kpa para inHg
		calculo = (entrada*0.29529)/1;
		res = "O resultado de "+entrada+" Kpa para InHg é "+calculo+" InHg";
	}

	if(pres1 == 'kpa' && pres2 == 'atm'){ //de kpa pata atm
		calculo = (entrada*(9.86925*0.001))/1;
		res = "O resultado de "+entrada+" Kpa para Atm é "+calculo+" Atm";
	}

	if(pres1 == 'kpa' && pres2 == 'psi'){ //de kpa para psi
		calculo = (entrada*0.145038)/1;
		res = "O resultado de "+entrada+" Kpa para psi é "+calculo+" psi";
	}

	if(pres1 == 'kpa' && pres2 == 'kgf'){ // de kpa para kgf
		calculo = (entrada*0.010197)/1;
		res = "O resultado de "+entrada+" Kpa para kgf/cm<sup>2</sup> é "+calculo+" kgf/cm<sup>2</sup>";
	}

	if(pres1 == 'kpa' && pres2 == 'kpa'){
		res = "O resultado de "+entrada+" Kpa para Kpa é "+entrada+" Kpa";
	}

	//linha de conversao mca
	if(pres1 == 'mca' && pres2 == 'pa'){ //de mca para pascal
		calculo = (entrada*9806.65)/1;
		res = "O resultado de "+entrada+" mca para Pa é "+calculo+" Pa";
	}

	if(pres1 == 'mca' && pres2 == 'kpa'){ //de mca para kpa
		calculo = (entrada*9.80665);
		res = "O resultado de "+entrada+" mca para Kpa é "+calculo+" Kpa";
	}

	if(pres1 == 'mca' && pres2 == 'mmca'){ //de mca para mmmca
		calculo = (entrada*1000);
		res = "O resultado de "+entrada+" mca para mmca é "+formatarValor(calculo)+" mmca";
	}

	if(pres1 == 'mca' && pres2 == 'inca'){ //de mca para inca
		calculo = (entrada*39.37);
		res = "O resultado de "+entrada+" mca para inca é "+calculo+" inca";
	}

	if(pres1 == 'mca' && pres2 == 'bar'){ //de mca para bar
		calculo = (entrada*0.09797);
		res = "O resultado de "+entrada+" mca para Bar é "+calculo+" Bar";
	}

	if(pres1 == 'mca' && pres2 == 'mmhg'){ //de mca para mmHg
		calculo = (entrada*73.482);
		res = "O resultado de "+entrada+" mca para mmHg é "+calculo+" mmHg";
	}

	if(pres1 == 'mca' && pres2 == 'inhg'){ //de mca para inHg
		calculo = (entrada*2.8948);
		res = "O resultado de "+entrada+" mca para InHg é "+calculo+" InHg";
	}

	if(pres1 == 'mca' && pres2 == 'atm'){ //de mca para atm
		calculo = (entrada*0.09669);
		res = "O resultado de "+entrada+" mca para Atm é "+calculo+" Atm";
	}

	if(pres1 == 'mca' && pres2 == 'psi'){ //de mca para psi
		calculo = (entrada*1.42247);
		res = "O resultado de "+entrada+" mca para psi é "+calculo+" psi";
	}

	if(pres1 == 'mca' && pres2 == 'kgf'){ //de mca para kgf
		calculo = (entrada*(9.9898*0.01))/1;
		res = "O resultado de "+entrada+" mca para kgf/cm<sup>2</sup> é "+calculo+" kgf/cm<sup>2</sup>";
	}

	if(pres1 == 'mca' && pres2 == 'mca'){
		res = "O resultado de "+entrada+" mca para mca é "+entrada+" mca";
	}

	//linha de conversao mmca
	if(pres1 == 'mmca' && pres2 == 'pa'){ //de mmca para pascal
		calculo = (entrada*9.80665);
		res = "O resultado de "+entrada+" mmca para Pa é "+calculo+" Pa";
	}

	if(pres1 == 'mmca' && pres2 == 'kpa'){ //de mmca para kpa
		calculo = (entrada*(9.8066*0.001));
		res = "O resultado de "+entrada+" mmca para Kpa é "+calculo+" Kpa";
	}

	if(pres1 == 'mmca' && pres2 == 'mca'){ //de mmca para mca
		calculo = (entrada*0.001);
		res = "O resultado de "+entrada+" mmca para mca é "+calculo+" mca";
	}

	if(pres1 == 'mmca' && pres2 == 'inca'){ //de mmca para inca
		calculo = (entrada*(39.37*0.001));
		res = "O resultado de "+entrada+" mmca para inca é "+calculo+" inca";
	}

	if(pres1 == 'mmca' && pres2 == 'bar'){ //de mmca para bar
		calculo = (entrada*(9.797*0.00001));
		res = "O resultado de "+entrada+" mmca para Bar é "+calculo+" Bar";
	}

	if(pres1 == 'mmca' && pres2 == 'mmhg'){ //de  mmca para mmHg
		calculo = (entrada*0.073482);
		res = "O resultado de "+entrada+" mmca para mmHg é "+calculo+" mmHg";
	}

	if(pres1 == 'mmca' && pres2 == 'inhg'){ //de mmca para inHg
		calculo = (entrada*(2.895*0.001));
		res = "O resultado de "+entrada+" mmca para InHg é "+calculo+" InHg";
	}

	if(pres1 == 'mmca' && pres2 == 'atm'){ //de mmca para atm
		calculo = (entrada*(9.67*0.00001));
		res = "O resultado de "+entrada+" mmca para Atm é "+calculo+" Atm";
	}

	if(pres1 == 'mmca' && pres2 == 'psi'){ //de mmca para psi
		calculo = (entrada*(1.42247*0.001));
		res = "O resultado de "+entrada+" mmca para psi é "+calculo+" psi";
	}

	if(pres1 == 'mmca' && pres2 == 'kgf'){ //de mmca para kgf
		calculo = (entrada*(9.9898*0.00001));
		res = "O resultado de "+entrada+" mmca para kgf/cm<sup>2</sup> é "+calculo+" kgf/cm<sup>2</sup>";
	}

	if(pres1 == 'mmca' && pres2 == 'mmca'){
		res = "O resultado de "+entrada+" mmca para mmca é "+entrada+" mmca";
	}

	//linha de conversao de inca
	if(pres1 == 'inca' && pres2 == 'pa'){ //de Inca para pascal
		calculo = (entrada*249.089);
		res = "O resultado de "+entrada+" Inca para Pa é "+calculo+" Pa";
	}

	if(pres1 == 'inca' && pres2 == 'kpa'){ //de Inca para kpa
		calculo = (entrada*0.24884);
		res = "O resultado de "+entrada+" Inca para Kpa é "+calculo+" Kpa";
	}

	if(pres1 == 'inca' && pres2 == 'mca'){ //de Inca para mca
		calculo = (entrada*0.0254);
		res = "O resultado de "+entrada+" Inca para mca é "+calculo+" mca";
	}

	if(pres1 == 'inca' && pres2 == 'mmca'){ //de Inca para mmca
		calculo = (entrada*25.4);
		res = "O resultado de "+entrada+" Inca para mmca é "+calculo+" mmca";
	}

	if(pres1 == 'inca' && pres2 == 'bar'){ //de inca para bar
	    calculo = (entrada*0.002488);
		res = "O resultado de "+entrada+" Inca para Bar é "+calculo+" Bar";
	}

	if(pres1 == 'inca' && pres2 == 'mmhg'){ //de inca para mmhg
		calculo = (entrada*1.86645);
		res = "O resultado de "+entrada+" Inca para mmHg é "+calculo+" mmHg";
	}

	if(pres1 == 'inca' && pres2 == 'inhg'){ //de inca para inHg
		calculo = (entrada*0.07348);
		res = "O resultado de "+entrada+" Inca para InHg é "+calculo+" InHg";
	}

	if(pres1 == 'inca' && pres2 == 'atm'){ //de inca para Atm
	    calculo = (entrada*0.0024558);
		res = "O resultado de "+entrada+" Inca para Atm é "+calculo+" Atm";
	}

	if(pres1 == 'inca' && pres2 == 'psi'){ //de inca para psi
		calculo = (entrada*0.036091);
		res = "O resultado de "+entrada+" Inca para Psi é "+calculo+" Psi";
	}

	if(pres1 == 'inca' && pres2 == 'kgf'){ //de inca para kgf
		calculo = (entrada*(9.9898*0.00001));
		res = "O resultado de "+entrada+" Inca para kgf/cm<sup>2</sup> é "+calculo+" kgf/cm<sup>2</sup>";
	}

	if(pres1 == 'inca' && pres2 == 'inca'){
		res = "O resultado de "+entrada+" Inca para Inca é "+entrada+" Inca";
	}

	//linha de conversao de Bar
	if(pres1 == 'bar' && pres2 == 'pa'){ //de bar para pascal
		calculo = (entrada*100000);
		res = "O resultado de "+entrada+" Bar para Pa é "+formatarValor(calculo)+" Pa";
	}

	if(pres1 == 'bar' && pres2 == 'kpa'){ //de bar para kpa
	   	calculo = (entrada*100);
		res = "O resultado de "+entrada+" Bar para Kpa é "+formatarValor(calculo)+" Kpa";
	}

	if(pres1 == 'bar' && pres2 == 'mca'){ //de bar para mca
	    calculo = (entrada*10.207);
		res = "O resultado de "+entrada+" Bar para mca é "+calculo+" mca";
	}

	if(pres1 == 'bar' && pres2 == 'mmca'){ //de bar para mmca
		calculo = (entrada*10207);
		res = "O resultado de "+entrada+" Bar para mmca é "+formatarValor(calculo)+" mmca";
	}

	if(pres1 == 'bar' && pres2 == 'inca'){ //de bar para inca
		calculo = (entrada*401.864);
		res = "O resultado de "+entrada+" Bar para Inca é "+calculo+" Inca";
	}

	if(pres1 == 'bar' && pres2 == 'mmhg'){ //de bar para mmHg
		calculo = (entrada*750.063);
		res = "O resultado de "+entrada+" Bar para mmHg é "+calculo+" mmHg";
	}

	if(pres1 == 'bar' && pres2 == 'inhg'){ //de bar para inHg
        calculo = (entrada*29.52998);
		res = "O resultado de "+entrada+" Bar para InHg é "+calculo+" InHg";
	}

	if(pres1 == 'bar' && pres2 == 'atm'){ //de bar para atm
		calculo = (entrada*0.98692);
		res = "O resultado de "+entrada+" Bar para Atm é "+calculo+" Atm";
	}

	if(pres1 == 'bar' && pres2 == 'psi'){ //de bar para psi
		calculo = (entrada*14.50378);
		res = "O resultado de "+entrada+" Bar para psi é "+calculo+" psi";
	}

	if(pres1 == 'bar' && pres2 == 'kgf'){ //de bar para kgf
	    calculo = (entrada*1.01971);
		res = "O resultado de "+entrada+" Bar para kgf/cm<sup>2</sup> é "+calculo+" kgf/cm<sup>2</sup>";
	}

	if(pres1 == 'bar' && pres2 == 'bar'){
		res = "O resultado de "+entrada+" Bar para Bar é "+entrada+" Bar";
	}

	//linha de conversao de mmHg
	if(pres1 == 'mmhg' && pres2 == 'pa'){ //de mmhg para Pa
		calculo = (entrada*133.322);
		res = "O resultado de "+entrada+" mmHg para Pa é "+calculo+" Pa";
	}

	if(pres1 == 'mmhg' && pres2 == 'kpa'){ //de mmhg para kpa
		calculo = (entrada*0.133322);
		res = "O resultado de "+entrada+" mmHg para Kpa é "+calculo+" Kpa";
	}

	if(pres1 == 'mmhg' && pres2 == 'mca'){ //de mmhg para mca
		calculo = (entrada*0.0136087);
		res = "O resultado de "+entrada+" mmHg para mca é "+calculo+" mca";
	}

	if(pres1 == 'mmhg' && pres2 == 'mmca'){ //de mmhg para mmca
		calculo = (entrada*13.6);
		res = "O resultado de "+entrada+" mmHg para mmca é "+calculo+" mmca";
	}

	if(pres1 == 'mmhg' && pres2 == 'inca'){ //demmhg para inca
		calculo = (entrada*0.53577);
		res = "O resultado de "+entrada+" mmHg para Inca é "+calculo+" Inca";
	}

	if(pres1 == 'mmhg' && pres2 == 'bar'){ //de mmhg para bar
		calculo = (entrada*(1.33322*0.001));
		res = "O resultado de "+entrada+" mmHg para Bar é "+calculo+" Bar";
	}

	if(pres1 == 'mmhg' && pres2 == 'inhg'){ //de mmhg para InHg
		calculo = (entrada*0.03937);
		res = "O resultado de "+entrada+" mmHg para InHg é "+calculo+" InHg";
	}

	if(pres1 == 'mmhg' && pres2 == 'atm'){ //de mmhg para atm
		calculo = (entrada*(1.31578*0.001));
		res = "O resultado de "+entrada+" mmHg para Atm é "+calculo+" Atm";
	}

	if(pres1 == 'mmhg' && pres2 == 'psi'){ //de mmhg para psi
		calculo = (entrada*0.0193367);
		res = "O resultado de "+entrada+" mmHg para Psi é "+calculo+" Psi";
	}

	if(pres1 == 'mmhg' && pres2 == 'kgf'){ //de mmhg para kgf
		calculo = (entrada*(1.3595*0.001));
		res = "O resultado de "+entrada+" mmHg para kgf/cm<sup>2</sup> é "+calculo+" kgf/cm<sup>2</sup>";
	}
	if(pres1 == 'mmhg' && pres2 == 'mmhg'){
		res = "O resultado de "+entrada+" mmHg para mmHg é "+entrada+" mmHg";
	}

	//linha de conversao de InHg
	if(pres1 == 'inhg' && pres2 == 'pa'){ //de InHg para pascal
		calculo = (entrada*3386.38);
		res = "O resultado de "+entrada+" InHg para Pa é "+calculo+" Pa";
	}

	if(pres1 == 'inhg' && pres2 == 'kpa'){ //de InHg para Kpa
		calculo = (entrada*3.38638);
		res = "O resultado de "+entrada+" InHg para Kpa é "+calculo+"Kpa";
	}

	if(pres1 == 'inhg' && pres2 == 'mca'){ //de InHg para mca
		calculo = (entrada*0.3435);
		res = "O resultado de "+entrada+" InHg para mca é "+calculo+" mca";
	}

	if(pres1 == 'inhg' && pres2 == 'mmca'){ //de InHg para mmca
		calculo = (entrada*345.45);
		res = "O resultado de "+entrada+" InHg para mmca é "+calculo+" mmca";
	}

	if(pres1 == 'inhg' && pres2 == 'inca'){ //de InHg para inca
		calculo = (entrada*13.609);
		res = "O resultado de "+entrada+" InHg para Inca é "+calculo+" Inca";
	}

	if(pres1 == 'inhg' && pres2 == 'bar'){ //de InHg para bar
		calculo = (entrada*(3.386389*0.01));
		res = "O resultado de "+entrada+" InHg para Bar é "+calculo+" Bar";
	}

	if(pres1 == 'inhg' && pres2 == 'mmhg'){ //de InHg para mmhg
		calculo = (entrada*24.4);
		res = "O resultado de "+entrada+" InHg para mmHg é "+calculo+" mmHg";
	}

	if(pres1 == 'inhg' && pres2 == 'atm'){ //de InHg para atm
		calculo = (entrada*(3.342*0.01));
		res = "O resultado de "+entrada+" InHg para Atm é "+calculo+" Atm";
	}

	if(pres1 == 'inhg' && pres2 == 'psi'){ //de InHg para psi
		calculo = (entrada*0.49115);
		res = "O resultado de "+entrada+" InHg para Psi é "+calculo+" Psi";
	}

	if(pres1 == 'inhg' && pres2 == 'kgf'){ //de InHg para kgf
		calculo = (entrada*(3.453*0.01));
			res = "O resultado de "+entrada+" InHg para kgf/cm<sup>2</sup> é "+calculo+" kgf/cm<sup>2</sup>";
	}
	if(pres1 == 'inhg' && pres2 == 'inhg'){
		res = "O resultado de "+entrada+" InHg para InHg é "+entrada+" InHg";
	}

	//linha de conversao de atm
	if(pres1 == 'atm' && pres2 == 'pa'){ //de atm para pascal
		calculo = (entrada*101325);
		res = "O resultado de "+entrada+" Atm para Pa é "+formatarValor(calculo)+" Pa";
	}

	if(pres1 == 'atm' && pres2 == 'kpa'){ //de atm para kpa
		calculo = (entrada*101.325);
		res = "O resultado de "+entrada+" Atm para Kpa é "+calculo+" Kpa";
	}

	if(pres1 == 'atm' && pres2 == 'mca'){ //de atm para mca
		calculo = (entrada*10.342);
		res = "O resultado de "+entrada+" Atm para mca é "+calculo+" mca";
	}

	if(pres1 == 'atm' && pres2 == 'mmca'){ //de atm para mmca
		calculo = (entrada*10342);
		res = "O resultado de "+entrada+" Atm para mmca é "+formatarValor(calculo)+" mmca";
	}

	if(pres1 == 'atm' && pres2 == 'inca'){ //de atm para inca
		calculo = (entrada*407.1893);
		res = "O resultado de "+entrada+" Atm para Inca é "+calculo+" Inca";
	}

	if(pres1 == 'atm' && pres2 == 'bar'){ //de atm para bar
		calculo = (entrada*1.01325);
		res = "O resultado de "+entrada+" Atm para Kpa é "+calculo+" Kpa";
	}

	if(pres1 == 'atm' && pres2 == 'mmhg'){ //de atm para mmhg
		calculo = (entrada*760);
		res = "O resultado de "+entrada+" Atm para mmHg é "+formatarValor(calculo)+" mmHg";
	}

	if(pres1 == 'atm' && pres2 == 'inhg'){ //de atm para inhg
		calculo = (entrada*29.92125);
		res = "O resultado de "+entrada+" Atm para InHg é "+calculo+" InHg";
	}

	if(pres1 == 'atm' && pres2 == 'psi'){ //de atm para psi
		calculo = (entrada*14.6959);
		res = "O resultado de "+entrada+" Atm para Psi é "+calculo+" Psi";
	}

	if(pres1 == 'atm' && pres2 == 'kgf'){ //de atm para kgf
		calculo = (entrada*1.033227);
		res = "O resultado de "+entrada+" Atm para kgf/cm<sup>2</sup> é "+calculo+" kgf/cm<sup>2</sup>";
	}
	if(pres1 == 'atm' && pres2 == 'atm'){
		res = "O resultado de "+entrada+" Atm para Atm é "+entrada+" Atm";
	}

	//linha de conversao psi
	if(pres1 == 'psi' && pres2 == 'pa'){ //de psi para pascal
		calculo = (entrada*6894.75);
		res = "O resultado de "+entrada+" Psi para Pa é "+calculo+" Pa";
	}

	if(pres1 == 'psi' && pres2 == 'kpa'){ //de psi para kpa
		calculo = (entrada*6.894757);
		res = "O resultado de "+entrada+" Psi para Kpa é "+calculo+" Kpa";
	}

	if(pres1 == 'psi' && pres2 == 'mca'){ //de psi para mca
		calculo = (entrada*0.703);
		res = "O resultado de "+entrada+" Psi para mca é "+calculo+" mca";
	}

	if(pres1 == 'psi' && pres2 == 'mmca'){ //de psi para mmca
		calculo = (entrada*703);
		res = "O resultado de "+entrada+" Psi para mmca é "+formatarValor(calculo)+" mmca";
	}

	if(pres1 == 'psi' && pres2 == 'inca'){ //de psi para inca
		calculo = (entrada*27.70759);
		res = "O resultado de "+entrada+" Psi para Inca é "+calculo+" Inca";
	}

	if(pres1 == 'psi' && pres2 == 'bar'){ //de psi para bar
		calculo = (entrada*0.0689475);
		res = "O resultado de "+entrada+" Psi para Bar é "+calculo+" Bar";
	}

	if(pres1 == 'psi' && pres2 == 'mmhg'){ //de psi para mmhg
		calculo = (entrada*51.71593);
		res = "O resultado de "+entrada+" Psi para mmHg é "+calculo+" mmHg";
	}

	if(pres1 == 'psi' && pres2 == 'inhg'){ //de psi para inhg
		calculo = (entrada*2.03602);
		res = "O resultado de "+entrada+" Psi para InHg é "+calculo+" InHg";
	}

	if(pres1 == 'psi' && pres2 == 'atm'){ //de psi para atm
		calculo = (entrada*0.068046);
		res = "O resultado de "+entrada+" Psi para Pa é "+calculo+" Pa";
	}

	if(pres1 == 'psi' && pres2 == 'kgf'){ //de psi para kgf
		calculo = (entrada*0.070307);
		res = "O resultado de "+entrada+" Psi para kgf/cm<sup>2</sup> é "+calculo+" kgf/cm<sup>2</sup>";
	}

	if(pres1 == 'psi' && pres2 == 'psi'){
		res = "O resultado de "+entrada+" Psi para Psi é "+entrada+" Psi";
	}

	//linha de conversao de kgf/cm^2
	if(pres1 == 'kgf' && pres2 == 'pa'){ //de kgf para pascal
		calculo = (entrada*98066.5);
		res = "O resultado de "+entrada+" kgf/cm<sup>2</sup> para Pa é "+calculo+" Pa";
	}

	if(pres1 == 'kgf' && pres2 == 'kpa'){ //de kgf para kpa
		calculo = (entrada*98.0665);
		res = "O resultado de "+entrada+" kgf/cm<sup>2</sup> para Kpa é "+calculo+" Kpa";
	}

	if(pres1 == 'kgf' && pres2 == 'mca'){ //de kgf para mca
		calculo = (entrada*10.01021);
		res = "O resultado de "+entrada+" kgf/cm<sup>2</sup> para mca é "+calculo+" mca";
	}

	if(pres1 == 'kgf' && pres2 == 'mmca'){ //de kgf para mmca
		calculo = (entrada*10010.021);
		res = "O resultado de "+entrada+" kgf/cm<sup>2</sup> para mmca é "+calculo+" mmca";
	}

	if(pres1 == 'kgf' && pres2 == 'inca'){ //de kgf para inca
		calculo = (entrada*394.09459);
		res = "O resultado de "+entrada+" kgf/cm<sup>2</sup> para Inca é "+calculo+" Inca";
	}

	if(pres1 == 'kgf' && pres2 == 'bar'){ //de kgf para Bar
		calculo = (entrada*0.980665);
		res = "O resultado de "+entrada+" kgf/cm<sup>2</sup> para Bar é "+calculo+" Bar";
	}

	if(pres1 == 'kgf' && pres2 == 'mmhg'){ //de kgf para mmhg
		calculo = (entrada*735.5592);
		res = "O resultado de "+entrada+" kgf/cm<sup>2</sup> para mmHg é "+calculo+" mmHg";
	}

	if(pres1 == 'kgf' && pres2 == 'inhg'){ //de kgf para inhg
		calculo = (entrada*28.95902);
		res = "O resultado de "+entrada+" kgf/cm<sup>2</sup> para InHg é "+calculo+" InHg";
	}

	if(pres1 == 'kgf' && pres2 == 'atm'){ //de kgf para atm
		calculo = (entrada*0.967841);
		res = "O resultado de "+entrada+" kgf/cm<sup>2</sup> para Atm é "+calculo+" Atm";
 }

 	if(pres1 == 'kgf' && pres2 == 'psi'){ //de kgf para psi
 		calculo = (entrada*14.22334);
 		res = "O resultado de "+entrada+" kgf/cm<sup>2</sup> para Psi é "+calculo+" Psi";
 	}

	if(pres1 == 'kgf' && pres2 == 'kgf'){
		res = "O resultado de "+entrada+" kgf/cm<sup>2</sup> para  kgf/cm<sup>2</sup> é "+entrada+"  kgf/cm<sup>2</sup>";
	}
		document.getElementById('resultado_pressao').innerHTML = '<div class="uk-alert-primary" uk-alert><a class="uk-alert-close" uk-close></a><p>'+res+'</p></div>';

}

////////////////funcao de conversao vazao volumetrica/////////////////////////////////////////
function calcula_vazao_volumetrica(){
	var vaz1 = document.getElementById('vazao_v1').value;
	var vaz2 = document.getElementById('vazao_v2').value;
	var entrada = Number(document.getElementById('entrada_vazao_v').value);

	//formatacao de valores
	function formatarValor(valor) {
			return valor.toLocaleString('pt-BR');
		}

	if(vaz1 == 'mh' && vaz2 	== 'mm'){ //de m^3/h para m^3/min
		calculo = (entrada*0.016667);
		res = "O resultado de "+entrada+" m<sup>3</sup>/h para m<sup>3</sup>/min é "+calculo+" m<sup>3</sup>/min";
 }

 if(vaz1 == 'mh' && vaz2 	== 'ms'){ //de m^3/h para m^3/s
	 calculo = (entrada*0.00027778);
	 res = "O resultado de "+entrada+" m<sup>3</sup>/h para m<sup>3</sup>/s é "+calculo+" m<sup>3</sup>/s";
 }

 if(vaz1 == 'mh' && vaz2 	== 'gp'){ //de m^3/h para GPM
	calculo = (entrada*4.40287);
	res = "O resultado de "+entrada+" m<sup>3</sup>/h para GPM é "+calculo+" GPM";
 }

 if(vaz1 == 'mh' && vaz2 	== 'bp'){ //de m^3/h para BPD
 calculo = (entrada*150.9560);
 res = "O resultado de "+entrada+" m<sup>3</sup>/h para BPD é "+calculo+" BPD";
 }

 if(vaz1 == 'mh' && vaz2 	== 'cfh'){ //de m^3/h para pé^3/h
 calculo = (entrada*35.314666);
 res = "O resultado de "+entrada+" m<sup>3</sup>/h para pé<sup>3</sup>/h é "+calculo+" pé<sup>3</sup>/h";
 }

 if(vaz1 == 'mh' && vaz2 	== 'cfm'){ //de m^3/h para pé^3/min
 calculo = (entrada*0.588579);
 res = "O resultado de "+entrada+" m<sup>3</sup>/h para pé<sup>3</sup>/min é "+calculo+" pé<sup>3</sup>/min";
 }

 if(vaz1 == 'mh' && vaz2 	== 'mh'){
 res = "O resultado de "+entrada+" m<sup>3</sup>/h para m<sup>3</sup>/h é "+entrada+" m<sup>3</sup>/h";
 }


 //linha de conversao de m^3/min
 if(vaz1 == 'mm' && vaz2 	== 'mh'){ //de m^3/min para  m^3/h
 calculo = (entrada*60);
 res = "O resultado de "+entrada+" m<sup>3</sup>/min para m<sup>3</sup>/h é "+calculo+" m<sup>3</sup>/h";
 }

 if(vaz1 == 'mm' && vaz2 	== 'ms'){ //de m^3/min para  m^3/s
 calculo = (entrada*0.016667);
 res = "O resultado de "+entrada+" m<sup>3</sup>/min para m<sup>3</sup>/s é "+calculo+" m<sup>3</sup>/s";
 }

 if(vaz1 == 'mm' && vaz2 	== 'gp'){ //de m^3/min para  GPM
 calculo = (entrada*264.1721);
 res = "O resultado de "+entrada+" m<sup>3</sup>/min para GPM é "+calculo+" GPM";
 }

 if(vaz1 == 'mm' && vaz2 	== 'bp'){ //de m^3/min para  BPD
 calculo = (entrada*9057.34);
 res = "O resultado de "+entrada+" m<sup>3</sup>/min para BPD é "+calculo+" BPD";
 }

 if(vaz1 == 'mm' && vaz2 	== 'cfh'){ //de m^3/min para  pé^3/h
 calculo = (entrada*2118.8802);
 res = "O resultado de "+entrada+" m<sup>3</sup>/min para pé<sup>3</sup>/h é "+calculo+" pé<sup>3</sup>/h";
 }

 if(vaz1 == 'mm' && vaz2 	== 'cfm'){ //de m^3/min para  pé^3/min
 calculo = (entrada*35.3147);
 res = "O resultado de "+entrada+" m<sup>3</sup>/min para pé<sup>3</sup>/min é "+calculo+" pé<sup>3</sup>/min";
 }

 if(vaz1 == 'mm' && vaz2 == 'mm'){
	 res = "O resultado de "+entrada+" m<sup>3</sup>/min para m<sup>3</sup>/min é "+entrada+" m<sup>3</sup>/min";
 }


 //linha de conversao de m^3/s
 if(vaz1 == 'ms' && vaz2 	== 'mh'){ //de m^3/s para  m^3/h
 calculo = (entrada*3600);
 res = "O resultado de "+entrada+" m<sup>3</sup>/s para m<sup>3</sup>/h é "+formatarValor(calculo)+" m<sup>3</sup>/h";
 }

 if(vaz1 == 'ms' && vaz2 	== 'mm'){ //de m^3/s para  m^3/min
 calculo = (entrada*60);
 res = "O resultado de "+entrada+" m<sup>3</sup>/s para m<sup>3</sup>/min é "+calculo+" m<sup>3</sup>/min";
 }

 if(vaz1 == 'ms' && vaz2 	== 'gp'){ //de m^3/s para  GPM
 calculo = (entrada*15850.33);
 res = "O resultado de "+entrada+" m<sup>3</sup>/s para GPM é "+calculo+" GPM";
 }

 if(vaz1 == 'ms' && vaz2 	== 'bp'){ //de m^3/s para  BPD
 calculo = (entrada*543440.7);
 res = "O resultado de "+entrada+" m<sup>3</sup>/s para BPD é "+calculo+" BPD";
 }

 if(vaz1 == 'ms' && vaz2 	== 'cfh'){ //de m^3/s para  pé^3/h
 calculo = (entrada*127132.81);
 res = "O resultado de "+entrada+" m<sup>3</sup>/min para pé<sup>3</sup>/h é "+calculo+" pé<sup>3</sup>/h";
 }

 if(vaz1 == 'ms' && vaz2 	== 'cfm'){ //de m^3/s para  pé^3/min
 calculo = (entrada*2118.884);
 res = "O resultado de "+entrada+" m<sup>3</sup>/min para pé<sup>3</sup>/min é "+calculo+" pé<sup>3</sup>/min";
 }

 if(vaz1 == 'ms' && vaz2 == 'ms'){
	 res = "O resultado de "+entrada+" m<sup>3</sup>/s para m<sup>3</sup>/s é "+entrada+" m<sup>3</sup>/s";
 }


 //linha de conversao de GPM(galão/dia)
 if(vaz1 == 'gp' && vaz2 	== 'mh'){ //de GPM para m^3/h
 calculo = (entrada*0.22712);
 res = "O resultado de "+entrada+" GPM para m<sup>3</sup>/h é "+calculo+" m<sup>3</sup>/h";
 }

 if(vaz1 == 'gp' && vaz2 	== 'mm'){ //de GPM para m^3/min
 calculo = (entrada*0.0037854);
 res = "O resultado de "+entrada+" GPM para m<sup>3</sup>/min é "+calculo+" m<sup>3</sup>/min";
 }

 if(vaz1 == 'gp' && vaz2 	== 'ms'){ //de GPM para m^3/s
 calculo = (entrada*(63.09*0.000001));
 res = "O resultado de "+entrada+" GPM para m<sup>3</sup>/s é "+calculo+" m<sup>3</sup>/s";
 }

 if(vaz1 == 'gp' && vaz2 	== 'bp'){ //de GPM para BPD
 calculo = (entrada*342857);
 res = "O resultado de "+entrada+" GPM para BPD é "+calculo+" BPD";
 }

 if(vaz1 == 'gp' && vaz2 	== 'cfh'){ //de GPM para  pé^3/h
 calculo = (entrada*8.0208);
 res = "O resultado de "+entrada+" GPM para pé<sup>3</sup>/h é "+calculo+" pé<sup>3</sup>/h";
 }

 if(vaz1 == 'gp' && vaz2 	== 'cfm'){ //de GPM para  pé^3/min
 calculo = (entrada*0.13368);
 res = "O resultado de "+entrada+" GPM para pé<sup>3</sup>/min é "+calculo+" pé<sup>3</sup>/min";
 }

 if(vaz1 == 'gp' && vaz2 == 'gp'){
	res = "O resultado de "+entrada+" GPM para GPM é "+entrada+" GPM";
 }


  //linha de conversao de BPD(barril/dia)
	if(vaz1 == 'bp' && vaz2 	== 'mh'){ //de BPD para  m^3/h
	calculo = (entrada*0.0066245);
	res = "O resultado de "+entrada+" BPD para m<sup>3</sup>/h é "+calculo+" m<sup>3</sup>/h";
	}

	if(vaz1 == 'bp' && vaz2 	== 'mm'){ //de BPD para  m^3/min
	calculo = (entrada*0.00011041);
	res = "O resultado de "+entrada+" BPD para m<sup>3</sup>/min é "+calculo+" m<sup>3</sup>/min";
	}

	if(vaz1 == 'bp' && vaz2 	== 'ms'){ //de BPD para  m^3/s
	calculo = (entrada*(1.8401*0.000001));
	res = "O resultado de "+entrada+" BPD para m<sup>3</sup>/s é "+calculo+" m<sup>3</sup>/s";
	}

	if(vaz1 == 'bp' && vaz2 	== 'gp'){ //de BPD para  GPM
	calculo = (entrada*0.029167);
	res = "O resultado de "+entrada+" BPD para GPM é "+calculo+" GPM";
	}

	if(vaz1 == 'bp' && vaz2 == 'cfh'){ //de BPD para  pé^3/h
	calculo = (entrada*0.23394);
	res = "O resultado de "+entrada+" BPD para pé<sup>3</sup>/h é "+calculo+" pé<sup>3</sup>/h";
	}

	if(vaz1 == 'bp' && vaz2 == 'cfm'){ //de BPD para  pé^3/min
	calculo = (entrada*0.0038990);
	res = "O resultado de "+entrada+" BPD para pé<sup>3</sup>/min é "+calculo+" pé<sup>3</sup>/min";
	}
	if(vaz1 == 'bp' && vaz2 == 'bp'){
	 res = "O resultado de "+entrada+" BPD para BPD é "+entrada+" BPD";
	}


	//linha de conversao de pé^3/h
	if(vaz1 == 'cfh' && vaz2 	== 'mh'){ //de pé^3/h para  m^3/h
	calculo = (entrada*0.0283168);
	res = "O resultado de "+entrada+" pé<sup>3</sup>/h para m<sup>3</sup>/h é "+calculo+" m<sup>3</sup>/h";
	}

	if(vaz1 == 'cfh' && vaz2 	== 'mm'){ //de pé^3/h para  m^3/min
	calculo = (entrada*0.00047195);
	res = "O resultado de "+entrada+" pé<sup>3</sup>/h para m<sup>3</sup>/min é "+calculo+" m<sup>3</sup>/min";
	}

	if(vaz1 == 'cfh' && vaz2 	== 'ms'){ //de pé^3/h para  m^3/s
	calculo = (entrada*(7.8657*0.000001));
	res = "O resultado de "+entrada+" pé<sup>3</sup>/h para m<sup>3</sup>/s é "+calculo+" m<sup>3</sup>/s";
	}

	if(vaz1 == 'cfh' && vaz2 	== 'gp'){ //de pé^3/h para  GPM
	calculo = (entrada*0.124676);
	res = "O resultado de "+entrada+" pé<sup>3</sup>/h para GPM é "+calculo+" GPM";
	}

	if(vaz1 == 'cfh' && vaz2 	== 'bp'){ //de pé^3/h para BPD
	calculo = (entrada*4.2746);
	res = "O resultado de "+entrada+" pé<sup>3</sup>/h para BPD é "+calculo+" BPD";
	}

	if(vaz1 == 'cfh' && vaz2 == 'cfm'){ //de pé^3/h para pé^3/min
	calculo = (entrada*0.016667);
	res = "O resultado de "+entrada+" pé<sup>3</sup>/h para pé<sup>3</sup>/min é "+calculo+" pé<sup>3</sup>/min";
	}

	if(vaz1 == 'cfh' && vaz2 == 'cfh'){
	 res = "O resultado de "+entrada+" pé<sup>3</sup>/h para pé<sup>3</sup>/h é "+entrada+" pé<sup>3</sup>/h";
	}


 //linha de conversao de pé^3/min
 if(vaz1 == 'cfm' && vaz2 	== 'mh'){ //de pé^3/min para  m^3/h
 calculo = (entrada*1.69901);
 res = "O resultado de "+entrada+" pé<sup>3</sup>/min para m<sup>3</sup>/h é "+calculo+" m<sup>3</sup>/h";
 }

 if(vaz1 == 'cfm' && vaz2 	== 'mm'){ //de pé^3/min para  m^3/min
 calculo = (entrada*0.028317);
 res = "O resultado de "+entrada+" pé<sup>3</sup>/min para m<sup>3</sup>/min é "+calculo+" m<sup>3</sup>/min";
 }

 if(vaz1 == 'cfm' && vaz2 	== 'ms'){ //de pé^3/min para  m^3/s
 calculo = (entrada*0.00047195);
 res = "O resultado de "+entrada+" pé<sup>3</sup>/min para m<sup>3</sup>/s é "+calculo+" m<sup>3</sup>/s";
 }

 if(vaz1 == 'cfm' && vaz2 	== 'gp'){ //de pé^3/min para  GPM
 calculo = (entrada*7.480519);
 res = "O resultado de "+entrada+" pé<sup>3</sup>/min para GPM é "+calculo+" GPM";
 }

 if(vaz1 == 'cfm' && vaz2 	== 'bp'){ //de pé^3/min para BPD
 calculo = (entrada*256.476);
 res = "O resultado de "+entrada+" pé<sup>3</sup>/min para BPD é "+calculo+" BPD";
 }

 if(vaz1 == 'cfm' && vaz2 == 'cfh'){ //de pé^3/min para pé^3/min
 calculo = (entrada*60);
 res = "O resultado de "+entrada+" pé<sup>3</sup>/min para pé<sup>3</sup>/min é "+calculo+" pé<sup>3</sup>/min";
 }

 if(vaz1 == 'cfm' && vaz2 == 'cfm'){
	res = "O resultado de "+entrada+" pé<sup>3</sup>/min para pé<sup>3</sup>/min é "+entrada+" pé<sup>3</sup>/min";
 }
 document.getElementById('resultado_vazao_v').innerHTML = '<div class="uk-alert-primary" uk-alert><a class="uk-alert-close" uk-close></a><p>'+res+'</p></div>';

}


///////////////////////////////////// funcao para a conversao de vazao massica////////////////////////////////////////////////////

function calcula_vazao_massica(){
	var vaz1 = document.getElementById('vazao_m1').value;
	var vaz2 = document.getElementById('vazao_m2').value;
	var entrada = Number(document.getElementById('entrada_vazao_ma').value);

	//formatacao de valores
	function formatarValor(valor) {
			return valor.toLocaleString('pt-BR');
		}

	if(vaz1 == 'tdia' && vaz2 == 'thora'){ //de t/dia para t/hora
		calculo = (entrada*0.041667);
		res = "O resultado de "+entrada+" t/dia para t/h é "+calculo+" t/h";
	}

	if(vaz1 == 'tdia' && vaz2 == 'khora'){ //de t/dia para k/hora
		calculo = (entrada*41.667);
		res = "O resultado de "+entrada+" t/dia para k/h é "+calculo+" k/h";
	}

	if(vaz1 == 'tdia' && vaz2 == 'kseg'){ //de t/dia para kg/s
		calculo = (entrada*0.011574);
		res = "O resultado de "+entrada+" t/dia para kg/s é "+calculo+" kg/s";
	}

	if(vaz1 == 'tdia' && vaz2 == 'lhora'){ //de t/dia para lb/h
		calculo = (entrada*91.858);
		res = "O resultado de "+entrada+" t/dia para lb/h é "+calculo+" lb/h";
	}

	if(vaz1 == 'tdia' && vaz2 == 'lmin'){ //de t/dia para lb/min
		calculo = (entrada*1.53097);
		res = "O resultado de "+entrada+" t/dia para lb/min é "+calculo+" lb/min";
	}

	if(vaz1 == 'tdia' && vaz2 == 'lseg'){ //de t/dia para lb/s
		calculo = (entrada*0.025516);
		res = "O resultado de "+entrada+" t/dia para lb/s é "+calculo+" lb/s";
	}

	if(vaz1 == 'tdia' && vaz2 == 'tdia'){
		res = "O resultado de "+entrada+" t/dia para t/dia é "+entrada+" t/dia";
	}



	if(vaz1 == 'thora' && vaz2 == 'tdia'){ //de t/hora para t/dia
		calculo = (entrada*24);
		res = "O resultado de "+entrada+" t/h para t/dia é "+calculo+" t/dia";
	}

	if(vaz1 == 'thora' && vaz2 == 'khora'){ //de t/hora para kg/h
		calculo = (entrada*1000);
		res = "O resultado de "+entrada+" t/h para kg/h é "+calculo+" kg/h";
	}

	if(vaz1 == 'thora' && vaz2 == 'kseg'){ //de t/hora para kg/s
		calculo = (entrada*0.27778);
		res = "O resultado de "+entrada+" t/h para kg/s é "+calculo+" kg/s";
	}

	if(vaz1 == 'thora' && vaz2 == 'lhora'){ //de t/hora para lb/h
		calculo = (entrada*2204.6);
		res = "O resultado de "+entrada+" t/h para lb/h é "+calculo+" lb/h";
	}

	if(vaz1 == 'thora' && vaz2 == 'lmin'){ //de t/hora para lb/min
		calculo = (entrada*36.7433);
		res = "O resultado de "+entrada+" t/h para lb/min é "+calculo+" lb/min";
	}

	if(vaz1 == 'thora' && vaz2 == 'lseg'){ //de t/hora para lb/s
		calculo = (entrada*0.61239);
		res = "O resultado de "+entrada+" t/h para lb/s é "+calculo+" lb/s";
	}
	if(vaz1 == 'thora' && vaz2 == 'thora'){
		res = "O resultado de "+entrada+" t/h para t/h é "+entrada+" t/h ";
	}



	if(vaz1 == 'khora' && vaz2 == 'tdia'){ //de kg/h para t/dia
		calculo = (entrada*0.024);
		res = "O resultado de "+entrada+" kg/h para t/dia é "+calculo+" t/dia";
	}

	if(vaz1 == 'khora' && vaz2 == 'thora'){ //de kg/h para t/h
		calculo = (entrada*0.001);
		res = "O resultado de "+entrada+" kg/h para t/h é "+calculo+" t/h";
	}

	if(vaz1 == 'khora' && vaz2 == 'kseg'){ //de kg/h para kg/s
		calculo = (entrada*0.000278);
		res = "O resultado de "+entrada+" kg/h para kg/s é "+calculo+" kg/s";
	}

	if(vaz1 == 'khora' && vaz2 == 'lhora'){ //de kg/h para lb/h
		calculo = (entrada*2.2046);
		res = "O resultado de "+entrada+" kg/h para lb/h é "+calculo+" lb/h";
	}

	if(vaz1 == 'khora' && vaz2 == 'lmin'){ //de kg/h para lb/min
		calculo = (entrada*0.03674);
		res = "O resultado de "+entrada+" kg/h para lb/min é "+calculo+" lb/min";
	}

	if(vaz1 == 'khora' && vaz2 == 'lseg'){ //de kg/h para lb/s
		calculo = (entrada*0.000612);
		res = "O resultado de "+entrada+" kg/h para lb/s é "+calculo+" lb/s";
	}
	if(vaz1 == 'khora' && vaz2 == 'khora'){
		res = "O resultado de "+entrada+" kg/h para kg/h é "+entrada+" kg/h ";
	}



	if(vaz1 == 'khora' && vaz2 == 'tdia'){ //de kg/h para t/dia
		calculo = (entrada*0.024);
		res = "O resultado de "+entrada+" kg/h para t/dia é "+calculo+" t/dia";
	}

	if(vaz1 == 'khora' && vaz2 == 'thora'){ //de kg/h para t/h
		calculo = (entrada*0.001);
		res = "O resultado de "+entrada+" kg/h para t/h é "+calculo+" t/h";
	}

	if(vaz1 == 'khora' && vaz2 == 'kseg'){ //de kg/h para kg/s
		calculo = (entrada*0.000278);
		res = "O resultado de "+entrada+" kg/h para kg/s é "+calculo+" kg/s";
	}

	if(vaz1 == 'khora' && vaz2 == 'lhora'){ //de kg/h para lb/h
		calculo = (entrada*2.2046);
		res = "O resultado de "+entrada+" kg/h para lb/h é "+calculo+" lb/h";
	}

	if(vaz1 == 'khora' && vaz2 == 'lmin'){ //de kg/h para lb/min
		calculo = (entrada*0.03674);
		res = "O resultado de "+entrada+" kg/h para lb/min é "+calculo+" lb/min";
	}

	if(vaz1 == 'khora' && vaz2 == 'lseg'){ //de kg/h para lb/s
		calculo = (entrada*0.000612);
		res = "O resultado de "+entrada+" kg/h para lb/s é "+calculo+" lb/s";
	}
	if(vaz1 == 'khora' && vaz2 == 'khora'){
		res = "O resultado de "+entrada+" kg/h para kg/h é "+entrada+" kg/h ";
	}



	if(vaz1 == 'kseg' && vaz2 == 'tdia'){ //de kg/s para t/dia
		calculo = (entrada*86.4);
		res = "O resultado de "+entrada+" kg/s para t/dia é "+calculo+" t/dia";
	}

	if(vaz1 == 'kseg' && vaz2 == 'thora'){ //de kg/s para t/h
		calculo = (entrada*3.6);
		res = "O resultado de "+entrada+" kg/s para t/h é "+calculo+" t/h";
	}

	if(vaz1 == 'kseg' && vaz2 == 'khora'){ //de kg/s para kg/h
		calculo = (entrada*3600);
		res = "O resultado de "+entrada+" kg/s para kg/h é "+formatarValor(calculo)+" kg/h";
	}

	if(vaz1 == 'kseg' && vaz2 == 'lhora'){ //de kg/s para lb/h
		calculo = (entrada*7936.6);
		res = "O resultado de "+entrada+" kg/s para lb/h é "+calculo+" lb/h";
	}

	if(vaz1 == 'kseg' && vaz2 == 'lmin'){ //de kg/s para lb/min
		calculo = (entrada*132.276);
		res = "O resultado de "+entrada+" kg/s para lb/min é "+calculo+" lb/min";
	}

	if(vaz1 == 'kseg' && vaz2 == 'lseg'){ //de kg/s para lb/s
		calculo = (entrada*2.2046);
		res = "O resultado de "+entrada+" kg/s para lb/s é "+calculo+" lb/s";
	}
	if(vaz1 == 'kseg' && vaz2 == 'kseg'){
		res = "O resultado de "+entrada+" kg/s para kg/s é "+entrada+" kg/s ";
	}



	if(vaz1 == 'lhora' && vaz2 == 'tdia'){ //de lb/h para t/dia
		calculo = (entrada*0.01089);
		res = "O resultado de "+entrada+" lb/h para t/dia é "+calculo+" t/dia";
	}

	if(vaz1 == 'lhora' && vaz2 == 'thora'){ //de lb/h para t/h
		calculo = (entrada*0.0004536);
		res = "O resultado de "+entrada+" lb/h para t/h é "+calculo+" t/h";
	}

	if(vaz1 == 'lhora' && vaz2 == 'khora'){ //de lb/h para kg/h
		calculo = (entrada*0.4536);
		res = "O resultado de "+entrada+" lb/h para kg/h é "+formatarValor(calculo)+" kg/h";
	}

	if(vaz1 == 'lhora' && vaz2 == 'kseg'){ //de lb/h para kg/s
		calculo = (entrada*0.000126);
		res = "O resultado de "+entrada+" lb/h para kg/s é "+calculo+" kg/s";
	}

	if(vaz1 == 'lhora' && vaz2 == 'lmin'){ //de lb/h para lb/min
		calculo = (entrada*0.01667);
		res = "O resultado de "+entrada+" lb/h para lb/min é "+calculo+" lb/min";
	}

	if(vaz1 == 'lhora' && vaz2 == 'lseg'){ //de lb/h para lb/s
		calculo = (entrada*0.000278);
		res = "O resultado de "+entrada+" lb/h para lb/s é "+calculo+" lb/s";
	}
	if(vaz1 == 'lhora' && vaz2 == 'lhora'){
		res = "O resultado de "+entrada+" lb/h para lb/h é "+entrada+" lb/h ";
	}



	if(vaz1 == 'lmin' && vaz2 == 'tdia'){ //de lb/min para t/dia
		calculo = (entrada*0.65317);
		res = "O resultado de "+entrada+" lb/min para t/dia é "+calculo+" t/dia";
	}

	if(vaz1 == 'lmin' && vaz2 == 'thora'){ //de lb/min para t/h
		calculo = (entrada*0.02722);
		res = "O resultado de "+entrada+" lb/min para t/h é "+calculo+" t/h";
	}

	if(vaz1 == 'lmin' && vaz2 == 'khora'){ //de lb/min para kg/h
		calculo = (entrada*27.2160001);
		res = "O resultado de "+entrada+" lb/min para kg/h é "+calculo+" kg/h";
	}

	if(vaz1 == 'lmin' && vaz2 == 'kseg'){ //de lb/min para kg/s
		calculo = (entrada*0.00756);
		res = "O resultado de "+entrada+" lb/min para kg/s é "+calculo+" kg/s";
	}

	if(vaz1 == 'lmin' && vaz2 == 'lhora'){ //de lb/min para lb/min
		calculo = (entrada*60);
		res = "O resultado de "+entrada+" lb/min para lb/min é "+calculo+" lb/min";
	}

	if(vaz1 == 'lmin' && vaz2 == 'lseg'){ //de lb/min para lb/s
		calculo = (entrada*0.01667);
		res = "O resultado de "+entrada+" lb/min para lb/s é "+calculo+" lb/s";
	}
	if(vaz1 == 'lmin' && vaz2 == 'lmin'){
		res = "O resultado de "+entrada+" lb/min para lb/min é "+entrada+" lb/min";
	}



	if(vaz1 == 'lseg' && vaz2 == 'tdia'){ //de lb/s para t/dia
		calculo = (entrada*39.1907);
		res = "O resultado de "+entrada+" lb/s para t/dia é "+calculo+" t/dia";
	}

	if(vaz1 == 'lseg' && vaz2 == 'thora'){ //de lb/s para t/h
		calculo = (entrada*1.63295);
		res = "O resultado de "+entrada+" lb/s para t/h é "+calculo+" t/h";
	}

	if(vaz1 == 'lseg' && vaz2 == 'khora'){ //de lb/s para kg/h
		calculo = (entrada*1632.95);
		res = "O resultado de "+entrada+" lb/s para kg/h é "+calculo+" kg/h";
	}

	if(vaz1 == 'lseg' && vaz2 == 'kseg'){ //de lb/s para kg/s
		calculo = (entrada*0.4536001);
		res = "O resultado de "+entrada+" lb/s para kg/s é "+calculo+" kg/s";
	}

	if(vaz1 == 'lseg' && vaz2 == 'lhora'){ //de lb/s para lb/min
		calculo = (entrada*3600);
		res = "O resultado de "+entrada+" lb/s para lb/h é "+formatarValor(calculo)+" lb/h";
	}

	if(vaz1 == 'lseg' && vaz2 == 'lmin'){ //de lb/s para lb/s
		calculo = (entrada*60);
		res = "O resultado de "+entrada+" lb/s para lb/min é "+calculo+" lb/min";
	}
	if(vaz1 == 'lseg' && vaz2 == 'lseg'){
		res = "O resultado de "+entrada+" lb/s para lb/s é "+entrada+" lb/s";
	}
	document.getElementById('resultado_vazao_massica').innerHTML = '<div class="uk-alert-primary" uk-alert><a class="uk-alert-close" uk-close></a><p>'+res+'</p></div>';

}




//////////////funcao responsavel por trazer as marcas para o select marca/////////////////

       $.ajax({

	    	type:"POST",
	    	url:"http://plistone.requestwf.com.br/codigo_php/busca.php",
	    	dataType:"json",
	    	crossDomain: true,
	    	data:{
	    		"busca":'%'
	    	},
    	 beforeSend : function(){
    	    console.log('Enviando requisicao');
      }
     }).done(function(data){

	var jsonData = data;
	console.log(jsonData);

     $(document).ready(function () {
         var listItems = '<option>Selecione o fabricante</option>';

      for (var i = 0; i < jsonData.dados.length; i++) {
             listItems += "<option value='" + jsonData.dados[i].nome + "'>" + jsonData.dados[i].nome + "</option>";
         }

         $("#select_option").html(listItems);
     });
});

/////////////////////////////////////////funcao para autenticacao de usuario app////////////////
	function logar(){
		var usuario = document.getElementById('user').value;
		var senha =document.getElementById('senha_user').value;
		 $.ajax({
           url : "http://plistone.requestwf.com.br/codigo_php/login_app.php",
           type : 'post',
           data : {
                nome : usuario,
                senha : senha
           },
           beforeSend : function(){
               UIkit.notification({message: 'Autenticando...', status: 'primary'});
           }
      })
      .done(function(msg){
       console.log(msg);
         var unlocks = msg;
           if(unlocks == 1){
            	location.href='home.html'
           }
           else{
           	UIkit.notification({message: 'Senha ou Usuário incorretos', status: 'danger'});
           }
      }).fail(function(jqXHR, textStatus, msg){
         	UIkit.notification({message: 'conecte-se a uma rede!', status: 'danger'});
			 });
   }


	/////////////////////comeco da funcao de busca dos instrumentos///////////////////////////////////
function busca_instrumento(){

	nome = document.getElementById('nome_i').value; //nome do instrumento
	fabricante = document.getElementById('select_option').value; //fabricante do instrumento
	variavel_p = document.getElementById('variavel_p').value; //variavel do processo

	 if(nome && variavel_p && fabricante !== ""){ //verifica se todos os campos foram preenchidos

            $.ajax({
		    	type:"POST",
		    	url:"http://plistone.requestwf.com.br/codigo_php/busca_instrumento.php",
		    	dataType:"json",
		    	crossDomain: true,
		    	  data : {
	                nome_i : nome,
	                marca_i : fabricante,
	                variavel_p : variavel_p
	          },beforeSend : function(){
    	   document.getElementById('alerta').innerHTML = '<center><i class="fa fa-cog fa-spin fa-3x fa-fw"></i><p>Buscando...</p></center>';
    	  
      	   }
        }).done(function(data){

		var jsonData = data;
   		if(jsonData.dados.length == '0'){ //verifica se o instrumento digitado existe
    		document.getElementById('alerta').innerHTML = '<div class="uk-alert-danger" uk-alert></a><p>Instrumento não encontrado!</p></div>';
    		document.getElementById('title_facabusca').innerHTML = 'Faça a busca do instrumento';
    	}
    	else if(jsonData.dados.length !== '0'){ //se o instrumento digitado existir entao ele manda exibir
    		UIkit.notification({message: 'Aguarde...', status: 'primary'});
    		document.getElementById('alerta').innerHTML = "";
    		window.setTimeout(function(){
   			document.getElementById("botao2").click();
			});
    	}
       for (var i = 0; i < jsonData.dados.length; i++) { //for para retornar os valores do json formados pelo php
      		//campos de resultado da busca
     	    document.getElementById('img_fundo').innerHTML = '<img src="http://plistone.requestwf.com.br/codigo_php/img/'+jsonData.dados[i].imagem+'">';
    		document.getElementById('titulo').innerHTML = '<h2>'+jsonData.dados[i].nome+'</h2>';
    		document.getElementById('descricao').innerHTML = '<p>Descrição: '+jsonData.dados[i].descricao+'</p>';
    		document.getElementById('pdf').innerHTML = jsonData.dados[i].pdf;

    	     }
		  });
		}
	  else{
		document.getElementById('alerta').innerHTML = '<div class="uk-alert-danger" uk-alert></a><p>Você precisa preencher os campos!</p></div>';
		document.getElementById('title_facabusca').innerHTML = 'Faça a busca do instrumento';
			}
		  }

function pdfopen(){
	  	var url = document.getElementById('pdf').innerHTML;
			cordova.InAppBrowser.open('https://docs.google.com/viewer?url=http://plistone.requestwf.com.br/codigo_php/pdf/' + url,'_blank, location=yes');
}
