
function saturdayFun() {
    console.log("This Saturday, I want to have Fun!");
}
saturdayFun();
//=> "This Saturday, I want to have Fun!"
function saturdayFun(opt="roller-skate"){
    return `This Saturday, I want to ${opt}!`;
}
saturdayFun("bathe my dog");

function mondayWork(ala="go to the office"){
    return `This Monday, I will ${ala}.`;}

    function wrapAdjective(adjective="*"){
        const innerF= function(para="special"){
            return `You are ${adjective}${para}${adjective}!`;
        }
        return innerF;
        }
