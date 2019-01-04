document.addEventListener('DOMContentLoaded', function(event) {
    event.preventDefault();
    Vue.component('todo-footer', {
        template: '<p>This is another global child component</p>'
    });

    var localComponent = {
        template: '<p>This is another local child component</p>'
    };

    new Vue({
        el: '#app',
        data: {
            message: 'This is a parent component'
        },
        components: {
            'todo-list': localComponent,
        }
    });
});