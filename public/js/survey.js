$("#submit").on("click", function (event) {
    event.preventDefault();

    // grab the form elements
    var newSurvey = {
        question1: $("#test1").val().trim(),
        comment1: $("#textarea1").val().trim(),
        question2: $("#test2").val().trim(),
        comment2: $("#textarea2").val().trim(),
        question3: $("#test3").val().trim(),
        comment3: $("#textarea3").val().trim(),
        question4: $("#test4").val().trim(),
        comment4: $("#textarea4").val().trim(),
        question5: $("#test5").val().trim(),
        comment5: $("#textarea5").val().trim(),
        question6: $("#test6").val().trim(),
        comment6: $("#textarea6").val().trim(),
        question7: $("#test7").val().trim(),
        comment7: $("#textarea7").val().trim(),
        comment8: $("#textarea8").val().trim(),
        
    };

    console.log(newSurvey);

    $.post("/api/surveys", newSurvey,
        function (data) {
            if (data) {
                alert("Thank you for submitting your survey!");
            }
            else {
                alert("Sorry please try again");
            }

            // Clear the form when submitting
            $("#test1").val();
            $("#textarea1").val();
            $("#test2").val();
            $("#textarea2").val();
            $("#test3").val();
            $("#textarea3").val();
            $("#test4").val();
            $("#textarea4").val();
            $("#test5").val();
            $("#textarea5").val();
            $("#test6").val();
            $("#textarea6").val();
            $("#test7").val();
            $("#textarea7").val();
            $("#textarea8").val();

            $("#progressText").text("Progress 8/8");
            $(".progress .determinate").css("width", "100%");
        });

});