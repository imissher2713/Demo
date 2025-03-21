function getParent(start, end){
    while(start.parentElement == end){
        start = start.parentElement;
    }
    return start;
}
function Validator(options){
    var formElement = document.querySelector(options.form);
    let selectorRule = {};
    for(let rule of options.rules){
        if(Array.isArray(selectorRule[rule.selector])){
            selectorRule[rule.selector].push(rule.test);
        }
        else{
            selectorRule[rule.selector] = [rule.test];
        }
    }
    let validate = function(rule, InputElement, ErrorElement){
        // var ErrorElement = InputElement.parentElement.querySelector(options.ErrorElement);
        var ErrorValue;
        for(let test of selectorRule[rule.selector]){
            switch(InputElement.type){
                case "text":
                case "email":
                case "password":
                    ErrorValue = test(InputElement.value);
                    break;
                // case "radio":{  
                //     let radioElement = InputElement.parentElement.querySelectorAll(InputElement);
                //     let checked = true
                //     if(radioElement.length == 0){
                //         checked = false;
                //         ErrorValue = test(checked);
                //     }
                // }
            }
            if(ErrorValue){
                return ErrorValue;
            }
        }
        return false;
    }
    if(formElement){
        formElement.onsubmit = function(e){
            options.rules.forEach(function(rule){
                var InputElement = formElement.querySelector(rule.selector);
                var Error = validate(rule, InputElement);
                if(!Error){
                    e.preventDefault(); 
                }
            })
        }
        options.rules.forEach(function(rule){
            var InputElement = formElement.querySelector(rule.selector);    
            var ErrorElement = InputElement.parentElement.querySelector(options.ErrorElement)
            console.log(ErrorElement)
            if(InputElement){
                InputElement.onblur = function(e){
                    var Error = validate(rule, InputElement, ErrorElement)
                    if(Error){
                        if(InputElement.type != "radio"){
                            InputElement.classList.add('red');
                            ErrorElement.innerText = Error
                        }
                    }

                }      
                InputElement.oninput = function(){
                    if(InputElement.type != "radio"){
                        InputElement.classList.remove('red');
                    }
                    ErrorElement.innerText = "";
                    console.log(ErrorElement)
                }
            }
        })
    }
};

Validator.isRequired = function(Name, Value){
    return{
        selector: Name,
        test: function(value){
            return value ? "" : Value;

        }
    }
}
Validator.isEmail = function(Email, Value){
    return{
        selector: Email,
        test: function(value){
            return value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? "" : Value;
        }
    }

}
Validator.isPassword = function(selector, text){
    return {
        selector: selector,
        test: function(value){
            return value.length >= 8 ? "" : text;
        }
    }

}
Validator.isConfirm = function(selector, password, text){
    return{
        selector: selector,
        test: function(value){
            return value === password ? undefined : text;
        }
    }
}