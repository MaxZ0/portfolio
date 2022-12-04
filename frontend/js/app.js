const projectID = '80pp60as';

const queryAllProjects = `
*[_type == "skill"]{
    _id,
    skill,
    "logo": logo.asset->url,
  }
`;

const queryProjectsGalleri = `
*[_type == "project"]{
    "mainImage": mainImage.asset->url,
    tools,
}
`;

const url = `https://${projectID}.api.sanity.io/v2021-10-21/data/query/production?query=`;








async function getProjectGalleri() {
    const response = await fetch(`${url}${encodeURI(queryProjectsGalleri)}`);
    const { result } = await response.json();

    console.log(result, "Galleri");

};
getProjectGalleri();


async function getGalleri() {
    const response = await fetch(`${url}${encodeURI(queryProjectsGalleri)}`);
    const { result } = await response.json();

 
    const projectsEl = document.querySelector('.gallery-cards');

    result.forEach(project => {
     const cardEl = document.createElement('div');
     cardEl.classList.add('flex');
     cardEl.classList.add('galleri-container');
     cardEl.classList.add('grow-rotate-on-hover');

     const cardImgEl = document.createElement('img');
     cardImgEl.setAttribute('src', project.mainImage);
     cardImgEl.setAttribute('style', 'width: 208px; height: 144px; object-fit: cover;');
     cardEl.append(cardImgEl);
     projectsEl.append(cardEl);
    })    
 }
 
 getGalleri();


/*     width: 256px;
    height: 144px;
    object-fit: cover;*/







/* async function getProject() {
    const response = await fetch(url);
    console.log(response)
    const { result } = await response.json();
    console.log(result);
}
getProject(); */



async function getData() {
    const response = await fetch(`${url}${encodeURI(queryAllProjects)}`);
    const { result } = await response.json();

    console.log(result, "getData");

 
    const projectsEl = document.querySelector('.slideshow-container');

    result.forEach(project => {
     const cardEl = document.createElement('div');
     cardEl.classList.add('mySlides');
     cardEl.classList.add('fade');

     const cardImgEl = document.createElement('img');
     cardImgEl.setAttribute('src', project.logo);
     cardImgEl.setAttribute('style', 'width: 64px', 'margin-right: 32px');
     cardEl.append(cardImgEl);
     projectsEl.append(cardEl);
    })    
 }
 
 getData();

 