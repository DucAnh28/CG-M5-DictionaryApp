import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../service/dictionary.service";
import {IWord} from "../model/i-word";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  words : IWord[] = [];
  meaning : IWord = {};
  constructor(private dictionaryService : DictionaryService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.words = this.dictionaryService.words;
  }
  // word : string ="";

  getWord(world: string){
    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i].word === world){
        this.meaning = this.words[i];
      }
    }
  }
}
