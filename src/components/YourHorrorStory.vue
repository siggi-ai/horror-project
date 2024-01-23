<template>
    <div>
        <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/images/Poe.jpg" alt="Portrait of Poe" />
        <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">
                Do you write horror-stories?
            </p>
            <p class="text-slate-500 font-medium">
                Submit here:
            </p>
            </div>
            <button @click="counter++" v-bind:id="headingId" class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"><p><a href="mailto:smiley.face@gmx.de?cc=nobody@email.org&subject=This%20is%20the%20subject">DARE!</a></p></button>
        </div>
        </div>
        <br>
        <!-- <p>Count is: {{ counter }}</p>  -->
        
    </div>   
</template>
<script>
    import { ref } from 'vue'
    const counter = ref(0)

    export default {
        name: "App",
        //
        data() {
            return {
                headingId: "VUE3",
                isDisabled: true,
                counter: ref(0)
            };
        }
    }
</script>