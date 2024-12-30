import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPrdouct } from './iprdouct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  http=inject(HttpClient);
  apiurl:string="https://demoapi.ritechpune.com/api/productapi";
  constructor() { }
  getProducts():Observable<IPrdouct []>
  {
    return this.http.get<IPrdouct []>(this.apiurl);
  }
}
