const app = Vue.createApp({
    data() {
        return {
            data: {
                count: 0
            }
        }
    },
    methods: {
        increaseCount() {
            this.data.count++
        },
        decreaseCount(data) {
            data.count--
        }
    }
})

app.mount("#app")