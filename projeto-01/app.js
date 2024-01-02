new Vue({
    el: '.app',
    data: {
        inGame: false,
        hasLog: false,
        playerHealth: 100,
        monsterHealth: 100,
        playerBar: '',
        monsterBar: '',
    },
    watch: {
        playerHealth() {
            if (this.playerHealth > 20) {
                const width = 300 * (this.playerHealth / 100);
                this.playerBar = {
                    'background-color' : 'green',
                    'width': `${width}px`,
                    'height': '20px',
                };
            } else {
                const width = 300 * (this.playerHealth / 100);
                this.playerBar = {
                    'background-color' : 'red',
                    'width': `${width}px`,
                    'height': '20px',
                };
            }
        },
        monsterHealth() {
            if (this.monsterHealth > 20) {
                const width = 300 * (this.monsterHealth / 100);
                this.monsterBar = {
                    'background-color' : 'green',
                    'width': `${width}px`,
                    'height': '20px',
                };
            } else {
                const width = 300 * (this.monsterHealth / 100);
                this.monsterBar = {
                    'background-color' : 'red',
                    'width': `${width}px`,
                    'height': '20px',
                };
            }
        }
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