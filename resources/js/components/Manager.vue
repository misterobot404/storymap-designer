<template>
    <div class="app container pt-5 mt-1">

        <!-- FILTER -->
        <ul class="breadcrumb nav nav-pills text-center
        flex-sm-row align-content-sm-start
        flex-column align-content-center">
            <li class="nav-item">
                <a :class="['nav-owner', 'nav-link', mapOwner === 'all' ? 'text-primary' : 'text-secondary']" @click="selectPage('all')">Все атласы</a>
            </li>
            <li :class="['nav-item', {active: mapOwner === 'my'}]">
                <a :class="['nav-owner', 'nav-link', mapOwner === 'my' ? 'text-primary' : 'text-secondary']" @click="selectPage('my')">Мои атласы</a>
            </li>
            <li :class="['nav-item', {active: mapOwner === 'other'}]">
                <a :class="['nav-owner', 'nav-link', mapOwner === 'other' ? 'text-primary' : 'text-secondary']" @click="selectPage('other')">Атласы по подписке</a>
            </li>
        </ul>

        <ul class="nav mb-4 py-3 border-bottom">
            <li class="nav-item col-sm">
                <input class="mx-auto form-control input-search rounded-lg" type="text" placeholder="Поиск по названию" v-model.trim="nameSearch">
            </li>
            <li class="nav-item col-sm-auto row">
                <div class="btn-group align-self-start">
                    <button id="btnGroupSort" class="px-sm-3 btn dropdown-toggle dropdown-btn rounded-lg" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                        <i>Сортировать:</i>
                        <span v-if="sortMethod==='sortByDataCreated'" style="margin-right: 1px">По дате создания</span>
                        <span v-else style="margin-right: 1px">По дате изменения</span>
                    </button>
                    <div class="w-100 dropdown-menu shadow-sm rounded-lg" aria-labelledby="btnGroupSort">
                        <span class="dropdown-header font-w-600" @click.stop>Выберите метод сортировки</span>
                        <div class="dropdown-divider"/>
                        <a class="dropdown-item text-dark" @click="setSortMethod('sortByDataCreated')">
                            <svg width="12" height="19" aria-hidden="true" style="margin-right: 8px">
                                <path v-show="sortMethod==='sortByDataCreated'" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/>
                            </svg>
                            По дате создания</a>
                        <a class="dropdown-item text-dark" @click="setSortMethod('sortByDataModified')">
                            <svg width="12" height="19" aria-hidden="true" style="margin-right: 8px">
                                <path v-show="sortMethod==='sortByDataModified'" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/>
                            </svg>
                            По дате изменения</a>
                    </div>
                </div>
                <div class="col-auto btn btn-light ml-1 align-self-start rounded-lg" type="button" role="button" style="padding: 1px" @click="sortUp = !sortUp">
                    <img :src="sortImg" class="img-fluid p-1" alt="sort">
                </div>
            </li>
            <li class="nav-item col-sm-auto text-center">
                <button id="btn-show-create-map" class="btn btn-primary mb-3 mx-auto" data-toggle="modal" data-target="#modal"> Создать</button>
            </li>
        </ul>

        <!-- Maps -->
        <MapList class="pt-3" :sort-up="sortUp" :sort-method="sortMethod" :name-search="nameSearch" :map-owner="mapOwner"/>
        <!-- Modal-->
        <CreateMapModal/>
    </div>
</template>

<script>
    import MapList from "./Manager/MapList";
    import CreateMapModal from "./Manager/CreateMapModal";

    export default {
        name: "Constructor",
        components: {
            MapList,
            CreateMapModal
        },
        data() {
            return {
                // FILTERS
                nameSearch: "",
                //sortByDataCreated or sortByDataModified
                sortMethod: "sortByDataCreated",
                // sortUp: false = sortDawn, sortUp: true = sortUp
                sortUp: false,
                // owner user filter
                mapOwner: "all"
            }
        },
        computed: {
            sortImg: function () {
                // require для добавления картинки в дерево зависимостей webpack
                if (this.sortUp === false) return require('../../images/sort_down.png');
                else return require('../../images/sort_up.png');
            }
        },
        methods: {
            setSortMethod: function (method) {
                this.sortMethod = method;
            },
            selectPage: function (page) {
                this.mapOwner = page;
            }
        }
    }
</script>

<style lang="sass" scoped>

    .input-search
        background: url('../../images/search_icon.png') no-repeat left center white
        background-size: 24px 24px
        padding-left: 30px

    .dropdown-btn
        background-color: #eff3f6
        font-weight: 600
        border: 1px solid #ced4da
        -webkit-appearance: none
        color: #464d54

        &:hover
            background-color: #e9ecef

        i
            font-style: normal
            font-weight: 500
            opacity: .75

    .dropdown-toggle:after
        vertical-align: 1px

    .dropdown-menu
        padding: 0
        font-size: 14px
        user-select: none
        margin-top: 5px
        overflow: hidden

    .dropdown-header
        background-color: #F6F8FA
        color: #464d54
        font-size: 14px

    .dropdown-divider
        margin: 0

    .dropdown-item
        cursor: pointer
        padding: 8px 16px

        &:active
            background-color: #e6ebf1

    .nav-owner
        user-select: none
        cursor: pointer
        font-weight: 500
</style>
