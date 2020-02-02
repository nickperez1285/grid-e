



let homeBut = document.getElementById('but')
let pix = document.getElementById('home')
let pix1 = document.getElementById('home2')
let roomBut = document.getElementById('room')
let rm = 0 
let markHead = document.getElementById('markersheader')
let lists = document.getElementById('list')
let table = document.getElementById('appliances')
let addBut = document.getElementById('adder1')
let addBut2 = document.getElementById('adder2')

let roomIn= document.getElementById('roomInput')
let kwhr = document.getElementById('curHrTotVal')
let  kwyr = document.getElementById('curYrtotVal')

homeBut.addEventListener('click', () => {
	pix.style.display ='none'
	pix1.style.display ='block'
	roomIn.style.display = 'none'


})


// homeBut.addEventListener('click', ()=>
 




addBut.addEventListener('click', () => {
 	let row = document.createElement('tr')
	let data1 = document.createElement('td')
	let data2 = document.createElement('td')
	data1.innerText=  "Kenmore Dish Washer 200"
	data2.innerText= "$0.02"
	row.appendChild(data1)
	row.appendChild(data2)
	table.appendChild(row)
	kwhr.innerText= "$0.18"
	kwyr.innerText= "$1576"
})

addBut2.addEventListener('click', () => {
	let data3 = document.createElement('td')
	let data4 = document.createElement('td')
	let data5 = document.createElement('td')
	let data6 = document.createElement('td')
	let furn = document.getElementById('furnace')
	let potHR = document.getElementById('potHrtotVal')
	let potYr= document.getElementById('potYrtotVal')
	let tot = document.getElementById('savingTot')
	let bd = document.getElementById('bdWasher')
	data3.innerText=  "GE POWER  FUNRACE"
	data4.innerText= "$0.01"
	furn.appendChild(data3)
	furn.appendChild(data4)
	potHR.innerText= "$0.11"
	potYr.innerText = "$963"
	tot.style.display = 'block'
	data5.innerText= "Whirlpool Washer"
	data6.innerText = "$0.03"
	bd.appendChild(data5)
	bd.appendChild(data6)


	
})


// roomBut.addEventListener('click',() => {
// 	var list = document.getElementById('list')
// 	var li = document.createElement('li')
// 	var dropdown = document.getElementById('drpdown')
// 	var sel = dropdown.options[dropdown.selectedIndex]
// 	li.innerText = `${sel}`

// 	list.appendChild(li)
// 	// let div = document.createElement('div');
// 	// let i = document.createElement('input')
// 	// div.appendChild(i)
// 	// div.classList.add('draggable')
// 	// div.name = 'no'
// 	// div.id = 'lili'
// 	// rm = rm+1
// 	// div.innerText = `Room ${rm}`
// 	// div,append(in)

// 	list.insertBefore(li, list.childNodes[0])



// })

// function addListeners(){
//     document.getElementById('title').addEventListener('mousedown', mouseDown, false);
//     window.addEventListener('mouseup', mouseUp, false);

// }

// function mouseUp()
// {
//     window.removeEventListener('mousemove', divMove, true);
// }

// function mouseDown(e){
//   window.addEventListener('mousemove', divMove, true);
// }

// function divMove(e){
//     var div = document.getElementById('dxy');
//   div.style.position = 'absolute';
//   div.style.top = e.clientY + 'px';
//   div.style.left = e.clientX + 'px';
// }​

