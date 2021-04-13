import axios from "axios"

export default {
    namespaced: true,
    state: {
        maps: [],
        editableExample: {
            id: "test",
            name: "Тестовый Атлас",
            subject_id: "",
            description: "Описание",
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
                img: require('@/assets/images/examples/human.png'),
                name: 'Тело человека',
                description: 'Внутреннее строение тела человека с моделями всех основных органов. За объект был взят макет, никто из людей не пострадал.',
                subtitle: "Биология",
                url: 'http://192.168.77.23/viewer/4?iframe=true'
            },
            {
                img: require('@/assets/images/examples/dv.png'),
                name: 'Парки и заповедники Дальнего Востока',
                subtitle: 'Туризм',
                description: 'Карта путешественника. Описание коллекций и особенностей парков для животных.',
                url: 'http://192.168.77.23/viewer/1?iframe=true'
            },
            {
                img: require('@/assets/images/examples/solar-system.png'),
                name: 'Солнечная система',
                subtitle: 'Астрономия',
                description: 'Планетная система, включает в себя центральную звезду и все планеты, вращающиеся вокруг.',
                url: 'http://192.168.77.23/viewer/5?iframe=true'
            },
            {
                img: require('@/assets/images/examples/dv.png'),
                name: 'Парки и заповедники Дальнего Востока',
                subtitle: 'Туризм',
                description: 'Карта путешественника. Описание коллекций и особенностей парков для животных.',
                url: 'http://192.168.77.23/viewer/1?iframe=true'
            },
            {
                img: require('@/assets/images/examples/solar-system.png'),
                name: 'Солнечная система',
                subtitle: 'Астрономия',
                description: 'Планетная система, включает в себя центральную звезду и все планеты, вращающиеся вокруг.',
                url: 'http://192.168.77.23/viewer/5?iframe=true'
            },
            {
                img: require('@/assets/images/examples/human.png'),
                name: 'Тело человека',
                description: 'Внутреннее строение тела человека с моделями всех основных органов. За объект был взят макет, никто из людей не пострадал.',
                subtitle: "Биология",
                url: 'http://192.168.77.23/viewer/4?iframe=true'
            }
        ],
        // share map dialog
        showShareMapDialog: false,
        shareMapId: null
    },
    actions: {
        getMaps({commit}) {
            return axios.get('/api/maps')
                .then(response => {
                    commit('SET_MAPS', response.data.data.maps);
                })
        },
        createMap({commit}, data) {
            return axios.post('/api/maps', {
                name: data.name,
                subject_id: data.subject_id,
                description: data.description,
                config: JSON.stringify(data.config),
                tile: JSON.stringify(data.tile),
                events: JSON.stringify(data.events)
            })
                .then(response => { commit('SET_MAPS', response.data.data.maps) })
        },
        copyMap({commit}, data) {
            return axios.post('/api/maps/copy', {id: data.id})
                .then(response => { commit('SET_MAPS', response.data.data.maps) })
        },
        destroyMap({commit}, data) {
            return axios.delete('/api/maps/' + data.id)
                .then(response => { commit('SET_MAPS', response.data.data.maps) })
        },
        destroyMaps({commit}, data) {
            let ids = [];
            data.forEach(element => ids.push(element.id));

            return axios.delete('/api/maps/' + ids)
                .then(response => { commit('SET_MAPS', response.data.data.maps) })
        },
        setSubjectForMaps({commit}, payload) {
            let map_ids = [];
            payload.maps.forEach(el => map_ids.push(el.id));

            return axios.post('/api/maps/setSubject', {
                map_ids: map_ids,
                subject_id: payload.subject_id
            })
                .then(response => { commit('SET_MAPS', response.data.data.maps) })
        },
        setPrivacyForMap({commit}, data) {
            return axios.put('/api/maps/' + data.map_id + '/setPrivacy', data)
        }
    },
    mutations: {
        SET_MAPS(state, maps) { state.maps = maps },
        SAVE_EDITABLE_EXAMPLE(state, map) {
            state.editableExample.name = map.name;
            state.editableExample.subject = map.subject;
            state.editableExample.description = map.description;
            state.editableExample.config = JSON.stringify(map.config);
            state.editableExample.tile = JSON.stringify(map.tile);
            state.editableExample.events = JSON.stringify(map.events);
        },
        REPLACE_MAP (state, new_map) {
            // если библиотека уже загружена
            if (state.maps.length) {
                // результирующй массив
                state.maps = state.maps.map(map => {
                    if (map.id === new_map.id) {
                        return new_map;
                    }
                    return map;
                });
            }
        },

        SET_PRIVACY_FOR_MAP (state, data) {
            (state.maps.find(map=> map.id === data.map_id)).public = data.public;
        },
        SET_SHARE_MAP_DIALOG (state, data) {
            state.showShareMapDialog = data.showShareMapDialog;
            if (data.shareMapId) state.shareMapId = data.shareMapId;
        }
    }
}
