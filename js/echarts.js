var chartCollection = {
    _barChart1: function (id, data, config) {
        function sortElse(option_data) {
            const alldata = option_data.ydata.map((ai, i) => {
                return { x: ai, y: option_data.xdata[i] };
            });
            alldata.sort((a, b) => {
                return a.x - b.x;
            });
            option_data.ydata = alldata.map((ab, i) => {
                return ab.x;
            });
            option_data.xdata = alldata.map((ab, i) => {
                return ab.y;
            });
        }
        var setColor = [{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#F6030E' // 0% 处的颜色
            }, {
                offset: 0.5, color: '#FDA1A5' // 0% 处的颜色
            },
            {
                offset: 1, color: '#F6030E' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          },{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#FA7A25' // 0% 处的颜色
            }, {
                offset: 0.5, color: '#FCBF96' // 0% 处的颜色
            },
            {
                offset: 1, color: '#FA7A25' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          },{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#266CDE' // 0% 处的颜色
            }, {
                offset: 0.5, color: '#ACCAFC' // 0% 处的颜色
            },
            {
                offset: 1, color: '#266CDE' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          },{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#02AFF1' // 0% 处的颜色
            }, {
                offset: 0.5, color: '#A5E2FA' // 0% 处的颜色
            },
            {
                offset: 1, color: '#02AFF1' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          },{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#08822B' // 0% 处的颜色
            }, {
                offset: 0.5, color: '#6EE18F' // 0% 处的颜色
            },
            {
                offset: 1, color: '#08822B' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          },];
        var myChart2 = echarts.init(document.getElementById(id));
        var option2 = {
            color: setColor,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                bottom: 0,
                data: data.legend,
            },
            graphic: {
                elements: [
                    {
                        type: 'image',
                        style: {
                            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmYzQ0NDMwZi03MTA0LTVkNGYtYTQ5Zi1mYTg0ZWI4MmZiMWEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUI2ODAzNjQyMEEwMTFFQTg0RDI5QjEwRjkxREY1RDciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUI2ODAzNjMyMEEwMTFFQTg0RDI5QjEwRjkxREY1RDciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWUzN2RmYjktMzVkYi05OTQwLWIwMDMtOWE5ZmFmZmFkODkwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmZjNDQ0MzBmLTcxMDQtNWQ0Zi1hNDlmLWZhODRlYjgyZmIxYSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pkr91pgAAAQCSURBVHjaRFRLTB1VGP7OmSf3MnBLeUh5lUJSSR8SHjapGAkaFzSFqGxr4sKFMTGp7nRjFy60tZbEhEUXmlYStS6N0VUxurBBhRRTebVgKZRbLqX3PXPPnHP8595WT+acOZk5//d///99M+AMMKIluli0VkZfd6LvyvnRK8HmuSC7+kFm6sOXpo4f9I4/eR+dpQleiYMRLWDlPdcautkzms++MXD24kenLw6d7h0ySnnDjlnOwPCRgdGTHaNxQ8XX7+ysp32VLmPwSnIjAjE5s7gCmxg5ODH58djkmbeGz3i1roc7y9DLs8D9VbCQI3GoPTFy6vjI8GDLsMjkxcra7gqFaUUEDNNgJpMaF95/4dPzF175pLWnpRX/bECv/w3c+x2o7gDreht64waQXAQrAc29nc3j48fGEwYSP86s/cSoLpPYGHFLV4+//PQYa6hmenYeSK0DwR5YwyBwYgowa4H1b4HcA+hCDqyYpib2Y2igbajGgZdTLGdSo43auFGbzfpZ7GWgHt2HLuYBFYLZB8A2r4PF2iGJPxSgwwBGMQOeL0KIUNTEjJpiAUVOXecW53YohIRSkFSm8AOE8FBanEbpj3NQmkMGGmHRp3clhDQhQ1gmsyyT2wZhmFHHKZdm0UpTlkoQhQIY4SJ0SN4ETEoQ+j4UPdfaBmIF2ErQXusndjD/80XEm4CIGUq5HLirqIwCDDeAwxyIIIQkIGhBvcpSErr/j1MBiswlw1CTktCEV0pnYJSIEafpFxHmU5B+ASKbpVgHZj2FccC2KEe5IAKKPCCkFo7NXNgasc5uSBEg2NyAzFMp6i7S378Omd0llh7i3T2IdfWQLSzEHB0LlZZRawzDYIZrcrepxmzsafeOxJrqnKqWDtj1jcTUgNjbIZAduO2HkBgcQqz7MHiVg9Tqg9T0Nzenb/z18LdcoLJGRMuxubOwvLugtlLqZKN+Dq4Ns7EJzoFWWLX76N4B75l+mHX7oTOPgKXbuDQ1+9nlH+5eLkoU874slIEkqZ72ddrR0n6tTU2Ye3tcBQHRj8Fqegp2QyMdktC318GXViG2UmLyeurS/FYwXxK6JKQSZmQzXyg/+mCTBSRljUfyCJPdWgG2d4DDnSDDgC2u0SeSAjwXIZ3ZzuttP5A++ZBFPaqo9ljIjZSfVbYl4bpgVS499YFbS5HSynQ1Zy11dNikzFJuPAyyFcUjqXUkIlF6bIejHfFQM87RWAXsc3Hznl549+vN98Y/Xx279mfhu5CZIZpj4Jxbx9ristIWXY4v/0ue7fbw6ol6nOrf31vvmXNzW8Vfr80kv/jql+RVEUYOrIyRo4kX3xxteef5ruqxdEH2Xf05ORf9FL+c2ca/AgwADQTpSGvplRcAAAAASUVORK5CYII=',
                            width: 21,
                            height: 21,
                        },
                        left: '1%',
                        top: '9%',
                    },
                    {
                        type: 'image',
                        style: {
                            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmYzQ0NDMwZi03MTA0LTVkNGYtYTQ5Zi1mYTg0ZWI4MmZiMWEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUI2ODAzNjgyMEEwMTFFQTg0RDI5QjEwRjkxREY1RDciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUI2ODAzNjcyMEEwMTFFQTg0RDI5QjEwRjkxREY1RDciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWUzN2RmYjktMzVkYi05OTQwLWIwMDMtOWE5ZmFmZmFkODkwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmZjNDQ0MzBmLTcxMDQtNWQ0Zi1hNDlmLWZhODRlYjgyZmIxYSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhFO2L8AAAPESURBVHjaTFNLbBtVFD0ez4zt1CX/j+2EfJREigIhNAolDVIKZYUaQyWElC0bmg2LsERkRxdICKSiVhELJChhAwhFdIHa4Lhpg4PAJjaU+tOkJHUESaiJ7XjGnhkP904zUa709N7Me/e8e885D6BwOBw4nB8vKDo7nzz1yeXLn1cqlXJ+fz9/6f1LV/1+/5C9b589lnL0U+C1LMu+6enp99LpVNakqJTLph1/3r374OJbF9+tOXGi41jqEZJDEASZZunFs2ff+PHmYsROjMcT5rVr8+Y3335nppOpI8A7t1eik5OTb1KOl3AkxnASiFitVjE7O/vh3NzcB719fe1bmw+xFL6F9Po66urqYBgG7qVSyGa3rVaGn33GNzU19Srl1oVCoR9odoi04WTk4GQw6HK5HKurPyP++x+UrOPlcy9BlmS43G5sbGwgsrqKh9vb2N3dxfj4GZwZG3uB8k/SKIrOx1Gby+UKhl7F+sYD/JfLoaOjHdtUwS+/RtHW1obg+Vew+dcmMlTlv49ygAkoJUWTJOkJ6lYRmWQCkkulkkEC0YGqNbLZrFUFkQ1fWysTCUVV6FuFqpRorjDVEudS64JwSL2p6xp4MFixWIBGc1lVWUWcPv0cQqElZNIpusOg/SKBlqDpmmmLJtjS6UQoD03TQNUhn89DpQouXHgNOzs7uH79e4voMlVUKOQJSLVEsMOuyFEmvzAIKWCBiKKImZkZ61AkEsHAwABYXVUtg0Sx1tSWCxZbgMi+oJ+a4BTczENvXy/ydKNTcFqVqXTzxMSEdXs4HEZXdxeeHhqC2+NmcmsoncsynSy/KDrdHo+nJdAeGPT5/a6enh7IdGt4aQnLy8uIxWJ4REoODw9j8KlBeGpqQC7f+2p+/stkMhXRdb3AQJAk2ZVM3kuk0/erVPa413sS9K7Q2dWF+vp6EDhGRkbQ3NxMfO1i5c4Krl658hGZ8VOiQqH3WGIzgssj1H1dq8jEzetbW1sCcYaGhgb4fD60traSojqi0ShuUXupVEpLJBIf01v+jYxbYWqYoyqRrDIeqfZPY2OjriiKGFpcRCaTwfNjY3BJEn4iwu/Tt9frRVNTE+Hqf2taRWWhmGfR9hEFq1Ug3xh8mEexUMDNGzdQNYwqKxwIBIgGibxWMfjsofLmkfwMwkEt6NSzwLzU1tbi4OAgQa28s7CwECSnf00gOlXMskstLS3G8VzLlkws+6S/v3+Y1Ivt7e3djsfjnxEPX5Dsmm267u7uc6Ojo2/T+SBVdWptbS3GvmNV/xdgAC1TFz8mPZV3AAAAAElFTkSuQmCC',
                            width: 21,
                            height: 21,
                        },
                        left: '1%',
                        top: '15%',
                    },
                    {
                        type: 'image',
                        style: {
                            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmYzQ0NDMwZi03MTA0LTVkNGYtYTQ5Zi1mYTg0ZWI4MmZiMWEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUI5NUQxREMyMEEwMTFFQTg0RDI5QjEwRjkxREY1RDciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUI5NUQxREIyMEEwMTFFQTg0RDI5QjEwRjkxREY1RDciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWUzN2RmYjktMzVkYi05OTQwLWIwMDMtOWE5ZmFmZmFkODkwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmZjNDQ0MzBmLTcxMDQtNWQ0Zi1hNDlmLWZhODRlYjgyZmIxYSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrY08bcAAAQpSURBVHjadFRLTFxlGD333v8+586DGQaGgQEqBUpNSyU0RkOUgDFxoVEhsbVGExdNjIlx4UIXxkRNdKeLrhsX2gYjNAZtY5q2qdBHUlLkOSBQGIZXGQaYgXnelx/TmnShf3Jvcm/Of875ngL+5xwJyE1nO+o+/v7NE+fPtEXO+pnjSaZyq8mCvftfeO6Jxz740eATm3taq3t72urePRb2N5mWAUEQ4HACxuKbU5dG4z9emlj7dWHHiD7BAY7ekgMUw6pQ9Xpb5NTb7bXvtdZVtMK2sbK6ipXlGCRFQXVNBKGKIBHymIhvTfaPxi70j8b7llLmInEwjgFi77Hwax92t3x6oj7Q7jgcNrcSWFmcQ3ItDl5S4RApR84C1bUIVhFhqAISY5heTU5/d3X6y77RtX6BjGnf9LZ/9tKzzS8nEmksLswhPj8DAwzHPzqHw298gEjXKTgQkYjew+72FvYzWUguH47U1wTzBWNvYDx+lakOvBkTFkyeABmkUzvgeIbyo89BVHTM/fAFtNAhNJ7+HGYqgd3oMPL5Aoq2UxIrHjix4WWyAMmwYFtMIRU3VI8fkuZGNjaG2XNDlEQOenUDHLMAUZKhun2E80CQFDDFBUVSJEmAyGwODs8kTlA0iC4dsuaCaZAO5wLcZajsegflbV3IbSzD3tuArHsgqi4iksHJCiAwKgDAU/DgmAgoKgEOiNwlZ6IoQaCId+4OIHbxW0j+MKq7T0NSCUcEvKhSvVVwgugccDAi4xxecHAQmqYTiKpkmXAffxF640ls3/qFVEW6KFGnUcplDYwEGTkHCSqqJpaIbEqzprsYyvzQTAf+OhuZxAbsnXUC66jp/aTUdfvz97A/eQPeqlrowRq4fX4gGITH51VNGxYzJZjDY3NjbUcbX4jU1YeDvkAJnNlaR+Z2H3YNo9RHjLq7vL4ZenmYQtfJnYmFkfGly8Mjt3iJcwQvgzb1YC02Nf7XA30/2eTRtHJvZRhqKAK9rBKMqiNRgv31LVS9egi8gPW/Z3F9cHD6q/MDX1+5H78micgKFpW+6CCfzRbSFenYM3sL0ebUw4eQiMAdqoYcDEENVEKQZWzOzmD8j98xdu0yorMzd66vGz9tm1jLGciyAlCgcc3nOEHwBbz7An0u3R9CbHIUda3taOnohEQk0eGbFModWLkU5U6BP+DLFJZSqznbSlGuqYUfT32i4KRVmeU1TYbbo8HIG0iO3sTt+QnYBHPSCXhdGjivHwbdFLNWfjPv7DmPNoDN/t0nDT5m0RxaKrW6T+aRFmnKs87IjfGNn+P79lznIW9Pp19+Nexm3lTRRqJoOQ1eZke3i492yWEfw/NhFR01iqhL/AWe41+Z3i7+9mc8e3F4OTdoPnZ8cJ4OyK3dT2nvn6yQ3wKcoaxhn7mymC3KAod/BBgAlnejbu2OXHsAAAAASUVORK5CYII=',
                            width: 21,
                            height: 21,
                        },
                        left: '1%',
                        top: '21%',
                    }, {
                        type: 'text',
                        style: {
                            text: "4",
                            font: 'bolder 2em "Microsoft YaHei", sans-serif',
                            width: 21,
                            height: 21,
                            fill: "#000",
                            stroke: "#000",
                            textAlign: "left"
                        },

                        left: '1.5%',
                        top: '28%',
                    }, {
                        type: 'text',
                        style: {
                            text: "5",
                            font: 'bolder 2em "Microsoft YaHei", sans-serif',
                            width: 21,
                            height: 21,
                            fill: "#000",
                            stroke: "#000",
                            textAlign: "left"
                        },

                        left: '1.5%',
                        top: '34%',
                    },
                    {
                        type: 'text',
                        style: {
                            text: "6",
                            font: 'bolder 2em "Microsoft YaHei", sans-serif',
                            width: 21,
                            height: 21,
                            fill: "#000",
                            stroke: "#000",
                            textAlign: "left"
                        },

                        left: '1.5%',
                        top: '40%',
                    }, {
                        type: 'text',
                        style: {
                            text: "7",
                            font: 'bolder 2em "Microsoft YaHei", sans-serif',
                            width: 21,
                            height: 21,
                            fill: "#000",
                            stroke: "#000",
                            textAlign: "left"
                        },

                        left: '1.5%',
                        top: '46%',
                    },
                    {
                        type: 'text',
                        style: {
                            text: "8",
                            font: 'bolder 2em "Microsoft YaHei", sans-serif',
                            width: 21,
                            height: 21,
                            fill: "#000",
                            stroke: "#000",
                            textAlign: "left"
                        },

                        left: '1.5%',
                        top: '52%',
                    },
                    {
                        type: 'text',
                        style: {
                            text: "9",
                            font: 'bolder 2em "Microsoft YaHei", sans-serif',
                            width: 21,
                            height: 21,
                            fill: "#000",
                            stroke: "#000",
                            textAlign: "left"
                        },

                        left: '1.5%',
                        top: '58%',
                    },
                    {
                        type: 'text',
                        style: {
                            text: "10",
                            font: 'bolder 2em "Microsoft YaHei", sans-serif',
                            width: 21,
                            height: 21,
                            fill: "#000",
                            stroke: "#000",
                            textAlign: "left"
                        },

                        left: '1.5%',
                        top: '64%',
                    },
                    {
                        type: 'text',
                        style: {
                            text: "11",
                            font: 'bolder 2em "Microsoft YaHei", sans-serif',
                            width: 21,
                            height: 21,
                            fill: "#000",
                            stroke: "#000",
                            textAlign: "left"
                        },

                        left: '1.5%',
                        top: '70%',
                    },
                    {
                        type: 'text',
                        style: {
                            text: "12",
                            font: 'bolder 2em "Microsoft YaHei", sans-serif',
                            x: 50,
                            fill: "#000",
                            stroke: "#000",
                            textAlign: "left"
                        },

                        left: '1.5%',
                        top: '76%',
                    },
                ]
            },
            grid: {
                left: config != undefined && config.emptyDistance != undefined ? 20 : '20%',
                top: config != undefined && config.emptyDistance != undefined ? 20 : '10%',
                right: config != undefined && config.emptyDistance != undefined ? 20 : '5%',
                bottom: config != undefined && config.emptyDistance != undefined ? 40 : '20%',
                containLabel: config != undefined && config.emptyDistance != undefined ? true : false
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                axisLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed",
                        color: '#f0f0f0'
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#f0f0f0',
                        type: 'dashed',
                    },
                },
                axisLabel: {
                    show: true,
                    color: '#666666',
                    fontSize: 13,
                    fontWeight:"bolder",
                    interval: 0,
                    formatter: function (data) {
                        let valueTxt = '';
                        if (data.length > 5) {
                            valueTxt = data.substring(0, 5) + '...'; //想要展示的x轴名称长度
                        }
                        else {
                            valueTxt = data;
                        }
                        return valueTxt;
                    },
                },
                data: data.xdata
            },
            series: data.seriesData
        };
        myChart2.setOption(option2);
        myChart2.on("legendselectchanged", e => {
            data.ydata = new Array(
                data.xdata.length
            ).fill(0);
            Object.values(e.selected).forEach((item, k) => {
                if (item) {
                    data.seriesData.forEach((skm, i) => {
                        if (skm.name === Object.keys(e.selected)[k]) {
                            for (let i = 0; i < skm.data.length; i++) {
                                data.ydata[i] += skm.data[i].value;
                            }
                        }
                    });
                }
            });
            sortElse(data);
            data.seriesData.forEach(skm => {
                const seriesOrder = [];
                data.xdata.forEach(k => {
                    skm.data.forEach(m => {
                        if (m.name == k) {
                            seriesOrder.push(m);
                        }
                    });
                });
                skm.data = seriesOrder;
            });
            console.log(data.xdata);
            option2.legend.selected = e.selected;
            option2.xAxis.data = data.ydata;
            option2.yAxis.data = data.xdata;
            option2.series = data.seriesData;
            myChart2.setOption(option2, true);
        });
        window.addEventListener("resize", function () {
            myChart2.resize();
        });
    },
    get barChart1() {
        return this._barChart1;
    },
    set barChart1(value) {
        this._barChart1 = value;
    },
    barChart2: function (id, data, key, isLegend, config,single,barWidth) {
        var myChart = echarts.init(document.getElementById(id));
        var colorList = [
            [{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0, color: '#F6030E' // 0% 处的颜色
                }, {
                    offset: 0.5, color: '#FFD2D4' // 0% 处的颜色
                },
                {
                    offset: 1, color: '#F6030E' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              },{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0, color: '#FA7A25' // 0% 处的颜色
                }, {
                    offset: 0.5, color: '#FFE3D1' // 0% 处的颜色
                },
                {
                    offset: 1, color: '#FA7A25' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              },{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0, color: '#266CDE' // 0% 处的颜色
                }, {
                    offset: 0.5, color: '#BBD5FF' // 0% 处的颜色
                },
                {
                    offset: 1, color: '#266CDE' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }],
            ['#EF9F6C'],
            ['#5586F8', '#62DAAB', "#657798"],
            ['#62DAAB'],
            [{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0, color: '#266CDE' // 0% 处的颜色
                }, {
                    offset: 0.5, color: '#BBD5FF' // 0% 处的颜色
                },
                {
                    offset: 1, color: '#266CDE' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }]
        ]
        var seriesData = [];
        if(single){
            data.forEach(function (d, i) {
                seriesData.push({
                    name: d.name,
                    type: 'bar',
                    // barGap: ,
                    barWidth: barWidth!=undefined?barWidth:16,
                    itemStyle: {
                        normal: {
                            barBorderRadius: [5, 5, 0, 0],
                            color: function (params) {
                                var colorBars = colorList[key];
                                return colorBars[params.dataIndex]
                            },
                            
                        },
                    },
                    label:{
                        show:true,
                        position:"top",
                        
                    },
                    data: d.value,
                    markLine: {
                        show: false,
                        data: [{ type: 'average', name: 'Avg', lineStyle: { opacity: config ? config.markLine : 0 } }]
                    }
                })
            })
        }else{
            data.forEach(function (d, i) {
                seriesData.push({
                    name: d.name,
                    type: 'bar',
                    // barGap: ,
                    barWidth: barWidth!=undefined?barWidth:14,
                    itemStyle: {
                        normal: {
                            barBorderRadius: [5, 5, 0, 0],
                        },
                    },
                    label:{
                        show:true,
                        position:"top",
                        
                    },
                    data: d.value,
                    markLine: {
                        show: false,
                        data: [{ type: 'average', name: 'Avg', lineStyle: { opacity: config ? config.markLine : 0 } }]
                    }
                })
            })
        }
        var option = {
            color: colorList[key],
            tooltip: {
                // trigger: 'axis',
                // axisPointer: { // 坐标轴指示器，坐标轴触发有效
                //     type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                // },
                // backgroundColor: 'rgba(72,84,101,0.4)',
                // borderColor: 'transparent',
                // textStyle: {
                //     color: '#fff',
                //     fontSize: 14,
                // },
                // extraCssText: 'box-shadow: 0px 2px 6px 0px  rgba(0, 0, 0, 0.2);'
            },
            grid: {
                left: config != undefined && config.emptyDistance != undefined ? 0 : '5%',
                right: config != undefined && config.emptyDistance != undefined ? 20 : '5%',
                bottom: config != undefined && config.emptyDistance != undefined ? 0 : '10%',
                top: config != undefined && config.emptyDistance != undefined ? 10 : '18%',
                containLabel: true,
            },
            legend: {
                show: isLegend,
                icon: "roundRect",
                bottom: 0,
            },
            xAxis: {
                triggerEvent: true,
                type: 'category',
                data: data[0].Xtypes,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#f0f0f0',
                        type: 'dashed',
                    },
                },
                axisLabel: {
                    show: true,
                    interval: 0,
                    color: '#3b3b3b',
                    fontSize: '14px',
                    fontFamily: 'SourceHanSansCN-Regular',

                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                },
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#dcdcdc'
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#f0f0f0',
                        type: 'dashed',
                    },
                    
                },
                axisLabel: {
                    show: true,
                    color: '#3b3b3b',
                    fontSize: '14px',
                    fontFamily: 'SourceHanSansCN-Regular',
                    fontWeight:"bolder"
                },
            },
            series: seriesData
        };
        myChart.setOption(option);

    },
    //垂直数据集柱状图
    barChart3(id, data, config,colorKey) {
        if (document.getElementById(id) != null) {
            var myChart = echarts.init(document.getElementById(id));
            var colors = [[{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0, color: '#266CDE' // 0% 处的颜色
                }, {
                    offset: 0.5, color: '#BBD5FF' // 0% 处的颜色
                },
                {
                    offset: 1, color: '#266CDE' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              },{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0, color: '#FA7A25' // 0% 处的颜色
                }, {
                    offset: 0.5, color: '#FFE3D1' // 0% 处的颜色
                },
                {
                    offset: 1, color: '#FA7A25' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              },]];
            var seriesArr = []
            for (var i = 1; i < data.length; i++) {
                var item = {
                    type: 'bar',
                    label: {
                        show: false
                    },
                    seriesLayoutBy: 'row',
                    barWidth: data.length <= 2 || (config != undefined && config.stack != undefined) ? '24%' : '14%',
                    barGap: 0,
                    zlevel: 2,
                    itemStyle: {
                        //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
                         normal: {
                              //柱形图圆角，初始化效果
                            //    barBorderRadius:[5, 5, 0, 0]
                         }
                    },
                }
                if (config != undefined && config.stack != undefined) {
                    item.stack = config.stack
                }
                if (i == data.length - 1) {
                    item.itemStyle.normal.barBorderRadius = [5, 5, 0, 0]
                }
                seriesArr.push(item)
            }


            // 指定图表的配置项和数据
            var option = {
                color: colors[colorKey],
                title: {
                    show: true,
                    text: config.y,//主标题文本
                    right: '5%',
                    top: '10%',
                    textStyle: {
                        fontSize: 13,
                        color: '#454c5c',
                        align: 'center'
                    },
    
                },
                grid: {
                    left: '0%',
                    right: '8%',
                    top: "20%",
                    // bottom: seriesArr.length > 1 ? (config != undefined && config.dataZoom != undefined && config.dataZoom ? 110 : 60) : 30,
                     bottom: 15,
                    containLabel: true
                },
                legend: {
                    show: seriesArr.length > 1,
                    left: 'center',
                    bottom: 0,
                    itemGap: 40,
                    itemWidth: 10,
                    itemHeight: 10,
                    // icon: 'circle',
                    textStyle: {
                        fontSize: 14,
                        color: '#333',
                    }
                },
                xAxis: [{
                    type: 'category',
                    axisLabel: {
                        margin: 15,
                        textStyle: {
                            color: '#333333',
                            fontSize: 14
                        },
                        interval:0,  
                        rotate:-40 
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#f0f0f0',
                            type: 'dashed',
                        },
                    },
                }],
                yAxis: {
                    axisLabel: {
                        show: true,
                        color: '#3b3b3b',
                        fontSize: '14px',
                        fontFamily: 'SourceHanSansCN-Regular',
                        fontWeight:"bolder"
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#f0f0f0',
                            type: 'dashed',
                        },
                    },
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                        shadowStyle: {
                            color: '#D1E9FF',
                            opacity: 0.3
                        }
                    },
                    padding: 15,
                    textStyle: {
                        fontSize: 12,
                        color: '#575757'
                    }
                },
                dataset: {
                    source: data
                },
                series: seriesArr
            };
            if (config != undefined && config.dataZoom != undefined && config.dataZoom) {
                option.dataZoom = [{
                    type: 'inside',
                    startValue: 0,
                    endValue: 10
                }, {
                    startValue: 0,
                    endValue: 10
                }]
            }

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    },
    barChart4(id, data, config,colorsKey) {
        if (document.getElementById(id) != null) {
            var myChart = echarts.init(document.getElementById(id));
            var colors = [[{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#266CDE' // 0% 处的颜色
                }, {
                    offset: 0.5, color: '#BBD5FF' // 0% 处的颜色
                },
                {
                    offset: 1, color: '#266CDE' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              },{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#FA7A25' // 0% 处的颜色
                }, {
                    offset: 0.5, color: '#FFE3D1' // 0% 处的颜色
                },
                {
                    offset: 1, color: '#FA7A25' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              },]];
            var seriesArr = []
            for (var i = 1; i < data.length; i++) {
                var item = {
                    type: 'bar',
                    label: {
                        show: false
                    },
                    seriesLayoutBy: 'row',
                    barWidth: data.length <= 2 || (config != undefined && config.stack != undefined) ? '40%' : '15%',
                    barGap: 0,
                    zlevel: 2,
                    itemStyle: {
                        //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
                         normal: {
                              //柱形图圆角，初始化效果
                            //    barBorderRadius:[5, 5, 0, 0]
                         }
                    },
                }
                if (config != undefined && config.stack != undefined) {
                    item.stack = config.stack
                }
                if (i == data.length - 1) {
                    item.itemStyle.normal.barBorderRadius = [0, 5, 5, 0]
                }
                seriesArr.push(item)
            }


            // 指定图表的配置项和数据
            var option = {
                color: colors[colorsKey],
                title: {
                    show: true,
                    text: config.y,//主标题文本
                    right: '5%',
                    top: '10%',
                    textStyle: {
                        fontSize: 13,
                        color: '#454c5c',
                        align: 'center'
                    },
    
                },
                grid: {
                    left: '6%',
                    right: '6%',
                    top: "20%",
                    // bottom: seriesArr.length > 1 ? (config != undefined && config.dataZoom != undefined && config.dataZoom ? 110 : 60) : 30,
                     bottom: 20,
                    containLabel: true
                },
                legend: {
                    show: seriesArr.length > 1,
                    left: 'center',
                    bottom: 0,
                    itemGap: 40,
                    itemWidth: 10,
                    itemHeight: 10,
                    // icon: 'circle',
                    textStyle: {
                        fontSize: 14,
                        color: '#333',
                    }
                },
                xAxis: [{
                    type: 'value',
                    axisLabel: {
                        show: true,
                        color: '#3b3b3b',
                        fontSize: '14px',
                        fontFamily: 'SourceHanSansCN-Regular',
                        fontWeight:"bolder"
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#f0f0f0',
                            type: 'dashed',
                        },
                    },
                    // axisLine: {
                    //     lineStyle: {
                    //         color: '#B2CEE3',
                    //         type: 'solid'
                    //     }
                    // }
                }],
                yAxis: {
                   
                    type:"category",
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#f0f0f0',
                            type: 'dashed',
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#333333',
                            fontSize: 14,
                            fontWeight:"bolder",
                        },
                        // formatter: function (data) {
                        //     let valueTxt = '';
                        //     if (data.length > 5) {
                        //         valueTxt = data.substring(0, 5) + '...'; //想要展示的x轴名称长度
                        //     }
                        //     else {
                        //         valueTxt = data;
                        //     }
                        //     return valueTxt;
                        // },
                    },
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                        shadowStyle: {
                            color: '#D1E9FF',
                            opacity: 0.3
                        }
                    },
                    padding: 15,
                    textStyle: {
                        fontSize: 12,
                        color: '#575757'
                    }
                },
                dataset: {
                    source: data
                },
                series: seriesArr
            };
            if (config != undefined && config.dataZoom != undefined && config.dataZoom) {
                option.dataZoom = [{
                    type: 'inside',
                    startValue: 0,
                    endValue: 10
                }, {
                    startValue: 0,
                    endValue: 10
                }]
            }

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    },
    lineChart1: function (id, data, key, isLegend, config) {
        var setColor = [
            ['#F6030E', '#FA7A25', '#266CDE', '#02AFF1'],
            ['#5586F8', '#62DAAB', '#EF9F6C'],
            ['#62DAAB'],
            ['#53bfcd'],
            ['#F6030E','#266CDE'],
            ['#FA7A25']
        ];
        var myChart = echarts.init(document.getElementById(id));
        var lengndText = [];
        var leseries = [];
        data.forEach(function (res) {
            var item = {
                name: res.name,
                type: 'line',
                symbol: 'circle',
                symbolSize: 8,
                lineStyle:{
                    width:3
                },
                data: res.value,
            }
            if (config != undefined && config.area != undefined) {
                item.areaStyle = {
                    opacity: 0.08,
                },
                item.label={
                    show:true
                }
            }
            leseries.push(item)
            lengndText.push(
                res.name
            )
        });
        option = {
            color: setColor[key],
            grid: {
                left: config != undefined && config.emptyDistance != undefined ? 0 : '5%',
                right: config != undefined && config.emptyDistance != undefined ? 20 : '5%',
                bottom: config != undefined && config.emptyDistance != undefined ? 0 : '10%',
                top: config != undefined && config.emptyDistance != undefined ? 10 : '14%',
                containLabel: true,
            },
            legend: {
                show: isLegend,
                // icon: "roundRect",
                bottom: 0,
            },
            tooltip: {

            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    interval: 0,
                    color: '#666666',
                    fontSize: 13,
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#f0f0f0',
                        type: 'dashed',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                boundaryGap: true,
                data: data[0].Xtypes
            }],
            yAxis: [{
                type: 'value',
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    color: '#666666',
                    fontSize: 13,
                    fontWeight:"bolder"
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#f0f0f0',
                        type: 'dashed',
                    },
                },
            }],
            series: leseries,
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    },
    PieChart1: function (id, data, title, key, circleType, showTitle,config ) {
        var myChart = echarts.init(document.getElementById(id));
        var total = 0
       data.map((arr)=>{
        total = arr.value + total
        })
        var colors = [
            // ['#5586F8', '#62DAAB', '#657798', '#EF9F6C', '#FAC947'],
            [{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#C50F18' // 0% 处的颜色
                }, {
                    offset: 1, color: '#FDA5A9' // 0% 处的颜色
                }],
                global: false // 缺省为 false
              },{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#286EDF' // 0% 处的颜色
                }, {
                    offset: 1, color: '#B6D2FF' // 0% 处的颜色
                }],
                global: false // 缺省为 false
              },{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#0EB4AC' // 0% 处的颜色
                }, {
                    offset: 1, color: '#9BFCF4' // 0% 处的颜色
                },
               ],
                global: false // 缺省为 false
              },{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#E66916' // 0% 处的颜色
                }, {
                    offset: 1, color: '#FDCFB1' // 0% 处的颜色
                }],
                global: false // 缺省为 false
              },{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#02AFF1' // 0% 处的颜色
                }, {
                    offset: 1, color: '#91BBFE' // 0% 处的颜色
                }],
                global: false // 缺省为 false
              }],
        ];
        var option = {
            color: colors[key],
            legend: {
                show: true,
                icon: "circle",
                bottom: 0,
                // itemGap: 0,
            },
            tooltip: {
                show: true,
                // trigger: 'item',
                // formatter: function (val) {
                //     var html = 'val'
                //     html = '<div>' + val.seriesName + '<br><span>' + val.name + '&nbsp;:&nbsp;'
                //         + val.value + '&nbsp;</span>' + '('
                //         + val.percent + '%)' + '</div>'
                //     return html
                // },
                // backgroundColor: 'rgba(72,84,101,0.4)',
                // borderColor: 'transparent',
                // textStyle: {
                //     color: '#fff',
                //     fontSize: 14,
                // },
                // extraCssText: 'box-shadow: 0px 2px 6px 0px  rgba(0, 0, 0, 0.2);'
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '10%',
                top: '10%',
                containLabel: true,
            },
            title:[
                {
                    show: showTitle,
                    text: total,//主标题文本
                    left: 'center',
                    top: '45%',
                    textStyle: {
                        fontSize: 22,
                        color: '#454c5c',
                        align: 'center'
                    },
                },
                {
                    show: showTitle,
                    text: title,//主标题文本
                    left: 'center',
                    top: '5%',
                    textStyle: {
                        fontSize: 13,
                        color: '#454c5c',
                        align: 'center'
                    },
                },
            ],
            series: [
                {
                    name: title,
                    type: 'pie',
                    center: ["50%", '50%'],
                    radius: circleType != undefined && (circleType === 'empty' || circleType === 'emptyCircle') ? ['28%', '45%'] : [0, '50%'],
                    radius: ['25%', '50%'] ,
                    stillShowZeroSum: false,
                    itemStyle:{
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10
                    },
                    label: {
                        show: true,
                        // position: 'outer',
                        align: "right",
                        // avoidLabelOverlap: true,
                        alignTo: "labelLine",
                        formatter: function (params) {
                            if(config.showLabelCounts){
                                return `{text|${params.data.name}：${params.data.value}人\n\n${params.percent}%}`
                            }else{
                                return `{text|${params.data.name}\n\n${params.percent}%}`
                            }
                            

                        },
                        rich: {
                            text: {
                                fontSize: 12,
                                color: '#000',
                                // lineHeight: 30,
                                // align: "center",
                                padding: [0, -45, 0, -45]

                            },
                        }
                    },
                    labelLine: {
                        show: true,
                        length: 10,//第一段线长
                        length2: 40 //第二段线长
                    },
                    data: data
                },
            ]
        }
        if (circleType != undefined && circleType === 'empty') {
            option.series.push(
                {
                    center: ["50%", '50%'],
                    radius: ['30%', '40%'],
                    type: "pie",

                    startAngle: 200,
                    labelLine: {
                        show: false
                    },
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        color: 'rgba(255,255,255,0.14)'
                    },
                    data: [100],
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 180;
                    },
                    zlevel: 2
                })
        }
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    },
    PieChart2: function (id, data, config) {
        var myChart = echarts.init(document.getElementById(id));
        var colors = [
            ['#EF9F6C', '#5586F8', '#62DAAB', '#657798', '#EF9F6C', '#FAC947'],
        ];
        var seriesarr = [{
            name: config.title != undefined ? config.title : '',
            type: 'pie',
            center: ["30%", '50%'],
            radius: config.circleType != undefined && (config.circleType === 'empty' || config.circleType === 'emptyCircle') ? ['48%', '80%'] : [0, '80%'],
            // radius: ['35%', '60%'] ,
            stillShowZeroSum: false,
            roseType: config.roseType != undefined ? config.roseType : false,
            label: {
                show: true,
                // position: 'outer',
                align: "right",
                avoidLabelOverlap: true,
                alignTo: "labelLine",
                formatter: function (params) {
                    return `{text|${params.data.name}:${params.percent}%}`

                },
                rich: {
                    text: {
                        fontSize: 12,
                        color: '#283855',
                    },
                }
            },
            labelLine: {
                show: true,
                length: 10,//第一段线长
                length2: 40 //第二段线长
            },
            data: data
        }];
        if (config.circleType != undefined && (config.circleType === 'empty' || config.circleType === 'emptyCircle')) {
            seriesarr.push({
                type: 'pie',
                center: ["30%", '50%'],
                radius: [0, '48%'],
                data: [{
                    name: '',
                    value: 1
                }],
                itemStyle: {
                    color: '#fff'
                },
                label: {
                    position: 'center',
                    textStyle: {
                        fontSize: 13,
                        color: '#454c5c',
                        align: 'center'
                    },
                    formatter: function () {
                        return config.title != undefined ? config.title : '';
                    }
                },
                tooltip: {
                    show: false
                }
            })
        }

        var option = {
            color: colors[config.key != undefined ? config.key : 0],
            legend: {
                show: true,
                icon: "circle",
                orient: 'vertical',
                left: '70%',
                top: 'center'
                // itemGap: 0,
            },
            tooltip: {
                show: true,
                trigger: 'item',
                formatter: function (val) {
                    var html = 'val'
                    html = '<div>' + val.seriesName + '<br><span>' + val.name + '&nbsp;:&nbsp;'
                        + val.value + '&nbsp;</span>' + '('
                        + val.percent + '%)' + '</div>'
                    return html
                },
                backgroundColor: 'rgba(72,84,101,0.4)',
                borderColor: 'transparent',
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                },
                extraCssText: 'box-shadow: 0px 2px 6px 0px  rgba(0, 0, 0, 0.2);'
            },
            series: seriesarr
        }
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    },
    //斑马纹柱状图
    stripedBarChart: function (id, data, config) {
        if (document.getElementById(id) != null) {
            var myChart = echarts.init(document.getElementById(id));
            var colors = ['#EF9F6C', '#5586F8', '#62DAAB'];

            var categoryAxis = {
                triggerEvent: true,
                type: 'category',
                data: data[0].Xtypes,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#f0f0f0',
                        type: 'dashed',
                    },
                },
                axisLabel: {
                    show: true,
                    interval: 0,
                    color: '#3b3b3b',
                    fontSize: '14px',
                    fontFamily: 'SourceHanSansCN-Regular',

                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                },
            }
            var valueAxis = {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#dcdcdc'
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#f0f0f0',
                        type: 'dashed',
                    },
                },
                axisLabel: {
                    show: true,
                    color: '#3b3b3b',
                    fontSize: '14px',
                    fontFamily: 'SourceHanSansCN-Regular',

                },
            }

            // 指定图表的配置项和数据
            var option = {
                grid: {
                    left: 0,
                    right: 20,
                    top: config != undefined && config.orient != undefined ? 0 : 20,
                    bottom: 0,
                    containLabel: true
                },
                xAxis: config != undefined && config.orient != undefined ? valueAxis : categoryAxis,

                yAxis: config != undefined && config.orient != undefined ? categoryAxis : valueAxis,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                        shadowStyle: {
                            color: '#0056A8',
                            opacity: 0.1
                        }
                    },
                    formatter: function (params) {
                        return "<span style='display:inline-block;margin-right:10px;border-radius:10px;width:4px;height:4px;background-color:#3378B9;vertical:top;'></span>" +
                            params[0].value
                    },
                    padding: 15,
                    textStyle: {
                        fontSize: 12,
                        color: '#575757'
                    }
                },
                series: [
                    {
                        name: data[0].name,
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return colors[params.dataIndex % 3]
                                },
                            }
                        },
                        label: {
                            show: config != undefined && config.orient != undefined ? false : true,
                            position: 'top',
                            textStyle: {
                                fontSize: 12,
                                color: '#333'
                            }
                        },
                        barWidth: 20,
                        data: data[0].value,
                        z: 2,
                    },
                ],
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });

        }
    },
    //水球图
    waterChart(id, data, total, config) {
        var per = data/total
        if (document.getElementById(id) != null) {
            var myChart = echarts.init(document.getElementById(id));
            var colors = config != undefined && config.color != undefined ? config.color : ['#5fa1f6', '#399FFE'];

            var titleConfig;
            if (config != undefined && config.orient == 'vertical') {
                titleConfig = {
                    left: 'center',
                    bottom: '15%',
                    text: [
                        '{name|人数  ' + data + '}{num|占比  ' + per.toFixed(2) * 100 + '%}'
                    ],
                    textStyle: {
                        rich: {
                            name: {
                                color: '#333',
                                fontSize: 14,
                                fontWeight: 'bold',
                                lineHeight: 28,
                                padding: [0, 20]
                            },
                            num: {
                                color: '#333',
                                fontSize: 14,
                                lineHeight: 28,
                                padding: [0, 20]
                            }
                        }
                    }
                }
            } else {
                titleConfig = [
                    {
                        left: '20%',
                        top: 'bottom',
                        text: [`{name|总拨付经费：}{num1|${total}万元}`,
                            `{name|已使用经费：}{num2|${data}万元}`
                        ].join('\n'),
                        textStyle: {
                            rich: {
                                name: {
                                    width: 120,
                                    color: '#333',
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    lineHeight: 28
                                },
                                num1: {
                                    color: '#FE893B',
                                    fontSize: 18,
                                    lineHeight: 28,
                                    fontWeight: 'bold',
                                },
                                num2: {
                                    color: '#266CDE',
                                    fontSize: 18,
                                    lineHeight: 28,
                                    fontWeight: 'bold',
                                }
                            }
                        }
                    },
                    {
                        left: '44%',
                        top: '30%',
                        text:`{per|已使用}\n{num|${per.toFixed(2) * 100 }}%`,
                        textStyle: {
                            rich: {
                                num: {
                                    // width: 85,
                                    color: '#333',
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                    lineHeight: 28
                                },
                                per: {
                                    color: '#64646E',
                                    fontSize: 12,
                                    lineHeight: 28
                                }
                            }
                        }
                    },
                ]
            }

            // 指定图表的配置项和数据
            var option = {
                title: titleConfig,
                series: [
                    {
                        type: 'liquidFill',
                        backgroundStyle: {
                            color: '#fff',
                        },
                        itemStyle: {
                            normal: {
                                // color: colors[0],
                                shadowBlur: 0
                            }
                        },
                        color: [{
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 1,
                                color: ['#266CDE'], // 0% 处的颜色
                            }, {
                                offset: 0,
                                color: ['#266CDE'], // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }],
                      
                        data: [per, {
                            value: per, direction: 'left', itemStyle: {
                                normal: {
                                    color: colors[1],
                                    opacity: 0.2
                                }
                            }
                        }],
                        center: config != undefined && config.orient == 'vertical' ? ['50%', '40%'] : ['50%', '50%'],
                        radius: '50%',
                        label: {
                            show: false
                        },
                        outline: {
                            show: false
                        }
                    },
                    //外环
                    {
                        type: 'pie',
                        zlevel: 2, 
                        silent: true,
                        clockWise: true,
                        center: config != undefined && config.orient == 'vertical' ? ['50%', '40%'] : ['50%', '50%'],
                        radius: ['52%', '53%'],
                        label: {
                            normal: {
                                show: false
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            color: '#266CDE'
                        },
                        data: [100]
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    },

}