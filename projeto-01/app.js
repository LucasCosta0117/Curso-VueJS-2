new Vue({
    el: '.app',
    data: {
        inGame: false,
    },
    methods: {
        startGame() {
            this.inGame = !this.inGame;
        },
        finishGame() {
            this.inGame = !this.inGame;
        }
    }
});