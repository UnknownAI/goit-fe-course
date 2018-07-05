const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];


function createPostCard(post){
  let postCard = document.createElement("div"); 
  postCard.classList.add('post');
  
  let image = document.createElement("img"); 
  image.classList.add("post__image");
  image.src = post.img; 
  postCard.append(image); 

  let title = document.createElement("h2");
  title.classList.add("post__title");
  title.textContent = post.title;
  postCard.append(title); 

  let text = document.createElement("p"); 
  text.classList.add("post__text"); 
  text.textContent = post.text;
  postCard.append(text); 

  let button = document.createElement("a"); 
  button.href = post.link;  
  button.classList.add("button");
  button.textContent = "Read more"; 
  postCard.append(button);
  
  return postCard;
}

function createCards(posts){
 return posts.map(item => createPostCard(item)); 
}


let container = document.querySelector(".container"); 
let newPosts = createCards(posts); 
for(let item of newPosts){
  container.append(item);
}


