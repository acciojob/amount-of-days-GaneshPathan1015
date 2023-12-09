//your JS code here. If required.
// let year = parseInt(prompt());

function daysOfAYear(year) {

	if(year%4===0){
		if(year%100===0 ){
			return year%400===0?366:365;
		}
		else{
			return 366;
		}
		
	}
	else{
		return 365;
	}
	
}
