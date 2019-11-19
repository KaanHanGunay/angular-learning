import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input() element: {type: string, name: string, content: string};
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log((this.paragraph.nativeElement as HTMLParagraphElement).textContent);
  }

}
