import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverButton]'
})
export class HoverButtonDirective {

  constructor(private el: ElementRef ) { }

  @HostListener('mouseover') onHover(){
    this.el.nativeElement.style.backgroundColor="#69c8ff";
  }
  @HostListener('mouseout') outHover(){
    this.el.nativeElement.style.backgroundColor="";
  }
}
