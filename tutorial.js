/*
// ############
//    WITH INFERENCNG
// ############
*/

$('#link14').on('click', function(e){

	var query = $('#query14').val();
	var endpoint = 'http://localhost:5820/tutorial/query';
	var format = 'JSON';

	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);

		try {
			var vars = json.head.vars;

			var ul = $('<ul></ul>');
			ul.addClass('list-group');

			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');

				$.each(vars, function(index, v){
					if (value[v] != undefined) {
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];

					li.append('<strong>'+v+'</strong><br/>');

					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');
				}

				});
				ul.append(li);

			});

			$('#linktarget14').html(ul);
		} catch(err) {
			$('#linktarget14').html('Something went wrong!');
		}



	});

});


/*
// ############
//    WITHOUT INFERENCING
// ############
*/

$('#link15').on('click', function(e){

	var query = $('#query15').val();
	var endpoint = 'http://localhost:5820/tutorial/query';
	var format = 'JSON';

	$.get('/sparql1',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);

		try {
			var vars = json.head.vars;

			var ul = $('<ul></ul>');
			ul.addClass('list-group');

			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');

				$.each(vars, function(index, v){
					if (value[v] != undefined) {
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];

					li.append('<strong>'+v+'</strong><br/>');

					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');
				}
				});
				ul.append(li);

			});

			$('#linktarget15').html(ul);
		} catch(err) {
			$('#linktarget15').html('Something went wrong!');
		}



	});

});
