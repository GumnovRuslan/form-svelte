<script>
    export let activeFormIndex
    export let message
</script>

<div class="successful" style='display: {activeFormIndex == 4 ? 'block' : 'none'}'>
    <div class="successful__inner">
        <div class="successful__content">
            <img class="successful__image" src="/img/mark.webp"  alt="">
            <p class="successful__text">{message}</p>
        </div>
    </div>
</div>

<style lang="scss">
    .successful {
        &__inner {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-repeat: no-repeat;
            background-size: cover;

            @media (min-width: 992px) {
                padding-top: 105px;
                padding-bottom: 97px;
                border-radius: 60px;
                background-color: var(--color-bg-primary);
                background-image: url(/img/successful-desktop.webp);
            }
            @media (min-width: 500px) and (max-width: 992px) {
                padding-top: 80px;
                padding-bottom: 65px;
                border-radius: 60px;
                background-color: var(--color-bg-primary);
                background-image: url(/img/successful-desktop.webp);
            }

            @media (max-width: 500px) {
                height: 80vh;
                border-radius: 30px;
                background-color: var(--color-bg-primary);
                background-image: url(/img/successful-mobile.webp);
            }
        }
        &__content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            @media (min-width: 500px) {
                gap: 46px;
            }

            @media (max-width: 500px) {
                gap: 36px;
            }
        }
        &__image {
            transform: translate(12%, 0);

            @media (min-width: 992px) {
                max-width: 372px;
                max-height: 300px;
            }

            @media (min-width: 500px) and (max-width: 992px) {
                max-width: 272px;
                max-height: 220px;
            }

            @media (max-width: 500px) {
                max-width: 206px;
                max-height: 165px;
            }
        }
        &__text {
            font-weight: 500;
            text-align: center;
            color: var(--color-text-secondary);

            @media (min-width: 992px) {
                max-width: 600px;
                font-size: 64px;
                line-height: 69px;
            }

            @media (min-width: 500px) and (max-width: 992px) {
                max-width: 400px;
                font-size: 44px;
                line-height: 49px;
            }

            @media (max-width: 500px) {
                max-width: 300px;
                font-size: 28px;
                line-height: 35px;
            }
        }
    }
</style>