import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
  standalone: false
})
export class HighlighterDirective {

  constructor(private elements: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elements.nativeElement, 'color', 'green');
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.elements.nativeElement, 'color', 'blue');
  }

  @HostListener('mouseout') onMouseOut(){
    console.log('jjj');
    this.renderer.setStyle(this.elements.nativeElement, 'color', 'green');
  }

}
