<template>
    <button class="BaseButton">
        <slot/>
    </button>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.BaseButton {
    background-color: $brand-secondary-initial;
    border: none;
    border-radius: 50px;
    padding: 16px 72px;
    color: $neutral-light-tint-2;
}
</style>