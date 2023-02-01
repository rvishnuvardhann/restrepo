function sum(name,...restop){
    console.log(arguments);
    // let res=0;
    // for(let i in arguments)
    // {
    //     res+=arguments[i];
    // }
    // return res;
    
}
    let arr1=[10,20,30,40]
    let arr2=[...arr1]
    arr1.push(50);
    console.log(arr2)
    console.log(arr1)
    let name="Vishnu";
    let age=20;
    let obj={
       name,
       age,
       display:function(){
        console.log(this)
        // return 'name '+ this.name
        setTimeout(function(){
            console.log("Inside",this);
        }.bind(this),2000);
       }

    }
    let obj1={
        address:"hyderabad"
    }
    console.log(obj.display());
// console.log(sum("cvr",10,20,30,40,50));