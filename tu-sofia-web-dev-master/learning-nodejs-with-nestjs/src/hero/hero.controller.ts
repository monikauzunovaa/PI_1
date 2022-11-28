import { Controller, Get, Param, Query } from '@nestjs/common';
import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Controller('/hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  getHeroes(@Query('name') name:string): Hero[] {
    return this.heroService.findHeroes(name);
  }

  @Get(':id')
  getOneHero(@Param('id') id:Number){
    return id;
  }

  @Get()
  getUniverse(@Query('universe') universe:string): Hero[]{
    return this.heroService.filterUniverse(universe);
  }
}
