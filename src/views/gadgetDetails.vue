<template>
    <h3>template render for {{ id }}</h3>
    <h3>template render for {{ title }}</h3>
</template>

<script>
export default {
    props: [ 
        'id',
        'title'
     ],
     data() {
        return {
            title: this.title
        }
    }
}
</script>