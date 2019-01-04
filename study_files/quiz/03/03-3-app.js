document.addEventListener('DOMContentLoaded', function(event) {
    event.preventDefault();

    Vue.component('sibling-component', {
        props: ['propsdata'],
        template: '<p>{{ propsdata }}</p>',
    });

    Vue.component('child-component', {
        props: ['propsdata'],
        template: '<p>{{ propsdata }}<button v-on:click="copyString">show</button></p>',
        methods: {
            copyString: function() {
                this.$emit('paste-string');
            }
        }
    });

    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue! passed from Parent Component',
            anotherMessage: 'Hello Vue! have a nice day'
        },
        methods: {
            pasteString: function() {
                this.anotherMessage = this.anotherMessage===this.message ? 'Hello Vue! have a nice day' : this.message;
            }
        }
    });
});