import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  pokemons: Pokemon;
  id = '';
  name: '';
  constructor() {this.pokemons = new Pokemon(); }
  ngOnInit() {}
  codeToExecute() {
  }
}
