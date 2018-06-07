export const getAvailableHeroes = (heroes, squadHeroes, filter) => 
  heroes.filter(hero => hero.name.includes(filter) && !squadHeroes.includes(hero.id));

export const getSquadHeroes = (heroes, squadHeroesIds) => {
  const squadHeroes = [];
  if (squadHeroesIds.length !== 0) {
    // squadHeroesIds.map(heroId => {
    //   const squadHero = heroes.filter(hero => hero.id.includes(heroId));
    //   return squadHero[0];
    // }
    for (let i = 0; i < squadHeroesIds.length; i+=1) {
      const squadHero = heroes.filter(hero => hero.id === squadHeroesIds[i]);
      squadHeroes.push(squadHero[0]);      
    }
  }
  return squadHeroes;
}

export const getSquadStats = (squadHeroes) => {
  const squadStats = {
    str: 0,
    int: 0,
    spd: 0
  };
  if (squadHeroes.length !== 0) {
    squadHeroes.map(hero => {
      squadStats.str += hero.strength;
      squadStats.int += hero.intelligence;
      squadStats.spd += hero.speed;
      return squadStats;
    })
  }
  return squadStats;
}


