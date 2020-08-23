let catAge = prompt('please input your cat Age in year(s)');

const catToHumanConverter = catAge => {
    if(catAge<=1){
        return catAge*15;
    }
    else if(1<catAge && catAge<=2){
        return catAge*12;
    }
    else if(2<catAge && catAge<=3){
        return catAge*8;
    }
    else if(catAge>3){
        return 24+((catAge-2)*4);
    }
    else{
        return "please input correct value";
    }
}

console.log(catToHumanConverter(catAge))
alert(`your cat age is equal to ${catToHumanConverter(catAge)}`);