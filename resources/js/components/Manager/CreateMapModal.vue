<template>
    <div class="modal" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content shadow">
                <div class="modal-header px-4">
                    <h5 class="modal-title">Создание атласа</h5>
                    <button type="button" class="close my-auto ml-auto mr-0 p-0" data-dismiss="modal" aria-label="Close">
                        &times;
                    </button>
                </div>
                <div class="modal-body px-4">
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
                            <label for="description" class="pl-1"> Описание атласа <span class="text-danger">*</span></label>
                            <textarea style="max-height: 50vh; min-height: 60px; overflow-y: hidden"
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
</template>

<script>
    import $ from 'jquery';

    export default {
        name: "CreateMapModal",
        data() {
            return {
                name: "",
                description: "",

                errors: {
                    nameEmpty: false,
                    descriptionEmpty: false,
                    nameDuplicate: false
                }
            }
        },
        watch: {
            // Очистка ошибок при изменении name и description
            name: function () {
                if (this.name !== '') {
                    this.errors.nameEmpty = false;
                }
                // nameDuplicate = true, если название повторяется
                this.errors.nameDuplicate = this.$store.getters.maps.find(map => map.name.toLowerCase() === this.name.toLowerCase()) !== undefined;
            },
            description: function () {
                if (this.description !== '') {
                    this.errors.descriptionEmpty = false;
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
        },
        methods: {
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
    }
    }
</script>

<style lang="sass" scoped>
    .modal-content
        border-radius: 8px
        overflow: hidden

    .modal-header
        background-color: #F6F8FA

    .close:focus, .close:active
        outline: none !important
        box-shadow: none

</style>
