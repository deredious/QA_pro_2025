var services = {
    bouldering:"400 грн",
    lasertag:"550 грн",
    paintball:"700 грн",
    trampoline:"600 грн",
    crossfit:"250 грн",
    xpark:"600 грн",
    price() {

        let sum = 0;
        for (let key in services) {

            if (typeof services[key] === 'string') {
            let price = services[key].split (" ")[0];
            sum += parseInt(price);
            } 
            
        }
        return sum; 
    },
    minPrice() {
        let sum = 999999;
        for (let key in services) {
            

            if (typeof services[key] === 'string') {
            let price = parseInt(services[key].split (" ")[0]);
                if (sum > price){
                    sum = price;
                }
            } 
            
        }
        return sum; 
    },
    maxPrice() {
        let sum = 0;
        for (let key in services) {
            

            if (typeof services[key] === 'string') {
            let price = parseInt(services[key].split (" ")[0]);
                if (sum < price){
                    sum = price;
                }
            } 
            
        }
        return sum; 
    },
};
  
