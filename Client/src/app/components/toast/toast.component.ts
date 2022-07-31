import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  @Output() closeHit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() title: any;
  @Input() message: any;
  @Input() date:Date = new Date();
  
  constructor() { }

  ngOnInit(): void {
    // var toastElist = [].slice.call(document.querySelectorAll('.toast'))
    // toastElist.map(function(toastEl){
    //   return new bootstrap.Toast(toastEl,{})
    // })
  }

}
