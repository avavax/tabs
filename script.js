function initTab() {
	
	const $tabHeaders = document.querySelectorAll('.info-header-tab');
	const $tabSections = document.querySelectorAll('.info-tabcontent');

	function hideAll(first = true) {
		$tabSections.forEach($item => {
			$item.classList.remove('show');
			$item.classList.add('hide');
		});

		if (first) {
			$tabSections[0].classList.add('show');
			$tabSections[0].classList.remove('hide');			
		}
	}

	function showOne(e) {
		$tabSections.forEach($item => {
			if ($item.classList.contains('show')) {
				$item.classList.remove('show');
				$item.classList.add('hide');
			}
		});

		for (var i = 0, current = 0; i < $tabHeaders.length; i++) {
			if ($tabHeaders[i] === e.target) current = i;
		}

		$tabSections[current].classList.remove('hide');		
		$tabSections[current].classList.add('show');
	}

	$tabHeaders.forEach($item => {
		$item.addEventListener('click', showOne);
	});

	hideAll();	
}

window.addEventListener('DOMContentLoaded', () => {
	initTab();
});