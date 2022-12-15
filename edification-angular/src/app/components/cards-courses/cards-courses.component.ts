import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-courses',
  templateUrl: './cards-courses.component.html',
  styleUrls: ['./cards-courses.component.css'],
})
export class CardsCoursesComponent implements OnInit {
  @Input() image?: string;
  @Input() title?: string;
  @Input() text?: string;

  constructor() {}

  ngOnInit(): void {}
}
