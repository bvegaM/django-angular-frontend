import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";

import {Direccion} from './direccion';
import {Persona} from './persona';

@Injectable()
export class dataService {
    constructor(private http: Http){}

    private headers = new Headers({'Content-Type': 'application/json'});

        getDirecciones(): Promise<Direccion[]>{
            return this.http.get('http://127.0.0.1:8000/direccion?format=json',{headers: this.headers}).toPromise().then(response => response.json()  as Direccion[])
        }

        getPersonas(): Promise<Persona[]>{
            return this.http.get('http://127.0.0.1:8000/persona?format=json',{headers: this.headers}).toPromise().then(response => response.json()  as Persona[])
        }

        deletePersona (id: number): Promise<void>{
            const url = `${"http://127.0.0.1:8000/persona"}/${id}`;
            return this.http.delete(url,{headers: this.headers}).toPromise().then(()=>null)
        }

        deleteDireccion (id: number): Promise<void>{
            const url = `${"http://127.0.0.1:8000/direccion"}/${id}`;
            return this.http.delete(url,{headers: this.headers}).toPromise().then(()=>null)
        }

        createDireccion (d: Direccion): Promise<Direccion>{
            return this.http.post("http://127.0.0.1:8000/direccion",JSON.stringify(d),{headers: this.headers}).toPromise().then(res => res.json() as Direccion)
        }

        createPersona (p: Persona): Promise<Persona>{
            console.log(p.fechaNacimiento)
            console.log(p.sexo)
            console.log(p.direccion)
            return this.http.post("http://127.0.0.1:8000/persona",JSON.stringify(p),{headers: this.headers}).toPromise().then(res => res.json() as Persona)
        }
}