import { Component, OnInit, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-details-container',
  templateUrl: './details-container.component.html',
  styleUrls: ['./details-container.component.css']
})
export class DetailsContainerComponent implements OnInit {

  constructor() { }

  @Input() template: TemplateRef<any>;

  @Input() context: string;


  ngOnInit() {
  }

}