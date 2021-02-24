const createJobItemHTML = (title, location, iconSource, uri, companyName, type, time) => {

    // Get the type of job to define the css class afterwards for styling purpose.
    const jobTime = type === "Full Time" ? "green" : "orange";

    // String that'll be returned to construct the HTML
    let str = 
    `<a href='${uri}'></a>
    <div class="wrapper">
    <div class="job_company-logo">
        <img src="${iconSource}" alt="${companyName}">
    </div>
    <div class="job-details">
        <div class="job_item-position">
            <h3>${title}</h3>
            <strong>${companyName}</strong>
        </div>
        <div class="job_item-location">
            <img src='https://www.svgrepo.com/show/17793/location.svg'>
            <p>${location}</p>
        </div>
        <div class="job_item-type">
            <p class="type-label ${jobTime}">${type}</p>
        </div>
    </div>
    </div>`;
    return str;
  }
