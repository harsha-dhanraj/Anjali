import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DeviceService {

  constructor(private http:Http) { }

  findAllGateways(){
    console.log("comming hereeeeeeeee");
    let headers=new Headers();
    headers.append('Content-Type', 'application/json');
    let ep='http://localhost:8080/find';
    return this.http.get(ep,{ headers:headers })
      .map(res=>res.json());
  }

  addGateways(gateway){
    let headers=new Headers();
    headers.append('content-Type','application/json');
    let ep='http://localhost:8080/add';
    return this.http.post(ep,gateway,{headers:headers})
    .map(res=>res.json());
  }
}
