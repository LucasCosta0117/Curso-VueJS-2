new Vue({
    el: '#desafio',
    data: {
        myName: 'Lucas Costa',
        myAge: 28,
        linkPhoto: 'https://res.cloudinary.com/practicaldev/image/fetch/s--I4FWon9Y--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ll22z8mea106b4vjdjy7.jpeg'
    },
    methods: {
        mult3xAge: function(age) {
            const value = age * 3;
            return value;
        },
        randomNumb: function() {
            const numb = Math.random();
            return numb;
        }
    }
});