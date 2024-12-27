import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  standalone: false,
  
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input()
  public gifsCard!: Gif;

  ngOnInit(): void {
    if(!this.gifsCard) throw new Error('Gif property is required');
  }
}
