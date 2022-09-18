// the user Interface logic

$(document).ready( function(){
    $("#triangle-checker-form").submit( function(event){
        event.preventDefault();

        // taking all the values user enters and storing in a variable
        const  length1 = $("#length1").val();
        const length2 = $("#length2").val();
        const length3 = $("#length3").val();

        // making a new triangle object with the Triangle constructor in the business logic
        const triangle = new Triangle(length1, length2, length3);        
        const response = triangle.checkType();
        $("#response").append("<p>" + response + "</p>")
    
    })
})