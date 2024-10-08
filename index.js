document.addEventListener('DOMContentLoaded', () => {
	initAccordions()
	initTabs()
})

function initAccordions() {
	const accordionHeaders = document.querySelectorAll('.accordion-header')

	if (!accordionHeaders) {
		return
	}

	accordionHeaders.forEach((header) => {
		const isActive = header.classList.contains('active')

		const accordionContent = header.nextElementSibling
		accordionContent.style.maxHeight = isActive ? accordionContent.scrollHeight + 'px' : 0

		header.addEventListener('click', () => {
			// Close all other accordions
			accordionHeaders.forEach((otherHeader) => {
				if (otherHeader !== header) {
					otherHeader.classList.remove('active')
					otherHeader.nextElementSibling.style.maxHeight = 0
				}
			})

			// Toggle the clicked accordion
			header.classList.toggle('active')
			const accordionContent = header.nextElementSibling
			if (header.classList.contains('active')) {
				accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
			} else {
				accordionContent.style.maxHeight = 0
			}
		})
	})
}

function initTabs() {
	const tabGroups = document.querySelectorAll('.tab-group')

	if (!tabGroups.length) {
		return
	}

	tabGroups.forEach((tabGroup) => {
		const tabs = tabGroup.querySelectorAll('[data-tab]')
		const tabContents = tabGroup.parentElement.querySelectorAll('[data-tab-content]')

		tabs.forEach((tab) => {
			tab.addEventListener('click', () => {
				const selectedTab = tab.getAttribute('data-tab')

				tabs.forEach((t) => {
					t.classList.remove('bg-brandCyan', 'text-white')
					t.classList.add('bg-transparent', 'text-brandCyan')
				})

				tabContents.forEach((content) => {
					content.style.display = 'none'
				})

				tab.classList.add('bg-brandCyan', 'text-white')
				tab.classList.remove('bg-transparent', 'text-brandCyan')

				const activeContent = tabGroup.parentElement.querySelector(`[data-tab-content="${selectedTab}"]`)
				if (activeContent) {
					activeContent.style.display = 'block'
				}
			})
		})

		tabs[0].click()
	})
}
