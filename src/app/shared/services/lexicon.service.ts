import { Injectable } from '@angular/core';
import Lexicon from '../models/word';
@Injectable({
  providedIn: 'root',
})
export class LexiconService {
  lexiconData: Lexicon[];

  constructor() {}

  getLexiconData(): Lexicon[] {
    this.lexiconData = JSON.parse(localStorage.getItem('lexicon') || '');
    return this.lexiconData;
  }

  saveLexiconData(data: Lexicon, dataSource:any) {
    this.lexiconData = JSON.parse(localStorage.getItem('lexicon') || '');
    dataSource.push(data)
    localStorage.setItem('lexicon', JSON.stringify(dataSource));
    return dataSource;
  }

  updateLexiconData(id: any, data: Lexicon, dataSource:any) {
    
    dataSource.filter((val: any) => {
      if(val.Id == id) {
        val.Word = data.Word;
        val.Rating = data.Rating;
      }

      return true
    })

    localStorage.setItem('lexicon', JSON.stringify(dataSource));

    return dataSource;
  }

  deleteLexiconData(res:Lexicon, dataSource: any) {
    const delElementIndex = dataSource.findIndex((val:any) => val.Id == res.Id);
    dataSource.splice(delElementIndex, 1);
    localStorage.setItem('lexicon', JSON.stringify(dataSource));
    return dataSource;
  }
}
