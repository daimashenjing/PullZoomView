function init() {
    document.addEventListener('touchmove', function (e) {
        e = e || window.event;
        e.preventDefault();
    }, false);

    var $scrollView = $(".scroll_view");
    var $headImg = $(".head_img");
    var $coverImg = $(".head_cover");
    $coverImg.append($headImg.html());

    Transform($scrollView[0]);
    Transform($coverImg[0]);

    var at = new AlloyTouch({
        touch: ".main_layout", //反馈触摸的dom
        vertical: true, //不必需，默认是true代表监听竖直方向touch
        target: $scrollView[0], //运动的对象
        property: "translateY", //被滚动的属性
        sensitivity: 1, //不必需,触摸区域的灵敏度，默认值为1，可以为负数
        factor: 1, //不必需,默认值是1代表touch区域的1px的对应target.y的1
        min: window.innerHeight - $scrollView.height(), //不必需,滚动属性的最小值
        max: 0, //不必需,滚动属性的最大值
        spring: false, //不必需,是否有回弹效果。默认是true
        inertia: true, //不必需,是否有惯性。默认是true
        topDis: '.3',
        bottomDis: '.5',
        bottomMax: '200',
        touchStart: function (value) {
        },
        touchMove: function (value) {
        },
        touchEnd: function (value) {
        },
        animationEnd: function (value) {
        },
        change: function (value) {
            if (value > 0) {
                $coverImg.css('visibility', 'visible');
                $headImg.css('visibility', 'hidden');
                $coverImg[0].scaleX = $coverImg[0].scaleY = 1 + (value / 100);
            } else {
                $coverImg.css('visibility', 'hidden');
                $headImg.css('visibility', 'visible');
            }
        }
    })
}
window.onload = init;