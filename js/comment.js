document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".submit-btn").addEventListener("click", function () {
    const commentInput = document.querySelector(".comment-input");
    const commentList = document.querySelector(".comment-list");

    const commentText = commentInput.value.trim();
    if (commentText !== "") {
      const commentItem = document.createElement("div");
      commentItem.classList.add("comment-item");

      const profileImg = document.createElement("img");
      profileImg.src =
        "https://hambeomjoon.github.io/web-wiki/images/comment-authot-icon.png";
      profileImg.alt = "프로필 이미지";
      profileImg.classList.add("profile-img");

      const commentContent = document.createElement("div");
      commentContent.classList.add("comment-content");

      const commentHeader = document.createElement("div");
      commentHeader.classList.add("comment-header");

      const nickname = document.createElement("span");
      nickname.classList.add("comment-nickname");
      nickname.textContent = "방문자";

      const commentTextDiv = document.createElement("div");
      commentTextDiv.classList.add("comment-text");
      commentTextDiv.textContent = commentText;

      commentHeader.appendChild(nickname);
      commentContent.appendChild(commentHeader);
      commentContent.appendChild(commentTextDiv);

      commentItem.appendChild(profileImg);
      commentItem.appendChild(commentContent);

      commentList.appendChild(commentItem);
      commentInput.value = "";
    }
  });

  document.querySelector(".cancel-btn").addEventListener("click", function () {
    document.querySelector(".comment-input").value = "";
  });
});
