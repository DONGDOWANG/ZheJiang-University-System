var TFL = {
    version: "1.0",
    moduleConfigs: {},
    widgets: {},
    path: window.tfl_path || "",
    tag: window.tfl_tag || window.jsVersion || "",
    versionMap: window.DIST_VERSION_MAP || {},
    cdn_enabled: window.cdn_enabled || !1
};

TFL.browser = {
        _uaMatch: function () {
            var e = navigator.userAgent.toLowerCase(),
                t = {},
                r = /(opr)[ \/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [],
                i = e.indexOf("compatible") > -1 && e.indexOf("msie") > -1,
                a = e.indexOf("edge") > -1 && !i,
                s = e.indexOf("trident") > -1 && e.indexOf("rv:11.0") > -1;
            return t = a ? {
                browser: "msie",
                version: "12.0"
            } : s ? {
                browser: "msie",
                version: "11.0"
            } : {
                browser: r[1] || "",
                version: r[2] || "0"
            }
        },
        init: function () {
            TFL.browser.modernizr();
            var e = TFL.browser._uaMatch(),
                t = {};
            e.browser && (t[e.browser] = !0,
                    t.version = e.version),
                t.opr ? (t.webkit = !0,
                    t.opera = !0) : t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0);
            for (var r in t)
                TFL.browser[r] = t[r]
        },
        is: function (e) {
            switch (e) {
                case "ie":
                    e = "msie";
                    break;
                case "firefox":
                    e = "mozilla"
            }
            return !!TFL.browser[e]
        },
        modernizr: function () {
            for (var e = (function () {
                    var e = document.createElement("div"),
                        t = "Ms O Moz Webkit".split(" ");
                    return function (r) {
                        var i = t.length;
                        if (r in e.style)
                            return !0;
                        for (r = r.replace(/^[a-z]/, function (e) {
                                return e.toUpperCase()
                            }); i--;)
                            if (t[i] + r in e.style)
                                return !0;
                        return !1
                    }
                }()), t = "animation transition".split(" "), r = t.length; r--;)
                e(t[r]) || $("html").addClass("no-" + t[r])
        }
    },
    TFL.browser.init(),
    jQuery.browser || (jQuery.browser = TFL.browser),
    TFL.ie = {
        isTrue: TFL.browser.msie,
        version: function () {
            return TFL.browser && TFL.browser.version ? TFL.browser.version.split(".")[0] : "0"
        },
        init: function () {
            if (this.isTrue) {
                var e = this.mode(),
                    t = "ie ie" + this.version();
                9 > e && (t += " oldie"),
                    t += " mode" + e,
                    $("html").addClass(t),
                    $(function () {
                        TFL.ie.css3()
                    })
            }
        },
        mode: function (e) {
            if (this.isTrue) {
                var t = parseInt(document.documentMode || this.version());
                return e ? t === e : t
            }
        },
        css3: function () {
            this.isTrue && this.mode() < 9 && ($(".striped tr:nth-child(even)").addClass("ie-tr-striped"))

        }
    },
    TFL.ie.init();
