
const datos = async () => {
try {
    const request=await fetch("https://jsonplaceholder.typicode.com/posts");
    const res=await request.json();
    // console.log(res)

    const fragmento=document.createDocumentFragment();
    const main=document.querySelector('.container')
    res.forEach(element => {
    const div=document.createElement('div');
    const id=document.createElement('li');
    const title=document.createElement('h1');
    const body=document.createElement('p');
    
    div.appendChild(id)
    div.appendChild(title)
    div.appendChild(body)
    id.textContent=element.id
    title.textContent=element.title
    body.textContent=element.body
    fragmento.appendChild(div)   
    });

    main.appendChild(fragmento);
} catch (error) {
    console.log(error)
    
}
 };
 datos()