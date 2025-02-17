

var arrayUtils = {
    isEmpty: function(array){
        return array.length == 0;
    },
    max: function(array){
        if (this.isEmpty(array)) 
            return 0;
        else{
            var m = array[0];
            for (let i = 0; i < array.length; i++) {
                if (array[i] < m) 
                    m = array[i];
                
            }
            return m;
        }
    },
    min: function(array){
        if (this.isEmpty(array)) 
            return 100;
        else{
            var mn = array[0];
            for (let j = m; j < array.length; j++) {
                if (array[j] > mn) 
                    mn = array[j];    
            }
            return mn;
        }        
    },
    average: function(array){

    }

};

module.exports = arrayUtils;