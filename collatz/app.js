var x = 49;

//Make odd
while(x%2==0){
	x=x/2;
}

//perform collatz
while(x!=1){
	x=((x*3)+1);
	while(x%2==0){
		x=x/2;
	}
	console.log(x.toString(2));
}
