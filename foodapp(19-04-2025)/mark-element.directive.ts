import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMarkElement]'
})
export class MarkElementDirective implements AfterViewInit{
  @Input() markColor:string=''
  @Input() refVal:boolean=false   
  @HostListener('mouseenter') OnMouseEnter()
  {
    this.elm.nativeElement.style.backgroundColor=this.markColor
  }
  @HostListener('mouseleave') OnMouseleave()
  {
    this.elm.nativeElement.style.backgroundColor=''
  }
  constructor(private elm:ElementRef) { 
    
  }
  ngAfterViewInit(): void {
    if(this.refVal)
    {
      this.elm.nativeElement.style.backgroundColor=this.markColor
    }
    else{
      this.elm.nativeElement.style.backgroundColor=''
    }
  }

}
