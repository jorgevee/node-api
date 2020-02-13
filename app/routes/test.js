// Sum of all multiples of 3 or 5 less than 1000, and how you calculated //it

//Complexity runtime 0(n)

const sum = () => {
  total = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      total = +i;
      console.log(total);
    }
  }
};

sum();
