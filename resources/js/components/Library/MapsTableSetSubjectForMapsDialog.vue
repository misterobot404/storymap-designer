<template>
    <v-dialog
        v-model="dialog"
        scrollable
        width="340px"
    >
        <template v-slot:activator="{ on: button }">
            <v-tooltip bottom>
                <template v-slot:activator="{ on: tooltip }">
                    <v-btn
                        icon
                        :disabled="selectedMaps.length === 0"
                        class="mx-1"
                        v-on="{ ...tooltip, ...button }"
                    >
                        <v-icon>move_to_inbox</v-icon>
                    </v-btn>
                </template>
                <span>Переместить в категорию</span>
            </v-tooltip>
        </template>
        <v-card v-if="selectedMaps.length">
            <!-- Header -->
            <v-toolbar
                height="68"
                flat
                class="pr-1"
            >
                <v-icon class="mr-2">
                    move_to_inbox
                </v-icon>
                <v-toolbar-title>Переместить в категорию</v-toolbar-title>
            </v-toolbar>
            <v-divider/>
            <v-card-text style="height: 300px;">
                <v-radio-group
                    v-model="selectedSubjectId"
                    column
                >
                    <v-radio
                        v-for="subject in subjects"
                        :key="subject.id"
                        :label="subject.name"
                        :value="subject.id"
                    ></v-radio>
                </v-radio-group>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer/>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="setSubjectForMaps"
                    :loading="loading"
                >
                    Подтвердить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name: "ListMapSetSubjectForMaps",
    props: {
        selectedMaps: Array
    },
    data() {
        return {
            selectedSubjectId: '',
            dialog: false,
            loading: false
        }
    },
    computed: {
        ...mapState('subjects', ['subjects'])
    },
    methods: {
        ...mapActions('maps', {
            setSubjectForMapsAction: 'setSubjectForMaps'
        }),
        setSubjectForMaps() {
            this.loading = true;
            this.setSubjectForMapsAction({
                maps: this.selectedMaps,
                subject_id: this.selectedSubjectId
            })
                .then(_ => this.dialog = false)
                .finally(() => this.loading = false)
        }
    }
}
</script>
