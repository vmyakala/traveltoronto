function addComment() {
    var div = document.createElement('div');
    event.preventDefault();
    div.className = 'col-xl-12';
    var comment = document.myFormComment.comment.value;
    var name = document.myFormComment.name.value;
    var d = (new Date()).toString().split(' ').splice(1,4).join(' ');
    div.innerHTML =
        '<div class="card">\n' +
        '                    <div class="card-header">\n' +
        '                        '+name+'\n' +
        '                    </div>\n' +
        '                    <div class="card-body">\n' +
        '                        <blockquote class="blockquote mb-0">\n' +
        '                            <p>'+comment+'</p>\n' +
        '                            <footer class="blockquote-footer">'+d+'</footer>\n' +
        '                        </blockquote>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <hr/>';
    document.getElementById('content').appendChild(div);
    var code = document.getElementById('content').innerHTML;
    saveComment(code);
}

function saveComment(div) {
    var checkComments = localStorage.getItem(window.location.href);
    if(checkComments){
        checkComments = div;
        localStorage.setItem(window.location.href, checkComments);
    }else {
        localStorage.setItem(window.location.href, div);
    }
}

function getComments() {
    var checkComments = localStorage.getItem(window.location.href);
    if(checkComments){
        var divComments = document.createElement('div');
        divComments.innerHTML = checkComments;
        var content = document.getElementById('content');
        content.innerHTML = "";
        content.appendChild(divComments);
    }else {

    }

    var name = localStorage.getItem("username");
    document.myFormComment.name.value = name;

}