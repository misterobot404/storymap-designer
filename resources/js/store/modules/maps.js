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
                "mediaUrl": ""
            }])
        },
        examples: [
            {
                id: 1,
                img: require('@/assets/images/examples/human.png'),
                name: 'Организм человека',
                description: 'Внутреннее строение организма человека с моделями всех основных органов. За объект был взят макет, никто из людей не пострадал.',
                subject: "Организм",
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
                    "mediaUrl": ""
                }])
            },
            {
                id: 2,
                img: require('@/assets/images/examples/dv.jpg'),
                name: 'Парки и заповедники Дальнего Востока',
                subtitle: 'Туризм',
                description: 'Карта путешественника. Описание коллекций и особенностей парков для животных.',
                config: JSON.stringify({"eventListWidth": 227, "selectedEventId": 1}),
                tile: JSON.stringify({
                    "url": "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
                    "bounds": {"_northEast": {"lat": 85, "lng": 45}, "_southWest": {"lat": 47, "lng": -180}},
                    "maxZoom": 4,
                    "minZoom": 3,
                    "attribution": "&copy; <a href=\"https://knastu.ru/\">knastu</a>"
                }),
                events: JSON.stringify([
                    {
                        "id": 1,
                        "marker": {"position": {"lat": 67, "lng": -41.1}, "url": "https://image.flaticon.com/icons/svg/148/148828.svg", "size": [32, 38]},
                        "title": "Стартовое событие",
                        "description": "",
                        "mediaUrl": ""
                    },
                    {
                        "id": 2,
                        "marker": {"position": {"lat": 68, "lng": -41.1}, "url": "https://image.flaticon.com/icons/svg/148/148828.svg", "size": [32, 38]},
                        "title": "ЫЫЫЫ",
                        "description": "",
                        "mediaUrl": ""
                    }
                ])
            },
            {
                id: 3,
                img: require('@/assets/images/examples/alch.jpg'),
                name: 'Таблица Менделеева',
                subtitle: 'Обучение',
                description: 'Классическая таблица химических элементов, описывающая свойства элементов и демонстрирующая модели.',
                config: JSON.stringify({"eventListWidth": 227, "selectedEventId": 1}),
                tile: JSON.stringify({
                    "url": "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
                    "bounds": {"_northEast": {"lat": 85, "lng": 45}, "_southWest": {"lat": 47, "lng": -180}},
                    "maxZoom": 4,
                    "minZoom": 3,
                    "attribution": "&copy; <a href=\"https://knastu.ru/\">knastu</a>"
                }),
                events: JSON.stringify([
                    {
                        "id": 1,
                        "marker": {"position": {"lat": 67, "lng": -41.1}, "url": "https://image.flaticon.com/icons/svg/148/148828.svg", "size": [32, 38]},
                        "title": "Стартовое событие",
                        "description": "",
                        "mediaUrl": ""
                    },
                    {
                        "id": 2,
                        "marker": {"position": {"lat": 68, "lng": -41.1}, "url": "https://image.flaticon.com/icons/svg/148/148828.svg", "size": [32, 38]},
                        "title": "ЫЫЫЫ",
                        "description": "",
                        "mediaUrl": ""
                    },
                    {
                        "id": 3,
                        "marker": {"position": {"lat": 63, "lng": -41.1}, "url": "https://image.flaticon.com/icons/svg/148/148828.svg", "size": [32, 38]},
                        "title": "FFFFF",
                        "description": "",
                        "mediaUrl": ""
                    }
                ])
            }
        ],
        subjects: [
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
        ]
    },
    actions: {
        getMaps: function ({commit}) {
            return axios.get('/api/maps')
                .then(response => {
                    commit('SET_MAPS', response.data.data.maps);
                })
        },
        createMap: function ({commit}, data) {
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
        duplicateMap: function ({commit}, data) {
            return axios.post('/api/maps/duplicate', {id: data.id})
                .then(response => {
                    commit('SET_MAPS', response.data.data.maps);
                })
        },
        destroyMap: function ({commit}, data) {
            return axios.delete('/api/maps/' + data.id)
                .then(response => {
                    commit('SET_MAPS', response.data.data.maps);
                })
        },
        destroyMaps: function ({commit}, data) {
            let ids = [];
            data.forEach(element => ids.push(element.id));

            return axios.delete('/api/maps/' + ids)
                .then(response => {
                    commit('SET_MAPS', response.data.data.maps);
                })
        },
    },
    mutations: {
        SET_MAPS: (state, maps) => {
            state.maps = maps;
        }
    }
}
