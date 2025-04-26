function shortcut(s1, s2) {
  // your code here
	if(s1=="" || s2==""){
		return "";
	}
	else{
		let c1=s1[0];
		let c2=s2[0];
		return (c1+""+c2);
	}
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));  
