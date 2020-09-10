$(function () {
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $(".eat-burger").on("click", function (event) {
        const id = $(this).data("id");
        // change devoured state to true
        const devouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log("burger devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});