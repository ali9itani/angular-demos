import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second-ad',
  templateUrl: './second-ad.component.html',
  styleUrls: ['./second-ad.component.css']
})
export class SecondAdComponent implements OnInit {
  @Input('data') data: {additionalMsg: string};

  constructor() { }

  ngOnInit() {
  }

}