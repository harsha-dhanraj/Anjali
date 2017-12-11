import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-secod-part',
  templateUrl: './secod-part.component.html',
  styleUrls: ['./secod-part.component.css']
})
export class SecodPartComponent implements OnInit {
    GATEWAYS=[]
  constructor(private deviceService:DeviceService) { }

  ngOnInit() {
    this.deviceService.findAllGateways().subscribe(data =>{
      if(data.success){
      console.log(data.gateways);
     this.GATEWAYS=data.gateways
      }
    })
  }

}
