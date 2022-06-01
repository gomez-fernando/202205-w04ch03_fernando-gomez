export class Personaje{
    static serie = 'GoT';
    private _estadoVivo: boolean;
   
    protected mensaje: string;
    constructor(
        public nombre: string,
        public familia: string,
        public edad: number,
        public categoria: 'rey' | 'luchador' | 'asesor' | 'escudero'
    ) {
        this._estadoVivo = true;
        this.mensaje = '';
    }
  
    public get estadoVivo(): boolean {
        return this._estadoVivo;
    }

    comunicar() {
        return this.mensaje;
    }

    morir() {
        this._estadoVivo = false;
    }
}