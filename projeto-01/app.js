new Vue({
    el: '.app',
    data: {
        inGame: false,
        hasLog: false,
        playerHealth: 100,
        monsterHealth: 100,
    },
    methods: {
        startGame() {
            this.inGame = !this.inGame;
        },
        finishGame() {
            this.inGame = !this.inGame;
            this.hasLog = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        normalAttack() {
            if (this.playerHealth > 0 && this.monsterHealth > 0) {
                this.playerHealth -= Math.floor((Math.random() *10) + 8);
                if (this.playerHealth < 0) {
                    this.playerHealth = 0;
                };
                
                this.monsterHealth -= Math.floor((Math.random() *10) + 5);
                if (this.monsterHealth < 0) {
                    this.monsterHealth = 0;
                };
            }
        }
    }
});