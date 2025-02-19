let name={
    firstname:"deepesh",
    lastname:"dandriyal",
   
}
const printFullName=function(hometown,state){
    console.log(this.firstname+" "+this.lastname+" is from "+hometown+" , "+state)
}

// printFullName.call(name,'dehradun')

let name2={
    firstname:"sachin",
    lastname:"tendulkar",
    // printFullName:function(){
    //     console.log(this.firstname+" "+this.lastname)
    // }
    //call method se function borrow from other objects and use it with data of this object

}

// //call method example
// printFullName.call(name2,'mumbai','Maharastra')

// //apply method example
// printFullName.apply(name2,['mumbai','maharashtra'])

let printMyName=printFullName.bind(name,'dehradun','uttrakhand')

printMyName()