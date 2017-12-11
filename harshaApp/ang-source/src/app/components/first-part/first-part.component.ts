import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-first-part',
  templateUrl: './first-part.component.html',
  styleUrls: ['./first-part.component.css']
})
export class FirstPartComponent implements OnInit {
device_name:String;
device_type:String;
uAPI:String;
end_node1:String
end_node2:String
show:"";
show_gateways:Array<String>;
  constructor(private deviceService:DeviceService) { }

  ngOnInit() {
    //this.name2="abcd"+name
  }
  addGateways(){
    let gateway={
      metadata:{
        device_name:this.device_name,
        device_type:this.device_type,
        uAPI:this.uAPI
      },
      endNodes:[this.end_node1,this.end_node2]
    }
    this.deviceService.addGateways(gateway).subscribe(data=>{
     this.show=data.msg
      
    });
    this.device_name="";
    this.device_type="";
    this.uAPI="";
    this.end_node1="";
    this.end_node2="";
  }

  abcFindAllGateways(){

    this.deviceService.findAllGateways().subscribe(data=>{      
     this.show_gateways=data.msg;
     console.log(data)
     console.log("printing all gateways.................")     
      
    });
        
  }
  

}
