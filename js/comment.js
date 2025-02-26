document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".submit-btn").addEventListener("click", function () {
    const commentInput = document.querySelector(".comment-input");
    const commentList = document.querySelector(".comment-list");

    const commentText = commentInput.value.trim();
    if (commentText !== "") {
      const commentItem = document.createElement("div");
      commentItem.classList.add("comment-item");
      commentItem.textContent = commentText;

      commentList.appendChild(commentItem);
      commentInput.value = "";
    }
  });

  document.querySelector(".cancel-btn").addEventListener("click", function () {
    document.querySelector(".comment-input").value = "";
  });
});
