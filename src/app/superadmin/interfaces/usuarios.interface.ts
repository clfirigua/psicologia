export interface Usuarios{
    id?:string,
    nombre:string,
    apellido:string,
    telefono:number,
    direccion:string,
    correo:string,
    identificacion:number,
    formularios?:formulario,
    rh:tiposangre,
    genero:generos
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

