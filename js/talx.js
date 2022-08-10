$(document).ready(function () {
    let hash = window.location.hash;
    const regex = /^#stage-[l][1-3][abc]?$/g;
    const found = hash.match(regex);
    if (found) {
        if (hash.length == 10) {
            const action_parent = hash.substring(0, 9) + "-content";
            $(action_parent).collapse('show');
        }
        const hash_new = hash + "-content"
        $(hash_new).collapse('show');
    }
});
