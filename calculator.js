const add = function (array) {
    return array.reduce((total, current) => total + current, 0);
};

const subtract  = function(array) {
    return array.reduce((total, current) => total - current);
};

const multiply = function (array) {
    return array.reduce((total, current) => total * current);
};

const divide = function(array)  {
    return array.reduce((total, current) => total / current)
}

const operate = function(){
    
}

const output = 600;
document.getElementById('output').textContent = output;