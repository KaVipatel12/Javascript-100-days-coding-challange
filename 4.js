// write function which checks the type of triangle (equivalent , isosceles , scalene). 

function triangleType(sideA , sideB , sideC){
    let statement = `The triangle of side (${sideA} , ${sideB} , ${sideC}) is`; 

    if(sideA == sideB && sideB == sideC) return `${statement} equivalent triangle`; 
    else if(sideA == sideB || sideB == sideC || sideA == sideC) return `${statement} Isosceles triangle`; 
    return `${statement} Scalene triangle`;
}

console.log(triangleType( 3 , 3 , 3)) // Equivalent trianlge
console.log(triangleType( 3 , 2 , 3)) // Isosceles trianlge
console.log(triangleType( 1 , 2 , 3)) // Scalene trianlge