



function formatText(command) {
    document.execCommand(command, false, null);
  }
  

  function formatBlock(block) {
    document.execCommand('formatBlock', false, block);
  }
  

  function submitContent() {
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const content = document.getElementById('editor').innerHTML;
  
    if (!title || !content) {
      alert('Please provide both title and content.');
      return;
    }
  
    const postList = document.getElementById('post-list');
    const postId = new Date().getTime();
  
   const latest = document.getElementById("latestData")
    const post = document.createElement('div');
    post.className = 'post';
    post.id = `post-${postId}`;
    post.innerHTML = `
      <h3>title : ${title}</h3>
      <p>description : ${description}</p>
      <div class="content"> content : ${content}</div>
      <div class="actions">
        <button class="edit-btn" onclick="editPost(${postId})">Edit</button>
        <button class="delete-btn" onclick="deletePost(${postId})">Delete</button>
      </div>
    `;
  
    postList.appendChild(post);
    postList.appendChild(latest);
    
   
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('editor').innerHTML = '';
  }
  

  function editPost(postId) {
    const post = document.getElementById(`post-${postId}`);
    const title = post.querySelector('h3').textContent;
    const description = post.querySelector('p').textContent;
    const content = post.querySelector('.content').innerHTML;
  

    document.getElementById('title').value = title;
    document.getElementById('description').value = description;
    document.getElementById('editor').innerHTML = content;
  

    post.remove();
  }
  
 
  function deletePost(postId) {
    const post = document.getElementById(`post-${postId}`);
    post.remove();
  }
  