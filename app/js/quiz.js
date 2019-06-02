// скрипт квиза

(function(){

	// Вопросы и ответы
	/*
		Пример
		{
			id: 1, // ID вопроса
			type: 'buttons', // Тип верстки: buttons или list
			question: 'Вы выбираете услугу', // Заголовок, вопрос
			answers: [ // Ответы
				{
					id: 2, // ID вопроса, на который ссылается ответ
					answer: 'Нет', // Ответ
				},
				{
					answer: 'Да', // Ответ
					resultLink: {
						href: 'page.php',
						title: 'Ссылка',
					},
					resultLink: '<a href="page.php" class="btn btn--white">Spa-марафон</a>', // Ссылка. Если есть, то это был последний вопрос
				},
			],
		},
	*/
	var allQuestions = [
		{
			id: 1, // ID вопроса
			type: 'buttons', // Тип верстки: buttons или list
			question: 'Вы интересуетесь услугой для себя?', // Заголовок, вопрос
			answers: [ // Ответы
				{
					id: 25, // ID вопроса, на который ссылается ответ
					answer: 'Да', // Ответ
				},
				{
					id: 2, // ID вопроса, на который ссылается ответ
					answer: 'Нет', // Ответ
				},
			],
		},
		{
			id: 2,
			type: 'list',
			question: 'В подарок',
			answers: [
				{
					id: 3,
					answer: 'Любимому мужчине',
				},
				{
					id: 4,
					answer: 'Коллеге (мужчина)',
				},
				{
					id: 5,
					answer: 'Коллега (женщина)',
				},
				{
					id: 6,
					answer: 'Любимой женщине (мама/ супруга/ подруга)',
				},
				{
					id: 7,
					answer: 'Для двоих',
				},
				{
					id: 8,
					answer: 'SPA-девичник',
				},
			],
		},
		{
			id: 3,
			type: 'list',
			question: 'На какой бюджет вы рассычитывете?',
			answers: [
				{
					answer: 'До 4000',
					resultLink: {
						href: 'page.php',
						title: 'Хит! турецкая рапсодия',
					},
				},
				{
					answer: '4000-5000',
					resultLink: {
						href: 'page.php',
						title: 'Spa-марафон',
					},
				},
			],
		},
		{
			id: 4,
			type: 'list',
			question: 'На какой бюджет вы рассычитывете?',
			answers: [
				{
					answer: 'До 3000',
					resultLink: {
						href: 'page.php',
						title: 'Хит! Турецкая рапсодия',
					},
				},
				{
					answer: '3000-5000',
					resultLink: {
						href: 'page.php',
						title: 'SPA-марафон',
					},
				},
			],
		},
		{
			id: 5,
			type: 'list',
			question: 'На какой бюджет вы рассычитывете?',
			answers: [
				{
					answer: 'До 3000',
					resultLink: {
						href: 'page.php',
						title: 'SPA-знакомство',
					},
				},
				{
					answer: '3000-5000',
					resultLink: {
						href: 'page.php',
						title: 'Все в шоколаде',
					},
				},
				{
					answer: '5000-10000',
					resultLink: {
						href: 'page.php',
						title: 'Дейспа',
					},
				},
				{
					answer: 'Более 10000',
					resultLink: {
						href: 'page.php',
						title: 'SPA-престиж',
					},
				},
			],
		},
		{
			id: 6,
			type: 'list',
			question: 'На какой бюджет вы рассычитывете?',
			answers: [
				{
					answer: 'До 3000',
					resultLink: {
						href: 'page.php',
						title: 'SPA-знакомство',
					},
				},
				{
					answer: '3000-5000',
					resultLink: {
						href: 'page.php',
						title: 'Все в шоколаже',
					},
				},
				{
					answer: '5000-10000',
					resultLink: {
						href: 'page.php',
						title: 'Дейспа',
					},
				},
				{
					answer: 'Более 10000',
					resultLink: {
						href: 'page.php',
						title: 'SPA-престиж',
					},
				},
			],
		},
		{
			id: 7,
			type: 'list',
			question: 'На какой бюджет вы рассычитывете?',
			answers: [
				{
					answer: 'До 5000',
					resultLink: {
						href: 'page.php',
						title: 'Аромат любви',
					},
				},
				{
					answer: '5000-7000',
					resultLink: {
						href: 'page.php',
						title: 'Укрощение строптивой',
					},
				},
				{
					answer: '7000-10000',
					resultLink: {
						href: 'page.php',
						title: 'Сладкие мгновения',
					},
				},
				{
					answer: 'Более 10 000',
					resultLink: {
						href: 'page.php',
						title: 'Рай для двоих',
					},
				},
			],
		},
		{
			id: 8,
			type: 'list',
			question: 'Сколько подруг хотите пригласить',
			answers: [
				{
					answer: '1-3',
					resultLink: {
						href: 'page.php',
						title: '1-3',
					},
				},
				{
					answer: '3-5',
					resultLink: {
						href: 'page.php',
						title: '3-5',
					},
				},
				{
					answer: '5-7',
					resultLink: {
						href: 'page.php',
						title: '5-7',
					},
				},
			],
		},
		{
			id: 25,
			type: 'list',
			question: 'Что вам хотелось бы изменить или улучшить?',
			answers: [
				{
					id: 26,
					answer: 'Избавиться от лишних сантиметров',
				},
				{
					id: 27,
					answer: 'Забыть про морщины, выглядеть моложе',
				},
				{
					id: 28,
					answer: 'Придать коже сияние, улучшить цвет лица',
				},
				{
					answer: 'Забыть про повышенную потливость',
					resultLink: {
						href: 'page.php',
						title: 'Рекомендованная процедура - лечение гипергидроза',
					},
				},
				{
					answer: 'Скорректировать объем губ, скул',
					resultLink: {
						href: 'page.php',
						title: 'Рекомендованная процедура - контурная пластика',
					},
				},
				{
					id: 31,
					answer: 'Избавиться от акне/ прыщей',
				},
				{
					answer: 'Меня интересует периодический уход за кожей, чтобы кожа всегда выглядела ухоженно',
					resultLink: {
						href: 'page.php',
						title: 'Пилинги/ уходы/ чистка',
					},
				},
				{
					answer: 'Избавиться от новообразований',
					resultLink: {
						href: 'page.php',
						title: 'Удаление новообразований',
					},
				},
				{
					answer: 'Избавиться от пигментации',
					resultLink: {
						href: 'page.php',
						title: 'Химические пилинги/ лазерное лечение',
					},
				},
				{
					answer: 'Удалить сосуды/ сосудистые сеточки на лице и теле',
					resultLink: {
						href: 'page.php',
						title: 'Удаление сосудов лазером',
					},
				},
				{
					answer: 'Избавиться от нежелательных волос навсегда',
					resultLink: {
						href: 'page.php',
						title: 'Рекомендованная процедура - лазерная эпиляция',
					},
				},
			],
		},
		{
			id: 26,
			type: 'list',
			question: 'Вы предпочитаете...',
			answers: [
				{
					answer: 'Получить результат максимально быстро',
					resultLink: {
						href: 'page.php',
						title: 'Комплексная коррекция фигуры',
					},
				},
				{
					id: 38,
					answer: 'Массажные техники для коррекции фигуры',
				},
				{
					answer: 'Расслабиться, но получить видимый результат',
					resultLink: {
						href: 'page.php',
						title: 'Обертывания',
					},
				},
			],
		},
		{
			id: 27,
			type: 'list',
			question: 'Вам хотелось бы избавиться от',
			answers: [
				{
					answer: 'Мимических морщин',
					resultLink: {
						href: 'page.php',
						title: 'Инъекции ботулотоксина',
					},
				},
				{
					answer: 'Носогубных складок',
					resultLink: {
						href: 'page.php',
						title: 'Контурная пластика',
					},
				},
				{
					answer: 'Подтянуть овал лица',
					resultLink: {
						href: 'page.php',
						title: 'Рекомендованная процедура - нитевая подтяжка',
					},
				},
				{
					answer: 'Интересует комплексное омоложение',
					resultLink: {
						href: 'page.php',
						title: 'Бьютификация',
					},
				},
			],
		},
		{
			id: 28,
			type: 'list',
			question: 'Сколько вам лет?',
			answers: [
				{
					answer: 'До 30 лет',
					resultLink: {
						href: 'page.php',
						title: 'Химические пилинги/ уходы',
					},
				},
				{
					answer: 'От 30-35 лет',
					resultLink: {
						href: 'page.php',
						title: 'Биоревитализация / пилинги/ RF / лазерное омоложение',
					},
				},
				{
					answer: 'Более 35 лет',
					resultLink: {
						href: 'page.php',
						title: 'Биоревитализация/ пилинги/ RF-лифтинг / лазерное омоложение',
					},
				},
			],
		},
		{
			id: 31,
			type: 'list',
			question: 'Насколько у вас сильные воспаления?',
			answers: [
				{
					answer: 'Небольшие прыщи, угри',
					resultLink: {
						href: 'page.php',
						title: 'Чистка лица',
					},
				},
				{
					answer: 'Сильные воспаления и акне',
					resultLink: {
						href: 'page.php',
						title: 'Консультация дерматолога',
					},
				},
			],
		},
		{
			id: 38,
			type: 'list',
			question: 'Массажные техники для коррекции фигуры',
			answers: [
				{
					answer: 'Ручной массаж',
					resultLink: {
						href: 'page.php',
						title: 'Курс антицеллюлитного массажа',
					},
				},
				{
					answer: 'Аппаратный массаж',
					resultLink: {
						href: 'page.php',
						title: 'LPG и Rsleek',
					},
				},
			],
		},
	];

	// Вывод вопроса по ID
	function show_question(id)
	{
		var q = false;
		var out;

		// Получаем вопрос
		for (var i = 0; i < allQuestions.length; i++) {
			if (allQuestions[i].id == id) {
				q = allQuestions[i];
				break;
			}
		}

		if (!q) return;

		// Для каждого типа вопроса выводим свою верстку
		switch (q.type) {
			case 'buttons':
				out = '<section class="quiz" data-id="'+q.id+'">'
						+ '<div class="container">'
							+ '<div class="quiz__item">'
								+ '<h3 class="h3 text-center">Ответьте на 5 вопросов за 45 секунд</h3>'
								+ '<div class="text-bold-italic text-center"><span class="nowrap">и мы подберем</span> для Вас именно то, <span class="nowrap">что нужно</span></div>'
								+ '<div class="quiz__line">'
									+ '<div class="quiz__col txt txt-1">'+q.question+'</div>'
									+ '<div class="quiz__btns flex">'
										q.answers.forEach(function(item, index){
											item.id ? id = item.id : id = '';
											(item.resultLink && item.resultLink.href) ? resultLink_href = item.resultLink.href : resultLink_href = '';
											(item.resultLink && item.resultLink.title) ? resultLink_title = item.resultLink.title : resultLink_title = '';
											out += '<button type="button" class="btn quiz-btn-'+(index+1)+'" data-id="'+id+'" data-resultLink-href="'+resultLink_href+'" data-resultLink-title="'+resultLink_title+'">'+item.answer+'</button>';
										});
								out += '</div>'
								+ '</div>'
							+ '</div>'
						+ '</div>'
					+ '</section>';

					// Показываем вопрос
					b.innerHTML = out;

					// Ставим событие клика на кнопки
					var button = b.getElementsByClassName('btn');
					for (var i = 0; i < button.length; i++) {
						button[i].addEventListener('click', event_click_button);
					}
				break;

			case 'list':
				out = '<section class="quiz" data-id="'+q.id+'">'
						+ '<div class="container">'
							+ '<div class="quiz__item">'
								+ '<div class="h3 quiz__question">'+q.question+'</div>'
								+ '<div class="quiz__answers">';
									q.answers.forEach(function(item, index){
										item.id ? id = item.id : id = '';
										(item.resultLink && item.resultLink.href) ? resultLink_href = item.resultLink.href : resultLink_href = '';
										(item.resultLink && item.resultLink.title) ? resultLink_title = item.resultLink.title : resultLink_title = '';
										out += '<div class="quiz__answer" data-id="'+id+'" data-resultLink-href="'+resultLink_href+'" data-resultLink-title="'+resultLink_title+'">'+item.answer+'</div>';
									});
							out += '</div>'
								+ '<div class="quiz__btns flex">'
									+ '<button type="button" class="btn btn--bg quiz-btn-3">Дальше</button>'
									+ '<p class="quiz-err">Вы не выбрали ответ</p>'
								+ '</div>'
							+ '</div>'
						+ '</div>'
					+ '</section>';

					// Показываем вопрос
					b.innerHTML = out;

					// Событие клика по ответу в вопросе типа list
					var a = b.getElementsByClassName('quiz__answer');
					for (var i = 0; i < a.length; i++) {
						a[i].addEventListener('click', event_click_answer);
					}

					// Событие клика на кнопку
					var button = b.getElementsByClassName('btn');
					button[0].addEventListener('click', event_click_button);
				break;
		}
	}

	// Вывод результирующей ссылки
	function show_link(resultLink)
	{
		out = '<section class="quiz">'
				+ '<div class="container">'
					+ '<div class="quiz__item text-center">'
						+'<div class="quiz__txt-1">Рекомендованная услуга для вас:</div>'
						+ '<div class="quiz__result">'
							+ '<a href="'+resultLink.href+'" class="btn btn--white" id="quiz-result-link">'+resultLink.title+'</a>'
						+ '</div>'
						+ '<div>Запишитесь прямо сейчас и получите подарок</div>'
						+ '<button type="button" class="btn btn--trans quiz__orderBtn" id="quiz-order-btn" data-dialog="dialog">Записаться</button>'
				+ '</div>'
				+ '</div>'
			+ '</section>';

			// Показываем ссылку
			b.innerHTML = out;
	}

	// Клик по ответу в вопросе типа list
	function event_click_answer()
	{
		var c = 'quiz__answer--active';

		if (!this.classList.contains(c)) {
			var a = document.getElementsByClassName(c);
			for (var i = 0; i < a.length; i++) {
				a[i].classList.remove(c);
			}

			this.classList.add(c);

			var button = this.parentNode.nextSibling.children[0];
			button.setAttribute('data-id', this.getAttribute('data-id'));
			button.setAttribute('data-resultLink-href', this.getAttribute('data-resultLink-href'));
			button.setAttribute('data-resultLink-title', this.getAttribute('data-resultLink-title'));
			var quiz = document.getElementById('quiz');
				quiz.classList.remove('quiz--error');
		}
	}

	// Клик по кнопке в вопросе верстки buttons
	function event_click_button(event)
	{
		e = event || window.event;
		e.preventDefault();

		var id = this.getAttribute('data-id');
		if (id) {
			show_question(id);
		} else {
			var resultLink = {
				href: this.getAttribute('data-resultLink-href'),
				title: this.getAttribute('data-resultLink-title'),
			};
			// console.log('z1', this.getAttribute('data-resultLink-title'));

			if ( resultLink.href ) {
				show_link(resultLink);
			} else {
				var quiz = document.getElementById('quiz');
				quiz.classList.add('quiz--error');
			}
		}

		return false;
	}

	var b = document.getElementById('quiz');
	if (b && typeof(b) != 'undefined') {
		show_question(1);
	}

})();