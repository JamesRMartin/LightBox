$('#dreamBig').spectrum({
                    flat: true,
                    clickoutFiresChange: true,
                    showInput: true,
                    preferredFormat: 'rgb',
                    change: function (color) {


                        console.log('change');

                        $('#DreamBigHolder').css('background-color', '#'+ color.toHex());
	$.ajax({
                                url: '/Panel',
                                type: 'POST',
                                data: { 'panel': 'DreamBigHolder', 'r': color.toRgb().r, 'g': color.toRgb().g, 'b': color.toRgb().b },
                                complete: function (data) {

                                }
                            });
                    },
                    move: function (color) {

                        console.log('move');


                        $('#DreamBigHolder').css('background-color', '#' + color.toHex());
},
                    dragstart: function (color) {
                        console.log('start');

                        $('#DreamBigHolder').css('background-color', '#' + color.toHex());
},
                    dragstop: function (color) {
                        console.log('stop');

                        $('#DreamBigHolder').css('background-color', '#'+ color.toHex());
}
                });



                $('#owls').spectrum({
                    flat: true,
                    clickoutFiresChange: true,
                    showInput: true,
                    preferredFormat: 'rgb',
                    change: function (color) {


                        console.log('change');

                        $('#OwlsHolder').css('background-color', '#' + color.toHex());
	$.ajax({
                                url: '/Panel',
                                type: 'POST',
                                data: { 'panel': 'OwlsHolder', 'r': color.toRgb().r, 'g': color.toRgb().g, 'b': color.toRgb().b },
                                complete: function (data) {

                                }
                            });
                    },
                    move: function (color) {

                        console.log('move');


                        $('#OwlsHolder').css('background-color', '#' + color.toHex());
},
                    dragstart: function (color) {
                        console.log('start');

                        $('#OwlsHolder').css('background-color', '#'+ color.toHex());
},
                    dragstop: function (color) {
                        console.log('stop');

                        $('#OwlsHolder').css('background-color', '#'+ color.toHex());
}
                });



                $('#sweetDreams').spectrum({
                    flat: true,
                    clickoutFiresChange: true,
                    showInput: true,
                    preferredFormat: 'rgb',
                    change: function (color) {


                        console.log('change');

                        $('#SweetDreamsHolder').css('background-color', '#' + color.toHex());
	$.ajax({
                                url: '/Panel',
                                type: 'POST',
                                data: { 'panel': 'SweetDreamsHolder', 'r': color.toRgb().r, 'g': color.toRgb().g, 'b': color.toRgb().b },
                                complete: function (data) {

                                }
                            });
                    },
                    move: function (color) {

                        console.log('move');


                        $('#SweetDreamsHolder').css('background-color', '#' + color.toHex());
},
                    dragstart: function (color) {
                        console.log('start');

                        $('#SweetDreamsHolder').css('background-color', '#'+ color.toHex());
},
                    dragstop: function (color) {
                        console.log('stop');

                        $('#SweetDreamsHolder').css('background-color', '#'+ color.toHex());
}
                });



                $('#angel').spectrum({
                    flat: true,
                    clickoutFiresChange: true,
                    showInput: true,
                    preferredFormat: 'rgb',
                    change: function (color) {


                        console.log('change');

                        $('#AngelHolder').css('background-color', '#' + color.toHex());
	$.ajax({
                                url: '/Panel',
                                type: 'POST',
                                data: { 'panel': 'AngelHolder', 'r': color.toRgb().r, 'g': color.toRgb().g, 'b': color.toRgb().b },
                                complete: function (data) {

                                }
                            });
                    },
                    move: function (color) {

                        console.log('move');


                        $('#AngelHolder').css('background-color', '#' + color.toHex());
},
                    dragstart: function (color) {
                        console.log('start');

                        $('#AngelHolder').css('background-color', '#' + color.toHex());
},
                    dragstop: function (color) {
                        console.log('stop');

                        $('#AngelHolder').css('background-color', '#' + color.toHex());
}
                });


                $('#loveForever').spectrum({
                    flat: true,
                    clickoutFiresChange: true,
                    showInput: true,
                    preferredFormat: 'rgb',
                    change: function (color) {


                        console.log('change');

                        $('#OwlsHolder').css('background-color', '#' + color.toHex());
	$.ajax({
                                url: '/Panel',
                                type: 'POST',
                                data: { 'panel': 'LoveForeverHolder', 'r': color.toRgb().r, 'g': color.toRgb().g, 'b': color.toRgb().b },
                                complete: function (data) {

                                }
                            });
                    },
                    move: function (color) {

                        console.log('move');


                        $('#LoveForeverHolder').css('background-color', '#' + color.toHex());
},
                    dragstart: function (color) {
                        console.log('start');

                        $('#LoveForeverHolder').css('background-color', '#' + color.toHex());
},
                    dragstop: function (color) {
                        console.log('stop');

                        $('#LoveForeverHolder').css('background-color', '#' + color.toHex());
}
                });