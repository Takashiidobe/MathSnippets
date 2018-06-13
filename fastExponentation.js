const fastExponentation = (a, b) => {
  //if the base is 0, return 0;
  if (a === 0) {
    return 0;
  }
  //if the power is 0, return 1;
	else if (b === 0) {
		return 1;
  }
	//if the power is odd
	else if (b % 2 === 1) {
		return a * ((a * a) ** ((b - 1) / 2));
  }
	//else if power is even
  else if (b % 2 === 0) {
	return (a * a) ** (b / 2);
  }
}