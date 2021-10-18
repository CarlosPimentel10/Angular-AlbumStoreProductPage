import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';


@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  

  getAlbum(id){
    get(_albumUrl){
    }
    return this._http.get();
  }
}
