//select select box
const selectbox = document.querySelector('#prov');
const selectboxkabaceh = document.querySelector('#kabinaceh');
const selectboxkabbali = document.querySelector('#kabinbali');
const selectboxkabbanten = document.querySelector('#kabinbanten');
const selectboxkabbengkulu = document.querySelector('#kabinbengkulu');
const selectboxkabyogya = document.querySelector('#kabinyogya');
const selectboxjakarta = document.querySelector('#kabinjakarta');

//select cms items
const prov = document.querySelectorAll('.prov');
const kabinaceh = document.querySelectorAll('.kabinaceh');
const kabinbali = document.querySelectorAll('.kabinbali');
const kabinbanten = document.querySelectorAll('.kabinbanten');
const kabinbengkulu = document.querySelectorAll('.kabinbengkulu');
const kabinyogya = document.querySelectorAll('.kabinyogya');
const kabinjakarta = document.querySelectorAll('.kabinjakarta');

//create options and add them to the select box
prov.forEach((el) => {


	let option = document.createElement("option");
  
  option.text = el.innerText;
  option.value = el.innerText;
  
  selectbox.add(option);
});

kabinaceh.forEach((el) => {


	let option = document.createElement("option");
  
  option.text = el.innerText;
  option.value = el.innerText;
  
  selectboxkabaceh.add(option);
});

kabinbali.forEach((el) => {


	let option = document.createElement("option");
  
  option.text = el.innerText;
  option.value = el.innerText;
  
  selectboxkabbali.add(option);
});

kabinbanten.forEach((el) => {


	let option = document.createElement("option");
  
  option.text = el.innerText;
  option.value = el.innerText;
  
  selectboxkabbanten.add(option);
});

kabinbengkulu.forEach((el) => {


	let option = document.createElement("option");
  
  option.text = el.innerText;
  option.value = el.innerText;
  
  selectboxkabbengkulu.add(option);
});

kabinyogya.forEach((el) => {


	let option = document.createElement("option");
  
  option.text = el.innerText;
  option.value = el.innerText;
  
  selectboxkabyogya.add(option);
});

kabinjakarta.forEach((el) => {

	let option = document.createElement("option");
  
  option.text = el.innerText;
  option.value = el.innerText;
  
  selectboxjakarta.add(option);
});