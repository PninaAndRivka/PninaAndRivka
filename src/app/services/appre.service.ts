import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppreService {

  constructor(private _http: HttpClient) { }
  result:any;
  getCount()
  {
    
      this._http.get("/api/Appre").subscribe(res =>
        {
          debugger
          console.log(res)
          this.result=res;
        })

    return this.result;   
  }
}
