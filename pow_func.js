function power() {
    const inibase = prompt ("what base?");
    const inipow = prompt ("what exp?");

    const base =+ inibase;
    const pow =+ inipow ;
  
    if (isNaN (base)){
        console.log("Base must be a number");
        return;
    }
    else if (isNaN (pow)){
        console.log("Exponential must be a number");
        return;
    }
    else if (pow === 1){
        return base;
     }
     else if (pow ===0){
        return 1;
     }
    else {
        let r =1;
        for (let e = 0; e < pow; e++) {
            r *= base;
         }
         return r
     }
    }
    power();
