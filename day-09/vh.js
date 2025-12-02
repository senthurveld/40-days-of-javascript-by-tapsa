// With var
// {
// console.log('name is ', name);
// var name = "tom";
// name = 'tom';
// console.log('name is ', name);
// }

// With let
// {
//     console.log('name is ', name);
//     let name = "tom";
//     name = 'tom';
//     console.log('name is ', name);
// }

// With const
// {
//     console.log('name is ', name);
//     const name = "tom";
//     //name = 'tom';
//     console.log('name is ', name);
// }


// Temporal Dead Zone(TDZ)

// TDZ = an area where you can not access a variable until it is initialized

// ReferenceError

{
    // === name variable's TDZ started here
    //
    //console.log(name); // RerenceError
    //
    // console.log(address); // RerenceError
    // let address = "bangalore";
    // //
    // let name = "tapaScript" // === name variable's TDZ ends here
    // console.log(name);
    // //
    //
}

// {
//     console.log(1)
//     console.log(2)
//     console.log(name);
//     console.log(3);
//     console.log(4);
//     console.log(5);
//     const name ="senthur";
//     console.log(5);
//     console.log(5);
//     console.log(name);

// }