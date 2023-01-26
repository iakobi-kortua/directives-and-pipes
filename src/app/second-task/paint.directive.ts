import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[paintPixel]',
})
export class paintDirective {
  @HostListener('mouseover')
  changeColor() {
    this.el.nativeElement.style.backgroundColor = 'green';
  }
  constructor(private el: ElementRef) {}
}
