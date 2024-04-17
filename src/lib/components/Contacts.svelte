<script>

</script>


<div class="form__contacts" id="formContacts">
    <div class="form__contacts-item" id="contactCompany">
        <div class="form__contacts-item-header input-name">
            <p class="form__contacts-item-text">Название компании/мастера</p>
            <span class="form__required">*</span>
        </div>

        <input
            type="text"
            class="form__contacts-item-input form__input"
            placeholder="Company name"
            required
        />
    </div>

    <div class="form__contacts-item" id="contactDescription">
        <div class="form__contacts-item-header input-name">
            <p class="form__contacts-item-text">Название компании/мастера</p>
            <span class="form__required">*</span>
        </div>
        <textarea class="form__input" name='contactDescription' maxlength="221"></textarea>
    </div>

    <div class="form__contacts-items">
        <div class="form__contacts-item" id="contactAddress">
            <div class="form__contacts-item-header">
                <p class="form__contacts-item-text input-name">Адрес</p>
                <span class="form__required">*</span>
            </div>
            <div class='form__contacts-item-main'>
                <input
                    type="text"
                    class="form__contacts-item-input form__input"
                    placeholder="Address"
                    required
                />
                <input
                    type="text"
                    class="form__contacts-item-input form__input"
                    placeholder="Address"
                    required
                />
            </div>
        </div>
        <div class="form__contacts-item" id="contactPhone">
            <div class="form__contacts-item-header input-name">
                <p class="form__contacts-item-text">Телефон</p>
                <span class="form__required">*</span>
            </div>
            <input
                type="tel"
                class="form__contacts-item-input form__input"
                required
            />
        </div>
    </div>

    <div class="form__contacts-item" id="contactEmail">
        <div class="form__contacts-item-header input-name">
            <p class="form__contacts-item-text input-name">Email</p>
            <span class="form__required">*</span>
        </div>
        <input
            type="email"
            class="form__contacts-item-input form__input"
            placeholder="Email"
            required
        />
    </div>
</div>
