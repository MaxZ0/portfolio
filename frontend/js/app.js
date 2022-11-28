const projectID = '80pp60as';

const query = `
*[_type == "skill"]{
    title,
    _id,
    skill,
    logo,
    slug,
    "bilde": mainImage.asset->url,
    tools[]->
  }
`;

const url = `https://${projectID}.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;


async function getData() {
    const response = await fetch(url);
    console.log(response)
    const { result } = await response.json();
    console.log(result);

    const projectList = document.getElementById('projects-list');
    const ulList = document.createElement('ul');
    result.forEach(project => {
        const liEl = document.createElement('li');

    })
}

getData();