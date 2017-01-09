<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
<hr />
<button class="btn btn-primary" v-on:click="show = !show">Show alert</button>
<transition name="fade"><div class="alert alert-info" v-if="show">This is some info</div></transition>
<transition name="slide"><!-- type="animation", attributes are bindable and dynamic --><div class="alert alert-info" v-if="show">This is some info</div></transition>
<transition name="fade" appear><div class="alert alert-info" v-if="show">This is some info</div></transition>
<transition name="fade" enter-active-class="animated bounce" leave-active-class="animated shake"><!-- must not be empty. also supports: 
    enter-class="" 
    leave-class=""  
    appear does not work with them --><div class="alert alert-info" v-if="show">This is some info</div></transition>

    <hr />
    <transition name="fade" mode="out-in"><!-- let out animate first -->
        <div class="alert alert-info" v-if="show" key="info">This is some info</div>
        <div class="alert alert-warning" v-else key="warning">This is some other info</div>
    </transition>

    <hr />
    <h3>JS hooks</h3>
    <button class="btn btn-primary" v-on:click="load = !load">Toggle Element</button>
    <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:enter-cancelled="enterCancelled"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
        v-on:after-leave="afterLeave"
        v-on:leave-cancelled="leaveCancelled"

        :css="false"
    >
    <!-- v-bind:css above is optional -->
    <div class="js-hook" v-if="load">This is some info</div></transition>

    <hr />

    <button class="btn btn-primary" v-on:click="addItem">add item</button>
    <ul class="list-group">
        <transition-group name="slide">
            <li class="list-group" :key="number" v-for="(number, index) in numbers" v-on:click="removeItem(index)">
                {{number}}
            </li>
        </transition-group>
    </ul>
    
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
          return {
            show: false,
            //show: true
            load: true,
            elementWidth:100,
            numbers: [1,2,3,5,7,11]//,13,17,19,23,29,31]
          }   
        },
        methods: {
            beforeEnter(el) {
                console.log('beforeEnter')
                this.elementWidth = 100
                el.style.width = this.elementWidth + 'px'
            },
            enter(el, doneCallback) {
                console.log('enter')
                // run doneCB after js-animations finishes
                let t = 0;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + t++ * 10) + 'px'
                    if(t>20) {
                        clearInterval(interval)
                        doneCallback()
                    }
                }, 20);
            },
            afterEnter(el) {
                console.log('afterEnter')
            },
            enterCancelled(el) {
                console.log('enterCancelled')
            },
            beforeLeave(el) {
                this.elementWidth = 300
                el.style.width = this.elementWidth + 'px'
                console.log('beforeLeave')
            },
            leave(el, doneCallback) {
                console.log('leave')
                // run doneCB after js-animations finishes
                let t = 0;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - t++ * 10) + 'px'
                    if(t>30) {
                        clearInterval(interval)
                        doneCallback()
                    }
                }, 20);
            },
            afterLeave(el) {
                console.log('afterLeave')
            },
            leaveCancelled(el) {
                console.log('leaveCancelled')
            },

            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length)
                const sorted = this.numbers.slice()
                sorted.sort((a,b) => +a -b)
                this.numbers.splice(pos,0, sorted[sorted.length -1] + 2)
            },
            removeItem(index) {
                this.numbers.splice(index,1)
            }

        }
    }
</script>

<style>
.alert { margin-top: 2rem; }

.fade-enter { opacity: 0; }
.fade-enter-active { transition: opacity 1s }
.fade-leave {  }
.fade-leave-active { transition: opacity 1s; opacity: 0 }

.slide-enter {  }
.slide-enter-active { animation: slide-in 1s ease-out forwards }
.slide-leave {  }
.slide-leave-active { animation: slide-out 1s ease-out forwards }

/* transition-group class */
.slide-move { transition: transform 1s }
.slide-leave-active { position: absolute }

@keyframes slide-in {
    from {
        transform: translateY(20px);
        opacity: 0
    }
    to {
        transform: translateY(0)
    }
}
@keyframes slide-out {
    from {
        transform: translateY(0)
    }
    to {
        transform: translateY(20px);
        opacity: 0
    }
}

.js-hook {
    margin-top: 2rem;
    width: 10rem;
    height: 10rem;
    background-color: lightcoral
}

li.list-group {
    cursor:pointer;
    border: solid thin #eee
}
</style>
