document.addEventListener('DOMContentLoaded', function(event) {
    event.preventDefault();
    Vue.component('my-global-component', {
        template: '<div>전역 컴포넌트입니다.</div>'
    });

    var localComponent1 = {
        template: '<div>로컬 컴포넌트입니다.</div>'
    };

    var localComponent2 = {
        template: '<div><strong>두번째</strong> 로컬 컴포넌트입니다.</div>'
    };

    new Vue({
        el: '#app',
        data: {
            message: 'This is a parent component'
        },
        components: {
            'local-component-1': localComponent1,
            'local-component-2': localComponent2
        }
    });
});