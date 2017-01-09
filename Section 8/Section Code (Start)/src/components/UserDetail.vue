<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <ul><li>name: {{name}}</li></ul>
    </div>
</template>

<script>
    export default {
        props: { 
            name: String, 
         /*   someOtherName: [String, Object], 
            aRequiredName: { type: String, required: true },
            aDefaultName: { default: 'the Default Name' },
            aDefaultObject: { default: function MustUseFunctionToReturnObject () {
              return  {}  
            }} */
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
