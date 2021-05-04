const app = new Vue({
    el: '#app',
    data() {
        return {
            title: 'My First Vue Web Page',
            images: [{
                    src: '',
                    title: '',
                    picA: 'images/BigAaron.jpg',
                    picB: 'images/BabyAaron.jpg',
                    titleA: 'My nephew Aaron at 1 year old.',
                    titleB: 'My nephew Aaron at 2 days old.',
                    detail: 'I was a little bit grumpy when I was little because I missed my mommy\'s belly a lot!'
                },
                {
                    src: '',
                    title: '',
                    picA: 'images/BigDee.jpg',
                    picB: 'images/BabyDee.jpg',
                    titleA: 'Dayanara 2020.',
                    titleB: 'Dayanara at 6 months old.',
                    detail: 'My mom says I loved getting pictures taken and always had a big smile ready for the camara.'
                },
                {
                    src: '',
                    title: '',
                    picA: 'images/BigJoshua.jpg',
                    picB: 'images/BabyJoshua.jpg',
                    titleA: 'Joshua at 9 years old',
                    titleB: 'Joshua at 2 months old.',
                    detail: 'I was a very quiet baby most of the time. I loved when mommy would sing to me and give me lots of kisses. It made me giggle when she would call me \"My Little Man\"'
                },
                {
                    src: '',
                    title: '',
                    picA: 'images/BigSophia.jpg',
                    picB: 'images/BabySophia.jpg',
                    titleA: 'Sophia at 7 years old.',
                    titleB: 'Sophia at 1 day old.',
                    detail: 'I was a very happy baby and loved when mommy would dress me up in cute outfits. Everybody that saw me would give me lots of compliments.'
                }
            ]
        }
    }, //end of data()

    created() {
        /* This sets the sr and title property to the initial values */
        for (let key in this.images) {
            this.images[key].src = this.images[key].picA;
            this.images[key].title = this.images[key].titleA;
        }
    },

    methods: {
        picDetail(detail) {
            /* I added this method just to demonstrate the I understand how to use them */
            alert(detail);
        }
    }
});