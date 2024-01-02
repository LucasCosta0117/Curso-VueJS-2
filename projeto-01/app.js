new Vue({
    el: '.app',
    data: {
        inGame: false,
        endGame: false,
        winner: '',
        hasLog: false,
        playerHealth: 100,
        monsterHealth: 100,
        playerBar: '',
        monsterBar: '',
        logGame: [],
    },
    watch: {
        playerHealth(newValue) {
            if (newValue > 20) {
                const width = 300 * (this.playerHealth / 100);
                this.playerBar = {
                    'background-color' : 'green',
                    'width': `${width}px`,
                    'height': '20px',
                };
            } else {
                const width = 300 * (newValue / 100);
                this.playerBar = {
                    'background-color' : 'red',
                    'width': `${width}px`,
                    'height': '20px',
                };
            }
            if (newValue <= 0) {
                this.endGame = true;
                this.inGame = false;
                this.winner = 'M'
            }
            console.log(this.logGame);
        },
        monsterHealth(newValue) {
            if (newValue > 20) {
                const width = 300 * (this.monsterHealth / 100);
                this.monsterBar = {
                    'background-color' : 'green',
                    'width': `${width}px`,
                    'height': '20px',
                };
            } else {
                const width = 300 * (newValue / 100);
                this.monsterBar = {
                    'background-color' : 'red',
                    'width': `${width}px`,
                    'height': '20px',
                };
            }
            if (newValue <= 0) {
                this.endGame = true;
                this.inGame = false;
                this.winner = 'P';
            }
        },
        logGame(newValue) {
            this.hasLog = newValue.length > 0 ? true : false
        }
    },
    methods: {
        startNewGame() {
            this.inGame = !this.inGame;
            this.endGame = false;
            this.hasLog = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.logGame = [];
        },
        normalAttack() {
            if (this.playerHealth > 0 && this.monsterHealth > 0) {
                const monsterHit = Math.floor((Math.random() *10) + 8);
                this.playerHealth -= monsterHit;
                if (this.playerHealth < 0) {
                    this.playerHealth = 0;
                };
                
                const playerHit = Math.floor((Math.random() *10) + 5);
                this.monsterHealth -= playerHit;
                if (this.monsterHealth < 0) {
                    this.monsterHealth = 0;
                };

                this.logGame.push({
                    'MonsterHit': `Monstro ataca com ${monsterHit}`,
                    'PlayerHit': `Jogador ataca com ${playerHit}`
                });
            }
        },
        specialAttack() {
            if (this.playerHealth > 0 && this.monsterHealth > 0) {
                const monsterHit = Math.floor((Math.random() *10) + 5);
                this.playerHealth -= monsterHit;
                if (this.playerHealth < 0) {
                    this.playerHealth = 0;
                };
                
                const playerHit = Math.floor((Math.random() *10) + 8);
                this.monsterHealth -= playerHit;
                if (this.monsterHealth < 0) {
                    this.monsterHealth = 0;
                };

                this.logGame.push({
                    'MonsterHit': `Monstro ataca com ${monsterHit}`,
                    'PlayerHit': `Jogador ataca com ${playerHit}`
                });
            }
        },
        healing() {
            if (this.playerHealth < 100) {
                const monsterHit = Math.floor((Math.random() *10) + 5);
                this.playerHealth -= monsterHit;
                if (this.playerHealth < 0) {
                    this.playerHealth = 0;
                };
                
                const playerHeal = Math.floor((Math.random() *10) + 5);
                this.playerHealth += playerHeal;
                if (this.playerHealth >= 100) {
                    this.playerHealth = 100;
                };

                this.logGame.push({
                    'MonsterHit': `Monstro ataca com ${monsterHit}`,
                    'PlayerHit': `Jogador curado em ${playerHeal}`
                });
            }
        }
    }
});