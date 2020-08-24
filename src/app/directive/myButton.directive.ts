import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[myButton]'
})
export class MyButtonDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.height = '25px';
    el.nativeElement.style.background = 'white';
    el.nativeElement.style.border = '1px solid gray';
    el.nativeElement.style.outline = 'none';
    el.nativeElement.style.cursor = 'pointer';
  }}
