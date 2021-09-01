// jQuery
  $(document).ready(() => {
    // dietary requirements
    $("#yesrequirements").on("click", function() {
      $(".hidedietary").show();
    });

    $("#norequirements").on("click", function() {
      $(".hidedietary").hide();
    });

    // special needs
    $("#yesneeds").on("click", function() {
      $("#needs").show();
    });

    $("#noneeds").on("click", function() {
      $("#needs").hide();
    });

    // children
    $("#children").on("click", function() {
      $(".hidechildren").toggle();
    });

    // continents selection
    // Show Asia
    $("#asia").on("click", function() {
      $(".hideasia").show();
      $(".hideafrica").hide();
      $(".hidenorthamerica").hide();
      $(".hidesouthamerica").hide();
      $(".hideeurope").hide();
      $(".hideoceania").hide();
      $(".hideeu").hide();
    });

    // Show Africa
    $("#africa").on("click", function() {
      $(".hideafrica").show();
      $(".hideasia").hide();
      $(".hidenorthamerica").hide();
      $(".hidesouthamerica").hide();
      $(".hideeurope").hide();
      $(".hideoceania").hide();
      $(".hideeu").hide();
    });

    // Show North America
    $("#northamerica").on("click", function() {
      $(".hideafrica").hide();
      $(".hideasia").hide();
      $(".hidenorthamerica").show();
      $(".hidesouthamerica").hide();
      $(".hideeurope").hide();
      $(".hideoceania").hide();
      $(".hideeu").hide();
    });

    // Show South America
    $("#southamerica").on("click", function() {
      $(".hideafrica").hide();
      $(".hideasia").hide();
      $(".hidenorthamerica").hide();
      $(".hidesouthamerica").show();
      $(".hideeurope").hide();
      $(".hideoceania").hide();
      $(".hideeu").hide();
    });

    // Show Europe
    $("#europe").on("click", function() {
      $(".hideafrica").hide();
      $(".hideasia").hide();
      $(".hidenorthamerica").hide();
      $(".hidesouthamerica").hide();
      $(".hideeurope").show();
      $(".hideoceania").hide();
      $(".hideeu").hide();
    });

    // Show Oceania
    $("#oceania").on("click", function() {
      $(".hideafrica").hide();
      $(".hideasia").hide();
      $(".hidenorthamerica").hide();
      $(".hidesouthamerica").hide();
      $(".hideeurope").hide();
      $(".hideoceania").show();
      $(".hideeu").hide();
    });

    // Show European Union
    $("#europeanunion").on("click", function() {
      $(".hideafrica").hide();
      $(".hideasia").hide();
      $(".hidenorthamerica").hide();
      $(".hidesouthamerica").hide();
      $(".hideeurope").hide();
      $(".hideoceania").hide();
      $(".hideeu").show();
    });

    // Travel Mode Selection
    // Air Mode
    $("#airmode").on("click", function() {
      $(".hideairmode").show();
      $(".hidelandmode").hide();
      $(".hidewatermode").hide();
    });

    // Land Mode
    $("#landmode").on("click", function() {
      $(".hideairmode").hide();
      $(".hidelandmode").show();
      $(".hidewatermode").hide();
    });

    // Water Mode
    $("#watermode").on("click", function() {
      $(".hideairmode").hide();
      $(".hidelandmode").hide();
      $(".hidewatermode").show();
    });

    // Accommodation Selection
    // Hotel
    $("#hotel").on("click", function() {
      $(".hidehotel").show();
      $(".hidemotel").hide();
      $(".hidehostel").hide();
      $(".hideairbnb").hide();
    });

    // Motel
    $("#motel").on("click", function() {
      $(".hidehotel").hide();
      $(".hidemotel").show();
      $(".hidehostel").hide();
      $(".hideairbnb").hide();
    });

    // Hostel
    $("#hostel").on("click", function() {
      $(".hidehotel").hide();
      $(".hidemotel").hide();
      $(".hidehostel").show();
      $(".hideairbnb").hide();
    });

    // Airbnb
    $("#airbnb").on("click", function() {
      $(".hidehotel").hide();
      $(".hidemotel").hide();
      $(".hidehostel").hide();
      $(".hideairbnb").show();
    });

    // Hide Phase Two and Show Phase One
    $(".previousPhaseTwo").on("click", function() {
      $(".phasetwo").hide();
      $(".phaseone").show();
    });

    // Hide Phase Three and Show Phase Two
    $(".previousPhaseThree").on("click", function() {
      $(".phasethree").hide();
      $(".phasetwo").show();
    });

    // Help Section: Personal Details
    $(".firstname-help").on("click", function() {
      $(".firstname-ans").toggle();
    })

    $(".lastname-help").on("click", function() {
      $(".lastname-ans").toggle();
    })

    $(".birthdate-help").on("click", function() {
      $(".birthdate-ans").toggle();
    })

    $(".occupation-help").on("click", function() {
      $(".occupation-ans").toggle();
    })

    $(".gender-help").on("click", function() {
      $(".gender-ans").toggle();
    })

    $(".budget-help").on("click", function() {
      $(".budget-ans").toggle();
    })

    $(".email-help").on("click", function() {
      $(".email-ans").toggle();
    })

    $(".phone-help").on("click", function() {
      $(".phone-ans").toggle();
    })

    $(".dietary-help").on("click", function() {
      $(".dietary-ans").toggle();
    })

    $(".needs-help").on("click", function() {
      $(".needs-ans").toggle();
    })

    // Help Section: Preferred Destination
    $(".destination-help").on("click", function() {
      $(".destination-ans").toggle();
    })

    $(".mode-help").on("click", function() {
      $(".mode-ans").toggle();
    })

    $(".departing-help").on("click", function() {
      $(".departing-ans").toggle();
    })

    $(".returning-help").on("click", function() {
      $(".returning-ans").toggle();
    })

    // Help Section: Preferred Accommodation
    $(".accommodation-help").on("click", function() {
      $(".accommodation-ans").toggle();
    })

    $(".checkin-help").on("click", function() {
      $(".checkin-ans").toggle();
    })

    $(".checkout-help").on("click", function() {
      $(".checkout-ans").toggle();
    })

    // Form Validation
    // Phase One: Personal Details
    $(".btnPhaseOne").click(function(e) {
      e.preventDefault();
      let title = $("#title").val();
      let firstname = $("#firstname").val();
      let lastname = $("#lastname").val();
      let birthdate = $("#birthdate").val();
      let occupation = $("#occupation").val();
      let gender = $("#gender").val();
      let budget = $("#budget").val();
      let email = $("#email").val();
      let phone = $("#phone").val();
      let onetraveller = $("#onetraveller").is(":checked");
      let twotravellers = $("#twotravellers").is(":checked");
      let threetravellers = $("#threetravellers").is(":checked");
      let moretravellers = $("#moretravellers").is(":checked");
      let yesrequirements = $("#yesrequirements").is(":checked");
      let norequirements = $("#norequirements").is(":checked");
      let yesneeds = $("#yesneeds").is(":checked");
      let noneeds = $("#noneeds").is(":checked");
      let mydate = new Date(birthdate);
      let today = new Date();
      $("#titleError").html("");
      $("#firstNameError").html("");
      $("#lastNameError").html("");
      $("#birthdateError").html("");
      $("#occupationError").html("");
      $("#genderError").html("");
      $("#budgetError").html("");
      $("#emailError").html("");
      $("#phoneError").html("");
      $("#travellersError").html("");
      $("#requirementsError").html("");
      $("#needsError").html("");

      if (title === "default") 
      {
        $("#titleError").html("Select your title");
        return false;
      }
      else if ((firstname === "") || (firstname === null) || (!isNaN(firstname)))
      {
        $("#firstNameError").html("Enter valid first name");
        return false;
      } else if ((lastname === "") || (lastname === null) || (!isNaN(lastname)))
      {
        $("#lastNameError").html("Enter valid last name");
        return false;
      } else if ((mydate > today) || (birthdate === ""))
      {
        $("#birthdateError").html("Enter valid birthdate");
        return false;
      } else if ((occupation === "") || (occupation === null) || (!isNaN(occupation)))
      {
        $("#occupationError").html("Enter valid occupation");
        return false;
      } else if (gender === "default") {
        $("#genderError").html("Select your gender");
        return false;
      } else if (budget === "default") {
        $("#budgetError").html("Select preferred budget");
        return false;
      } else if ((email === "") || (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))) {
        $("#emailError").html("Enter valid email");
        return false;
      } else if ((phone === "") || (isNaN(phone)) || (!phone.match(/^0[0-9]{9}$/))) {
        $("#phoneError").html("Enter valid number");
        return false;
      } else if (onetraveller === false && twotravellers === false && threetravellers === false && moretravellers === false) {
        $("#travellersError").html("Please select one");
        return false;
      } else if (yesrequirements === false && norequirements === false) {
        $("#requirementsError").html("Please select one");
        return false;
      } else if (yesneeds === false && noneeds === false) {
        $("#needsError").html("Please select one");
        return false;
      } 
      else {
        $(".phaseone").hide();
        $(".phasetwo").show();
      }


    });

    // Phase Two: Preferred Destination
    $(".btnPhaseTwo").click(function(e) {
      e.preventDefault();
      let asia = $("#asia").is(":checked");
      let africa = $("#africa").is(":checked");
      let northamerica = $("#northamerica").is(":checked");
      let southamerica = $("#southamerica").is(":checked");
      let europe = $("#europe").is(":checked");
      let oceania = $("#oceania").is(":checked");
      let europeanunion = $("#europeanunion").is(":checked");
      let airmode = $("#airmode").is(":checked");
      let landmode = $("#landmode").is(":checked");
      let watermode = $("#watermode").is(":checked");
      let departing = $("#departing").val();
      let returning = $("#returning").val();
      let pastdate = new Date(departing);
      let pastdate2 = new Date(returning);
      let today = new Date();
      $("#destinationError").html("");
      $("#travelModeError").html("");
      $("#departingError").html("");
      $("#returningError").html("");
      if (asia === false && africa === false === northamerica === false && southamerica === false && europe === false && oceania === false && europeanunion === false) 
      {
        $("#destinationError").html("Select preferred destination");
        return false;
      } else if (airmode === false && landmode === false && watermode === false)
      {
        $("#travelModeError").html("Select travel mode");
      } else if ((pastdate < today) || (departing === ""))
      {
        $("#departingError").html("Enter valid departure date");
        return false;
      } else if ((pastdate2 < today) || (returning === ""))
      {
        $("#returningError").html("Enter valid return date");
        return false;
      }
      else {
        $(".phasetwo").hide();
        $(".phasethree").show();
      }
    });

    // Phase Three: Preferred Accommodation
    $(".btnPhaseThree").click(function() {
      let hotel = $("#hotel").is(":checked");
      let motel = $("#motel").is(":checked");
      let hostel = $("#hostel").is(":checked");
      let airbnb = $("#airbnb").is(":checked");
      let checkin = $("#checkin").val();
      let checkout = $("#checkout").val();
      let pastdate3 = new Date(checkin);
      let pastdate4 = new Date(checkout);
      let today = new Date();
      $("#accommodationError").html("");
      $("#checkInError").html("");
      $("#checkOutError").html("");

      if (hotel === false && motel === false === hostel === false && airbnb === false) 
      {
        $("#accommodationError").html("Select preferred accommodation");
        return false;
      } else if ((checkin === "") || (pastdate3 < today))
      {
        $("#checkInError").html("Enter valid check-in date");
        return false;
      } else if ((checkout === "") || (pastdate4 < today))
      {
        $("#checkOutError").html("Enter valid check-out date");
        return false;
      } 
      else {
         $(".btnPhaseThree").submit();
      }

    });

    // Help Section
    // For Phase One
    $("#title").on("click", function() {
      $(".buttonone").fadeIn(1200);
    });

    $(".btnPhaseOne").on("click", function() {
      $(".buttonone").hide();
      $(".buttontwo").fadeIn(1200);
    })

    $(".buttonone").on("click", function() {
      $(".phaseone-help").fadeIn();
    });

    $(".close").on("click", function() {
      $(".phaseone-help").fadeOut();
    });

    // For Phase Two
    $(".buttontwo").on("click", function() {
      $(".phasetwo-help").fadeIn();
    });

    $(".close").on("click", function() {
      $(".phasetwo-help").fadeOut();
    });

    $(".previousPhaseTwo").on("click", function() {
      $(".buttontwo, .phasetwo-help").hide();
      $(".buttonone").fadeIn(1200);
    })

    // For Phase Three
    $(".btnPhaseTwo").on("click", function() {
      $(".buttontwo, .phasetwo-help").hide();
      $(".buttonthree").fadeIn(1200);
    });

    $(".buttonthree").on("click", function() {
      $(".phasethree-help").fadeIn();
    });

    $(".close").on("click", function() {
      $(".phasethree-help").fadeOut();
    });

    $(".previousPhaseThree").on("click", function() {
      $(".buttonthree, .phasethree-help").hide();
      $(".buttontwo").fadeIn(1200);
    });


    // After Submittting the form
    $(".btnPhaseThree").on("click", function() {
      window.location.href = 'submitted.html';
      return false;
    });


  }); 
