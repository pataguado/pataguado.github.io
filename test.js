function whatCard(){
    let ccNum = getUserInput(), cardName = "unknown";
    let validCheck = validateCC()
    const ccObj = {
         "visa": /^4[0-9]{6,}$/g,
         "mastercard": /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]   {3,}$/g, 
         "american express": /^3[47][0-9]{5,}$/g,
         "discover": /^6(?:011|5[0-9]{2})[0-9]{3,}$/g,
         "jcb": /^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/g
    };
      if(validCheck === false){
         cardName = 'Invalid card';
        return cardName
      }
      Object.keys(ccObj).forEach(function(prop){
       if(ccObj[prop].test(ccNum)){
          cardName = prop;
          }
      });
      return cardName
    }