import { Injectable } from '@angular/core';
import {IWord} from "../model/i-word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words : IWord[] = [
    {
      word : "Hello",
      mean : "Xin Chao"
    },
    {
      word : "Bye",
      mean : "Tam Biet"
    },
    {
      word : "BatRan",
      mean : "Ba Tran Cuc Giau"
    }
  ]

  constructor() { }

}
