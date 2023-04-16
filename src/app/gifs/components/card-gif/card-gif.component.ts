import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-card-gif',
  templateUrl: './card-gif.component.html',
  styleUrls: ['./card-gif.component.css']
})
export class CardGifComponent implements OnInit{

  @Input()
  public gif!: Gif;

  ngOnInit(): void {

    if ( !this.gif ) throw new Error('Method not implemented');
  }

}
