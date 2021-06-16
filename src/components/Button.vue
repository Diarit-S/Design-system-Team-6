<template>
    <button :class="['BaseButton', {fluid: fluid}]">
        <slot/>
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        fluid: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/vars';
@import '@/styles/colors';

.BaseButton {
    background-color: $brand-secondary-initial;
    border: none;
    border-radius: 50px;
    padding: 16px 72px;
    color: $neutral-light-tint-2;

    cursor: pointer;

    &:hover {
        background-color: $brand-secondary-darker;
    }

    &.fluid {
        width: 100%;
    }
}
</style>