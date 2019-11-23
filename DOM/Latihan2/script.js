var body = document.body;
var bodyChilds = body.children;
console.log(bodyChilds);

var eldest= document.getElementById('eldest-parent');
var eldestChilds = eldest.children;

eldestChilds[0].innerHTML = 'Diakses Melalui Eldest Parent';
var firstEldestChildContent = eldestChilds[0].innerHTML;
// var secondEldestChild = eldestChilds[1].innerHTML

var aChild = document.getElementById('a-child');

aChild.previousElementSibling.innerHTML = 'Diakses Melalui a Child'
var previousAChild = aChild.previousElementSibling.innerHTML;

aChild.nextElementSibling.innerHTML = 'Diakses Melalui a Child'
var nextAChild = aChild.nextElementSibling.innerHTML;

var grandParentAChild = aChild.parentNode.parentNode


grandParentAChild.nextElementSibling.innerHTML = 'Diakses Melalui a Child'

var thirdGrandParentAChild = grandParentAChild.nextElementSibling.innerHTML

// var grandParentAChildContent = grandParentAChild
console.log(thirdGrandParentAChild)