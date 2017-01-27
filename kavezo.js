var coffees=[
{name:'Arabica',
 country:'Tanzania',
 strongness:1,
 quantity:20,
 },

 {name:'Blue Mountain',
 country:'Jamaica',
 strongness:3,
 quantity:0,
 },
  {name: 'Bourbon',
 country:'Rwanda',
 strongness:7,
 quantity:0,
 },
  {name: 'Catuai',
 country:'Latin America',
 strongness:6,
 quantity:30,
 },
   {name: 'Ethiopian Harar',
 country:'Ethiopia',
 strongness:2,
 quantity:17,
 },
   {name: 'French Mission',
 country:'Africa',
 strongness:6,
 quantity:5,
 },
   {name: 'Guadeloupe Bonifieur',
 country:'Guadeloupe',
 strongness:9,
 quantity:7,
 },
   {name: 'Maragogipe',
 country:'	Latin America',
 strongness:4,
 quantity:6,
 },
  {name: 'Robusta',
 country:'Indonesia',
 strongness:1,
 quantity:12,
 },
  {name: 'Sarchimor',
 country:'Costa Rica',
 strongness:7,
 quantity:2,
  },
   {name: 'SL34',
 country:'	Kenya',
 strongness:10,
 quantity:3,
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
function almostOutFunc(){ 
	
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

function sotrSrtongnessFunc(){
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