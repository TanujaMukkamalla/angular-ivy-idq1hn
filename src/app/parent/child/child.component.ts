import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() data:string;
  @Output() outputdata= new EventEmitter;

  datatosend="i'm from child";

  emittingfun(){
    this.outputdata.emit(this.datatosend);
  }

  constructor() { }

  ngOnInit() {
  }

}