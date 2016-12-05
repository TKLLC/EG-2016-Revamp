// JavaScript Document

function submitForm() {
  $('form[name=registration]').submit();
}

$("form[name=registration]").validate({
  errorElement: "span",
  errorClass: "has-error",
  rules: {
    dobMonth: {
      required: true,
      digits: true,
      maxlength: 2,
      range: [1, 12],
    },
    dobDay: {
      required: true,
      digits: true,
      maxlength: 2,
      range: [1, 31],
    },
    dobYear: {
      required: true,
      digits: true,
      maxlength: 4,
      range: [1900, 2014],
    },
    firstName: {
      required: true,
      minlength: 2
    },
    lastName: {
      required: true,
      minlength: 2
    },
    addressOne: {
      required: true,
      minlength: 5
    },
    city: {
      required: true,
      minlength: 3
    },
    zip: {
      required: true,
      digits: true,
      minlength: 5,
      maxlength: 5
    },
    state: {
      required: true
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    dobMonth: {
      required: "A month of birth is required.",
      digits: "Month of birth must be numeric."
    },
    dobDay: {
      required: "A day of birth is required.",
      digits: "Day of birth must be numeric."
    },
    dobYear: {
      required: "A date of birth is required.",
      digits: "Year of birth must be numeric."
    },
    firstName: {
      required: "A first name is required.",
      minlength: "First name must be at least 2 characters in length."
    },
    lastName: {
      required: "A last name is required.",
      minlength: "Last name must be at least 2 characters in length."
    },
    addressOne: {
      required: "An address is required.",
      minlength: "Address must be at least 5 characters in length."
    },
    city: {
      required: "A city is required.",
      minlength: "City must be at least 2 characters in length."
    },
    zip: {
      required: "A ZIP code is required.",
      digits: "Zip code must be numeric.",
      minlength: "Zip code must be 5 characters in length."
    },
    state: {
      required: "A state is required."
    },
    email: {
      required: "An e-mail address is required.",
      email: "Please enter a valid e-mail address."
    }
  },
  errorPlacement: function(err, el) {
    el.parents('.field').children('.error').html(err);
  }
});