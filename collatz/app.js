
/*
var x = 27;

//Make odd
while(x%2==0){
	x=x/2;
}

//perform collatz
while(x!=1){
	console.log(x.toString(2));
	x=((x*3)+1);
	while(x%2==0){
		x=x/2;
	}
}
console.log(x.toString(2));

var ar = [];

ar.push(2);
col(ar);
function col(ar){
	var pos = 0;
	while(pos<1000){
		if((ar[pos]-1)%3==0){
			if((ar[pos]-1)/3!=1){
				ar.push((ar[pos]-1)/3);
				console.log((ar[pos]-1)/3);
			}			
		}
		ar.push(ar[pos]*2);
		pos++;
		//console.log(ar);
	}
}*/
var x = 0;

while(x<100){
	x+=2;
	if(x%3==1){
		var y = x;
		var c = 0;
		while(y%2==0){
			y=y/2;
			c++;
		}
		console.log(x+"  "+c+"   "+y);
	}
}