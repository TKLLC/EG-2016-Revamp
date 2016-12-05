// JavaScript Document

//<script type="text/javascript">

$(document).ready(function() {
    $('#registration_form').formValidation({
        // I am validating Bootstrap form
        framework: 'bootstrap',

        // Feedback icons
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

        // List of fields and their validation rules
        fields: {
			selectProgram: {
			duration: {
			session: {	
			selectClass1: {	
			selectDay1: {	
			selectTime1: {
	
			last_name: {	
			first_name1: {
			age: {	
			dateBirth: {	
			sex: {	
			fullName: {
			homePhone: {	
			cellPhone: {	
			emergencyPhone: {
			email: {
			address: {		
			address2: {	
			city: {	
			state: {	
			zip: {
			comments: {	
				
			agree: {		
			success_message: {
				
									
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required and cannot be empty'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    }
                }
            }
        }
    });
});










	$ (document) . (function () {
		var validator = $ ("#registration_form") .bootstrapValidator({
			fields: {
				email: {
					message: "Email address is required",
					validators: {
						notEmpty: {
						}
					}
				}
			}
		});
	});
</script>
