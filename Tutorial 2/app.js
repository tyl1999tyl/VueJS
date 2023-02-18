const app = Vue.createApp({
    data() {
        return {
            showFav: false,
            websites: [
                {title: "Facebook", url: "https://www.facebook.com", isFav: false},
                {title: "Google", url: "https://www.google.com", isFav: true},
                {title: "Facebook", url: "https://www.shopee.com", isFav: false}
            ]
        }
    },
    methods: {
        handleEvent(e) {
            console.log(e.type)
        }
    },
    computed: {
        favoriteWebsites() {
            return this.websites.filter((website) => website.isFav)
        }
    }
})

app.mount("#app")