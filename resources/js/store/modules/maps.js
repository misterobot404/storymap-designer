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
        ],
    },
    getters: {
        subjects(state) {
            return state.localSubjects.concat(state.externalSubjects);
        },
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
        getExternalSubjects: function ({commit}) {
            return axios.get('/api/users/subjects')
                .then(response => {
                    commit('SET_EXTERNAL_SUBJECTS', JSON.parse(response.data.data.subjects));
                })
        },
        createExternalSubject: function ({state, commit}, subject) {
            commit('ADD_EXTERNAL_SUBJECT', subject);
            return axios.post('/api/users/subjects', {subjects: JSON.stringify(state.externalSubjects)})
                .then(response => {
                    commit('SET_EXTERNAL_SUBJECTS', JSON.parse(response.data.data.subjects));
                })
        },
    },
    mutations: {
        SET_MAPS: (state, maps) => {
            state.maps = maps;
        },
        SET_EXTERNAL_SUBJECTS: (state, subjects) => {
            if (subjects === null)
                state.externalSubjects = [];
            else state.externalSubjects = subjects;
        },
        ADD_EXTERNAL_SUBJECT: (state, subjects) => {
            state.externalSubjects.push(subjects);
        },
        ADD_TILE(state,tile) {
            state.tiles.push(tile);
        },
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
