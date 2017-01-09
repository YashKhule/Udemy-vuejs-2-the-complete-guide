docReady(function () {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function genMove(who, action) {
    let targets = { 'player': 'monster', 'monster': 'player' }
    let actions = {
      attack: { monster: { min: 2, max: 15 }, player: { min: 1, max: 10 } },
      heal: { player: { min: 3, max: 20 }}
    }
    switch (action) {
      case 'attack':
        return {
          actor: who,
          action: 'attacks',
          target: targets[who],
          number: getRandomInt(actions.attack[who].min, actions.attack[who].max)
        }  
      case 'heal':
        return {
          actor: who,
          action: 'heals',
          target: 'self',
          number: getRandomInt(actions.heal[who].min, actions.heal[who].max)
        }  
    }
  }

  new Vue({
    el: '#app',
    data: {
      state: {
          game_states: ['NEW GAME', 'PLAYER TO MOVE', 'MONSTER TO MOVE', 'GAME OVER'],
          game_state_index: 0,
          game: 'NEW GAME',
          log: [],
          player: { health: 100 },
          monster: { health: 100 }
        }
    },
    watch: {
      'state.game_state_index': function (c, p) {
        this.player_moves = false
        console.log(`[game state] from: ${this.state.game} to: ${this.state.game_states[this.state.game_state_index]}`)
        this.state.game = this.state.game_states[this.state.game_state_index]
        switch (c) {
          case 1:
            this.player_moves = true
            break
          case 2:
            this.monsterMove()
            break
          case 3:
            this.notifyWinner()
            break
        }
      },
    },
    computed: {
      playerbar: function () {
        return `width: ${this.state.player.health}%`
      },
      monsterbar: function () {
        return `width: ${this.state.monster.health}%`
      }
    },
    methods: {
      start: function () {
        console.log('starting new game')
        this.state.game_state_index = Math.random() > 0.5 ? 1 : 2
      },
      notifyWinner: function () {
        let notification = 'nobody won!'
        if (this.state.player.health < 1) {
          notification = 'Monster has won'
        } else if (this.state.monster.health < 1) {
          notification = 'Player has won!'
        }
        let self = this
        setTimeout(function () { alert(notification); self.initializeGame() }, 20)
        
      },
      initializeGame: function () {
        this.state = {
          game_states: ['NEW GAME', 'PLAYER TO MOVE', 'MONSTER TO MOVE', 'GAME OVER'],
          game_state_index: 0,
          game: 'NEW GAME',
          log: [],
          player: { health: 100 },
          monster: { health: 100 }
        }
      },
      stop: function () { this.initializeGame() },
      monsterMove: function () {
        let self = this
        let delay = parseInt(Math.random() * 1000)
        setTimeout(function () { 
          self.move(genMove('monster', 'attack'))
          self.endTurn('monster')
         },delay)
      },
      endTurn: function (who) {
        if (this.is_game_over()) {
          this.state.game_state_index = this.state.game_states.length - 1
        } else {
          console.dir(who)
          console.log(this.state.game_state_index)
          who === 'player'? this.state.game_state_index++ : this.state.game_state_index--
        }
      },
      move: function (entry) {
        this.state.log.unshift(entry)
        let health
        let target
        if (entry.action === 'heals') {
          health = entry.number + this.state[entry.actor].health
          if (health > 100)
            health = 100  
          target = entry.actor
        } else {
          health = this.state[entry.target].health - entry.number
          if (health < 0)
            health = 0
          target = entry.target
        }
        this.state[target].health = health
      },
      is_game_over: function () {
        return ((this.state.player.health < 1) || (this.state.monster.health < 1))
      },
      action: function (event) { 
        switch (event.currentTarget.id) {
          case 'attack':
            this.move(genMove('player', 'attack'))
            break
          case 'special-attack':
            let action
            if (Math.random() + (1 - (this.state.monster.health / 100))
                < 0.5 * (this.state.player.health / 100)) {
              let max = Math.random()
              if (max > 0.75 ) {
                action = 'annihilitates'
              } else if (max > 0.5) {
                action = 'decimates'
              } else if (max > 0.25) {
                action = 'obliterates'
              } else {
                action = 'hits'
              }
              max = Math.round(max * 10)
              if (max < 1)
                max = 1  

              this.move({ actor: 'player', action: action, target: 'monster', number: getRandomInt(1,10 * max)})

            } else {
              action = 'misses!' 

              this.move({ actor: 'player', action: action, target: 'monster', number: ''})
            }
          
            break
          case 'heal':
            this.move(genMove('player', 'heal'))
            break
        }
        this.endTurn('player')
      }
    }
  })  

})