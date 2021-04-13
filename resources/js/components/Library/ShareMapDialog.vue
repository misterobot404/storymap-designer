<template>
    <v-dialog
        max-width="480"
        :value="showShareMapDialog"
        @input="v => SET_SHARE_MAP_DIALOG({showShareMapDialog: v })"
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
                    class="mr-1 pb-1"
                >
                    reply
                </v-icon>
                <v-toolbar-title>Поделиться</v-toolbar-title>
                <v-spacer/>
                <v-btn
                    icon
                    @click="SET_SHARE_MAP_DIALOG({showShareMapDialog: false })"
                >
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>
            <!-- Body -->
            <v-card-text class="pb-0 pt-2">
                <v-alert
                    v-if="shareMap && shareMap.public"
                    icon="public"
                    prominent
                    text
                    type="info"
                >
                    <v-row
                        align="center"
                        no-gutters
                    >
                        <v-col class="grow">
                            Публикование разрешенно настройками конфиденциальности
                        </v-col>
                        <v-col class="shrink">
                            <v-btn
                                @click="lSetPrivacyForMap(false)"
                                :loading="load"
                                color="info"
                                outlined
                                class="mt-2"
                            >
                                Изменить
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-alert>
                <v-alert
                    v-else
                    icon="lock"
                    prominent
                    text
                    type="info"
                >
                    <v-row
                        align="center"
                        no-gutters
                    >
                        <v-col class="grow">
                            Публикование запрещено настройками конфиденциальности
                        </v-col>
                        <v-col class="shrink">
                            <v-btn
                                @click="lSetPrivacyForMap(true)"
                                :loading="load"
                                color="info"
                                outlined
                                class="mt-2"
                            >
                                Изменить
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-alert>
                <!-- Iframe code -->
                <v-textarea
                    :disabled="shareMap && !shareMap.public"
                    filled
                    no-resize
                    :value="iframe_url"
                    hint="Для изменения размера фрейма измените атрибуты width и height"
                />
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
    name: "ShareMapDialog",
    data() {
        return {
            load: false,
            iframe_url: ""
        }
    },
    computed: {
        ...mapState('maps', [
            'showShareMapDialog',
            'shareMapId',
            'maps'
        ]),
        shareMap() {
            return this.maps.find(map=> map.id === this.shareMapId)
        }
    },
    watch: {
        shareMapId: {
            handler(shareMapId) {
                let map_url = document.location.protocol + '//' + window.location.host + '/viewer/' + shareMapId;
                this.iframe_url = '<iframe width="100%" height="600" style="border-style: none;" src="' + map_url + '?iframe=true"></iframe>';
            }
        }
    },
    methods: {
        ...mapActions('maps', ['setPrivacyForMap']),
        ...mapMutations('maps', ['SET_SHARE_MAP_DIALOG', 'SET_PRIVACY_FOR_MAP']),
        lSetPrivacyForMap(public_status) {
            this.load = true;
            let payload = {
                map_id: this.shareMapId,
                public: public_status
            };
            this.setPrivacyForMap(payload)
                .then(_ => this.SET_PRIVACY_FOR_MAP(payload))
                .finally(() => { this.load = false })
        }
    }
}
</script>
