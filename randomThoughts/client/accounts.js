
  Template.signup.events({
    'submit form' : function(event){
      event.preventDefault();
      // var uname = event.target.signupUsername.value;
      var emailVar = event.target.signupEmail.value;
      var passwordVar = event.target.signupPassword.value;
      Accounts.createUser({
        // first_name: uname,
        email: emailVar,
        password: passwordVar
      })
    }
  });
  Template.login.events({
    'submit form' : function(event){
    event.preventDefault();
    var emailVar = event.target.loginEmail.value;
    var passwordVar = event.target.loginPassword.value;
    Meteor.loginWithPassword(emailVar, passwordVar);
    }
  });
  Template.settings.events({
    'click .logout': function(event){
      event.preventDefault();
      Meteor.logout();
    }
  });
  Template.userDetails.helpers({
    firstName: function() {
      return Meteor.user().emails[0].address;
    }
  });
