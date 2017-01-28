var coffees=[
{name:'Arabica',
 country:'Tanzania',
 strongness:1,
 quantity:20,
 cupprice:500,
 kgprice:1500,
 },

 {name:'Blue Mountain',
 country:'Tanzania',
 strongness:3,
 quantity:0,
  cupprice:400,
 kgprice:1300,
 },
  {name: 'Bourbon',
 country:'Kenya',
 strongness:7,
 quantity:0,
  cupprice:600,
 kgprice:1700,
 },
  {name: 'Catuai',
 country:'Latin America',
 strongness:6,
 quantity:30,
  cupprice:450,
 kgprice:1400,
 },
   {name: 'Ethiopian Harar',
 country:'Ethiopia',
 strongness:2,
 quantity:17,
  cupprice:320,
 kgprice:900,
 },
   {name: 'French Mission',
 country:'Kenya',
 strongness:6,
 quantity:5,
  cupprice:200,
 kgprice:800,
 },
   {name: 'Guadeloupe Bonifieur',
 country:'Tanzania',
 strongness:9,
 quantity:7,
  cupprice:700,
 kgprice:2500,
 },
   {name: 'Maragogipe',
 country:'	Latin America',
 strongness:4,
 quantity:6,
  cupprice:650,
 kgprice:2000,
 },
  {name: 'Robusta',
 country:'Indonesia',
 strongness:1,
 quantity:12,
  cupprice:750,
 kgprice:3000,
 },
  {name: 'Sarchimor',
 country:'Latin America',
 strongness:7,
 quantity:2,
  cupprice:500,
 kgprice:1600,
  },
   {name: 'SL34',
 country:'	Kenya',
 strongness:10,
 quantity:3,
  cupprice:750,
 kgprice:3000,
 }
]

var found=[];
var listingCoffees=[];
for (var k in coffees){  // kiírja miylen kávékkal foglalkozik a cég, tehát mikben kereshet
	listingCoffees.push('&nbsp;'+coffees[k].name);
	
}
document.getElementById('coffeeSpan').innerHTML=listingCoffees; 

var searchedInput=document.getElementById('searchBox');

function searchEngine (){		//új keresésre nem törlődik az előző, tömbökkel lenne érdemes megpóbálni
	//document.getElementById('Headers').removeChild(cell.childNodes);
	document.getElementById('foundRow').innerHTML='';
	

	var searchedValue=searchedInput.value.toLowerCase();
	
	for (var i=0; i< coffees.length; i++){
		var coffeNameLower=coffees[i].name.toLowerCase(); //kisbetűssé tesszük a neveket
		
		if (coffeNameLower.indexOf(searchedValue) > -1){  //ha megtalálható a névben a keresett szöveg, akkor betesszük azt az objectet a found tömbe
			found.push(coffees[i]);
		}
	}
	if (found.length>0){ //ha a tömben van valami, akkor fut le a html-be való beírás
		
		for(var k in found){		
			var coffeeKeysObj=Object.keys(found[k]);  //fejlécekhez kellő kulcsok tömbe helyezése
			var coffeeKey='';
			for(var j=0; j<coffeeKeysObj.length; j++){
				coffeeKey+='<th>'+coffeeKeysObj[j]+'</th>';
				//fejléc
			}
		
			var TempRow='';
			TempRow='<tr>';
				for(var n in found[k]){
					TempRow+='<td>'+found[k][n]+'</td>' ; //adatok
				}
			TempRow+='</tr>'
			document.getElementById('foundRow').innerHTML+=TempRow;
		}
		document.getElementById('Headers').innerHTML+=coffeeKey; 		//cikluson kívül kell, és így egyszer illeszt csak ba adatot
	}else{
		
		document.getElementById('Headers').innerHTML+='<th>Jelenleg nem kapható</th>';
	}
}
var lowStock=''; 	//ha csak deklarálva van akkor undefined-dal kezd
function almostOutFunc(){ //gives the ones that has less then 3 in quantity
	
	console.log('1');
	for(var k in coffees){
		if(coffees[k].quantity<3){
		lowStock+=(coffees[k].name)+', ';
		//console.info(coffees[k].name);
		
		}
	}
	//console.info(lowStock);
	document.getElementById('divLowStock').innerHTML='Alacsony készletmennyiség van a következő kávékból: '+lowStock;
}

