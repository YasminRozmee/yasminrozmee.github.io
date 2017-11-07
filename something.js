var cash = 2000;

update_wallet();

var firstitem = document.querySelector('item')
firstitem.addEventListener("click", purchase)


function purchase(){
	var item =$(this) .data('item');
	var amount =$(this) .data('amount');

	charge_card(amount, item);
}




function charge_card(amount, item) {

	if (cash >= amount) {
	cash = cash - amount; 
	update_wallet();
	$('.closet-items').append(item +', ');
} 
	else { 
	alert('congrats. youre broke.');
	
}
}

function update_wallet() {
	$('.cash').html(cash);
}