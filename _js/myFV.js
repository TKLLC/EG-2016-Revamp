// JavaScript Document
$(document).ready(function() {
    $('#registrationForm')
        // IMPORTANT: You must declare .on('init.field.fv')
        // before calling .formValidation(options)
        .on('init.field.fv', function(e, data) {
            // data.fv      --> The FormValidation instance
            // data.field   --> The field name
            // data.element --> The field element

            var $parent = data.element.parents('.form-group'),
                $icon   = $parent.find('.form-control-feedback[data-fv-icon-for="' + data.field + '"]');

            // You can retrieve the icon element by
            // $icon = data.element.data('fv.icon');

            $icon.on('click.clearing', function() {
                // Check if the field is valid or not via the icon class
                if ($icon.hasClass('glyphicon-remove')) {
                    // Clear the field
                    data.fv.resetField(data.element);
                }
            });
        })

        .formValidation({
            framework: 'bootstrap',
            icon: {
				required: 'glyphicon glyphicon-asterisk',
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                selectProgram: {
                    validators: {
                        notEmpty: {
                            message: 'Choose one or more programs'
                        }
                    }
                },
                duration: {
                    validators: {
                        notEmpty: {
                            message: 'Choose either Seasonal or Session(s)'
                        }
                    }
                },
			    sessionDates: {
                    validators: {
                        notEmpty: {
                            message: 'Choose one or more Session(s)'
                        }
                    }
                },
                selectClass1: {
                    validators: {
                        notEmpty: {
                            message: 'Choose a class'
                        }
                    }
                },
                selectDay1: {
                    validators: {
                        notEmpty: {
                            message: 'Choose a day'
                        }
                    }
                },
                selectTime1: {
                    validators: {
                        notEmpty: {
                            message: 'Choose the time'
                        }
                    }
                },
                lastName: {
                    validators: {
                        notEmpty: {
                            message: 'Provide last name'
                        }
                    }
                },
                firstName1: {
                    validators: {
                        notEmpty: {
                            message: 'Provide first name of the child'
                        }
                    }
                },
                age: {
                    validators: {
                        notEmpty: {
                            message: 'Provide age of the child'
                        },
                        integer: {
                            message: 'Age must be a number'
                        },
                        lessThan: {
                           value: 14,
							message: 'Child must be 14 or younger'
                        }
                    }
                },
                fullName: {
                    validators: {
                        notEmpty: {
                            message: 'Provide your full name'
						 },
                        stringLength: {
                            min: 4,
							 max: 35,
                            message: 'Full name must be more than 3 and less than 36 characters long'
                       },
                        regexp: {
                            regexp: /^[a-zA-Z]+$/, 
                            message: 'The username can only consist of alphabetical letters'
						 },
                    }
				},
                homePhone: {
                    validators: {
                        notEmpty: {
                            message: 'Provide your home phone'
                        },
				        numeric: {
                            message: 'Home phone must be a number'
						 },
                    }
                },
                cellPhone: {
                    validators: {
                        notEmpty: {
                            message: 'Provide your cell phone number'
                        },
				        numeric: {
                            message: 'Cell phone must be a number'
						 },
                    }
                },
                emergencyPhone: {
                    validators: {
                        notEmpty: {
                            message: 'Provide your emergency phone number'
                        },
				        numeric: {
                            message: 'Emergency phone must be a number'
						 },
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'Provide a valid email address'
                        }
                    }
                },
                address: {
                    validators: {
                        notEmpty: {
                            message: 'Provide your address'
                        }
                    }
                },
                city: {
                    validators: {
                        notEmpty: {
                            message: 'Provide your city'
                        }
                    }
                },
                state: {
                    validators: {
                        notEmpty: {
                            message: 'Choose your state'
                        }
                    }
                },
                zip: {
                    validators: {
                        notEmpty: {
                            message: 'Provide your zip code'
                        },
				        numeric: {
                            message: 'Zip code must be a number'
						 },
                    }
                },

                agree: {
                    validators: {
                        notEmpty: {
                            message: 'Check the box to agree to the terms of our waiver.'
                        }
                    }
                }
            }
        });
});
