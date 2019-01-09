<template>
    <section>
        <ul>
            <li v-for="todoItem in todoItems" class="shadow">
                <i class="checkButton fa fa-check" aria-hidden="true"></i>
                {{todoItem}}
                <span type="button" v-on:click="removeTodo(todoItem, index)" class="removeButton">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </span>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            todoItems: []
        }
    },
    created() {
        if(localStorage.length > 0) {
            for(var i=0; i<localStorage.length; i++) {
                this.todoItems.push(localStorage.key(i));
            }
        }
    }
}
</script>

<style>
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }
    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding:0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkButton {
        line-height: 50px;
        color:#62acde;
        margin-right: 5px;
    }
    .removeButton {
        margin-left: auto;
        color: #de4343;
    }
</style>

