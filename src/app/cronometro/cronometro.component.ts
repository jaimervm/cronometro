import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { injectViewContainerRef } from '@angular/core/src/render3/view_engine_compatibility';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  segundo=0;
  @Input() inicio;
  @Output() multiplo10 = new EventEmitter;

  constructor() { }

  ngOnInit() {
    this.segundo = this.inicio;
    setInterval(()=>{
      this.segundo++;
      if(this.segundo % 10==0)
      this.multiplo10.emit(this.segundo);

    },1000 );
  }

}
