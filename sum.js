function sum(a, b){

    const val1 = Number(a);
    const val2 = Number(b);

    if(val1 && val2 && (typeof val1 === 'number' && typeof val2 === 'number')){
        return val1 + val2;

    }else{
        return 'Cannot sum non-numerical values'
    }
}

module.exports = sum;