$(document).ready(function () {
    // select notFound row
    var notFound = $("#notFoundItem")
    // make it hidden by default
    notFound.hide();

    $("#docsearch-input").on("keyup search", function () {
        var value = $(this).val().toLowerCase()

        // select all items
        var allItems = $("#allItem .results-item")

        // get list of matched items, (do not toggle them)
        var matchedItems = $("#allItem .results-item").filter(function () {
            return $(this).text().toLowerCase().indexOf(value) > -1
        });


        // hide all items first
        allItems.toggle(false)

        // then show matched items
        matchedItems.toggle(true)

        // if no item matched then show notFound row, otherwise hide it
        if (matchedItems.length == 0) notFound.show()
        else notFound.hide()

        // Show what user input in form search
        $("#results").html($("#docsearch-input").val());
    });
});