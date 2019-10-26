<template>
    <!--    <div class="form">-->
    <!--        <div class="formLeft">-->
    <!--            <template v-if="getSelectedEvent !== undefined">-->
    <!--                <input v-model.lazy="getSelectedEvent.name"-->
    <!--                       placeholder="Заголовок события"-->
    <!--                       class="inputHeader">-->
    <!--                <textarea v-model.lazy="getSelectedEvent.title"-->
    <!--                          placeholder="Описание события"-->
    <!--                          class="inputTextarea">-->
    <!--                    </textarea>-->
    <!--            </template>-->
    <!--            <template v-else>-->
    <!--                <input placeholder="Заголовок события"-->
    <!--                       class="inputHeader">-->
    <!--                <textarea placeholder="Описание события"-->
    <!--                          class="inputTextarea">-->
    <!--                    </textarea>-->
    <!--            </template>-->
    <!--        </div>-->
    <!--        <div class="formRight">-->
    <!--            <div class="formRightContent">-->
    <!--                <input v-if="getSelectedEvent !== undefined"-->
    <!--                       v-model.lazy="getSelectedEvent.mediaUrl"-->
    <!--                       placeholder="Insert media link"-->
    <!--                       class="formRightInputUrl">-->
    <!--                <input v-else-->
    <!--                       placeholder="Insert media link"-->
    <!--                       class="formRightInputUrl">-->
    <!--                <form action="/upload" method="post" enctype="multipart/form-data" class="formRightUploadFile">-->
    <!--                    <slot>-->
    <!--                    </slot>-->
    <!--                    <label class="formRightUploadButton">-->
    <!--                        <img src="/images/cloud-upload.png">Upload from drive-->
    <!--                        <input type="file" multiple name="image" onchange="this.form.submit()"-->
    <!--                               style="display: none">-->
    <!--                    </label>-->
    <!--                </form>-->
    <!--            </div>-->
    <!--            <template-->
    <!--                    v-if="getSelectedEvent !== undefined && getSelectedEvent.mediaUrl !== '' && getSelectedEvent.mediaUrl !== null">-->
    <!--                <template v-if="checkExistImages">-->
    <!--                    <img :src="getSelectedEvent.mediaUrl"-->
    <!--                         alt="image"-->
    <!--                         width="270"-->
    <!--                         height="144"-->
    <!--                         class="emptyMediaBlock">-->
    <!--                </template>-->
    <!--                <template v-else-if="getSelectedEvent.mediaUrl.indexOf('.youtu') !== -1">-->
    <!--                    <youtube :video-id="getYouTubeIdOfSelectedEvent"-->
    <!--                             :player-width="270"-->
    <!--                             :player-height="144"-->
    <!--                             class="emptyMediaBlock">-->
    <!--                    </youtube>-->
    <!--                </template>-->
    <!--                <template v-else>-->
    <!--                    <div class="emptyMediaBlock">-->
    <!--                        <p>Broken link</p>-->
    <!--                    </div>-->
    <!--                </template>-->
    <!--            </template>-->
    <!--            <template v-else>-->
    <!--                <div class="emptyMediaBlock">-->
    <!--                    <p>Empty</p>-->
    <!--                </div>-->
    <!--            </template>-->
    <!--        </div>-->
    <!--    </div>-->
</template>

<script>
    import Vue from 'vue'
    import VueYouTubeEmbed from 'vue-youtube-embed'

    Vue.use(VueYouTubeEmbed);

    export default {
        name: "ConstructorForm",
        data() {
            return {
                checkExistImages: null,
            }
        },
        watch: {
            /*'getSelectedEvent.mediaUrl': {
                immediate: true,
                handler(val) {
                    const img = new Image();
                    img.onload = () => this.checkExistImages = img.height > 0;
                    img.onerror = () => this.checkExistImages = false;
                    img.src = val;
                }
            },
            */
        },
        computed: {
            /*
            getYouTubeIdOfSelectedEvent: function () {
                return this.$youtube.getIdFromURL(this.getSelectedEvent.mediaUrl);
            },*/
        }
    }
</script>

<style scoped>
    .form {
        display: flex;
        margin-top: 10px;
    }

    .formLeft {
        display: flex;
        flex-direction: column;
        margin-right: 1%;
        width: 46%;
    }

    .inputHeader {
        font-size: 24px;
        margin-bottom: 2%;
        padding: 3px;
        height: 28px;
        border: 1px solid #4d565661;
        border-radius: 4px;
    }

    .inputTextarea {
        font-size: 18px;
        padding: 3px;
        flex-grow: 1;
        resize: none;
        border: 1px solid #4d565661;
        border-radius: 4px;
        font-family: 'Turnip RE', Georgia, 'Times New Roman', Times, serif;
    }

    .formRight {
        display: flex;
        flex-wrap: wrap;
        width: 53%;
        min-height: 166px;
        border: 1px solid #4d565661;
        border-radius: 4px;
        background: #f8f8f8;
    }

    .formRightContent {
        display: flex;
        flex-wrap: wrap;
        margin: auto;
        max-width: 540px;
        width: 100%;
    }

    .formRightInputUrl {
        font-size: 20px;
        margin: 4% 2% 2% 2%;
        width: 100%;
    }

    .formRightUploadFile {
        display: flex;
        width: 100%;
    }

    .emptyMediaBlock {
        width: 270px;
        height: 144px;
        display: flex;
        padding: 8px;
        margin: auto;
    }

    .emptyMediaBlock p {
        font-size: 26px;
        text-align: center;
        background-color: #dddddd;
        color: #777777;
        line-height: 144px;
        width: 100%;
        margin: auto;
        font-family: "Helvetica Neue", Helvetica, sans-serif;
    }

    .formRightUploadButton {
        font-size: 18px;
        margin: 2%;
        padding: 6px 0;
        background: none;
        width: 100%;
        border: 1px dashed #4d565661;
        transition: all 0.2s;
        cursor: pointer;
    }

    .formRightUploadButton:hover {
        background-color: #FFFFFF;
        border: 1px solid #4d565661;
    }

    .formRightUploadButton img {
        height: 18px;
        position: relative;
        bottom: -3px;
        margin-right: 4px;
    }
</style>
