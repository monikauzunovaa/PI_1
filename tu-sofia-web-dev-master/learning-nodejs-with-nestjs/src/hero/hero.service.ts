import { Injectable } from '@nestjs/common';
import { Hero } from './hero.model';

@Injectable()
export class HeroService {
    heroes: Hero[] = [
      {name:'Spiderman',
      realName:'Peter Parker',
      powers:['web','strength'],
      universe:'Marvel'},
      {name:'Hulk',
      realName:'Banner',
      powers:['strength'],
      universe:'Marvel'},
      {name:'uzunova',
      realName:'monika',
      powers:['kifla'],
      universe:'bg,sofiq'}
    ];

    findHeroes(name:string):Hero[]{
      let holder = [];
      this.heroes.forEach(function(hero){
        if(name.includes(hero.name)||name.includes(hero.name.toLowerCase())){
          holder.push(hero)
        }
      })
      return holder;
    }
    filterUniverse(universe:string): Hero[] {
      let n = [];
      this.heroes.forEach(function (hero) {
        if (universe.includes(hero.universe)) {
          n.push(hero);
        }
      });
      return n;
    }
}
