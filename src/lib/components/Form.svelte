<div class="form" name="myForm" id="myForm">
    <div class="form__inner">
        <div class='form__inner-image' id="formImage">
            <img src='/img/image.webp' alt=''>
        </div>
        <div class='form__content'>
            <div class="form__header">
                <h2 class="form__header-title">Регистрация</h2>
                <ProgressBar />
                <button type="button" class='form__btn-back button-second'>
                    <div class='form__btn-back-icon'>
                        {@html arrow}
                    </div>
                </button>
            </div>
            <form class='form-stage' id="formStep1" on:submit={nextStep}>
                <Contacts data={contactsData}/>
                <FormControls {buttonsControls}/>
            </form>

            <form class='form-stage' id="formStep2" on:submit={nextStep}>
                <div class='form-stage__inner'>
                    <Categories categories={categoriesFull}/>
                        <div class="form__work-like" id="workLike">
                            <div class="form__work-like-header">
                                <p class="form__work-like-text section-name">You work like:</p>
                                <span class="form__required">*</span>
                            </div>
                            <div class="form__work-like-content">
                                <div class="form__work-like-items">
                                    <div class="form__work-like-item">
                                        <input
                                            class="form__work-like-radio custom-radio"
                                            type="radio"
                                            name="workLike"
                                            id="workLikePhysical"
                                            required
                                        />
                                        <label for="workLikePhysical" class="form__work-like-label">
                                            <span class="form__work-like-content-text form__text"> Физ. лицо </span>
                                        </label>
                                        <div class="form__work-like-input-container" id="data">
                                            <p class="form__work-like-input-text">PESEL</p>
                                            <input
                                                class="form__work-like-input form__input"
                                                type="number"
                                                placeholder="Enter 11 numbers"
                                                disabled
                                                min="10000000000"
                                                max="99999999999"
                                            />
                                        </div>
                                    </div>
                                    <div class="form__work-like-item">
                                        <input
                                            class="form__work-like-radio custom-radio"
                                            type="radio"
                                            name="workLike"
                                            id="workLikeCompany"
                                        />
                                        <label for="workLikeCompany" class="form__work-like-label">
                                            <span class="form__work-like-content-text form__text"> Компания </span>
                                        </label>
                                        <div class="form__work-like-input-container" id="data">
                                            <p class="form__work-like-input-text">NIP</p>
                                            <input
                                                class="form__work-like-input form__input"
                                                type="number"
                                                placeholder="Enter 10 numbers"
                                                disabled
                                                min="1000000000"
                                                max="9999999999"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form__network" id="formNetwork">
                            <p class="form__network-text section-name">Соц. сети</p>
                            <div class="form__network-items" id="networkContainer">
                                <div class="form__network-item">
                                    <label class="form__network-item-container">
                                        <input class="form__network-item-checkbox custom-checkbox" type="checkbox" />
                                        <span class="form__network-item-text form__text">Instagram</span>
                                    </label>
                                    <input
                                        type="text"
                                        class="form__network-item-input form__input"
                                        disabled
                                        placeholder="ссылка"
                                    />
                                </div>

                                <div class="form__network-item">
                                    <label class="form__network-item-container">
                                        <input class="form__network-item-checkbox custom-checkbox" type="checkbox" />
                                        <span class="form__network-item-text form__text">Facebook</span>
                                    </label>
                                    <input
                                        type="text"
                                        class="form__network-item-input form__input"
                                        disabled
                                        placeholder="ссылка"
                                    />
                                </div>

                                <div class="form__network-item">
                                    <label class="form__network-item-container">
                                        <input class="form__network-item-checkbox custom-checkbox" type="checkbox" />
                                        <span class="form__network-item-text form__text">Telegram</span>
                                    </label>
                                    <input
                                        type="text"
                                        class="form__network-item-input form__input"
                                        disabled
                                        placeholder="ссылка"
                                    />
                                </div>

                                <div class="form__network-item">
                                    <label class="form__network-item-container">
                                        <input class="form__network-item-checkbox custom-checkbox" type="checkbox" />
                                        <span class="form__network-item-text form__text">Tiktok</span>
                                    </label>
                                    <input
                                        type="text"
                                        class="form__network-item-input form__input"
                                        disabled
                                        placeholder="ссылка"
                                    />
                                </div>

                                <div class="form__network-item">
                                    <label class="form__network-item-container">
                                        <input class="form__network-item-checkbox custom-checkbox" type="checkbox" />
                                        <span class="form__network-item-text form__text">Linkedin</span>
                                    </label>
                                    <input
                                        type="text"
                                        class="form__network-item-input form__input"
                                        disabled
                                        placeholder="ссылка"
                                    />
                                </div>
                            </div>
                        </div>
                </div>
                <FormControls {buttonsControls}/>
            </form>

                <form class='form-stage' id='formStep3' on:submit={nextStep}>
                    <div class="form__work-mode work-mode" id="formWorkMode">
                        <div class='work-mode__header'>
                            <p class='work-mode__header-name section name'>{timesData.title}</p>
                        </div>
                        <div class="form__work-mode-items">
                            {#each timesData.days as day}
                                <WorkMoreItem
                                on:select={(e) => changeTime(e.detail)}
                                day={day}
                                text={timesData.timeText}/>
                            {/each}
                        </div>
                    </div>
                    <FormControls {buttonsControls}/>
                </form>

                <form class='form-stage' id='formStep4' on:submit={sendForm}>
                    <div class='form-stage__inner'>
                        <div class="form__calendar" id="formLinkCalendar">
                            <p class="form__calendar-text section-name">Link to Google calendar</p>
                            <input
                                id="inputLinkCalendar"
                                type="url"
                                class="form__calendar-input form__input"
                                placeholder="link to Google calendar"
                                on:input={(e) => e.target.required = !!e.target.value}
                            />
                        </div>
                        <div class="form__languages-container" id="communicationLanguages">
                            <p class="form__languages-text section-name">Языки комуникациии</p>
                            <div class="form__languages-items">
                                <label class="form__languages-item">
                                    <input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
                                    <span class="form__languages-item-text form__text">Polski</span>
                                </label>

                                <label class="form__languages-item">
                                    <input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
                                    <span class="form__languages-item-text form__text">Беларуская</span>
                                </label>

                                <label class="form__languages-item">
                                    <input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
                                    <span class="form__languages-item-text form__text">Українська</span>
                                </label>

                                <label class="form__languages-item">
                                    <input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
                                    <span class="form__languages-item-text form__text">Русский</span>
                                </label>

                                <label class="form__languages-item">
                                    <input type="checkbox" class="form__languages-item-checkbox custom-checkbox" />
                                    <span class="form__languages-item-text form__text">English</span>
                                </label>

                                <div class="form__languages-another">
                                    <label class="form__languages-item-another">
                                        <input
                                            type="checkbox"
                                            class="form__languages-item-another-checkbox form__languages-item-checkbox custom-checkbox"
                                        />
                                        <span
                                            class="form__languages-item-text form__text form__languages-item-another-text"
                                            >Another</span
                                        >
                                    </label>
                                    <input
                                        class="form__languages-item-another-input form__input"
                                        type="text"
                                        disabled
                                        placeholder="Enter other languages"
                                    />
                                </div>
                            </div>

                        </div>
                        <div class="form__preferences" id="formSurvey">
                            <div class="form__preferences-header">
                                <p class="form__preferences-text form__text">
                                    Select which category matches your company
                                </p>
                                <p class="form__preferences-text form__text"></p>
                            </div>

                            <div class="form__preferences-items">
                                <label class="form__preferences-item">
                                    <input
                                        class="form__preferences-item-checkbox custom-checkbox"
                                        type="checkbox"
                                        name="preferences"
                                        value="ecofriendly"
                                    />
                                    <span class="form__preferences-item-text form__text">ecofriendly</span>
                                </label>

                                <label class="form__preferences-item">
                                    <input
                                        class="form__preferences-item-checkbox custom-checkbox"
                                        type="checkbox"
                                        name="preferences"
                                        value="ecofriendly"
                                    />
                                    <span class="form__preferences-item-text form__text">petfriendly</span>
                                </label>

                                <label class="form__preferences-item">
                                    <input
                                        class="form__preferences-item-checkbox custom-checkbox"
                                        type="checkbox"
                                        name="preferences"
                                        value="ecofriendly"
                                    />
                                    <span class="form__preferences-item-text form__text">childefriendly</span>
                                </label>

                                <label class="form__preferences-item">
                                    <input
                                        class="form__preferences-item-checkbox custom-checkbox"
                                        type="checkbox"
                                        name="preferences"
                                        value="ecofriendly"
                                    />
                                    <span class="form__preferences-item-text form__text">inclusive</span>
                                </label>
                            </div>
                        </div>
                        <label class="form__confirmation" id="formConfirmation">
                            <input
                                class="form__confirmation-checkbox custom-checkbox"
                                type="checkbox"
                                required
                            />
                            <div class="form__confirmation-text-container">
                                <span class="form__confirmation-text">
                                    I agree to the publication of the provided data on YOOHIVE.COM resources
                                </span>
                                <span class="form__required">*</span>
                                <p class="form__confirmation-text"></p>
                            </div>
                        </label>
                    </div>
                    <div class='message-send' id='formCompleted'>
                        <div class='message-send__inner'>
                            <div class='message-send__image'>
                                <img src='/img/mark.webp' alt=''>
                            </div>
                            <p class='message-send__text'>{formMessage}</p>
                        </div>
                    </div>
                    <div class='form__button-container'>
                        <button class="button" type="submit" id="buttonSend" class:button__disabled={buttonIsDisabled}>Registration</button>
                        <p class='form__message' class:message-error={formMessageIsError}>{formMessage}</p>
                    </div>
                    <FormControls next={false} {buttonsControls}/>
                </form>
        </div>

    </div>
</div>
