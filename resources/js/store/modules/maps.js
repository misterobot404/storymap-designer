import axios from "axios"

export default {
    namespaced: true,
    state: {
        maps: [],
        editableExample: {
            id: 0,
            name: "Глобус",
            subject: "География",
            description: "йцйцу",
            config: JSON.stringify({"eventListWidth": 227, "selectedEventId": 1}),
            tile: JSON.stringify({
                "url": "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
                "bounds": {"_northEast": {"lat": 85, "lng": 45}, "_southWest": {"lat": 47, "lng": -180}},
                "maxZoom": 4,
                "minZoom": 3,
                "attribution": "&copy; <a href=\"https://knastu.ru/\">knastu</a>"
            }),
            events: JSON.stringify([{
                "id": 1,
                "marker": {"position": {"lat": 67, "lng": -41.1}, "url": "https://image.flaticon.com/icons/svg/148/148828.svg", "size": [32, 38]},
                "title": "Стартовое событие",
                "description": "",
                "mediaUrl": []
            }])
        },
        examples: [
            {
                id: 1,
                img: require('@/assets/images/examples/human.png'),
                name: 'Тело человека',
                description: 'Внутреннее строение тела человека с моделями всех основных органов. За объект был взят макет, никто из людей не пострадал.',
                subtitle: "Биология",
                config: JSON.stringify({"eventListWidth": 227, "selectedEventId": 1, "showPolyline": false}),
                tile: JSON.stringify({
                    "url": "/tile1/{z}-{x}-{y}.jpg",
                    "bounds": {"_northEast": {"lat": 85, "lng": 45}, "_southWest": {"lat": 47, "lng": -180}},
                    "maxZoom": 5,
                    "minZoom": 3,
                    "attribution": "&copy; <a href=\"https://knastu.ru/\">knastu</a>"
                }),
                events: JSON.stringify([{
                    "id": 3,
                    "title": "Сердце",
                    "description": "<p><strong>Сердце человека</strong><em><strong> </strong></em>- это не просто мышечный орган, качающий кровь в нашем организме, это- самый удивительный механизм, обеспечивающий наше с вами существование. При этом сердце обладает независимостью: оно самостоятельно вырабатывает импульсы для своего сокращения, обеспечивает их проведение и сокращается ,продвигая кровь, обогащенную кислородом ко всем внутренним органам. Сердце способно продолжать биться даже если его отделить от тела, для этого лишь нужно получать необходимое количество кислорода.</p>",
                    "mediaUrl": ["https://ykl-res.azureedge.net/e7a57008-16d2-4d2a-9761-b3a01f71cf2d/%D0%A1%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B02_%D0%B2%D0%BD%D0%B5%D1%88%D0%BD.png", "https://www.youtube.com/watch?v=pb5qPXgt61Q"],
                    "marker": {
                        "position": {"lat": 79.30250820989137, "lng": -66.79687500000001},
                        "url": require('@/assets/images/examples/human-icon.png'),
                        "size": ["36", "34"]
                    }
                }, {
                    "id": 4,
                    "title": "Печень",
                    "description": "<p>Печень – это самая большая железа организма. Как правило, о печени говорят в связи с работой пищеварительной системы, однако она играет огромную роль в поддержании обмена веществ, в ней происходит обезвреживание токсинов. Такая вовлеченность печени в различные процессы, протекающие в организме, объясняет то большое внимание, которое обычно уделяется поддержанию ее здоровья.</p><p><em>Основными функциями печени являются:</em></p><ul><li><p>Метаболизм.</p></li><li><p>Детоксикация.</p></li><li><p>Синтез.</p></li></ul>",
                    "mediaUrl": ["https://www.youtube.com/watch?v=7ckw2Vtlm-Y", "https://i0.wp.com/bolitpechen.ru/wp-content/uploads/2018/08/na-foto-predstavleno-fiziologicheskoe-stroenie-pec.png"],
                    "marker": {
                        "position": {"lat": 73.28041717821672, "lng": -82.96875000000001},
                        "url": require('@/assets/images/examples/human-icon.png'),
                        "size": ["36", "34"]
                    }
                }, {
                    "id": 5,
                    "title": "Желудок",
                    "description": "<h3>Желудок – это полый орган, который приспособлен для наполнения пищей, начального переваривания пищи, частичного всасывания питательных веществ с дальнейшей эвакуацией содержимого в двенадцатиперстную кишку. Расположен желудок в верхней части брюшной полости, под диафрагмой, большей частью слева от срединной линии.&nbsp;</h3><p>Форма и объем желудка зависят от тонуса его мускулатуры, от наполнения его пищей, от состояния соседних органов, от положения тела. В верхней части желудка в него впадает пищевод, в нижней части от желудка отходит двенадцатиперстная кишка.</p>",
                    "mediaUrl": ["https://gb4miass74.ru/wp-content/uploads/zheludok4.jpg", "https://www.youtube.com/watch?v=6Pe2-Q8Hqgo", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEKpTcbMT0FpTesfXsmlbwLjqkueFZpvJl493P54D-9bNHeV-a&usqp=CAU"],
                    "marker": {
                        "position": {"lat": 71.6910367871071, "lng": -53.61328125000001},
                        "url": require('@/assets/images/examples/human-icon.png'),
                        "size": ["36", "34"]
                    }
                }, {
                    "id": 1,
                    "marker": {
                        "position": {"lat": 80.20865220938809, "lng": -88.94531250000001},
                        "url": require('@/assets/images/examples/human-icon.png'),
                        "size": ["36", "34"]
                    },
                    "title": "Лёгкие",
                    "description": "<p><strong>Лёгкие</strong> - это мягкий, губчатый, конусообразный парный орган.<strong> </strong></p><p><strong>Лёгкие показатели дыхания</strong> - обмен углекислого газа и кислорода. Они являются вполне приспособленными и специализированными, не только для газообмена, но и для защиты дыхательных путей. Правое лёгкое образуют три доли, а левое - две. Воздух в лёгких попадает через носовую полость, горло, гортань и трахею.&nbsp;</p><p></p><p></p><p></p><p></p><p></p><p></p>",
                    "mediaUrl": ["https://tob.tmbreg.ru/assets/images/hiryrgia/emfizema/emfizema_1.jpg"]
                }, {
                    "id": 6,
                    "title": "Кишечник",
                    "description": "<p><strong>Пищевари́тельный</strong>, или&nbsp;<strong>желу́дочно-кише́чный</strong>&nbsp;<strong>тракт</strong>&nbsp;(ЖКТ). Система органов у человека, предназначенная для переработки и извлечения из&nbsp;пищи питательных веществ, всасывания их в кровь и лимфу и выделения из организма непереваренных остатков. </p><h3>Является частью&nbsp;пищеварительной системы человека.</h3>",
                    "mediaUrl": ["https://www.youtube.com/watch?v=JCv0-DWC_Aw"],
                    "marker": {
                        "position": {"lat": 59.440844399572725, "lng": -69.96093750000001},
                        "url": require('@/assets/images/examples/human-icon.png'),
                        "size": ["36", "34"]
                    }
                }])
            },
            {
                id: 2,
                img: require('@/assets/images/examples/dv.png'),
                name: 'Парки и заповедники Дальнего Востока',
                subtitle: 'Туризм',
                description: 'Карта путешественника. Описание коллекций и особенностей парков для животных.',
                config: JSON.stringify({"eventListWidth": 227, "selectedEventId": 8, "showPolyline": true}),
                tile: JSON.stringify({
                    "url": "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
                    "bounds": {"_northEast": {"lat": 85, "lng": 45}, "_southWest": {"lat": 47, "lng": -180}},
                    "maxZoom": 15,
                    "minZoom": 8,
                    "attribution": "&copy; <a href=\"https://knastu.ru/\">knastu</a>",
                    "showPolyline": true,
                    "polylineWeight": 3
                }),
                events: JSON.stringify([{
                    "id": 8,
                    "title": "Ханкайский заповедник",
                    "description": "<p>государственный природный заповедник, расположенный в юго-западной части&nbsp;Приморского края.</p><p>Заповедник учреждён 28 декабря 1990 года. Занимает площадь 39 289 га, включает акваторию озера Ханка и его побережье. Территория разделена на 5 изолированных участков. Площадь каждого участка заповедника (га):</p><ul><li><p>участок «Сосновый» — 375, в том числе акватории — 140;</p></li><li><p>участок «Мельгуновский» — 300;</p></li><li><p>участок «Речной» — 12494;</p></li><li><p>участок «Журавлиный» — 9479;</p></li><li><p>участок «Чёртово болото» — 16641, в том числе лес — 366 га (1,0&nbsp;%).</p></li></ul>",
                    "mediaUrl": ["https://www.youtube.com/watch?v=ivUX5JvaeTY"],
                    "marker": {
                        "position": {"lat": 44.875356196767044, "lng": 132.86315917968753},
                        "url": require('@/assets/images/examples/dv-icon.png'),
                        "size": ["35", "35"]
                    }
                }, {
                    "id": 7,
                    "title": "Национальный парк \"Бикин\"",
                    "description": "<p>Нет другой такой реки в&nbsp;Приморье, которая, как Бикин, уведёт вас не&nbsp;только в&nbsp;дикие и&nbsp;безлюдные места, но&nbsp;еще и&nbsp;наполнит вашу душу покоем, восторгом и&nbsp;благоговением к&nbsp;настоящей Уссурийской тайге. </p><p>Здесь остался последний нетронутый рубками участок&nbsp;кедрово-широколиственной&nbsp;тайги, за&nbsp;который велась настоящая битва между экологами и&nbsp;лесозаготовительными компаниями. Был даже момент, когда была разрешена вырубка дуба и&nbsp;ясеня на&nbsp;паркет, но&nbsp;лесорубов встретили вооруженные кордоны местных жителей. Аборигены не&nbsp;пустили бизнес в&nbsp;свои леса. Экологи обеспечили шумную кампанию по&nbsp;их&nbsp;защите. И&nbsp;на&nbsp;государственном уровне было решено раз и&nbsp;навсегда оставить эти леса в&nbsp;покое: их&nbsp;внесли в&nbsp;число объектов Всемирного природого наследия Юнеско, а&nbsp;в&nbsp;2015 году здесь был создан Национальный парк «Бикин».</p>",
                    "mediaUrl": ["https://i.ytimg.com/vi/D4mF-VgvPBw/maxresdefault.jpg", "https://img04.rl0.ru/0a5b4e93f39b5486a7ec52fdfb244fe4/c615x400i/news.rambler.ru/img/2017/10/03032643.108328.5747.jpeg"],
                    "marker": {
                        "position": {"lat": 44.60652316850046, "lng": 133.09936523437503},
                        "url": require('@/assets/images/examples/dv-icon.png'),
                        "size": ["35", "35"]
                    }
                }, {
                    "id": 2,
                    "title": "Уссурийский заповедник",
                    "description": "<p>Главное богатство Уссурийского заповедника - достаточно крупный массив девственных лиановых хвойно-широколиственных лесов, которых почти не сохранилось ни на российском Дальнем Востоке, ни в сопредельных странах.<br>Заповедник носит имя академика Владимира Леонтьевича Комарова – крупнейшего отечественного ботаника, исследователя флоры Восточной Азии. Он первым дал описание этой территории, посетив ее в 1913 году.<br>Заповедник был создан еще в 1932 году, с тех пор существенно увеличилась его площадь, которая сейчас составляет 40,4 тысячи га.</p>",
                    "mediaUrl": ["https://sun9-13.userapi.com/c851536/v851536942/1cb969/akk8FNsh6wI.jpg", "https://www.youtube.com/watch?v=N1r_QtZ-XGs"],
                    "marker": {
                        "position": {"lat": 43.63231659419255, "lng": 132.51159667968753},
                        "url": require('@/assets/images/examples/dv-icon.png'),
                        "size": ["35", "35"]
                    }
                }, {
                    "id": 5,
                    "title": "Парк \"Зов тигра\"",
                    "description": "<p>Один из самых доступных парков Приморья —&nbsp;<strong>«Зов тигра»</strong>. Для него разработано несколько туристических маршрутов, в том числе и сезонных, поэтому приезжать туда можно в любое время года. На территории парка находятся две реки — Уссури и Милоградовка. На берегах последней растут четырёхсотлетние кедры- чтобы обхватить такое дерево, нужно встать в круг с друзьями и взяться за руки.</p><p>Река Милоградовка, текущая в живописном каньоне, считается одной из самых красивых в Приморье: скалы здесь голубоватого и розового цвета. Во время похода можно увидеть водопад Дивный, самый большой по расходу воды в Приморском крае: до 2−3 кубометров в секунду. На притоках Милоградовки примерно десять водопадов. Обычно на всё путешествие вдоль реки уходит три дня. Ночевать можно в палатках на оборудованных стоянках.</p>",
                    "mediaUrl": ["https://primamedia.gcdn.co/f/big/1285/1284113.jpg", "https://primamedia.gcdn.co/f/main/1285/1284045.jpg?37112e80aca9b205e0a490eabb5fab64", "https://about-planet.ru/images/asia/priroda/park_zov_tigra/nacionalnyj-park-zov-tigra2.jpg"],
                    "marker": {
                        "position": {"lat": 43.624439388128536, "lng": 133.95080566406253},
                        "url": require('@/assets/images/examples/dv-icon.png'),
                        "size": ["35", "35"]
                    }
                }, {
                    "id": 6,
                    "title": "Сихотэ-Алинский заповедник",
                    "description": "<p>Сихотэ́-Али́нский государственный природный биосферный заповедник имени К. Г. Абрамова — биосферный заповедник в Приморском крае. Первоначальная цель его создания — сохранение и восстановление почти истреблённого в то время соболя.</p>",
                    "mediaUrl": ["https://www.youtube.com/watch?v=qo0iLJfrdao"],
                    "marker": {
                        "position": {"lat": 44.69990541414265, "lng": 135.90087890625003},
                        "url": require('@/assets/images/examples/dv-icon.png'),
                        "size": ["35", "35"]
                    }
                }, {
                    "id": 4,
                    "title": "Парк \"Остров \"Монерон\"",
                    "description": "<p>Это первый морской природный парк в России. Его почти не видно на картах, потому что он занимает всего 30 км². Местные жители называют его таинственным: мало кому удается туда попасть, а из города его порой не видно из-за тумана. Остров находится в пограничной зоне, поэтому каждому посетителю нужно получать пропуск. Это можно сделать самостоятельно по инструкции на сайте или обратиться в одну из сахалинских турфирм. Находиться на острове можно не дольше двух дней, но его подводный мир определённо стоит того. Это отличная локация для любителей дайвинга и место, о которым вы сможете рассказать друзьям десятки историй.</p>",
                    "mediaUrl": ["https://www.youtube.com/watch?v=1Dw7_HFGyrA"],
                    "marker": {
                        "position": {"lat": 46.15002177945491, "lng": 141.28417968750003},
                        "url": require('@/assets/images/examples/dv-icon.png'),
                        "size": ["35", "35"]
                    }
                }, {
                    "id": 9,
                    "title": "Комсомольский заповедник",
                    "description": "<p>Заповедник&nbsp;в центральной части&nbsp;Хабаровского края созданный&nbsp;3 октября 1963 года.</p><p>Заповедная территория занимает площадь&nbsp;64 тысяч&nbsp;га, в том числе площадь&nbsp;акватории&nbsp;— 4488 га. Площадь охранной зоны&nbsp;— 9831 га.</p><p>Занимает&nbsp;устьевую&nbsp;часть&nbsp;реки Горин&nbsp;— левого&nbsp;притока&nbsp;реки&nbsp;Амур. Часть территории&nbsp;—&nbsp;долина&nbsp;реки Амур. Наивысшая точка заповедника&nbsp;— гора Чоккеты (789 м)</p>",
                    "mediaUrl": ["https://todaykhv.ru/upload/medialibrary/f88/7a8c8979d3f5ab415f35f31d25d867bb.jpg", "https://www.youtube.com/watch?v=9G3W2gBLGhw"],
                    "marker": {
                        "position": {"lat": 50.58069681588323, "lng": 136.92810058593753},
                        "url": require('@/assets/images/examples/dv-icon.png'),
                        "size": ["35", "35"]
                    }
                }])
            },
            {
                id: 3,
                img: require('@/assets/images/examples/solar-system.png'),
                name: 'Солнечная система',
                subtitle: 'Астрономия',
                description: 'Планетная система, включает в себя центральную звезду и все планеты, вращающиеся вокруг.',
                config: JSON.stringify({"showPolyline": false, "eventListWidth": 227, "selectedEventId": 1}),
                tile: JSON.stringify({
                    "url": "/tile3/{z}-{x}-{y}.jpg",
                    "bounds": {"_northEast": {"lat": 85, "lng": 45}, "_southWest": {"lat": 47, "lng": -180}},
                    "maxZoom": 4,
                    "minZoom": 3,
                    "attribution": "&copy; <a href=\"https://knastu.ru/\">knastu</a>"
                }),
                events: JSON.stringify([{
                    "id": 1,
                    "marker": {
                        "position": {"lat": 71.47435750198224, "lng": -2.4609375000000004},
                        "url": require('@/assets/images/examples/solar-system-icon.png'),
                        "size": ["40", "40"]
                    },
                    "title": "Солнце",
                    "description": "<p>Одна из звёзд нашей Галактики и единственная звезда Солнечной системы. Вокруг Солнца обращаются другие объекты этой системы: планеты и их спутники, карликовые планеты и их спутники, астероиды, метеороиды, кометы и космическая пыль.</p>",
                    "mediaUrl": ["https://www.youtube.com/watch?v=HNmy3IKHnQE"]
                }, {
                    "id": 4,
                    "title": "Меркурий",
                    "description": "<p>Самая близкая к Солнцу планета (общие сведения о Меркурии и других планетах Солнечной системы&nbsp;вы найдете в приложении 1) — среднее расстояние от Солнца 57 909 176 км. Однако расстояние от Солнца до Меркурия может меняться от 46,08 до 68,86 млн км. Расстояние Меркурия от Земли составляет от 82 до 217 млн км. Ось Меркурия почти перпендикулярна плоскости его орбиты.</p><p>Из-за незначительного наклонения оси вращения Меркурия к плоскости его орбиты заметных сезонных изменений на этой планете нет. Нет у Меркурия и спутников.</p>",
                    "mediaUrl": ["https://www.youtube.com/watch?v=n6lOC_AQgJU"],
                    "marker": {
                        "position": {"lat": 44.33993983187932, "lng": -92.10937500000001},
                        "url": require('@/assets/images/examples/solar-system-icon.png'),
                        "size": ["40", "40"]
                    }
                }, {
                    "id": 5,
                    "title": "Венера",
                    "description": "<p>Венера является второй планетой от Солнца, ближайшей планетой к&nbsp;Земле&nbsp;и третьим по яркости объектом на небосклоне после Солнца и Луны. Иногда эту планету называют&nbsp;<strong>сестрой Земли</strong>, что связано с определенной схожестью по массе и размерам.&nbsp; Поверхность Венеры покрыта полностью непроницаемым слоем облаков, основным компонентом которых является&nbsp; серная кислота.</p><p>Называние&nbsp;<strong>Венера</strong>&nbsp;планета получила в честь римской богини любви и красоты. Еще во времена древних римлян люди уже знали, что эта Венера является одной из четырех, отличающихся от Земли планет. Именно самый высокий показатель яркости планеты, заметность Венеры, сыграл свою роль в том, что она была названа в честь богини любви, и это позволило годами ассоциировать планету с любовью, женственностью и романтикой.</p>",
                    "mediaUrl": ["https://oplanetah.ru/wp-content/uploads/2018/12/venera_stroenie.jpg", "https://www.youtube.com/watch?v=ShZkCYLYYtg", "https://lh3.googleusercontent.com/proxy/SzEARh3gEln99BMr8fRGHfsqF-PTcKYWqi7X4gfb2YoCIglvxzFhhxGDFajDaJFCc4P9qP_F5FpiR3DH4s-jRKOSPS5Bm-vOniNt8unpe5l1vX6LF3zDZ8rq"],
                    "marker": {
                        "position": {"lat": 73.53283745305296, "lng": 137.28515625000003},
                        "url": require('@/assets/images/examples/solar-system-icon.png'),
                        "size": ["40", "40"]
                    }
                }, {
                    "id": 2,
                    "title": "Земля",
                    "description": "<p>Третья по удалённости от Солнца планета Солнечной системы. Самая плотная, пятая по диаметру и массе среди всех планет и крупнейшая среди планет земной группы, в которую входят также Меркурий, Венера и Марс. </p><p><em>Единственное</em> известное человеку на данный момент тело Солнечной системы в частности и Вселенной вообще, населённое живыми организмами.</p>",
                    "mediaUrl": ["https://i.pinimg.com/736x/8f/7f/43/8f7f434e64d34088259e8d04f604ab60.jpg"],
                    "marker": {
                        "position": {"lat": 40.05561865326382, "lng": 63.45703125000001},
                        "url": require('@/assets/images/examples/solar-system-icon.png'),
                        "size": ["40", "40"]
                    }
                }, {
                    "id": 3,
                    "title": "Луна",
                    "description": "<h3>Единственный естественный спутник Земли. </h3><p>Самый близкий к Солнцу спутник планеты, так как у ближайших к Солнцу планет их нет. Второй по яркости объект на земном небосводе после Солнца и пятый по величине естественный спутник планеты Солнечной системы. Среднее расстояние между центрами Земли и Луны — 384 467 км.</p>",
                    "mediaUrl": ["https://total.kz/storage/74/746f776f1ec555dd85223ce0d4147843_resize_w_830_h_465.png", "https://spacegid.com/wp-content/uploads/2018/06/Poverhnost-Lunyi.jpg"],
                    "marker": {
                        "position": {"lat": 43.9632850138258, "lng": 37.96875000000001},
                        "url": require('@/assets/images/examples/solar-system-icon.png'),
                        "size": ["40", "40"]
                    }
                }, {
                    "id": 6,
                    "title": "Сатурн",
                    "description": "<p>Сатурн – это шестая по удаленности от Солнца планета (шестая планета Солнечной системы).</p><p>Сатурн относится к газовым гигантам и назван в честь древнеримского бога земледелия.</p><p>Сатурн известен людям с древних времен.</p><p>Соседями Сатурна являются Юпитер и Уран. Юпитер, Сатурн, Уран и Нептун обитают во внешней области Солнечной системы.</p><p>Считается, что в центре газового гиганта находится массивное ядро из твердых и тяжелых материалов (силикатов, металлов) и водяного льда.</p><p>Магнитное поле Сатурна создается за счет эффекта динамо при циркуляции металлического водорода во внешнем ядре и является почти дипольным с северным и южным магнитными полюсами.</p>",
                    "mediaUrl": ["https://www.youtube.com/watch?v=pTEMxgUNBQc", "https://v-kosmose.com/wp-content/uploads/2013/10/2000px-Interior_of_Saturn.svg_.png"],
                    "marker": {
                        "position": {"lat": 75.62853112476809, "lng": -84.37500000000001},
                        "url": require('@/assets/images/examples/solar-system-icon.png'),
                        "size": ["40", "40"]
                    }
                }, {
                    "id": 7,
                    "title": "Уран",
                    "description": "<p>Планета Солнечной системы, <u>седьмая</u> по удалённости от Солнца, третья по диаметру и четвёртая по массе. Была открыта в 1781 году английским астрономом Уильямом Гершелем и названа в честь греческого бога неба Урана. Уран стал первой планетой, обнаруженной в Новое время и при помощи телескопа</p>",
                    "mediaUrl": ["https://www.youtube.com/watch?v=h-F36sUDoWM"],
                    "marker": {
                        "position": {"lat": 68.20976456713238, "lng": -152.75390625000003},
                        "url": require('@/assets/images/examples/solar-system-icon.png'),
                        "size": ["40", "40"]
                    }
                }])
            }
        ],
        localSubjects: [
            {
                name: "Информатика",
                icon: require('@/assets/images/subjects/computer_science.png')
            },
            {
                name: "Биология",
                icon: require('@/assets/images/subjects/biology.png')
            },
            {
                name: "География",
                icon: require('@/assets/images/subjects/geography.png')
            },
            {
                name: "История",
                icon: require('@/assets/images/subjects/history.png')
            },
            {
                name: "Другое",
                icon: require('@/assets/images/subjects/custom.png')
            }
        ],
        externalSubjects: [],
        tiles: [
            {
                name: "Стандартная",
                url: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            },
            {
                name: "Стандартная. Ночь",
                url: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
            },
            {
                name: "Строение человека",
                url: "/tile1/{z}-{x}-{y}.jpg"
            },
            {
                name: "Карта фильма Властелин Колец",
                url: "/tile2/{z}-{x}-{y}.jpg"
            },
            {
                name: "Заповедники Дальнего востока",
                url: "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
            },
            {
                name: "Солнечная система",
                url: "/tile3/{z}-{x}-{y}.jpg"
            },
            {
                name: "Астрономия",
                url: "http://leafletjs.com/examples/crs-simple/uqm_map_full.png"
            },
        ],
    },
    getters: {
        subjects(state) {
            return state.localSubjects.concat(state.externalSubjects);
        },
    },
    actions: {
        getMaps({commit}) {
            return axios.get('/api/maps')
                .then(response => {
                    commit('SET_MAPS', response.data.data.maps);
                })
        },
        createMap({commit}, data) {
            return axios.post('/api/maps',
                {
                    name: data.name,
                    subject: data.subject,
                    description: data.description
                })
                .then(response => {
                    commit('SET_MAPS', response.data.data.maps);
                })
        },
        duplicateMap({commit}, data) {
            return axios.post('/api/maps/duplicate', {id: data.id})
                .then(response => {
                    commit('SET_MAPS', response.data.data.maps);
                })
        },
        destroyMap({commit}, data) {
            return axios.delete('/api/maps/' + data.id)
                .then(response => {
                    commit('SET_MAPS', response.data.data.maps);
                })
        },
        destroyMaps({commit}, data) {
            let ids = [];
            data.forEach(element => ids.push(element.id));

            return axios.delete('/api/maps/' + ids)
                .then(response => {
                    commit('SET_MAPS', response.data.data.maps);
                })
        },
        getExternalSubjects({commit}) {
            return axios.get('/api/users/subjects')
                .then(response => {
                    commit('SET_EXTERNAL_SUBJECTS', JSON.parse(response.data.data.subjects));
                })
        },
        createExternalSubject({state, commit}, subject) {
            commit('ADD_EXTERNAL_SUBJECT', subject);
            return axios.post('/api/users/subjects', {subjects: JSON.stringify(state.externalSubjects)})
                .then(response => {
                    commit('SET_EXTERNAL_SUBJECTS', JSON.parse(response.data.data.subjects));
                })
        },
    },
    mutations: {
        SET_MAPS: (state, maps) => { state.maps = maps },
        SET_EXTERNAL_SUBJECTS: (state, subjects) => { subjects === null ? state.externalSubjects = [] : state.externalSubjects = subjects },
        ADD_EXTERNAL_SUBJECT: (state, subjects) => { state.externalSubjects.push(subjects) },
        ADD_TILE(state, tile) { state.tiles.push(tile) },
        SAVE_EDITABLE_EXAMPLE(state, map) {
            state.editableExample.name = map.name;
            state.editableExample.subject = map.subject;
            state.editableExample.description = map.description;
            state.editableExample.config = JSON.stringify(map.config);
            state.editableExample.tile = JSON.stringify(map.tile);
            state.editableExample.events = JSON.stringify(map.events);
        }
    }
}
