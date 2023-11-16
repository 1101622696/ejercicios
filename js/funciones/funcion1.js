// funcion declarada

funciondeclarada();

function funciondeclarada() {
    console.log("esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo incluso antes de que la funcion sea declarada")
}
funciondeclarada();
// funcionexpresada()

// funcion expresada

const funcionexpresada= function(){
    console.log("funcion expresada, una funcion que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su definicion js dira: Cannot access 'funcionexpresada' before initialization")
}