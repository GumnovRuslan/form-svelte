<script>
	export let buttonsControls
	export let next = true

    function checkForm(e) {
        let form = e.target.closest('form')
		let inputs = form.querySelectorAll('input[required]');
		inputs.forEach((el) => {
			if (el.type == 'checkbox') {
				if (!el.checked) {
					el.classList.add('invalid-checkbox');
				} else {
					el.classList.remove('invalid-checkbox');
				}
			} else {
				if (el.value == '') {
					el.classList.add('invalid-input');
				} else {
					el.classList.remove('invalid-input');
				}
			}
		})
	}

    function prevStep(e) {
        let formTarget = e.target.closest('form')
        let forms = document.querySelectorAll('form.form-stage')
		let progress = document.querySelectorAll('.progress__bar')
        let index = 0
        forms.forEach((form, i)=> {if(form == formTarget) index = i})
        formTarget.style.display = 'none'
        forms[index - 1].style.display = 'flex'
        progress[index].classList.remove('progress__bar--completed')
    }
</script>

<div class='controls'>
    <button class='controls__button button' id='buttonControlsNext' style="display: {next ? 'block' : 'none'};">{buttonsControls.next}</button>
</div>

<style lang="scss">
    .controls {
		display: flex;
		justify-content: end;

		&__button {
			padding: 8px 24px;
			font-size: 20px;
			line-height: 25px;
		}
	}
</style>
