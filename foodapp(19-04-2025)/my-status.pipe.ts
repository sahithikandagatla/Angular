import { ElementRef, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myStatus'
})
export class MyStatusPipe implements PipeTransform {
  constructor(private elm:ElementRef)
  {
    
  }
  transform(value: unknown, ...args: unknown[]): string {
    // this.elm.nativeElement.style.backgroundColor="blue"
    if(value==true)
      return 'ACTIVE'
    else
      return 'IN-ACTIVE'
  }

}
