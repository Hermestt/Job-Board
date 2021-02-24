// Jobs Agregator by João Martins with source on euremotejobs
const url = "https://jobs-agregator.herokuapp.com/api/jobs";

// Page Elements
const input = document.querySelector('#title');
const button = document.querySelector('#button');
const body = document.getElementById("body");
let list = document.querySelector(".jobs_list");

// AJAX Functions
const getJobs = async() => {
    const jobTitle = input.value;
    const urlToFetch = `${url}?search_keywords=${jobTitle}&per_page=15`;

    try{
        const response = await fetch(urlToFetch);
        const jsonResponse = await response.json(); 
        return jsonResponse;
    }
    catch (error){
        console.log(error);
    }
};

// Here is where we map the job details and send them to the HTML builder and with the return append it to the ul.
const renderJobs = (jobsList) => {
    for (i = 0; i < jobsList.length ; i++) {
        const job = jobsList[i];
        const icon = job.company.logo;
        const companyName = job.company.name;

        // Send info to the creator
        let jobContent = createJobItemHTML(job.title, job.location, icon,job.uri, companyName, job.type);

        // Create the list item to hold the returned html job-item structure
        let listItem = document.createElement('li');
        listItem.classList.add("job_list-item");

        // Append the job-item to the list item
        listItem.innerHTML = jobContent;

        // Append list item to the list
        list.appendChild(listItem);
    }
}

// Get Jobs and send them to the renderer
const executeSearch = () => {
    // Clear HTML before search
    list.innerHTML = '';

    // Get the jobs and then render them
    getJobs().then(
        function(jobsList){
            renderJobs(jobsList.jobs);
        }
    );
}

button.addEventListener("click", function(e){
    executeSearch();
    e.preventDefault();
});