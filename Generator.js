// Functions

function Template(Title, Body, CSS, JS, Fonts)
{
	CSS =
	[
		...CSS,
		'Library/UI/Basic/Body',
		'Library/UI/Basic/AutoLayout',
		'Library/UI/Basic/Constants',
		'Library/UI/Basic/Fonts',
		'Common'
	]

	return     `<!DOCTYPE HTML>

			<HTML AutoLayout Direction='Vertical' Width='Fill' Height='Fill' Lang='ru-RU'>
				<Head>
					<Title>${Title}</Title>

					<Link Rel='Icon' Href='https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.2.0/counter-strike.svg'>
					<Meta Charset='UTF-8'>
					<Meta Name='Viewport' Content='width=device-width, initial-scale=1, shrink-to-fit=no'>
					<!-- <Link Rel='Manifest' Href='Manifest.webmanifest'> -->

					${CSS.map(CSS => `<Link Rel='Stylesheet' Href='${CSS}.css'>`).join('')}

					<Link Rel='Preconnect' Href='https://fonts.googleapis.com'>
					<Link Rel='Preconnect' Href='https://fonts.gstatic.com' Crossorigin>
					<Link Href='https://fonts.googleapis.com/css?family=${Fonts}' Rel='Stylesheet'>
				</Head>

				${Body}

				${JS.map(JS => `<Script Src='${JS}.js'></Script>`).join('')}
			</HTML>`.replace(/\t|\n/g, '').replace(/> +</g, '><');
}

function DrawIndex(Articles)
{
	return Template
	(
		'Введение в соревновательный Counter-Strike',
		`<Body AutoLayout Direction='Vertical' Width='Fill' Height='Fill'>
			<Header AutoLayout Direction='Horizontal' Width='Fill' Height='Fit' AlignX='End'>
				<A Href='Authors'>Авторы</A>
			</Header>

			<Main AutoLayout Direction='Vertical' Width='Fill' Height='Fill' AlignX='Center' AlignY='Center'>
				<H1>Введение в соревновательный Counter-Strike</H1>

			${
				Articles.map(Article =>
				`<Div ID='Features' AutoLayout Direction='Horizontal' AlignX='Center'>
					<Div Class='Feature' AutoLayout Direction='Vertical' Width='Fit' Height='Fill'>
						<Div AutoLayout Direction='Vertical'>
							<H2>${Article.Name}</H2>
							<Div>${Article.Hub}</Div>
						</Div>

						<A Href='Article-${Article.Name}' Class='Text Main'>Читать</A>
					</Div>
				 </Div>`).join('')
			}
			</Main>
		 </Body>`,
		[
			'Library/UI/Components/Buttons/Cursor',
			'Library/UI/Components/Buttons/Text',
			'index'
		],
		[],
		'Google+Sans:500|Playfair+Display:400|Lora:400,500'
	);
}

function DrawAuthors(Authors)
{
	return Template
	(
		'Авторы',
		`<Body>
			<Main AutoLayout Direction='Vertical' Width='Fill' Height='Fill' AlignX='Center'>
				<H1>Авторы</H1>

				<HR>

				<Div Class='You' AutoLayout Direction='Vertical' AlignX='Center'>
					<Div AutoLayout Direction='Vertical' AlignX='Center'>
						<Div Class='You'>Ты</Div>
						<Div Class='Description'>Каждый может сделать свой вклад в сообщество и получить вознаграждение.</Div>
					</Div>
					<A Href='Earn' Class='Text Main Hover'>Узнать больше</A>
				</Div>

				<HR>

				<Div Class='Authors' AutoLayout Direction='Vertical'>
				${
					Authors.map(Author =>
					`<Div Class='Author' AutoLayout Direction='Vertical'>
						<Div Class='Header' AutoLayout Direction='Horizontal'>
							<Img Style='--Fallback: ${Author.Color}' Src='${Author.Photo}'>
							<Div AutoLayout Direction='Vertical'>
								<Div Class='Name'>${Author.Name}</Div>
								<Div Class='Description'>${Author.Description}</Div>
							</Div>
						</Div>
						<Div Class='Description'>
							${Author.Story}
						</Div>
					 </Div>`).join('')
				}
				</Div>
			</Main>
		 </Body>`,
		[
			'Library/UI/Components/Buttons/Cursor',
			'Library/UI/Components/Buttons/Text',
			'Library/UI/Components/HR',
			'Authors'
		],
		[],
		'Google+Sans:500|Playfair+Display:400,500|Lora:400'
	);
}

