<template>
    <div class="app container pt-5">
        <div class="row m-4 w-50 mx-auto justify-content-center">
            <input class="col-8 mr-lg-3 form-control input-search min-w-280 mb-2 rounded-lg shadow-sm" type="text" placeholder="Поиск по названию" v-model.trim="nameSearch">
            <div class="w-75 row min-w-280 mb-4 justify-content-center">
                <select class="col-lg-8 col-10 my-auto custom-select rounded-lg shadow-sm" v-model="sortMethod">
                    <option value="sortByDataCreated">Сортировать по дате создания</option>
                    <option value="sortByDataModified">Сортировать по дате изменения</option>
                </select>
<!--                pr-0 pl-1 m-0-->
                <img class="btn btn-light col-lg-auto ml-lg-1 col-2 p-0" :src="sortImg" @click="sortUp = !sortUp">
            </div>
            <a class="btn btn-info button-create min-w-280 w-50 color-active-black" data-toggle="modal" data-target="#modal"> Создать атлас </a>
        </div>
        <div class="row justify-content-center text-center">
            <div v-for="(map, index) in filteredMaps" :index="index">
                <div class="col-sm card m-2 card-casual px-0 pb-2 shadow" onclick="">
                    <img src="../../images/no-image.png" class="card-img-top" :alt="map.name">
                    <div class="card-body">
                        <h5 class="card-title"> {{map.name}} </h5>
                        <p class="card-text"> {{map.description}} </p>
                    </div>
                    <a class="btn btn-light w-50 mx-auto" @click="$store.dispatch('destroyMap', {id: map.id})"> Удалить </a>
                </div>
            </div>
        </div>

        <!-- Modal-->
        <div class="modal" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Создание атласа</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"> &times; </span></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="name" class="pl-1"> Название атласа <span class="text-danger"> * </span></label>
                                <input
                                    :class="['form-control', name !== '' || errors.nameEmpty ? (errors.nameEmpty || errors.nameDuplicate ? 'is-invalid' : 'is-valid') : '']"
                                    id="name" v-model.trim="name" type="text" autocomplete="off">
                                <span v-show="errors.nameEmpty" class="invalid-feedback ml-1" role="alert"> Пожалуста, введите название атласа. </span>
                                <span v-show="errors.nameDuplicate" class="invalid-feedback ml-1" role="alert"> Атлас с таким названием уже существует! </span>
                            </div>
                            <div class="form-group">
                                <label for="description" class="pl-1"> Описание карты <span class="text-danger">*</span></label>
                                <textarea
                                    :class="['form-control', description !== '' || errors.descriptionEmpty ? (errors.descriptionEmpty ? 'is-invalid' : 'is-valid') : '']"
                                    id="description" v-model.trim="description" autocomplete="off"/>
                                <span v-show="errors.descriptionEmpty" class="invalid-feedback ml-1" role="alert"> Пожалуста, введите описание атласа. </span>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button class="btn btn-primary w-25" @click="createMap()">Создать</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import {mapMutations} from 'vuex';

    export default {
        name: "Constructor",
        data() {
            return {
                edit: "/edit/",
                name: "",
                nameSearch: "",
                description: "",
                sortMethod: "sortByDataCreated",
                // sortUp: false - sortDawn, sortUp: true - sortUp
                sortUp: false,
                errors: {
                    nameEmpty: false,
                    descriptionEmpty: false,
                    nameDuplicate: false
                },
            }
        },
        computed: {
            // Список атласов, в названии которых есть слово из поиска
            filteredMaps: function () {
                let maps = this.$store.getters.maps;
                if (this.sortMethod === "sortByDataCreated") {
                    if (this.sortUp === false) {
                        this.SORT_BY_DATA_CREATED_DOWN();
                    } else this.SORT_BY_DATA_CREATED_UP();
                }
                if (this.sortMethod === "sortByDataModified") {
                    if (this.sortUp === false) {
                        this.SORT_BY_DATA_MODIFIED_DOWN()
                    } else this.SORT_BY_DATA_MODIFIED_UP();

                }
                let name = this.nameSearch;
                return maps.filter(function (elem) {
                    if (name === '') return true;
                    else return elem.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
                })
            },
            // Иконка для разного вида сортировки
            sortImg: function () {
                if (this.sortUp === false)
                    return "../../images/sort_down.png";
                else return "../../images/sort_up.png"
            }
        },
        watch: {
            name: function () {
                if (this.name !== '') {
                    this.errors.nameEmpty = false;
                    // nameDuplicate = true, если название повторяется
                    this.errors.nameDuplicate = this.$store.getters.maps.find(map => map.name.toLowerCase() === this.name.toLowerCase()) !== undefined;
                }
            },
            description: function () {
                if (this.description !== '') {
                    this.errors.descriptionEmpty = false;
                }
            }
        },
        methods: {
            ...mapMutations([
                "SORT_BY_DATA_CREATED_DOWN",
                "SORT_BY_DATA_CREATED_UP",
                "SORT_BY_DATA_MODIFIED_DOWN",
                "SORT_BY_DATA_MODIFIED_UP"
            ]),
            // Валидация ввода и создание атласа с помощью асинхронного запроса
            createMap: function () {
                if (this.name === "") {
                    this.errors.nameEmpty = true;
                }
                if (this.description === "") {
                    this.errors.descriptionEmpty = true;
                }

                if (!this.errors.nameEmpty && !this.errors.descriptionEmpty && !this.errors.nameDuplicate) {
                    this.$store.dispatch('createMap', {name: this.name, description: this.description});
                    $('#modal').modal('hide')
                }
            }
        },
        mounted: function () {
            // Нужно сохранить ссылку на компонент в переменной, для последующего обращения к data
            let ref = this;

            $('#modal')
                // При скрытии модального окна поля формы очищаются
                .on('hidden.bs.modal', function () {
                    // Очистка данных, которые привязаны к полям формы
                    ref.name = "";
                    ref.description = "";
                    // Очистка ошибок
                    ref.errors.nameEmpty = false;
                    ref.errors.descriptionEmpty = false;
                    // Очистка полей формы
                    $(this)
                        .find("input,textarea,select")
                        .val('')
                        .end();
                })
                // При открытии формы фокус на названии атласа
                .on('shown.bs.modal', function () {
                    $('#name').trigger('focus')
                });
        }
    }

</script>

<style lang="sass" scoped>
    .input-search
        background: url(../../images/search_icon.png) no-repeat left center white
        background-size: 24px 24px
        padding-left: 30px
</style>
