
  function multiplicationTable(num){
    for(let i = 1; i <= 10; i++){
        const product = num * i;
        console.log(`${num} * ${i} = ${product}`);
    }
  }

  multiplicationTable(4); /* call the function with different aregument(definitely int) */