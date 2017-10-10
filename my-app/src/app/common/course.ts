// definicion para usarlo en otros componentes
export interface Course { // lo exportamos para que este disponible en mi proiyecto (definir estructura)
    // tslint:disable-next-line:semicolon
    id: number,
    // tslint:disable-next-line:semicolon
    name: string,
    // tslint:disable-next-line:semicolon
    image: string,
    // tslint:disable-next-line:semicolon
    price: number,
    state ?: string // ? opcional
}
