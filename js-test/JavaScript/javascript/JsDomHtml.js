/*script放在/body下面，可以有效防止，P标签，找寻不到*/

function find() {
    var a = document.getElementById('demo');
    var b = a.getElementsByTagName('p');
    document.getElementById('find').innerHTML = '我找到了' + b[0].innerHTML;
    document.getElementById('demo').style.visibility = 'visible';
}

function changeColor() {
    document.getElementById('demo2').style.border = '2px solid red';
    ///document.getElementById('demo2').style.font='40px';
    document.getElementById('demo2').style.color = 'blue';
    document.getElementById('demo').style.visibility = 'hidden';

}

document.getElementById("myBtn").onclick = function() {
    displayDate()
};

function displayDate() {
    document.getElementById("demo3").innerHTML = Date();
}

function input(){
    var a = document.getElementById('input').value;
    document.getElementById('inputvalue').innerHTML=a;

}

function move()
{
    document.getElementById('mouse').innerHTML="咸猪手放了上来，按一下变小，松开变大";
}
function up(){
    document.getElementById('mouse').style.width='150px';
    document.getElementById('mouse').style.height='150px';

}
function down(){
    document.getElementById('mouse').style.width='100px';
    document.getElementById('mouse').style.height='100px';
}
function out(){
    document.getElementById('mouse').innerHTML="按一下变小，松开变大"+"<br>";

}
