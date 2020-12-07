// let age = 100;
// let age2 = age
// console.log(age, age2)
// age = 200
// console.log(age,age2)

// let name = 'Muhammad'
// let name2 = name
// console.log(name, name2)
// name = 'notMuhammad'
// console.log(name, name2)

// start with strings, numbers and booleans

  // Let's say we have an array
const players = ['Muhammad', 'Yasmin', 'Guy', 'Guyette']

// and we want to make a copy of it.
const team = players



// You might think we can just do something like this:
team[3] = 'Lux'

// however what happens when we update that array?
console.log(team)

// now here is the problem!
console.log(team, players)

console.log(players, 'this will be the same as the team is a reference')
// oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    // one way
    const team2 = players.slice()
    
    team2[3] = 'Lux'
    console.log(team2, 'copy of players with edited last key to Lux')
    console.log(players, 'Players array still intact with Guyette in end')


    // or create a new array and concat the old one in
    const team3 = [].concat(players)

    // or use the new ES6 Spread -- Favourite
      const team4 = [...players]
      team4[3] = 'HeeHaaw'
      console.log(team4)      
      console.log(players) 
      
    //You can also use Array.from() -- Favourite

    const team5 = Array.from(players)
    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object
    // with Objects
    const person = {
      name: 'Muhammad Jalabi',
      age: 29
    };

    // and think we make a copy:
        //Cannot do this:
        // const captain = person
        // person.number = 833
        //That will only be a reference like for team array on line 19

    // how do we take a copy instead?
    //Object.assign() and start with 1. blank object, 2. pass it object to copy values from, 3. and fold in properties to overwrite/add
    const captain2 = Object.assign({}, person, {number: 299})
    console.log(captain2, 'Copy of person object with extra "number" key added')
    console.log(person, 'Person object still intact')
    
    // Beloved ...spread on an object
    const captain3 = {...person}
    console.log(captain3, 'captain 3 using ... spread operator on objct')
    
    // ... Spreading + changing
    const captain4 = {...person, name: 'Yasmin Abouhachem', age: 24}
    console.log(captain4, '... spreading object person and adding/modifying keys of name and age')

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const mj = {
  name: 'Muhammad',
  age: 173,
  social: {
    twitter: 'no',
    linkedin: 'no',
    facebook: 'no'
  }
}
console.log(mj)

function objectAccess(object,key) {
  return object[key]
}



const dev = Object.assign({}, mj)
console.log(dev, 'copy of mj')
dev.name = 'notMuhammad'
console.log(dev, 'changing name one level works')
dev.social.twitter = '@twitterName, dude'
console.log('dev after changing dev.social.twitter', dev)
console.log('mj after changing dev.social.twitter', mj)
console.error('dev.social.twitter should not have changed mj.social.twitter. So this means:')
console.error('Object.assign only works one level, you need cloneDeep to go deeper')
console.warn('But ask yourself. Do you really need to clone an object that deep?')

// You can "cheat" with json.parse and json.stringify but need to double check potential performance 
const dev2 = JSON.parse(JSON.stringify(mj))
dev2.social.twitter = "@YESMAN!"
console.log('dev2.social.twitter changed',dev2)
console.log('MJ object untouched and intact instead of having "@YESMAN!" as mj.social.twitter value',mj)
