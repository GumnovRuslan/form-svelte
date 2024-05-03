<script>
    import Input from './Input.svelte'
    export let data = {}
</script>


<div class="contacts" id="formContacts">
    <div class="contacts__item" id="contactCompany">
        <div class="contacts__item-header input-name">
            <p class="contacts__item-header-text">{data.company.name}<span>*</span></p>
        </div>
        <Input placeholder={data.company.placeholder} required={true}/>
    </div>

    <div class="contacts__item" id="contactDescription">
        <div class="contacts__item-header input-name">
            <p class="contacts__item-header-text">{data.description.name}</p>
        </div>
        <Input style={'textarea'} placeholder={data.description.placeholder}/>
    </div>

    <div class="contacts__items">
        <div class="contacts__item" id="contactAddress">
            <div class="contacts__item-header input-name">
                <p class="contacts__item-header-text">{data.address.name}<span>*</span></p>
            </div>
            <div class='contacts__item-inputs'>
                <Input placeholder={data.address.placeholder[0]} required={true}/>
                <Input placeholder={data.address.placeholder[1]} required={true}/>
            </div>
        </div>

        <div class="contacts__item" id="contactPhone">
            <div class="contacts__item-header input-name">
                <p class="contacts__item-header-text">{data.phone.name}<span>*</span></p>
            </div>
            <Input type={'tel'} placeholder={data.phone.placeholder} required={true}/>
        </div>
    </div>

    <div class="contacts__item" id="contactEmail">
        <div class="contacts__item-header input-name">
            <p class="contacts__item-header-text">{data.email.name}<span>*</span></p>
        </div>
        <Input type={'email'} placeholder={data.email.placeholder} required={true}/>
    </div>
</div>

<style lang="scss">
    .contacts {
        display: flex;
		flex-direction: column;
		gap: 16px;
        &__item {
            width: 100%;
        }
        &__items {
            display: flex;
            gap: 12px;
            @media (max-width: 600px) {
                flex-direction: column;
            }
        }
        &__item-header {
            margin: 0 0 12px 24px;

            span {
                margin-left: 4px;
            }
        }

        &__item-header-text {
            color: var(--color-text-primary);
            font-weight: 400;
        }

        &__item-inputs {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }
</style>
