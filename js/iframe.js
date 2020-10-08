$("iframe").load(function() {
    $("iframe").contents().find("a").each(function(index) {
        $(this).on("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
        });
    });
});