export const getAvailableHeroes = (heroes, squadHeroes, filter) => 
  heroes.filter(hero => hero.name.includes(filter) && !squadHeroes.includes(hero.id));

export const getSquadHeroes = (heroes, squadHeroesIds) => {
  const squadHeroes = [];
  if (squadHeroesIds.length !== 0) {
    // squadHeroesIds.map(heroId => {
    //   const squadHero = heroes.filter(hero => hero.id.includes(heroId));
    //   return squadHero[0];
    // })
    
    for (let i = 0; i < squadHeroesIds.length; i+=1) {
      const squadHero = heroes.filter(hero => hero.id.includes(squadHeroesIds[i]));
      squadHeroes.push(squadHero[0]);      
    }
  }
  return squadHeroes;
}

