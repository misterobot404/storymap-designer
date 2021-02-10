<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>MapDesigner - бесплатный онлайн конструктор карт и атласов</title>
    <meta name="keywords" content="электронная карта, электронный ресурс, образовательный ресурс, онлайн конструктор, конструктор карт">
    <meta name="description" content="Расскажите истории в Интернете, освещающие места, события или предметы. MapDesigner позволит быстро создавать гибкие карты и атласы для использования их в сфере обучения и туризма.">
    <link href="{{asset('favicon.ico')}}" rel="icon">
    <!-- media + onload its trick to triggering an asynchronous stylesheet download -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons&display=block" rel="stylesheet" media="trick"
          onload="media='all'">
    <!-- JS bundle -->
    <script async type="text/javascript" src='{{ asset('js/main.js') }}'></script>
    <!-- Yandex.Metrika -->
    <script type="text/javascript">
        window.addEventListener('load', () => {
            setTimeout(() => {
                (function (m, e, t, r, i, k, a) {
                    m[i] = m[i] || function () {
                        (m[i].a = m[i].a || []).push(arguments)
                    };
                    m[i].l = 1 * new Date();
                    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
                })
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                ym(71940610, "init", {
                    clickmap: false,
                    trackLinks: false,
                    accurateTrackBounce: false,
                    webvisor: true
                });
            }, 1400)
        });
    </script>
</head>

<body>
<div id="app"></div>
</body>

</html>
