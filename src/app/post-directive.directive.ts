import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPostDirective]'
})
export class PostDirectiveDirective {
 
  constructor(private el: ElementRef) { 
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }

}
