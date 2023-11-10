new Vue({
    el: '#desafio2',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert("Botão clickado!");
        },
        getValor(event) {
            this.valor = event.target.value;
        }
    }
})