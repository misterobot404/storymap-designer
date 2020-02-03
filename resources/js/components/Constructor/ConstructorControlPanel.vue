<template>
    <div id="constructor-header">
        <!--TODO: Изменить цвет при нажатии кнопок-->
        <a class="constructor-header-button" type="button" data-toggle="modal" data-target="#exampleModal">Настройки</a>
        <a class="constructor-header-button" @click="saveMap">Сохранить</a>
        <a class="constructor-header-button" :href="baseUrl+map_id">Viewer</a>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Настройки атласа</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <form>
                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Название карты::</label>
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label">Описание карты:</label>
                                <textarea class="form-control" id="message-text"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                        <button type="button" class="btn btn-primary">Применить</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
    export default {
        name: "ConstructorControlPanel",
        data() {
            return {
                baseUrl: "/view/",
                map_id: window.inputMap.map_id
            }
        },
        methods: {
            saveMap: function () {
                this.$store.dispatch("setMap");
            },
        }
    }
</script>

<style lang="sass" scoped>
    #constructor-header
        height: 6vh
        min-width: 438px
        border-top: 1px solid #CCC
        border-right: 1px solid #CCC
        border-left: 1px solid #CCC
        display: flex
        align-items: center
        padding: 5px

        a
            margin: 5px

        > a:nth-child(3)
            margin-left: auto

    .constructor-header-button
        color: #fff
        text-decoration: none
        padding: 8px 14px
        border-radius: 3px
        background: #A3A3A3
        box-shadow: 0 -3.2px #656565 inset
        transition: 0.2s
        cursor: pointer
        width: 120px

        &:hover
            background: #6A6A6A

        &:active
            background: rgb(33, 147, 90)
            box-shadow: 0 3px rgb(33, 147, 90) inset
</style>