function DrawContent(Articles)
{
	return Template
	(
		'Оглавление',
		`<Body AutoLayout Direction='Vertical'>
			<H1>Оглавление</H1>

			<UL>
			<LI>
			Формирование и развитие умений и навыков
				<UL>
				<LI><A Href='Article-Movement'>Movement</A>
					<UL>
					<LI>KZ</LI>
					<LI>Hide'n'Seek</LI>
					<LI>Surf</LI>
					<LI>Bhop</LI>
					<LI>Различные карты
						<UL>
						<LI>Карты с ботами</LI>
						<LI>Карты с префаерами</LI>
						<LI>Карты с тренировкой стрельбы</LI>
						<LI>Карты с тренировкой стрейфов, прыжков</LI>
						<LI>Карты с передвижением по карте</LI>
						</UL>
					</LI>
					<LI>Клавиатура</LI>
					<LI>Геометрия игры</LI>
					</UL>
				</LI>
				<LI>Стрельба
					<UL>
					<LI>Флики</LI>
					<LI>Быстрая наводка</LI>
					<LI>Медленная наводка</LI>
					<LI>Различные режимы
						<UL>
						<LI>KZ</LI>
						<LI>Hide'n'Seek</LI>
						<LI>Surf</LI>
						<LI>Bhop</LI>
						</UL>
					</LI>
					<LI>Залипание прицела на голове</LI>
					<LI>Различные режимы
						<UL>
						<LI>DM</LI>
						<LI>HSDM</LI>
						<LI>PistolDM</LI>
						<LI>AWPDM</LI>
						<LI>Retake</LI>
						</UL>
					</LI>
					<LI>Различные карты
						<UL>
						<LI>Карты с ботами</LI>
						<LI>Карты с префаерами</LI>
						<LI>Карты с точками</LI>
						<LI>Пустые карты</LI>
						<LI>Карты со спреем</LI>
						<LI>Виды стрельбы
							<UL>
							<LI>Tapping</LI>
							<LI>Bursting</LI>
							<LI>Spraying</LI>
							</UL>
						</LI>
						</UL>
					</LI>
					<LI>Арена
						<UL>
						<LI>DM</LI>
						<LI>HSDM</LI>
						<LI>PistolDM</LI>
						<LI>AWPDM</LI>
						<LI>Retake</LI>
						</UL>
					</LI>
					<LI>Мышка и клавиатура</LI>
					</UL>
				</LI>
				<LI>Раскид
					<UL>
					<LI>Тренировка раскидки гранат
						<UL>
						<LI>Различные карты
							<UL>
							<LI>Карты с траекториями гранат</LI>
							<LI>Карты с гранатами</LI>
							<LI>Просмотр игр Pro-команд</LI>
							</UL>
						</LI>
						</UL>
					</LI>
					</UL>
				</LI>
				</UL>
			</LI>
			<LI><A Href='Article-Коммуникация'>Коммуникация</A></LI>
			</UL>
		 </Body>`,
		[
			'Content'
		],
		[],
		'Google+Sans:500|Playfair+Display:400,500|Lora:400'
	);
}

function DrawArticle(Title, Introduction, Authors, Body)
{
	return Template
	(
		Title,
		`<Body AutoLayout Direction='Vertical' Width='Fill' Height='Fill' AlignX='Center'>
			<Header AutoLayout Direction='Horizontal' Width='Fill' Height='Fit' Packing='Space between'>
				<A Href='Content' Class='Text Icon'>
					<Custom-icon Icon='Receipt Long'></Custom-icon>
					<Span>Оглавление</Span>
				</A>
			</Header>

			<Article AutoLayout Direction='Vertical' Width='Fit' Height='Fill'>
				<H1>Коммуникация</H1>

				<P Class='Introduction'>
					${Introduction}
				</P>

				<HR>

				<Div Class='Authors' AutoLayout Direction='Horizontal'>
					${Authors.map(Author => `<Div>${Author}</Div>`).join('')}
				</Div>

				<HR>

				<Div Class='Body'>
					${Body}
				</Div>
			</Article>
		</Body>`,
		[
			'Library/UI/Components/Buttons/Cursor',
			'Library/UI/Components/Buttons/Text',
			'Library/UI/Components/Icon/Style',
			'Library/UI/Components/HR',
			'Article'
		],
		[
			'Library/UI/Components/Icon/Script'
		],
		'Google+Sans:500|Playfair+Display:400,500|Lora:400'
	);
}



// Data

