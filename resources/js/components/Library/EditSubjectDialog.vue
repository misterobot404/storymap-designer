<template>
    <v-dialog
        max-width="340"
        :value="showEditSubjectDialog"
        @input="v => $emit('update:showEditSubjectDialog', v)"
    >
        <!-- Dialog -->
        <v-card>
            <!-- Header -->
            <v-toolbar
                height="68"
                flat
                class="pr-1"
            >
                <v-icon
                    large
                    class="mr-2"
                >
                    subject
                </v-icon>
                <v-toolbar-title> Изменить категорию</v-toolbar-title>
                <v-spacer/>
                <v-btn
                    icon
                    @click="$emit('update:showEditSubjectDialog', false)"
                >
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-divider/>
            <!-- Body -->
            <v-card-text class="pb-0 pt-2">
                <v-form ref="editSubjectForm">
                    <v-text-field
                        v-model="old_name"
                        label="Старое название"
                        disabled
                        required
                    />
                    <v-text-field
                        v-model="new_name"
                        class="pt-0"
                        :rules="[ v => new_name === null || subjects.find(subject => subject.name === v) === undefined || 'Такая категория уже существует']"
                        label="Новое название"
                        required
                    />
                    <v-file-input
                        label="Иконка"
                        v-model="icon"
                        accept="image/*"
                        prepend-icon="attach_file"
                    />
                </v-form>
            </v-card-text>
            <!-- Footer -->
            <v-card-actions class="px-9 pb-4">
                <v-spacer/>
                <v-btn
                    class="px-7"
                    text
                    color="primary"
                    @click="$emit('update:showEditSubjectDialog', false)"
                >
                    Отмена
                </v-btn>
                <v-btn
                    class="px-7"
                    color="primary"
                    text
                    :loading="processUpdate"
                    :disabled="!new_name.trim().length && icon === null"
                    @click="lUpdateSubject"
                >
                    Подтвердить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    name: "EditSubjectDialog",
    props: {
        showEditSubjectDialog: Boolean,
        editableSubject: Object
    },
    data() {
        return {
            processUpdate: false,
            old_name: "",
            new_name: "",
            icon: null
        }
    },
    computed: {
        ...mapState('subjects', ['subjects'])
    },
    watch: {
        editableSubject: {
            handler(subject) {
                this.old_name = subject.name;
                this.new_name = "";
                this.icon = null;
            }
        }
    },
    methods: {
        ...mapActions('subjects', ['updateSubject']),
        lUpdateSubject() {
            if (this.$refs.editSubjectForm.validate()) {
                let formData = new FormData();
                formData.append('name', this.new_name);
                if (this.icon) formData.append('icon', this.icon);

                this.processUpdate = true;
                this.updateSubject(
                    {
                        id: this.editableSubject.id,
                        data: formData
                    })
                    .then(_ => {
                        this.$emit('update:showEditSubjectDialog', false);
                    })
                    .finally(() => { this.processUpdate = false })
            }
        }
    }
}
</script>
