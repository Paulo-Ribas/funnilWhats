function Player(name) {
    let life = 1
    this.lvl = 1
    this.name = name
    this.strength = 1
    this.speed = 1
    this.kiDamage = 1
    this.life = life * 100
    this.hit = function (playerHit) {
        let damage = (this.strength * 5)
        playerHit.life -= damage
        console.log(playerHit.life)
    }
    this.transformation = function () {
        this.strength *= 50
        this.speed *= 50
        this.kiDamage *= 50
        this.life = this.life * 50
    }
    this.transformation2 = function () {
        this.strength *= 100
        this.speed *= 100
        this.kiDamage *= 100
        this.life = this.life * 100
    }
    this.transformation3 = function() {
        this.strength *= 400
        this.speed *= 400
        this.kiDamage *= 400
        this.life = this.life * 400
    }
    this.transformation4 = function () {
        this.strength *= 500
        this.speed *= 500
        this.kiDamage *= 500
        this.life = this.life * 500
    }
    this.transformation5 = function () {
        this.strength *= 3200
        this.speed *= 3200
        this.kiDamage *= 3200
        this.life = this.life * 3200
    }
    this.transformation6 = function (params) {
        this.strength *= 6400
        this.speed *= 6400
        this.kiDamage *= 6400
        this.life = this.life * 6400
    }
    this.UI = function (params) {
        this.strength *= 19000
        this.speed *= 19000
        this.kiDamage *= 19000
        this.life = this.life * 19000
    }
    this.MUI = function (params) {
        this.strength *= 33000
        this.speed *= 33000
        this.kiDamage *= 33000
        this.life = this.life * 33000
    }
    this.show = function () {
        console.log(this)
    }
}

let player1 = new Player('paulo')
let player2 = new Player('gusta')
player2.transformation6()
player2.show()
player1.MUI()
player1.hit(player2)