const Authors =
[
	{
		'Name': 'Владимир Сунцов',
		'Description': 'Основатель, редактор',
		'Photo': 'https://sun9-83.userapi.com/s/v1/if2/RWgBuZRPxq5yv5JO-alvIxMDNnxJNXEUsZqTcxTgmiOZNyawxnjUohcqW3772PQFPi6nmapYjageLR4jvBjHmBcq.jpg?size=2048x2048&quality=95&type=album',
		'Color': '#160F38',
		'Story': 'Живёт в Петербурге. Начал играть в 2017 году, с 2019 по 2021 год проживал в Counter-Strike’е. Получив большое количество опыта, принял решение поделится им и создать это практическое пособие. Мало спит. В свободное время читает книги.'
	},
	{
		'Name': 'Арсений Круглов',
		'Description': 'Web-разработчик, редактор, сооснователь',
		'Photo': 'https://lh3.googleusercontent.com/a-/AOh14Ghr8YoItkUBduFSNgxCIfJdp9Gup1GXb5GlNeLWXw8',
		'Color': '#5B2A24',
		'Story': 'Живёт в Петербурге. Начал играть в 2016 году, с 2019 по 2020 год проживал в Counter-Strike’е. Прошёл путь от отдыха с друзьями до зависимости, мешающей жить и учиться, и обратно. Старается получать удовольствие от игры и применять профессиональный подход. Немного разбирается в паттернах проектирования и ООП.'
	}
];