function sotrSrtongnessFunc(){ //sort by strongness in 3 group
	var WeakStr='';
	var MildStr='';
	var StrongStr='';
	for(var k in coffees){
		if(coffees[k].strongness<4){
			WeakStr+='<li>'+coffees[k].name+', erősség:'+coffees[k].strongness+'</li>';
			//console.info(coffees[k].name);
		}else if(coffees[k].strongness<8){
			MildStr+='<li>'+coffees[k].name+', erősség:'+coffees[k].strongness+'</li>';
		}else{
			StrongStr+='<li>'+coffees[k].name+', erősség:'+coffees[k].strongness+'</li>';
		}
	}
	//console.info(WeakStr);
	document.getElementById('weakUl').innerHTML=WeakStr;
	document.getElementById('mildUl').innerHTML=MildStr;
	document.getElementById('strongUl').innerHTML=StrongStr;
	document.getElementById('divStrongness').className="sortingSpan";
}



	
function sortF() {  //sort them by country and then name
	
	for(var i=0;i<coffees.length-1;i++){
		for(var j=i+1;j<coffees.length;j++){
					console.log(coffees[i]);
			console.log(coffees[j]);
			if (coffees[i].country.localeCompare(coffees[j].country)>0) {

				var temp=[coffees[i], coffees[j]];
				coffees[i]=temp[1];
				coffees[j]=temp[0];
				console.log(temp);
			} else if (coffees[i].country.localeCompare(coffees[j].country)<0) { 
				console.log('nincs csere');
			}else{

			// Else go to the 2nd item
			if (coffees[i].name.localeCompare(coffees[j].name)>0) { 
				var tempN=[coffees[i], coffees[j]];
				coffees[i]=tempN[1];
				coffees[j]=tempN[0];
				console.log(tempN);
			} else {
				console.log('nincs csere');
			} }
		}
	}
	console.log(coffees);

	console.log(coffees);
	var ListToHtml='';
	for(var k=0;k<coffees.length;k++){
		var tempCoff=coffees[k].country;
		
		if(k==0){
			ListToHtml='<ul>'+tempCoff+'<li>'+coffees[k].name+'</li>';
		}else{
			var m=k-1;
			var prevCoff=coffees[m].country;
			if(tempCoff==prevCoff){
				//console.log(tempCoff, prevCoff, coffees[k].name);
				ListToHtml+='<li>'+coffees[k].name+'</li>';
			}else{
				ListToHtml+='</ul><ul>'+tempCoff+'<li>'+coffees[k].name+'</li>';
			}
		}
	
	
	}
	ListToHtml+='</ul>';
	console.log(ListToHtml);
	document.getElementById('contsortedList').innerHTML=ListToHtml;
	}

function Pricesfunc(){ //gives the lowest and highest cup prices, and the average
	var obj={
		cheapest:0,
		mostExp:0,
		avrg:0,
	};
	//declare them to 
	obj.cheapest=coffees[0];
	obj.mostExp=coffees[0];
	obj.avrg=coffees[0].cupprice;
	for(var i=1;i<coffees.length;i++){
		if(coffees[i].cupprice<obj.cheapest.cupprice){
			obj.cheapest=coffees[i];
		}
		if(coffees[i].cupprice>obj.mostExp.cupprice){
			obj.mostExp=coffees[i];
		}
		obj.avrg+=coffees[i].cupprice;
	}
	obj.avrg=(obj.avrg/coffees.length).toFixed(1);
	var cheap=obj.cheapest.cupprice;
	var exp=obj.mostExp.cupprice;
	console.log(cheap);
	var avrg=obj.avrg;
	console.log('Legolcsóbb kávé: '+cheap+' Ft.<br> Legdrágább kávé: '+exp+' Ft.<br> Kávék átlagos ára: '+avrg+' Ft.');
	
	document.getElementById('pricesSpan').innerHTML='Legolcsóbb kávé: '+cheap+' Ft.<br> Legdrágább kávé: '+exp+' Ft.<br> Kávék átlagos ára: '+avrg+' Ft.';
}

function ValueFunc(){ //gives the sum value of all
	var sumOfAll=0;
	var valuesArr=[];
	for(var i=0;i<coffees.length;i++){
		
		var tempV={
			name:coffees[i].name,
			value:coffees[i].kgprice*coffees[i].quantity
		};
		valuesArr.push(tempV);
		sumOfAll+=coffees[i].kgprice*coffees[i].quantity;
		
	}
	/* console.log(sumOfAll);
	console.info(valuesArr); */
	var valueString='';
	for (var j=0;j<valuesArr.length;j++){
		valueString+='<li>'+valuesArr[j].name+': '+valuesArr[j].value+' Ft.</li>';
		
	}
	
	document.getElementById('allSum').innerHTML='A teljes készleten lévő érték: '+sumOfAll+' Ft.';
	document.getElementById('valueSpan').innerHTML=valueString;
}






