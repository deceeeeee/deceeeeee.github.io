function zoomin(index) {
    var modal = document.getElementsByClassName("modal")[0];
    var zoomin_image = document.getElementsByClassName("modal-content");

    modal.style.display = "block";
    zoomin_image[index].style.display = "block";
}