var last_expanded = null;
(function ($) {
    $.extend($.fn, {
        DkSelect: function (options) {
            var options = $.extend({
                'refresh': false,
                'input_plus': true
            }, options);
            var _this = $(this);
            this.dk_select_init(options);
            return this;
        },
        dk_select_init: function (options) {
            this.each(function () {
                var _this = $(this);
                _this.options = $.extend({
                    'refresh': false,
                    'input_plus': true
                }, options);
                _this.data('dk_settings', _this.options); // 记录传入的参数以便刷新使用
                if (_this.attr("disabled")) {
                    return;
                }

                if (_this.options.pinyin) {
                    _this.PinyinEngine = new pinyinEngine();
                    _this.asyncSignal = 0;
                }

                if (_this.attr('enhanced') == 'enhanced' && !_this.options.refresh) {
                    return _this;
                }
                _this.key = 'Dk_' + Math.floor(1e10 * Math.random()).toString(36);
                _this.attr("key", _this.key);
                _this.attr('enhanced', 'enhanced');
                _this.find("~ .dk_select").remove();
                (_this.parent().hasClass("dk_select_wrapper") && _this.unwrap());
                _this.enter_select = false;
                _this.current_highlight = null;

                _this.input_plus = _this.options.input_plus;
                if (_this.hasClass('editable') || _this.hasClass('hide_drop_icon')) {
                    _this.input_plus = false; // the input in drop down list
                }
                var wrapperClass = 'dk_select_wrapper';
                if (_this.input_plus === true) {
                    wrapperClass += ' dk_select_plus_wrapper';
                }
                _this.wrap('<div class="' + wrapperClass + '"/>');
                var cover = _this.cover = _this.get_cover(),
                    panel = _this.panel = _this.get_panel(_this.hasClass('hide_drop_icon'));
                _this.after(cover);
                !_this.input_plus && cover.after(panel); // 不改变原版的显示逻辑


                _this.attr('triggle') != "hover" && cover.unbind('click').bind('click', function (e) {
                    _this.toggle_list_panel($(e.target));
                    _this.show_items();
                });
                cover.unbind('mouseenter').mouseenter(function (e) {
                    var tt = $.trim(_this.find('option:selected').text());
                    if (tt && tt != '&nbsp;') {
                        $(this).attr('title', tt).text(tt);
                    } else {
                        $(this).removeAttr('title').text('');
                    }
                    if (_this.attr('triggle') == "hover" && !last_expanded) {
                        _this.toggle_list_panel($(e.target));
                        _this.show_items();
                    }
                });


                _this.attr('triggle') == "hover" && _this.parent().unbind('mouseleave').mouseleave(function () {
                    _this.hide_last_expanded();
                });

                _this.unbind('focus').bind('focus', function () {
                    // _this.next('.dk_cover').click();
                });

                var timer = null;
                if (!_this.input_plus) {
                    panel.unbind('focus').bind('focus', function (e) {
                        _this.toggle_list_panel($(e.target));
                        if (!this.input_plus) _this.select_value = _this.get_selected_text();
                        //auto_suggest();
                        _this.show_items();
                        e.preventDefault();

                    });
                }
                panel.unbind('blur').bind('blur', function (e) {
                    if (_this.enter_select) {
                        return;
                    }
                    _this.panel.val('');
                    if (_this.select_value != "") {
                        //_this.val(_this.select_value);
                        !this.list_panel && _this.panel.val(_this.select_value);
                    }

                    _this.list_panel.find('tr td.option_selected').removeClass('option_selected');
                    if (_this.last_selection) {
                        _this.last_selection.addClass('option_selected');
                    }
                    _this.hide_items();
                }).unbind('keyup').bind('keyup', function (e) {
                    if ($.inArray(e.keyCode, new Array(9, 13, 40, 38, 34, 33)) > 0) {
                        return true;
                    }
                    if (timer != null) {
                        clearTimeout(timer);
                    }
                    timer = setTimeout(auto_suggest, 150);
                }).unbind('keydown').bind('keydown', function (e) {
                    switch (e.keyCode) {
                        case 40: //down
                            _this.highlight_next();
                            break;
                        case 38: //up
                            _this.highlight_prev();
                            break;
                        case 13: //enter
                            _this.select_this();
                            e.preventDefault();
                            e.stopPropagation();
                            break;
                        default:
                            break;
                    }
                });
                function auto_suggest() {
                        _this.list_panel.find('tr td.option_selected').removeClass('option_selected');
                        var text = $.trim(_this.panel.val());
                        if (text == '-All-') {
                            text = '';
                        }
                        text = text.replace(/([.*+?^${}()|[\]\/\\])/g, '\\$1');
                        text = _this.escapeHtml(text);
                        var m_quick = new RegExp(text,'i');
                        var m  = new RegExp('(.*?)('+text+')(.*)','i');
                        var has_match = false;
                        var groupLabel = _this.list_panel.find('.optgroup-label');
                        groupLabel.hide();

                        if (_this.options.pinyin && _this.asyncSignal>=0) {
                            var search_results = [];
                            _this.PinyinEngine.search(text, function(data) {
                                search_results.push(data);
                            });
                        }
                        _this.list_panel.find('tr').not('.optgroup-label').each(function(index, tr){
                            var item = $(tr);
                            var t = _this.escapeHtml(_this.select_options[index]);
                            var td = item.find('td');
                            if((_this.options.pinyin && _this.asyncSignal>=0 && jQuery.inArray(t, search_results) >= 0) || m_quick.test(t)) {
                                has_match = true;
                                if(!t){
                                    t = '-- 空 --'
                                }
                                td.html(t.replace(new RegExp('('+text+')', 'i'), "<b>$1</b>"));
                                item.show();
                                if(item.hasClass('optgroup-item')){
                                    item.prevAll('.optgroup-label').first().show();
                                }
                            } else {
                                td.text(t);
                                item.hide();
                            }
                        });
                        if(!has_match && !_this.input_plus) {
                            var fstTr = _this.list_panel.find('tr:first');
                            fstTr.show();
                            if(fstTr.hasClass('optgroup-label')){
                                fstTr.next().show();
                            }
                        }
                        //_this.show_items();
                    }
            });
            
        },
        hide_last_expanded: function () {
            if (last_expanded) {
                last_expanded.css('display', 'none');
                if ($.browser.msie) {
                    this.panelWidth(last_expanded, last_expanded.data('minwidth')).parent().removeClass('dk_select_current');
                }
                last_expanded = null;
            }
        },
        toggle_list_panel: function (t) {
            if (!this.list_panel) {
                var list_panel = this.list_panel = this.get_list_panel();
                if (!this.input_plus) {
                    this.panel.after(list_panel);
                } else {
                    this.cover.after(list_panel);
                }
            }!!this.input_plus && this.panel.val('');
            this.hide_last_expanded();
            var _this = this;
            this.list_panel.find('tr').not('.optgroup-label').each(function (index, tr) {
                var t = _this.select_options[index];
                $(tr).find('td').text(t).attr('title', t);
            });
            this.list_panel.find('tr').show();
            last_expanded = this.list_panel;
        },
        get_position: function (ele) {
            var e = this;
            if (typeof (ele) != 'undefined') {
                e = ele;
            }
            return e.position();
        },
        get_cover: function () {
            var cover = $('<div class="dk_select dk_cover"/>'),
                p = this.get_position(),
                h = this.outerHeight(),
                w = this.outerWidth(),
                cssData = {};
            this.data('pos', p);
            //cssData['width'] = w;
            if (h > 20) {
                cssData['height'] = h;
            }
            cover.css(cssData).text(this.get_selected_text());
            return cover;
        },
        get_panel: function (hide_drop_icon) {
            var w = this.outerWidth() - 2,
                h = this.height(),
                p = this.data('pos'),
                cssData = {},
                select_panel = $('<input type="text" class="dk_select dk_panel" autocomplete="off"/>');
            if (hide_drop_icon) {
                w += 16;
                select_panel.addClass('dk_border');
            }
            cssData['width'] = w;
            if (p.left > 0) {
                cssData['left'] = hide_drop_icon ? p.left : p.left + 1;
            }
            if (p.top > 0) {
                cssData['top'] = hide_drop_icon ? p.top : p.top + 1;
            }
            select_panel.css(cssData);
            !this.input_plus && select_panel.val(this.get_selected_text());
            return select_panel;
        },
        get_selected_text: function () {
            //var index = this.attr("selectedIndex");
            var index = this[0].selectedIndex,
                opt = this.find("option").eq(index);

            if (index < 0) {
                return "";
            }
            var t = opt.text();
            if (t == " ") {
                return "";
            }
            /*if (opt.val() == "") {
                return "";
            }*/
            return $.trim(t);
        },
        get_list_panel: function () {
            var _this = this,
                h = this.outerHeight(),
                p = $('<div class="dk_select dk_list_panel"><div class="dk_input_wrapper"></div><div class="dk_table_wrapper"><table><tbody></tbody></table></div></div>'),
                options = this.children(),
                table = p.find("table tbody"),
                po = this.data('pos'),
                cssData = {};

            cssData['min-width'] = this.outerWidth() + 'px';
            p.css({
                'max-width': '500px',
                'top': h
            });
            this.panelWidth(p, cssData['min-width']).data('minwidth', cssData['min-width']);

            _this.select_options = [];
            _this.select_table = table;

            var _i, _len;

            for (_i = 0, _len = options.length; _i < _len; _i++) {
                if (options[_i].nodeName == 'OPTGROUP') {
                    _this.addGroupNode(options.eq(_i));
                } else {
                    /*if (!options.eq(_i).attr('disabled')) {
                        _this.addOptionNode(options.eq(_i));
                    }*/
                    _this.addOptionNode(options.eq(_i));
                }
            }


            p.bind('mouseover', function () {
                _this.enter_select = true;
            }).bind('mouseout', function () {
                _this.enter_select = false;
            });
            p.find('td').bind('click', function (e) {
                if ($(this).parent().hasClass("optgroup-label")||$(this).attr('disabled')) {
                    e.stopPropagation();
                    return;
                }
                _this.select_item($(this));
                e.stopPropagation();
            });

            if (_this.input_plus) {
                p.find('.dk_input_wrapper').append(_this.panel);
                _this.panel.removeAttr('style');
            }
            return p;
        },
        addGroupNode: function (optionGroup) {
            var _this = this,
                _i, _len,
                _list = optionGroup.children(),
                _wrapper = _this.parent(),
                _groupLi = $('<tr class="optgroup-label"><td>' + optionGroup.attr('label') + '</td></tr>');
            _this.select_table.append(_groupLi);
            for (_i = 0, _len = _list.length; _i < _len; _i++) {
                _this.addOptionNode(_list.eq(_i), 1);
            }

        },
        addOptionNode: function (option, fromGroup) {
            var _this = this,
                t = option.text(),
                v = option.val();
            /*if (v === "") {
                t = "";
            }*/
            _this.select_options.push(t);
            var li = $('<tr><td></td></tr>');
            //利用jquery的函数来插入数值进行自动转码
            li.find("td").attr('val', v);
            li.find('td').attr('disabled',option.attr('disabled'))
            li.find("td").text(t).attr('title', t);
            (fromGroup && li.addClass('optgroup-item'));
            li.bind('mouseover', function () {
                    if (_this.last_selection) {
                        _this.last_selection.removeClass('option_selected');
                    }
                    $(this).addClass('option_hover');
                    _this.enter_select = true;
                })
                .bind('mouseout', function () {
                    $(this).removeClass('option_hover');
                    //					_this.enter_select = false;
                });
            if (option.attr('selected') == true) {
                _this.last_selection = li.find('td');
                _this.last_selection.addClass('option_selected');
            }
            _this.select_table.append(li);

            if (_this.options.pinyin) {
                _this.asyncSignal--;
                setTimeout(function () {
                    _this.PinyinEngine.setCache([t], t), _this.asyncSignal++
                }, 1);
            }
        },
        select_item: function (item) {
            var text = item.text();
            var value = item.attr('val');
            this.get(0).value = value;
            this.val(value);
            this.cover.text($.trim(text));
            !this.input_plus && this.panel.val($.trim(text));
            this.select_value = text;
            this.list_panel.find('td.option_selected').removeClass('option_selected');
            item.addClass('option_selected');
            this.last_selection = item;
            this.trigger("change");
            this.trigger("click");
            this.hide_items();
        },
        show_items: function () {
            var panel = this.list_panel;
            var pHeight = panel.outerHeight(),
                stopY = this.offset().top - $(document).scrollTop() + pHeight + 30,
                clientHeight = document.documentElement.clientHeight;

            ((stopY >= clientHeight) &&
                (pHeight + 30 < this.offset().top) &&
                panel.css({
                    'top': 'auto',
                    'bottom': this.outerHeight()
                }));

            panel.slideDown();
            if ($.browser.msie) {
                this.panelWidth(panel, panel.find('table').width()).parent().addClass('dk_select_current');
            }!!this.input_plus && this.panel.focus();
        },
        hide_items: function (p) {
            var panel = p || this.list_panel;
            panel.css('display', 'none');
            if ($.browser.msie) {

                this.panelWidth(panel, panel.data('minwidth')).parent().removeClass('dk_select_current');
            }
            this.trigger('close.dkselect');
        },
        highlight_next: function () {
            var shows = this.list_panel.find('tr:not(:hidden)').not('.optgroup-label');
            var s = shows.find('td.option_selected');
            var td = null;
            if (s.length === 0) {
                td = shows.eq(0).find('td');
                td.addClass('option_selected');
            } else {
                for (var i = 0; i < shows.size(); i++) {
                    if ($(shows[i]).find('td.option_selected').size() > 0) {
                        if (i < shows.size() - 1) {
                            td = $(shows[i + 1]).find('td');
                            td.addClass('option_selected');
                            s.removeClass('option_selected');
                        }
                        break;
                    }
                }
            }
            this.current_highlight = td;
        },
        highlight_prev: function () {
            var shows = this.list_panel.find('tr:not(:hidden)').not('.optgroup-label');
            var s = shows.find('td.option_selected');
            if (s.length === 0) {
                return;
            } else {
                for (var i = 0; i < shows.size(); i++) {
                    if ($(shows[i]).find('td.option_selected').size() > 0) {
                        if (i > 0) {
                            var td = $(shows[i - 1]).find('td');
                            td.addClass('option_selected');
                            s.removeClass('option_selected');
                            this.current_highlight = td;
                        }
                        break;
                    }
                }
            }
        },
        select_this: function () {
            if (this.current_highlight !== null) {
                this.select_item(this.current_highlight);
            }
        },
        select_option_by_value: function (value) { // Z:\tapd3\app\plugins\prong\views\tasks\edit.thtml
            this.val(value);
            var text = this.get_selected_text();
            this.find("~ .dk_panel").val(text);
        },
        disable: function () {
            var disabled_cover = $('<div class="dk_select dk_disabled_cover" />'),
                h = this.outerHeight();
            if (h > 20) {
                disabled_cover.css({
                    'height': h
                });
            }
            this.after(disabled_cover);
            this.attr('disabled', 'disabled');
            this.find("~ .dk_panel").addClass("dk_panel_disabled");
        },
        enable: function () {
            this.find("~ .dk_disabled_cover").remove();
            this.removeAttr('disabled');
            this.find("~ .dk_panel").removeClass("dk_panel_disabled");
        },
        escapeHtml: function (string) {
            var div = document.createElement('div');
            var text = document.createTextNode(string);
            div.appendChild(text);
            return div.innerHTML;
        },
        panelWidth: function (panel, width) {
            if (width > 500) {
                return panel.css('min-width', 500);
            } else {
                return panel.css('min-width', width);
            }
        }
    });
})(jQuery);

