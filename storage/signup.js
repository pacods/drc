(function (){
     var inputs = document.querySelectorAll('input:not([type=button])');

    var buttonDelete = document.querySelector('#buttonDelete');
    var buttonSave = document.querySelector('#buttonSave');

    function save(key, value){
        localStorage[key] = JSON.stringify(value);
    }

    function loadFormValues(){

        var signup = {};

        for (var i=0; i < inputs.length; i++){

            signup[inputs[i].name] = inputs[i].value;

        }

        save("signup", signup)
    }

    buttonSave.onclick = function(){
        loadFormValues();
    };


})();