
var isOpen = false;
var open_select_box = document.getElementById('selected');
open_select_box.addEventListener('click',open_select_option_box);

var selected_value1 = document.getElementById('option1');
selected_value1.addEventListener('click',select_value1);

var selected_value2 = document.getElementById('option2');
selected_value2.addEventListener('click',select_value2);

var selected_value3 = document.getElementById('option3');
selected_value3.addEventListener('click',select_value3);

var selected_value4 = document.getElementById('option4');
selected_value4.addEventListener('click',select_value4);

function open_select_option_box() {
    var result = document.getElementById('select_option');
    if(isOpen == false)
    {
        result.classList.add('open');
        isOpen = true;
        document.getElementById('selected').style.boxShadow = ' 0 0 2px';
        document.getElementById('selected').style.transition = 'all 0.3s';
    }
    else
    {
        result.classList.remove('open');
        isOpen = false;
        document.getElementById('selected').style.boxShadow = 'none';
        document.getElementById('selected').style.transition = 'all 0.3s';
    }
    return isOpen;
}

function select_value1(){
    if(isOpen){
        var valiu = document.getElementById('option1').value;
        document.getElementById('selected').innerHTML = `<i style="margin-right:6.5px" class="fa-solid fa-graduation-cap"></i>${valiu}`;
        document.getElementById('select_option').classList.remove('open');
        document.getElementById('selected').style.boxShadow = 'none';
        document.getElementById('selected').style.transition = 'all 0.3s';
    }
}

function select_value2(){
    if(isOpen){
        var valiu = document.getElementById('option2').value;
        document.getElementById('selected').innerHTML = `<i style="margin-right:6.5px" class="fa-solid fa-graduation-cap"></i>${valiu}`;
        document.getElementById('select_option').classList.remove('open');
        document.getElementById('selected').style.boxShadow = 'none';
        document.getElementById('selected').style.transition = 'all 0.3s';
    }
}

function select_value3(){
    if(isOpen){
        var valiu = document.getElementById('option3').value;
        document.getElementById('selected').innerHTML = `<i style="margin-right:6.5px" class="fa-solid fa-graduation-cap">${valiu}`;
        document.getElementById('select_option').classList.remove('open');
        document.getElementById('selected').style.boxShadow = 'none';
        document.getElementById('selected').style.transition = 'all 0.3s';
    }
}

function select_value4(){
    if(isOpen){
        var valiu = document.getElementById('option4').value;
        document.getElementById('selected').innerHTML = `<i style="margin-right:6.5px" class="fa-solid fa-graduation-cap"></i>${valiu}`;
        document.getElementById('select_option').classList.remove('open');
        document.getElementById('selected').style.boxShadow = 'none';
        document.getElementById('selected').style.transition = 'all 0.3s';
    }
}