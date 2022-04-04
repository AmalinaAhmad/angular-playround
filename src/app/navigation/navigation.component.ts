import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],


})
export class NavigationComponent implements OnInit {
  Data : any = [];
  hour : any ;
  minutes : any ;


  constructor(public services: ConfigService) {}

  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers() {
    return this.services.getUsers().subscribe((res: {}) => {
      this.Data = res;
      let {data} = this.Data;
      let {waktu_solat } = data[0];
      // this.time = waktu_solat[5].time;
      this.getCountDown(waktu_solat[5].time);

    });
  }
  getCountDown (_value: any){
    const myArray = _value.split(":");
    let hourAPI = myArray[0];
    let minuteAPI = myArray[1];
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    this.hour = hourAPI-hour;
    this.minutes = minutes-minuteAPI;
  }
}
