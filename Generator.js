function Template(Title, Body, CSS, JS, Meta, Fonts)
{
	return     `<!DOCTYPE HTML>

			<HTML AutoLayout Direction='Vertical' Width='Fill' Height='Fill' Lang='ru-RU'>
				<Head>
					<Title>${Title}</Title>

					<Link Rel='Icon' Href='https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.2.0/counter-strike.svg'>
					<Meta Charset='UTF-8'>
					<Meta Name='Viewport' Content='width=device-width, initial-scale=1, shrink-to-fit=no'>

					${
						CSS.map(CSS => `<Link Rel='Stylesheet' Href='${CSS}.css'>`).join('')
					}

					<Link Rel='Preconnect' Href='https://fonts.googleapis.com'>
					<Link Rel='Preconnect' Href='https://fonts.gstatic.com' Crossorigin>
					<Link Href='https://fonts.googleapis.com/css?family=${Fonts}' Rel='Stylesheet'>
				</Head>

				${Body}

				${
					JS.map(JS => `<Script Src='${JS}.js'></Script>`).join('')
				}
			</HTML>`.replace(/\t|\n/g, '').replace(/> +</g, '><');
}

function Article(Title, Introduction, Authors, Body, Keywords, CSS, JS)
{
	return Template
	(
		Title,
		`<Body AutoLayout Direction='Vertical' Width='Fill' Height='Fill' AlignX='Center'>
			<Header AutoLayout Direction='Horizontal' Width='Fill' Height='Fit' Packing='Space between'>
				<Button Class='Text Icon'>
					<Custom-icon Icon='Receipt Long'></Custom-icon>
					<Span>Оглавление</Span>
				</Button>

				<Button Class='Text Icon'>
					<Custom-icon Icon='List'></Custom-icon>
					<Span>Содержание</Span>
				</Button>
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
			'Library/UI/Basic/AutoLayout',
			'Library/UI/Basic/Constants',
			'Library/UI/Basic/Fonts',
			'Library/UI/Components/HR',
			'Library/UI/Components/Icon/Icon',
			'Library/UI/Components/Buttons/Text',
			'Library/UI/Components/Buttons/Cursor',
			'Common',
			'Article',
		],
		[
			'Library/UI/Components/Icon/Icon',
		],
		undefined,
		'Google+Sans:500|Playfair+Display:400,500|Lora:400'
	);
}



const FileSystem = require('fs');
FileSystem.writeFileSync('Article.html', Article
(
	'Коммуникация',
	'Коммуникация является уникальным навыком, который дает огромное преимущество в игре. Counter-Strike объединяет совершенно разных людей: неважно какое у тебя мировоззрение, психотип, характер, статус в обществе. Ты можешь на равных общаться со всеми. Начав поиск очередного матча на Faceit’e, в MM’e или на любой другой платформе, Вы задумывались кого вы повстречается сегодня? Будет ли это гений Counter-Strike или же обычный игрок – неважно. Он становиться вашим товарищем на какое-то неопределенное время, Вы становитесь одним механизмом в игре, который может привести вас к победе или к поражению.',
	['В. А. Сунцов'],
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
	 </UL>`,
	 []
));