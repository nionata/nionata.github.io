<template>
    <svg preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <rect id="Rectangle" fill="#FFFFFF" x="7" y="0" width="6" height="100%"></rect>
            <circle id="Oval" fill="#FFFFFF" cx="10" cy="23" r="10" v-if="type === 'rectCircle'"></circle>
        </g>
    </svg>
</template>

<script>
export default {
    props: ['type']
}
</script>