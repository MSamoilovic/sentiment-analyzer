import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import Lexicon from '../models/word';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }


  analyzeData(data: SafeHtml, lexiconData: Lexicon[]) {
    
    let wordArr = data.toString().split(/\s/g);
    let counter = 0;
    let rating = 0

    lexiconData.forEach((res) => {
      for(let i = 0; i < wordArr.length; i++) {

        if(res.Word.toLowerCase() == wordArr[i].replace(/,/g, '').toLowerCase().trim()) {
          wordArr[i] = `<span class="${res.Rating > 0 ? 'green' : res.Rating < 0 ? 'red' : 'neutral' }">${wordArr[i]}</span>`
          counter++;
          rating += res.Rating;
        }
      }
    })

    let text = wordArr.join(" ");

    console.log(text);

    let score = this.calculateScore(rating, counter);

    return {text, score};

  }

  private calculateScore(score: number, counter: number): number {
    if(score != 0) {

      let result = score / counter;

      return parseFloat(result.toFixed(3));
    }

    return score;
  }
}
