console.log("cargando...")


let vHelados = []
let vVentas = []
let opcion = 0;

const menu = `
1. Agregar helado.
2. Modificar helado.
3. Eliminar helado.
4. Mostrar inventario.
5. Realizar venta.
6. Modificar helado por nombre
7. Salir del sistema.
`

while (true) {
    opcion = parseInt(prompt('Por favor indique una opción:\n' + menu))

  if (opcion === 1) {
    agregarHelado()
  } else if (opcion === 2) {
    modificarHelado()
  } else if (opcion === 3) {
    eliminarHelado()
  } else if (opcion === 4) {
    alert(mostrarInventario())
  } else if (opcion === 5) {
    venderHelado()
  } else if (opcion === 6) {
    modHeladoNombre()
  } else if (opcion === 7) {
    alert('Saliendo del sistema.')
    break
  }

}


function agregarHelado() {
  let nuevoHelado = {
    nombre: prompt('Ingrese el nombre del helado:'),
    sabor: prompt('Ingrese el sabor del helado: '),
    cantidad: prompt('Ingrese la cantidad: '),
    precio: prompt('Ingrese el precio: ')
  }
  vHelados.push(nuevoHelado)
}



function mostrarInventario() {
  let info = 'INVENTARIO DE HELADOS' + '\n\n'
  for (let i = 0; i < vHelados.length; i++) {
    info += `${i}. Nombre: ${vHelados[i].nombre}, ` +
      `Sabor: ${vHelados[i].sabor}, ` +
      `Cantidad: ${vHelados[i].cantidad}, ` +
      `Precio: \$${vHelados[i].precio}\n`
  }
  return info
}



function eliminarHelado() {
  let opcion = prompt('Seleccione el helado que desea eliminar:\n\n' + mostrarInventario())
  vHelados.splice(opcion, 1)
}



function modificarHelado() {
  let elegir = prompt(`elija un helado del inventario:\n\n` + mostrarInventario())

  let modificado = {
    nombre: prompt(`Elija nuevo nombre`),
    sabor: prompt(`Elija nuevo sabor`),
    cantidad: prompt(`Elija nueva cantodad`),
    precio: prompt(`Elija nuevo precio`)
  }

  vHelados[elegir] = modificado

  /*
    vHelados[elegir].nombre = modificado.modNombre
    vHelados[elegir].sabor = modificado.modSabor
    vHelados[elegir].cantidad = modificado.modCantidad
    vHelados[elegir].precio = modificado.modPrecio
    */

}



function modHeladoNombre() {
  let nom = prompt(`elija el nombre  del helado del inventario:\n\n` + mostrarInventario())

  let modNom = {
    nombre: prompt(`Elija nuevo nombre`),
    sabor: prompt(`Elija nuevo sabor`),
    cantidad: prompt(`Elija nueva cantidad`),
    precio: prompt(`Elija nuevo precio`)
  }

  for (i = 0; i < vHelados.length; i++) {
    if (vHelados[i].nombre === nom) {

      /*
            vHelados[i].nombre = modNom.nombre
            vHelados[i].sabor = modNom.sabor
            vHelados[i].cantidad = modNom.cantidad
            vHelados[i].precio = modNom.precio
            */

      vHelados[i] = modNom

    }
  }
}


function venderHelado() {
  let helado = prompt(`elija el helado que quiere comprar:\n\n` + mostrarInventario())
  let cant = prompt(`Elija la cantidad`)

      if (cant > vHelados[helado].cantidad) {
        alert(`Ha superado la cantidad de helados disponibles , la cantidad disponible es ${vHelados[helado].cantidad} ` )
      } else {
        vHelados[helado].cantidad = vHelados[helado].cantidad - cant
        alert(" el total de la compra es " + (cant * vHelados[helado].precio ))
      }
  }
  