var dk_timer;

$(document).ready(function () {
    if (window.has_loaded_dk_select) {
        return;
    }
    //检查是否为 IE6
    if ('undefined' == typeof (document.body.style.maxHeight)) {
        return;
    }

    var dom = ".tfl-dkselect";
    setTimeout(function(){
       if (mode(6)) {
            return;
        }else{
            var _this = $(dom);
           if (_this.length && !_this.attr("enhanced")) {
                var options = {};
                //初始化dkselect
                _this.DkSelect(options);
            } 
        }
    },100);
    
    $("body").delegate(dom, "mouseover", function (e) {
        if (mode(6)) {
            return;
        }
        var _this = $(this);
        if (!_this.attr("enhanced")) {
            var options = {};
            //初始化dkselect
            _this.DkSelect(options);
        }
    });

    function mode(e) {
        if (this.isTrue) {
            var t = parseInt(document.documentMode || this.version());
            return e ? t === e : t
        }
    }
    $(document).bind('dk_select_options_updated', function (e, id) {
        var elm = $(e.target);
        if (id) {
            elm = $('#' + id);
        }
        var settings = elm.data('dk_settings');
        $.extend(settings, {
            'refresh': true
        });
        elm.DkSelect(settings);

    });

    $(document).bind('click', function (e) {
        var t = $(e.target);
        if (!t.hasClass("dk_cover") && !t.hasClass("dk_panel") && !t.hasClass("dk_list_panel")) {
            if ($(this).hide_last_expanded != undefined) {
                $(this).hide_last_expanded();
            }
        }
    });


});
