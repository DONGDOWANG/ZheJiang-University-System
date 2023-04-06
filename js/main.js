var EG = {
    tab01:function () {
        $(".tab_title").click(function () {
            var i=$(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $(".qk_con .qk_mess").eq(i).addClass("block").siblings().removeClass("block");
        })
    },
    tab02:function () {
        $(".tabs_title").click(function () {
            var i=$(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $(".news_list .news").eq(i).addClass("block").siblings().removeClass("block");
        })
    },
    /*checkbox*/
    checkboxCheck: function () {
        $(document).on('click', '.i-box-select .i-select-input', function () {
            var flag = $(this).prop('checked');
            var $select = $(this).closest('.i-box-select');
            if (flag) {
                $(this).prop('checked', true);
                $select.addClass('i-selected');
            } else {
                $(this).prop('checked', false);
                $select.removeClass('i-selected');
            }
            if ($select.hasClass('i-radio') || 'single' == $select.data('select')) {
                var name = $(this).attr('name');
                $('input[name="' + name + '"]').not($(this)).prop('checked', false);
                $('input[name="' + name + '"]').closest('.i-box-select').not($select).removeClass('i-selected');
            }
        });
    },
    selectAll: function () {
        var checkAll = $('input[name="checkAll"]'),
            checkItem = $('input[name="checkItem"]'),
            selectItem = $('.i-radio');
        $(document).on('click', 'input[name="checkAll"]', function () {
            var flag = $(this).prop('checked');
            var checkItem = $('input[type=checkbox][data-group=' + $(this).data('group') + ']');
            if (flag) {
                console.log(2);
                checkItem.prop('checked', true);
                checkItem.parent().addClass('i-selected');
            } else {
                checkItem.prop('checked', false);
                checkItem.parent().removeClass('i-selected');
            }
        });

        $(document).on('click', 'input[name="checkItem"]', function () {
            checkAll = $('input[name="checkAll"]'),
                checkItem = $('input[name="checkItem"]');
            var checkList = checkItem.filter('[data-group="' + $(this).data('group') + '"]');
            var checkListArray = Array.prototype.slice.call(checkList);
            var listFlag = checkListArray.every(function (elem, index, array) {
                return $(elem).parent().hasClass('i-selected');
            });
            var checkListAll = checkAll.filter('[data-group="' + $(this).data('group') + '"]');
            if (listFlag) {
                checkListAll.prop('checked', true);
                checkListAll.parent().addClass('i-selected');
            } else {
                checkListAll.prop('checked', false);
                checkListAll.parent().removeClass('i-selected');
            }
        });

    }
};
! function ($) {
    $(document).ready(function () {
        EG.tab01();
        EG.tab02();
        EG.checkboxCheck();
        EG.selectAll();
    });
}(window.jQuery);

$(function () {

    //backtop
    $(window).scroll(function () {
        var height = $(this).scrollTop();
        // console.log(height);
        if (height > 100) {
            $(".backtop").css("display", "block");
        } else if (height < 100) {
            $(".backtop").css("display", "none");
        }
    });
    $(".backtop").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });




});