const Articles =
[
	{
		'Name': 'Коммуникация',
		'Hub': 'Всё о половине игры',
		'Introduction': 'Коммуникация является уникальным навыком, который дает огромное преимущество в игре. Counter-Strike объединяет совершенно разных людей: неважно какое у тебя мировоззрение, психотип, характер, статус в обществе. Ты можешь на равных общаться со всеми. Начав поиск очередного матча на Faceit’e, в MM’e или на любой другой платформе, Вы задумывались кого вы повстречается сегодня? Будет ли это гений Counter-Strike или же обычный игрок – неважно. Он становиться вашим товарищем на какое-то неопределенное время, Вы становитесь одним механизмом в игре, который может привести вас к победе или к поражению.',
		'Authors': ['В. А. Сунцов'],
		'Body':
			`<H2>На что стоит обращать внимание</H2>
			 <UL>
				<LI>
					Коммуникация. Основа коммуникации — это передача информации от одного человека к другому, один из способов доведения человеком до других людей идей, фактов, мыслей, чувств и ценностей. Цель коммуникации — добиться от принимающей стороны точного понимания отправленного сообщения.
				</LI>
				<LI>
					Недопонимание. Сколько примеров проигранных раундов, а впоследствии и проигранных игр из-за того, что товарищ не понял вас или же Вы его. Главное помнить, что недопонимание с чьей-либо стороны — это нормально. Важно уметь слушать вашего товарища по команде.
				</LI>
				<LI>
					Уметь слушать — это искусство. Многим из нас общение c людьми дается нелегко… Но Counter-Strike учит нас бороться с трудностями и перешагивать свои страхи. Благодаря умению четко выражать свои мысли, мы можем добиться победы не только в раунде, но и в игре. Но не стоит забывать об еще одном важном аспекте — умение слушать. Важно всегда слушать вашего товарища, что он хочет от вас и как он готов помогать вам, ради вашей общей победы.
					<A Href='https://youtu.be/21xphdGZRlk' Target='_blank' Class='Text Gray Icon' Style='Position: Relative; Top: 2.5px; Margin-left: 4px;'>
						<SVG viewBox='0 0 121.5 85'><path d='M119,13.3c-1.4-5.2-5.5-9.3-10.7-10.7C98.7,0,60.7,0,60.7,0s-38,0-47.5,2.5C8,3.9,3.9,8,2.5,13.3 C0,22.8,0,42.5,0,42.5s0,19.8,2.5,29.2C3.9,77,8,81.1,13.3,82.5C22.8,85,60.7,85,60.7,85s38,0,47.5-2.5c5.2-1.4,9.3-5.5,10.7-10.7 c2.5-9.5,2.5-29.2,2.5-29.2S121.5,22.8,119,13.3z M48.6,60.7V24.3l31.6,18.2L48.6,60.7z'></SVG>
						<Span>Пример</Span>
					</A>
				</LI>
				<LI>
					Болтовня — стремительный путь к поражению. Самая большая ошибка, которую Вы только можете допустить в игре. Болтовня мешает слушать ваши мысли, игру, мысли товарищей, но еще и мешает сфокусироваться на команде или на своей индивидуальные игре. Запомните главное, говорите только по существу или Вы придете к поражению в игре.
				</LI>
				<LI>
					Гробовая тишина. Тишина в вашей игре — это еще один стремительный путь к поражению. Причин почему человек молчит может быть много: Плохое настроение, самочувствие, чувство собственной важности или стиль игры — неважно.  Если люди в вашей команде молчат, то ваша задача стать инициатором вашей коммуникации. Даже если товарищи вас не слушают и вам кажется, что всем все равно, превозмогайте себя и идите до конца.
				</LI>
				<LI>
					Отстаивание своего мнения. Споры во время коммуникации могут привести вас к недопониманию, а впоследствии к гробовой тишине… В этой ситуации нужно уметь дослушать вашего товарища и не возражать ему. Обращайте внимание на то, какое решение принимает ваша команда и действуйте, как они. После реализации идеи(й) товарищей, предлагаете свои варианты на раунд. Таким образом, Вы поддерживаете коммуникацию в команде.
				</LI>
				<LI>
					Сон — путь к счастливой жизни. Сон является неотъемлемой частью нашей жизни. Благодаря сну мы можем восстановить свои физические и моральные силы, подумать о чем-то или просто перезагрузить свой мозг. Что Counter-Strike отличает от реального спорта ? В спорте мы устаем физически. Восстановление сил проходит куда легче и быстрее, чем восстановление моральных сил. В Counter-Strike мы напрягаем мозг и свою нервную систему. На восстановление ментального здоровья требуется намного больше сил и времени. И один из способов восстановления — это сон.
				</LI>
			 </UL>`
	},
	{
		'Name': 'Movement',
		'Hub': 'Всё о четверти игры',
		'Introduction': 'Безусловно, стрельба в CS:GO является одним из самых важных навыков в игре. Все мы знаем Даниила "Zeus" Тесленко, кем он являлся и его заслуги. Многие из нас равняются или же равнялись на него. И ответ на вопрос “Какие умения приведут к победе?” всегда будет актуален. Но многие из вас не знали или же не предполагали, что movement является таким же важным навыков в игре, как и стрельба, а иногда этот навык важнее. Самое опасное — это сочетание хорошего movement’a и хорошего aim’a. Когда человек владеет двумя этими навыками сразу, то он становиться очень опасным и конкурентоспособным игроком, который всегда будет выделяться среди другой серой массы нашего комьюнити. Но как достичь такого уровня и овладеть навыком хорошего movement’a? Об этом наша сегодняшняя речь.',
		'Authors': ['В. А. Сунцов'],
		'Body':
			`<p>Разберём, что такое movement. Movement — это механическое движение тела или его частей относительно других тел. При этом взаимодействие тел приводит к изменению их скоростей. Проще говоря, это то, как Вы передвигаетесь по карте. Бывало у вас такое, что вы наблюдая за другими игроками подмечали, что кто-то двигается спокойно и красиво, а кто торопливо и не эстетично. Сталкивались ли вы с замечанием в вашу сторону по поводу вашего movement'a? Возможно, вы сталкивались с ситуацией, когда ваш прицел был четко наведет на голову вашего соперника, но из-за неопытности или из-за незнания геометрии игры, вы просто не убивали его. Может вы задели угол какого-нибудь ящика и в этот момент вас убили. Сценарий плохих моментов много, но решение этих проблем одна — тренировка.</p>
			 <p>Основа всего movement'a — это знание механики strafe. Всего есть два вида strafe: стандартный и воздушный.</p>
			 <p>Для начало рассмотрим стандартный вид. Strafe — это движение в сторону с помощью клавиш "A" или "D". В зависимости от того, на какую клавишу у вас стоит бег в сторону, ту вы и нажимаете. Но за основу мы возьмем клавиши "A" направо и "D" налево. Когда вы бежите в бок нажимая клавиши "A" или "D" у вас получается strafe. То есть, движение в бок. Counter-strafe — это уже остановка с помощью нажатии клавиши движения в противоположную сторону. Чтобы сделать counter-strafe, вам нужно во время бега в сторону, отпустить клавишу и в момент когда вы ее отпускаете, нажать клавишу противоположную той, которую вы нажимали.</p>
			 <H2>Для чего нужен контр стрейф</H2>
			 <p>Замечали вы, что стоя на месте мы стреляем намного точнее, чем если бы стреляли на ходу?</p>
			 <p>В Counter-Strike есть некое подобие инерции, которая продолжает двигать ваше модельку после того, как Вы перестанете нажимать клавишу в бок.</p>
			 <p>Мы разобрали с вами тему strafe, а теперь перейдем к теме, как тренировать strafe. Есть несколько видов тренировок и первый из них — surf. Surf — это отдельный режим в игре, где ваша задача балансировать на рампе и не упасть с неё.</p>`
	}
];



// Output

const FileSystem = require('fs');

FileSystem.writeFileSync('index.html', DrawIndex(Articles));

FileSystem.writeFileSync('Authors.html', DrawAuthors(Authors));

FileSystem.writeFileSync('Content.html', DrawContent(Articles));

for (let Article of Articles)
	FileSystem.writeFileSync(`Article-${Article.Name}.html`, DrawArticle(Article.Name, Article.Introduction, Article.Authors, Article.Body));