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
            config: JSON.stringify({"eventListWidth": 227, "selectedEventId": 1, "maxZoom": 10, "minZoom": 3, "showPolyline" : true, "polylineWeight": 1}),
            tile_id: 1,
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
                img: require('@/assets/images/examples/empare.jpg'),
                name: 'Династия Романовых',
                subtitle: 'История',
                description: 'Древо династии Романовых.',
                url: 'https://mapdesigner.do-edu.pro/viewer/22?iframe=true'
            },
            {
                img: require('@/assets/images/examples/dv.png'),
                name: 'Парки и заповедники Дальнего Востока',
                subtitle: 'Туризм',
                description: 'Карта путешественника. Описание коллекций и особенностей парков для животных.',
                url: 'https://mapdesigner.do-edu.pro/viewer/1?iframe=true'
            },
            {
                img: require('@/assets/images/examples/witcher.jpg'),
                name: 'Ведьмак',
                subtitle: 'Другое',
                description: 'Игровая карта по вселенной Ведьмак',
                url: 'https://mapdesigner.do-edu.pro/viewer/20?iframe=true'
            },
            {
                img: require('@/assets/images/examples/solar-system.png'),
                name: 'Солнечная система',
                subtitle: 'Астрономия',
                description: 'Планетная система, включает в себя центральную звезду и все планеты, вращающиеся вокруг.',
                url: 'https://mapdesigner.do-edu.pro/viewer/5?iframe=true'
            },
            {
                img: require('@/assets/images/examples/human.png'),
                name: 'Тело человека',
                description: 'Внутреннее строение тела человека с моделями всех основных органов. За объект был взят макет, никто из людей не пострадал.',
                subtitle: "Биология",
                url: 'https://mapdesigner.do-edu.pro/viewer/4?iframe=true'
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
                subject_id: data.subject_id,
                tile_for_create: JSON.stringify(data.tile_for_create),
                tile_id: data.tile_id,
                name: data.name,
                description: data.description,
                config: JSON.stringify(data.config),
                events: JSON.stringify(data.events)
            })
                .then(response => {
                    commit('SET_MAPS', response.data.data.maps);
                    if (response.data.data.new_tile) {
                        commit('tiles/ADD_TILE', response.data.data.new_tile, { root: true })
                    }
                })
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
        SET_MAPS(state, maps) { state.maps = maps.reverse() },
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
