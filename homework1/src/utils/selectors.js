export const getAvailableHeroes = (heroes, squadHeroes, filter) => 
  heroes.filter(hero => hero.name.includes(filter) && !squadHeroes.includes(hero.id));

export const getSquadHeroes = (heroes, squadHeroesIds) => {
  let squadHeroes = [];
  if (squadHeroesIds.length === 0) return squadHeroes;
  else {
    for (let i = 0; i < squadHeroesIds.length; i++) {
      let hero = heroes.filter(hero => hero.id.includes(squadHeroesIds[i]));
      squadHeroes.push(hero[0]);      
    }
    return squadHeroes;
  }
}

