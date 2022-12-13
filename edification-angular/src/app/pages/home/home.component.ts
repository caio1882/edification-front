import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public cards = [
    {
      id: 1,
      image: 'https://i.postimg.cc/05TZ3QsB/1623448739.webp',
      title: 'Shiba Inu',
      text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    },
    {
      id: 2,
      image: 'https://i.postimg.cc/05TZ3QsB/1623448739.webp',
      title: 'Shiba Inu',
      text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    },
    {
      id: 3,
      image: 'https://i.postimg.cc/05TZ3QsB/1623448739.webp',
      title: 'Shiba Inu',
      text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    },
  ];
}
