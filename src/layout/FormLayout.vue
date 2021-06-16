<template>
    <main class="formLayout">
        <div class="formLayout__brand">
            <img src="../assets/Brand.svg" alt="">
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
    display: flex;
    flex-direction: column;
    height: 100vh;

    &__brand {
        display: flex;
		justify-content: center;
		align-items: center;
        padding: 48px 0;
        background-color: $brand-primary-initial;
    }

    &__content {
        display: flex;
        justify-content: center;
		align-items: center;
        flex-grow: 1;
        flex-direction: column;
    }

    @media (min-width: 650px) {
        display: grid;
        grid-template-columns: 40% 1fr;
        height: 100vh;

        &__brand {
            padding: 0;
        }
    }
}
</style>