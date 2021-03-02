	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				latitude: $('#selLat').val(),
				longitude: $('#selLong').val(),
				
			},
			success: function(result) {
				//alert(result);
				console.log(result);

				if (result.status.name == "ok") {
					//$(divOcean).show();
					
					$('#txtdist').html(result['data']['distance']);
					$('#txtid').html(result['data']['geonameId']);
					
					$('#txtname').html(result['data']['name']);
					/*$('#txtPopulation').html(result['data'][0]['population']);
					$('#txtArea').html(result['data'][0]['areaInSqKm']);
*/
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});
/*select place */


	$('#btnRunPlace').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfoByPlace.php",
			type: 'POST',
			dataType: 'json',
			data: {
				latitudeplace: $('#selLatPlace').val(),
				longitudeplace: $('#selLongPlace').val()
				
			},
			success: function(result) {
				//alert(result);
				console.log(result);

				if (result.status.name == "ok") {
				
					
					$('#txtcountryname').html(result['data'][0]['countryName']);
					$('#txtplacename').html(result['data'][0]['name']);
					$('#txtlatitude').html(result['data'][0]['lat']);
					$('#txtlongitude').html(result['data'][0]['lng']);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});
	
	
	
	
	/* time zone   */
	
	
		$('#btnRunTime').click(function() {

		$.ajax({
			url: "libs/php/getInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				latitude: $('#selLatTime').val(),
				longitude: $('#selLongTime').val()
				
			},
			success: function(result) {
				//alert(result);
				console.log(result);

				if (result.status.name == "ok") {
				
					
					$('#txtcode').html(result['data']['countryCode']);
					$('#txtconame').html(result['data']['countryName']);
					$('#txtzoneid').html(result['data']['timezoneId']);
					$('#txttime').html(result['data']['time']);
					
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});
	
	
	