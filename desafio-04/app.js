new Vue({
	el: '#desafio',
	data: {
		setClassDestaque: false,
		setClassEncolher: false,
		c1: 'classe-1',
		c2: 'classe-2',
		input3: '',
		input4: '',
		isInput4: '',
		cor5: '',
		largura5: '',
		altura5: '',
		barraProgresso: '',
		valorProgresso: '',
	},
	methods: {
		iniciarEfeito() {
			setInterval( ()=> {
				const firstInteration = (this.setClassDestaque === this.setClassEncolher) ? true : false;
	
				if (firstInteration) {
					this.setClassDestaque = !this.setClassDestaque;
				} else {
					this.setClassDestaque = !this.setClassDestaque;
					this.setClassEncolher = !this.setClassEncolher;				
				}
			},500);
		},
		iniciarProgresso() {
			this.barraProgresso = 'barraProgresso';
			this.valorProgresso = 0;
			const temporizador = setInterval( () => {
				this.valorProgresso++;
				this.progresso = {
					'width': `${this.valorProgresso}%`,
					'height': '100%',
					'background-color': 'red'
				};
				if(this.valorProgresso === 100) {
					clearInterval(temporizador);
				}
			}, 50);
		},
		applyClasse1(event){
			if(event.target.value === 'true'){
				this.isInput4 = true;
			} else {
				this.isInput4 = false;
			}
		}
	},
	computed: {
		alternarEfeito() {
			return {
				destaque: this.setClassDestaque,
				encolher: this.setClassEncolher
			}
		}
	}
})
