
$(document).ready(function () {
    $('.custom-file-input').on('change',function(){
        //get the file name
        var fileName = $(this).val();
        //replace the "Choose a file" label
        $(this).next('.custom-file-label').html(fileName.slice(fileName.lastIndexOf("\\") + 1));
    })

    $('#registerProBtn').on('click', (e) => {
        e.preventDefault();
    })
})