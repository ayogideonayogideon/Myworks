// fetch data from an API
fetch("https://jsonplaceholder.typicode.com/photos")
    .then( Response =>
        Response.json( ))
        .then( data => {
            const projectsContainer = document.getElementsById("projects-container");
            // loop through the data and create project cards
            data.slice(0,3).forEach(project => {
                const projectCard = <div class="project-card">
                    <Img src= "${project.url}" alt="Project Image"></Img>
                    <h3>${project.title}</h3>
                    <a href= "${project.url}" target="_blank"> View Project</a>
                </div>;
                projectsContainer.innerHTML += projectCard;
            });
        })
        .catch(error =>  console.error("Error fetching projects:", error));