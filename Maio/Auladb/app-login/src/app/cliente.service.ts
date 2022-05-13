import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getAll(){
    let url= 'https://appbancodedados.herokuapp.com/usuarios'
    return this.http.get(url)
  }
}