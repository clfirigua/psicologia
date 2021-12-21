export interface Usuarios{
    id?:string,
    nombre:string,
    apellido:string,
    telefono:string,
    direccion:string,
    correo:string,
    identificacion:string,
    formularios?:formulario,
    rh:tiposangre,
    genero:generos,
    estado?:string,
    fnacimiento?:string
}

export interface formulario{
    id: string
}
export enum tiposangre{
    one='O-',
    opo='O+',
    ane='A-',
    apo='A+',
    bne='B-',
    bpo='B+',
    abpo='AB+',
    abne='AB-'
}
export interface Generos{
    genero:generos
}
export enum generos{
    mascu='Masculino',
    feme='Femenino'
}

