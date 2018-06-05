export const getAvailableHeroes = (heroes, squadHeroes, filter) => 
  heroes.filter(hero => hero.name.includes(filter) && !squadHeroes.includes(hero.id));

export const getSquadHeroes = (heroes, squadHeroes) => {
  if (squadHeroes.length === 0) return [];
  else {
    console.log('SquadHeroes', heroes.filter(hero => hero.id.includes(squadHeroes)));
      return heroes.filter(hero => hero.id.includes(squadHeroes));
  }
}

