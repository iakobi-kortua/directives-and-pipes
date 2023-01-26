import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[firstTask]',
})
export class firstTaskDirective {
  @HostListener('click')
  onClick() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.color = 'black';
  }

  constructor(private el: ElementRef) {}
}
