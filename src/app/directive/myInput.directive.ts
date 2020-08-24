import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[mayInput]'
})
export class MyInputDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.height = '25px';
    el.nativeElement.style.border = '1px solid gray';
    el.nativeElement.style.outline = 'none';
    el.nativeElement.style.padding = '0 10px';
  }}
