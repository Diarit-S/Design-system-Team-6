<template>
    <main class="formLayout">
        <div class="formLayout__brand">
            <img src="../assets/Brand.png" alt="" srcset="">
        </div>
        <article class="formLayout__content">
            <slot/>
        </article>
    </main>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/styles/vars';
@import '@/styles/colors';

.formLayout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;

    &__brand {
        display: flex;
		justify-content: center;
		align-items: center;
        background-color: $brand-primary-initial;
    }
    &__content {
        display: flex;
        justify-content: center;
		align-items: center;
    }
}
</style>